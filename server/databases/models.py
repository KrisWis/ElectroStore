import datetime
from typing import Annotated
from sqlalchemy import *
import enum
from server.databases.database import Base1
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

intpk = Annotated[int, mapped_column(primary_key=True, autoincrement=True)]
created_att = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]


class UserOrm(Base1):
    __tablename__ = "users"

    user_id: Mapped[intpk]
    user_first_name: Mapped[str] = mapped_column(unique=True)
    user_last_name: Mapped[str]
    join_date: Mapped[created_att]
