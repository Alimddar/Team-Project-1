from typing import List, Optional
from datetime import datetime
from sqlmodel import SQLModel, Field, relationship

class User(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    name: str
    surname: str
    email: str
    username: str
    password: str
    profile_photo: str
    create_date: datetime
    

    notes: List["Note"] = relationship(back_populates="user")
    schedules: List["Schedule"] = relationship(back_populates="user")


class Note(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    title: str
    content: str
    creation_day: datetime
    last_modified_date: datetime
    
 
    user: User = relationship(back_populates="notes")
    whiteboard: "WhiteBoard" = relationship(back_populates="note")
    schedules: List["Schedule"] = relationship(back_populates="note")
    

class WhiteBoard(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    note_id: int = Field(foreign_key="note.id")
    data: str
    
 
    note: Note = relationship(back_populates="whiteboard")


class Schedule(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    note_id: int = Field(foreign_key="note.id")
    user_id: int = Field(foreign_key="user.id")
    title: str
    description: str
    scheduled_time: datetime
    status: bool
    
    note: Note = relationship(back_populates="schedules")
    user: User = relationship(back_populates="schedules")