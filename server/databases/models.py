import datetime
from typing import Annotated
from sqlalchemy import *
import enum
from .database import Base1
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

intpk = Annotated[int, mapped_column(primary_key=True, autoincrement=True)]
created_att = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]
