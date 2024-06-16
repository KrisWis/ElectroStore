import datetime
from decimal import Decimal

from pydantic import BaseModel, Field
from server.databases.models import ImageSizes


class GoodAddDTO(BaseModel):
    name: str = Field(max_length=64)
    price: Decimal = Field(ge=0)
    description: str | None


class GoodDTO(GoodAddDTO):
    id: int = Field(ge=0)
    created_at: datetime.datetime
    updated_at: datetime.datetime


class ImageGoodAddDTO(BaseModel):
    link: str
    size: ImageSizes
    good_id: int = Field(ge=0)


class ImageGoodDTO(ImageGoodAddDTO):
    id: int = Field(ge=0)


class GoodImagesRelDTO(GoodDTO):
    images: list['ImageGoodDTO']


class ImageGoodRelDTO(ImageGoodDTO):
    good: 'GoodDTO'
