import asyncio
from databases.queries.orm import AsyncORM


async def main():
    await AsyncORM.create_tables()
    await AsyncORM.add_initial_goods()


if __name__ == '__main__':
    asyncio.run(main())
