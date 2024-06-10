from typing import Union, Optional
from pydantic import BaseModel, Field
import enum


class Item(BaseModel):
    name: str
    price: float
    is_offer: bool | None = None
