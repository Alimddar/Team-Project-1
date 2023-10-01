from fastapi import Depends, FastAPI, HTTPException,status
from sqlmodel import SQLModel, Session, create_engine,select
from fastapi.middleware.cors import CORSMiddleware
from models import User,WhiteBoard,Note,Schedule, timedelta, datetime, List
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from jose import jwt, JWTError
from passlib.context import CryptContext
from pydantic import BaseModel
import os
import threading


secret_key = os.getenv("SECRET_KEY", "$3>{sUr9g{7A1?pz0_aK4a_)7VF],CN-{(sirLjx0pS.=H2F1")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
access_token_expire_minutes = 30
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

db_url = './db.sqlite'
DATABASE_URL = f"sqlite:///{db_url}"

app = FastAPI()

engine = create_engine(DATABASE_URL, echo=True)

SQLModel.metadata.create_all(engine)

thread_local = threading.local()

def authenticate_user(db: Session, username: str, password: str):
    user = db.exec(select(User).where(User.username == username)).first()
    if user and pwd_context.verify(password, user.password):
        return user
    return None

def get_db():
    if not hasattr(thread_local, "session"):
        thread_local.session = Session(engine)
    return thread_local.session

def verify_password(plain_pass, hashed_pass):
    return pwd_context.verify(plain_pass,hashed_pass)

def get_pasword_hash(password):
    return pwd_context.hash(password)

def get_user(db, username: str):
    user = db.exect(select(User).where(User.username == username)).first()
    if user:
        return UserInDb(**user.dict(), hashed_password=user.password)

async def get_current_user(db:Session= Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, secret_key, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

def create_access_token(data: dict, expires_delta: timedelta = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.itcnow() + timedelta(minutes=15)
        to_encode.update({"exp" : expire})
        encoded_jwt = jwt.encode(to_encode,secret_key,algorithm=ALGORITHM)
        return encoded_jwt
    
class UserInDb(BaseModel):
    hashed_password: str

class TokenData(BaseModel):
    username: str = None

class Token(BaseModel):
    access_token: str
    token_type: str


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    db = get_db()
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=access_token_expire_minutes)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post('/users/', response_model=User, tags=['Users'])
async def create_user(user: User, db: Session = Depends(get_db)):
    statement = select(User).where(User.email == user.email)
    db_user = db.exec(statement).first()
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    hashed_password = pwd_context.hash(user.password)
    user_data = user.dict()
    user_data["password"] = hashed_password
    db_users = User(**user_data)
    db.add(db_users)
    db.commit()
    db.refresh(db_users)
    return 'User Created succsessfully'

@app.get('/users/{user_id}', response_model=User, tags=['Users'])
async def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.exec(select(User).where(User.id == user_id)).first()
    if not user:
        raise HTTPException(status_code=404, detail="Customer not found")
    return user


@app.put("/users/{user_id}", response_model=User, tags=['Users'])
async def update_user(user_id: int, user: User, db: Session = Depends(get_db)):
    db_user = db.get(User, user_id)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    user_data = user.dict(exclude_unset=True)
    for key, value in user_data.items():
        setattr(db_user, key, value)
    
    db.commit()
    db.refresh(db_user)
    return 'User Updated succsessfully'

@app.delete("/users/{user_id}", response_model=User, tags=['Users'])
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.get(User, user_id)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    db.delete(db_user)
    db.commit()
    return 'User Removed Succsessfully'

@app.post('/note/create', response_model=Note, tags=['Notes'])
async def create_note(note: Note  = Depends(get_current_user), db: Session = Depends(get_db)):
    db.add(note)
    db.commit()
    db.refresh(note)
    return note

@app.get('/users/{user_id}/notes/', response_model=List[Note], tags=['Notes'])
async def get_notes_by_user_id(user_id: int,db: Session = Depends(get_db)):
    statement = select(Note).where(Note.user_id == user_id)
    notes = db.exec(statement).all()
    if not notes:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No notes found for this user")
    return notes

@app.put("/user/{user_id}/note/change", response_model=Note, tags=['Notes'])
async def change_note(
    note_id: int, updated_note: Note, db: Session = Depends(get_db)): 
    db_note = db.query(Note).filter(Note.id == note_id).first()
    
    if not db_note:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
        
    note_data = updated_note.dict(exclude_unset=True)
    for key, value in note_data.items():
        setattr(db_note, key, value)
    
    db_note.last_modified_date = datetime.utcnow() 
    db.commit()
    db.refresh(db_note)
    
    return db_note

@app.post('/schedules/', response_model=Schedule, tags=['Schedules'])
async def create_schedule(schedule: Schedule, db: Session = Depends(get_db)):
    user = db.get(User, schedule.user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    note = db.get(Note, schedule.note_id)  
    if not note:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    db_schedule = Schedule.from_orm(schedule)
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule