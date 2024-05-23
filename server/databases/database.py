""" peewee / sqlalchemy models """
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase

from .config import DBURL


class Base1(DeclarativeBase):
    repr_cols_num = 3
    repr_cols = tuple()
    
    def __repr__(self):
        """Relationships не используются в repr(), т.к. могут вести к неожиданным подгрузкам"""
        cols = []
        for idx, col in enumerate(self.__table__.columns.keys()):
            if col in self.repr_cols or idx < self.repr_cols_num:
                cols.append(f"{col}={getattr(self, col)}")

        return f"<{self.__class__.__name__} {', '.join(cols)}>"


engine = create_async_engine(url=DBURL, echo=True)

async_session = async_sessionmaker(engine)
