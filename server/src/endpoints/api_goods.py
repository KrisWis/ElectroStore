import random
from typing import Union

from fastapi import APIRouter
from pydantic import BaseModel, Field
from server.config import settings
from server.databases.queries.orm import AsyncORM
from server.src.validation import *

router = APIRouter(prefix="/goods", tags=["Goods"])


@router.get("/best_ones")
async def best_ones_goods():
    all_goods = await AsyncORM.get_best_goods()
    return {'best_goods': random.sample(all_goods, k=3)}


@router.get("/recent")
async def recent_goods():
    all_goods = await AsyncORM.get_recent_goods()
    return {'recent_goods': all_goods}
