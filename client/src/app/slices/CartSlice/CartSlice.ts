import { Slice, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'; // Импортируем объект создания слайса
import { CartSliceState, add_CartItemPayload, delete_CartItemPayload, increase_CartItemAmountPayload, increase_CartTotalPricePayload, set_CartItemPropsPayload, set_DetailedCartItemPropsPayload, shrink_CartItemAmountPayload } from './types';
import { CartItemProps } from '../../../widgets/Cart/types';

const initialState: CartSliceState = { // Объявляем объект, который будет храниться в нашем хранилище. Объект может быть вообще любым.
    CartItemProps: [],
    CartTotalPrice: 0,
    DetailedCartItemProps: [],
}

export const CartSlice: Slice<CartSliceState, SliceCaseReducers<CartSliceState>, string, string, SliceSelectors<CartSliceState>> = createSlice({ // Делаем слайс, который будет обрабатывать наш initialState
    name: 'cart', // Имя слайса
    initialState: initialState, // То что будет в нём храниться
    reducers: { // Функции, которые будут изменять хранилище ( в себя принимают объект initialState)

        set_CartItemProps: (state, action: set_CartItemPropsPayload) => {
            state.CartItemProps = action.payload;
            localStorage.setItem('CartItems', JSON.stringify(state.CartItemProps));
        },

        set_DetailedCartItemProps: (state, action: set_DetailedCartItemPropsPayload) => {
            state.DetailedCartItemProps = action.payload;
            localStorage.setItem('DetailedCartItems', JSON.stringify(state.DetailedCartItemProps));
        },

        add_CartItem: (state, action: add_CartItemPayload) => {
            state.CartItemProps.push(action.payload);
            state.DetailedCartItemProps.push(action.payload);
            state.CartTotalPrice += action.payload.price!;
            localStorage.setItem('CartItems', JSON.stringify(state.CartItemProps));
            localStorage.setItem('DetailedCartItems', JSON.stringify(state.DetailedCartItemProps));
            localStorage.setItem('CartTotalPrice', JSON.stringify(state.CartTotalPrice));
        },

        increase_CartTotalPrice: (state, action: increase_CartTotalPricePayload) => {
            state.CartTotalPrice += action.payload;
            localStorage.setItem('CartTotalPrice', JSON.stringify(state.CartTotalPrice));
        },

        increase_CartItemAmount: (state, action: increase_CartItemAmountPayload) => {
            const CartItem: CartItemProps = state.DetailedCartItemProps.find((item: CartItemProps) => item.id === action.payload)!;
            state.DetailedCartItemProps = state.DetailedCartItemProps.filter((item) => item !== CartItem);
            CartItem.amount! += 1;
            state.DetailedCartItemProps = [...state.DetailedCartItemProps, CartItem];
            state.CartTotalPrice += CartItem.price!;
            localStorage.setItem('DetailedCartItems', JSON.stringify(state.DetailedCartItemProps));
            localStorage.setItem('CartTotalPrice', JSON.stringify(state.CartTotalPrice));
        },

        shrink_CartItemAmount: (state, action: shrink_CartItemAmountPayload) => {
            const CartItem: CartItemProps = state.DetailedCartItemProps.find((item: CartItemProps) => item.id === action.payload)!;
            state.DetailedCartItemProps = state.DetailedCartItemProps.filter((item) => item !== CartItem);
            CartItem.amount! -= 1;
            state.DetailedCartItemProps = [...state.DetailedCartItemProps, CartItem];
            state.CartTotalPrice -= CartItem.price!;
            localStorage.setItem('DetailedCartItems', JSON.stringify(state.DetailedCartItemProps));
            localStorage.setItem('CartTotalPrice', JSON.stringify(state.CartTotalPrice));
        },

        delete_CartItem: (state, action: delete_CartItemPayload) => {
            state.CartTotalPrice -= action.payload.price;
            state.CartItemProps = state.CartItemProps.filter((item) => item.id !== action.payload.id);
            state.DetailedCartItemProps = state.DetailedCartItemProps.filter((item) => item.id !== action.payload.id);
            localStorage.setItem('CartItems', JSON.stringify(state.CartItemProps));
            localStorage.setItem('DetailedCartItems', JSON.stringify(state.DetailedCartItemProps));
            localStorage.setItem('CartTotalPrice', JSON.stringify(state.CartTotalPrice));
        },
    },
})

// Объявляем все действия нашего слайса. Actions хранит в себе все функции слайса. Вытаксиваем все функции, чтобы эскпортировать их.
export const { set_CartItemProps, increase_CartTotalPrice, add_CartItem, increase_CartItemAmount, delete_CartItem, shrink_CartItemAmount, set_DetailedCartItemProps } = CartSlice.actions;
export type CartSliceActions = typeof CartSlice.actions;



// Редюсер как бы обрабатывает весь наш слайс. Он меняет хранилище и взаимодействует с ним.
export default CartSlice.reducer // Экспортируем редюсер, чтобы потом указать его в store.js: