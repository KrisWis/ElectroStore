import { CartItemProps } from "../../../widgets/Cart/types";
import { RootState } from "../../AppStore";

export const getCartItemById = (state: RootState, id: number) => {
    return state.cart.CartItemProps.find((item: CartItemProps) => item.id === id);
};