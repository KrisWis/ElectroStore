import datetime
from typing import Annotated
from sqlalchemy import *
import enum
from server.databases.database import Base1
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

intpk = Annotated[int, mapped_column(primary_key=True, autoincrement=True)]
created_at = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]
updated_at = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"),
                                                        onupdate=datetime.datetime.now(datetime.UTC))]


class GoodOrm(Base1):
    __tablename__ = "goods"
    repr_cols_num = 4

    id: Mapped[intpk]
    name: Mapped[str]
    price: Mapped[int] = mapped_column(Numeric())
    description: Mapped[str | None]
    created_at: Mapped[created_at]
    updated_at: Mapped[updated_at]

    images: Mapped[list['ImageGoodOrm']] = relationship(back_populates='good')


class ImageSizes(enum.Enum):
    vertical = 'vertical'
    quadrant = 'quadrant'
    horizontal = 'horizontal'


class ImageGoodOrm(Base1):
    __tablename__ = "images"

    id: Mapped[intpk]
    link: Mapped[str]
    size: Mapped['ImageSizes']
    good_id: Mapped[int] = mapped_column(ForeignKey('goods.id'))

    good: Mapped['GoodOrm'] = relationship(back_populates='images')

