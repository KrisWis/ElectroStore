from sqlalchemy import select, delete

from server.databases.database import Base1, engine, async_session
from server.databases.models import GoodOrm, ImageGoodOrm, ImageSizes
from sqlalchemy.orm import selectinload, joinedload, aliased, contains_eager


class AsyncORM:
    @staticmethod
    async def create_tables():
        async with engine.begin() as conn:
            # engine.echo = False
            assert engine.url.database.endswith('_test'), 'Дропать прод запрещено'
            await conn.run_sync(Base1.metadata.drop_all)
            await conn.run_sync(Base1.metadata.create_all)
            engine.echo = True

    @staticmethod
    async def add_initial_goods():
        goods = (("Huawei super ultra pro 1000", 39990.01, "some description", {"vert1": ImageSizes.vertical, "quadro1": ImageSizes.quadrant, "horiz1": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 2000", 39990.02, "some description", {"vert2": ImageSizes.vertical, "quadro2": ImageSizes.quadrant, "horiz2": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 3000", 39990.03, "some description", {"vert3": ImageSizes.vertical, "quadro3": ImageSizes.quadrant, "horiz3": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 4000", 39990.04, "some description", {"vert4": ImageSizes.vertical, "quadro4": ImageSizes.quadrant, "horiz4": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 5000", 39990.05, "some description", {"vert5": ImageSizes.vertical, "quadro5": ImageSizes.quadrant, "horiz5": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 6000", 39990.06, "some description", {"vert6": ImageSizes.vertical, "quadro6": ImageSizes.quadrant, "horiz6": ImageSizes.horizontal}),
                 ("Huawei super ultra pro 7000", 39990.07, "some description", {"vert7": ImageSizes.vertical, "quadro7": ImageSizes.quadrant, "horiz7": ImageSizes.horizontal}))
        for good in goods:
            try:
                good_instance = await AsyncORM.add_good(name=good[0], price=good[1], description=good[2])
                await AsyncORM.add_images_to_good(good_instance.id, list(good[3].items()))
            except Exception as e:
                print(e)

    @staticmethod
    async def add_good(name: str, price: float, description: str | None):
        async with async_session(expire_on_commit=False) as session:
            good = GoodOrm(name=name, price=price, description=description)
            session.add(good)
            await session.commit()
            return good

    @staticmethod
    async def delete_instance_by_id(model, good_id: int) -> int | None:
        async with async_session(expire_on_commit=False) as session:
            smt = await session.execute(delete(model).filter_by(id=good_id).returning(model.id))
            await session.commit()
            return smt.scalar_one_or_none()

    @staticmethod
    async def add_images_to_good(good_id: int, images: list[tuple[str, ImageSizes]]):
        async with async_session() as session:
            links_instances = [ImageGoodOrm(link=image[0], size=image[1], good_id=good_id) for image in images]
            session.add_all(links_instances)
            await session.commit()

    @staticmethod
    async def get_all_goods():
        async with async_session() as session:
            res = await session.scalars(select(GoodOrm))
            return res.all()

    @staticmethod
    async def get_recent_goods():
        """5 last added goods"""
        async with async_session() as session:
            res = await session.scalars(select(GoodOrm).order_by(GoodOrm.created_at.desc()).limit(5))
            return res.all()
