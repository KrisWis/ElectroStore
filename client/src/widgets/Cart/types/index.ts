export interface CartItemProps {
    id: number,
    title: string,
    description: string,
    price: number
}

export interface CartProps {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}