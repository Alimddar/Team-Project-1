from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    name: str
    surname: str
    email: str
    username: str
    password: str
    profile_photo: str
    create_date: datetime
    
    #relation 
    notes: List["Note"] = Relationship(back_populates="user")
    schedules: List["Schedule"] = Relationship(back_populates="user")


class Note(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    title: str
    content: str
    creation_day: datetime
    last_modified_date: datetime
    
 
    user: User = Relationship(back_populates="notes")
    whiteboard: "WhiteBoard" = Relationship(back_populates="note")
    schedules: List["Schedule"] = Relationship(back_populates="note")
    

class WhiteBoard(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    note_id: int = Field(foreign_key="note.id")
    data: str
    
 
    note: Note = Relationship(back_populates="whiteboard")


class Schedule(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    note_id: int = Field(foreign_key="note.id")
    user_id: int = Field(foreign_key="user.id")
    title: str
    description: str
    scheduled_time: datetime
    status: bool
    
    note: Note = Relationship(back_populates="schedules")
    user: User = Relationship(back_populates="schedules")
