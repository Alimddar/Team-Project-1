from fastapi import Depends, FastAPI, HTTPException,status
from sqlmodel import SQLModel, Session, create_engine,select
from fastapi.middleware.cors import CORSMiddleware
from models import User,WhiteBoard,Note,Schedule

db_url = './db.sqlite'
DATABASE_URL = f"sqlite:///{db_url}"

app = FastAPI()

engine = create_engine(DATABASE_URL, echo=True)

SQLModel.metadata.create_all(engine)

thread_local = threading.local()

thread_local = threading.local()

def authenticate_user(db: Session, username: str, password: str):
    user = db.exec(select(User).where(User.username == username)).first()
    if user and pwd_context.verify(password, user.password):
        return user
    return None

def get_db():
    with Session(engine) as db:
        yield db

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