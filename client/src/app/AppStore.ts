import { Action, Store, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootReducer } from './AppReducer';
import { CartSliceState } from './slices/CartSlice/types';
interface StoreState {
    cart: CartSliceState
}

export const store: Store<StoreState, Action<string>> = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch | any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector