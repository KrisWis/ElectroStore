from sqlalchemy import select, delete, update

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
    async def delete_instance_by_id(model, good_id: int) -> int | None:
        async with async_session(expire_on_commit=False) as session:
            smt = await session.execute(delete(model).filter_by(id=good_id).returning(model.id))
            await session.commit()
            return smt.scalar_one_or_none()

    @staticmethod
    async def add_good(name: str, price: float, description: str | None):
        async with async_session(expire_on_commit=False) as session:
            good = GoodOrm(name=name, price=price, description=description)
            session.add(good)
            await session.commit()
            return good

    @staticmethod
    async def add_initial_goods():
        goods = (("Умная колонка Vk Капсула Нео Black (VKSP1BK)", 4599.99, "some description",
                  {"https://static.eldorado.ru/img1/b/bb2/722274000.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/b/bb/722274000.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/b/bb3/722274000.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)", 37999.99, "Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3) имеет экран Retina с разрешением 2160x1620 пикселей, что обеспечивает вывод контента с оптимальной детализацией. Благодаря технологии True Tone можно комфортно смотреть фотографии и изображения, видеоролики, фильмы и сериалы при разном освещении. Процессор A13 Bionic обеспечивает высокий уровень производительности при запуске ресурсоемких приложений, игр, работе в режиме многозадачности. Для хранения данных предназначена внутренняя память объемом 64 ГБ.",
                  {"https://static.eldorado.ru/img1/p/b2/24046300.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/p/b3/24046300.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/p/b4/24046300.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Смартфон Apple iPhone 15 Pro 128GB Natural Titanium (Dual Sim)", 116999.03, "Смартфон Apple iPhone 15 Pro 128GB Natural Titanium (Dual Sim) оснащен шестиядерным процессором А17 Pro. За счет этого устройство мгновенно реагирует на заданные команды, без задержек загружает медиафайлы из интернета. Модель оснащена безрамочным экраном с матрицей OLED Super Retina XDR. Благодаря этому достигаются детализация и высокое качество передаваемого изображения. Большой дисплей удобен для общения в мессенджерах и социальных сетях. Технология ProMotion обеспечивает экономичное потребление энергоресурса при воспроизведении видео.",
                  {"https://static.eldorado.ru/img1/b/bb/37496300.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/b/bb2/37496300.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/b/bb3/37496300.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Триммер Rowenta Formula 1", 4999.42, "Триммер Rowenta Formula 1® TN604MF0 предназначен для комплексного ухода за волосами на лице. Данная модель имеет стильный привлекательный дизайн. Влагостойкий корпус выполнен из прочного, долговечного материала высокого качества. Прибор можно использовать даже в душе. Он рассчитан на долгое время работы за счет прочных, острых лезвий из нержавеющей стали с титановым покрытием, обеспечивающих качественное бритье. Экспериментировать над образом позволяет наличие 6 настроек длины стрижки (от 0,4 до 6 мм). Скорость мотора равна 8000 об/мин. С таким прибором можно осуществлять влажное и сухое бритье.",
                  {"https://static.eldorado.ru/img1/b/bb/37677200.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/b/bb2/37677200.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/b/bb3/37677200.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Игровая приставка Nintendo Switch, неоновый синий/неоновый красный (HAD-S-KABAA RUS)", 31999.95, "Игровая приставка Nintendo Switch (HAD-S-KABAA RUS) представлена в ярком неоново-синем и неоново-красном цвете. Модель предлагает множество возможностей для развлечения и игрового опыта. Портативное устройство компактного размера со встроенным дисплеем. Благодаря этому можно играть в самолете, дороге, в поезде.",
                  {"https://static.eldorado.ru/photos/71/716/800/48/new_71680048_l_1702296234.jpeg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/p/b1/02697400.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/p/b2/02697400.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Электросамокат Accesstyle Typhoon 30S", 37990.15, "Электросамокат Accesstyle Typhoon 30S оснащен двигателем мощностью 380 Вт. Это позволяет развивать скорость движения до 30 км/ч. Модель имеет два больших колеса диаметром 10 дюймов, при изготовлении которых используется резина высокого качества. Это повышает комфорт при езде по любым дорожным покрытиям. Дисковые тормоза, установленные на обоих колесах, обеспечивают быструю остановку вне зависимости от скорости движения.",
                  {"https://static.eldorado.ru/img1/p/b/018314001.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/b/bb1/018314001.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/b/bb2/018314001.jpg/resize/468x468/": ImageSizes.horizontal}),
                 ("Смартфон Huawei Mate 50 8+256GB Black", 54990.07, "Смартфон Huawei Mate 50 8+256GB Black оборудован корпусом, который соответствует классу IP68. Это способствует надежной защите устройства от воздействия пыли и влаги. Чип бренда Qualcomm с восемью ядрами обеспечивает оптимальную производительность и быстродействие устройства в многозадачном режиме.",
                  {"https://static.eldorado.ru/img1/p/b/362604001.jpg/resize/468x468/": ImageSizes.vertical,
                   "https://static.eldorado.ru/img1/p/b1/362604001.jpg/resize/468x468/": ImageSizes.quadrant,
                   "https://static.eldorado.ru/img1/p/b2/362604001.jpg/resize/468x468/": ImageSizes.horizontal}))
        for good in goods:
            try:
                good_instance = await AsyncORM.add_good(name=good[0], price=good[1], description=good[2])
                await AsyncORM.add_images_to_good(good_instance.id, list(good[3].items()))
            except Exception as e:
                print(e)

    @staticmethod
    async def get_all_goods():
        async with async_session() as session:
            res = await session.scalars(select(GoodOrm).options(selectinload(GoodOrm.images)))
            return res.all()

    @staticmethod
    async def get_recent_goods():
        """5 last added goods"""
        async with async_session() as session:
            res = await session.scalars(select(GoodOrm).options(selectinload(GoodOrm.images)).order_by(GoodOrm.created_at.desc()).limit(5))
            return res.all()

    @staticmethod
    async def edit_model_params(model, model_id: int, **params):
        async with async_session(expire_on_commit=False) as session:
            new_model = await session.execute(update(model).filter_by(id=model_id).values(**params).returning(model))
            await session.commit()
            return new_model.scalar_one_or_none()

    @staticmethod
    async def add_images_to_good(good_id: int, images: list[tuple[str, ImageSizes]]) -> list[int]:
        async with async_session(expire_on_commit=False) as session:
            links_instances = [ImageGoodOrm(link=image[0], size=image[1], good_id=good_id) for image in images]
            session.add_all(links_instances)
            await session.commit()
            return [i.id for i in links_instances]

    @staticmethod
    async def get_smt_by_id(model, id: int):
        async with async_session() as session:
            return await session.scalar(select(model).filter_by(id=id))

