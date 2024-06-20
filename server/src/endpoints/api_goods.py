import random
from typing import Union, Annotated

from fastapi import APIRouter, status, HTTPException, Body
from pydantic import BaseModel, Field
from server.config import settings
from server.databases.models import GoodOrm
from server.databases.queries.orm import AsyncORM
from server.src.schemas import *

router = APIRouter(prefix="/goods", tags=["Goods"])


@router.get("/best_ones", response_model=list[GoodImagesRelDTO], status_code=status.HTTP_200_OK)
async def best_three_goods():
    all_goods = await AsyncORM.get_all_goods()
    if not all_goods:
        raise HTTPException(404, "Good was not found")
    return random.sample(all_goods, k=3)


@router.get("/recent", response_model=list[GoodImagesRelDTO], status_code=status.HTTP_200_OK)
async def recent_five_goods():
    all_goods = await AsyncORM.get_recent_goods()
    if not all_goods:
        raise HTTPException(404, "Good was not found")
    return all_goods


@router.get("/get", response_model=list[GoodImagesRelDTO], status_code=status.HTTP_200_OK)
async def get_all():
    all_goods = await AsyncORM.get_all_goods()
    if not all_goods:
        raise HTTPException(404, "Good was not found")
    return all_goods


@router.post("/add", response_model=int, status_code=status.HTTP_201_CREATED)
async def add_good(good: GoodAddDTO):
    instance = await AsyncORM.add_good(**good.dict())
    return instance.id


@router.delete("/delete/{good_id}", response_model=bool, status_code=status.HTTP_200_OK)
async def delete_good(good_id: int):
    deleted_id = await AsyncORM.delete_instance_by_id(GoodOrm, good_id)
    return True if deleted_id else False


@router.put("/edit/{good_id}", response_model=int, status_code=status.HTTP_202_ACCEPTED)
async def edit_good(good_id: int, good: dict):
    updated = await AsyncORM.edit_model_params(GoodOrm, good_id, **good)
    return updated
