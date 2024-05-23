import datetime
import logging
from server.databases.database import Base1, engine, async_session
# from server.databases.models import some_model
from sqlalchemy.orm import selectinload, joinedload, aliased, contains_eager


class AsyncORM:
    @staticmethod
    async def create_tables():
        async with engine.begin() as conn:
            engine.echo = False
            assert engine.url.database.endswith('_test'), 'Дропать прод запрещено'
            await conn.run_sync(Base1.metadata.drop_all)
            await conn.run_sync(Base1.metadata.create_all)
            engine.echo = True

    # @staticmethod
    # async def add_initial_admins():
    #     for user in intial_admins:
    #         await AsyncORM.add_admin(*user)
