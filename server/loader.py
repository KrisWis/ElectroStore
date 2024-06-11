from fastapi import FastAPI
from .src.endpoints import router


app = FastAPI(
    title='Electro Store',
    version="0.0.1"
)

app.include_router(router)
