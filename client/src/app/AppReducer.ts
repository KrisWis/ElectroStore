import { Reducer } from '@reduxjs/toolkit';
import cart from './slices/CartSlice/CartSlice';
import { CartSliceState } from './slices/CartSlice/types';

export interface RootReducer {
    cart: Reducer<CartSliceState>;
}

export const RootReducer: RootReducer = { cart };