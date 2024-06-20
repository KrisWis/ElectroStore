interface WidgetItemImagesProps {
    "link": string,
    "size": string,
    "good_id": number,
    "id": number,
}
export interface WidgetItemProps {
    id: number,
    images: WidgetItemImagesProps[],
    name: string,
    description: string,
    price: number,
    created_at: string,
    updated_at: string,
    imageHeight?: number,
    padding_top?: number,
}