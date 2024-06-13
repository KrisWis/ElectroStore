import asyncio

from server.databases.models import GoodOrm
from server.databases.queries.orm import AsyncORM
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from server.src.endpoints import router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # await AsyncORM.create_tables()
    # await AsyncORM.add_initial_goods()
    yield

app = FastAPI(
    title='Electro Store',
    version="0.0.1",
    lifespan=lifespan
)

origins = [
    "http://localhost:5173"
]

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=['Cringe page'])
async def start():
    return "Hey there! You've done some cringe here. It's okay, we're gonna forget about it :)"
