import { CartItemProps } from "../../../widgets/Cart/types";

export interface CartSliceState {
    CartItemProps: CartItemProps[],
    CartTotalPrice: number,
    DetailedCartItemProps: CartItemProps[]
}