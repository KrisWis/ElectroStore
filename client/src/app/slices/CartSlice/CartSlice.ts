import { createSlice } from '@reduxjs/toolkit'; // Импортируем объект создания слайса
import { CartSliceState } from './types';
import { CartItemProps } from '../../../widgets/Cart/types';

const initialState: CartSliceState = { // Объявляем объект, который будет храниться в нашем хранилище. Объект может быть вообще любым.
    CartItemProps: [],
    CartTotalPrice: 0,
}

export const CartSlice = createSlice({ // Делаем слайс, который будет обрабатывать наш initialState
    name: 'cart', // Имя слайса
    initialState: initialState, // То что будет в нём храниться
    reducers: { // Функции, которые будут изменять хранилище ( в себя принимают объект initialState)

        set_CartItemProps: (state, action) => {
            state.CartItemProps = action.payload;
        },

        add_CartItem: (state, action) => {
            state.CartItemProps.push(action.payload);
        },

        increase_CartTotalPrice: (state, action) => {
            state.CartTotalPrice += action.payload;
        },

        increase_CartItemAmount: (state, action) => {
            const CartItem: CartItemProps = state.CartItemProps.find((item: CartItemProps) => item.id === action.payload)!;
            CartItem.amount += 1;
            state.CartItemProps = state.CartItemProps.filter((item) => item !== CartItem);
            state.CartItemProps = [...state.CartItemProps, CartItem];
        },
    },
})

// Объявляем все действия нашего слайса. Actions хранит в себе все функции слайса. Вытаксиваем все функции, чтобы эскпортировать их.
export const { set_CartItemProps, increase_CartTotalPrice, add_CartItem, increase_CartItemAmount } = CartSlice.actions

// Редюсер как бы обрабатывает весь наш слайс. Он меняет хранилище и взаимодействует с ним.
export default CartSlice.reducer // Экспортируем редюсер, чтобы потом указать его в store.js: