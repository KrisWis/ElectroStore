from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .src.endpoints import router


app = FastAPI(
    title='Electro Store',
    version="0.0.1"
)

app.include_router(router)


origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def start():
    return "Hey there! You've done some cringe here. It's okay, we're gonna forget about it :)"

