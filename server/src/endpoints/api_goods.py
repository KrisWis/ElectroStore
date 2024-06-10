from typing import Union

from fastapi import APIRouter
from pydantic import BaseModel, Field
from server.config import settings
from server.src.validation import *
from server.loader import app

router = APIRouter(prefix="goods", tags=["Goods"])


@router.get("/best_ones")
def read_item():
    pass


@router.put("/recent")
def update_item():
    pass
