from sqlmodel import Field, SQLModel,Relationship
from typing import List, Optional
from datetime import datetime
    
class User(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True,index=True)
    name: str
    surname: str
    email: str
    username: str
    password: str
    profile_photo: str
    create_date: datetime


class Note(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True,index=True)
    user_id: List[User] = Relationship(back_populates="note")
    title: str
    content: str
    creation_day: datetime
    last_modified_date: datetime

    
class WhiteBoard(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True,index=True)
    note_id: List[Note] = Relationship(back_populates="whiteboard")
    data: str


class Schedule(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True,index=True)
    note_id: List[Note] = Relationship(back_populates="schedule")
    user_id: List[User] = Relationship(back_populates="schedule")
    title: str
    description: str
    scheduled_time: datetime
    status : bool
