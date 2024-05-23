import { Store, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootReducer } from './AppReducer';

export const store: Store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch | any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector