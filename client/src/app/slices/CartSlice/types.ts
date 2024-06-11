import { Draft } from "@reduxjs/toolkit";
import { CartItemProps } from "../../../widgets/Cart/types";

export interface CartSliceState {
    CartItemProps: CartItemProps[],
    CartTotalPrice: number,
    DetailedCartItemProps: CartItemProps[]
}

export interface set_CartItemPropsPayload {
    payload: CartItemProps[];
    type: string;
}

export interface set_DetailedCartItemPropsPayload {
    payload: CartItemProps[];
    type: string;
}

export interface add_CartItemPayload {
    payload: CartItemProps;
    type: string;
}

export interface increase_CartTotalPricePayload {
    payload: number;
    type: string;
}

export interface increase_CartItemAmountPayload {
    payload: number;
    type: string;
}

export interface shrink_CartItemAmountPayload {
    payload: number;
    type: string;
}

export interface increase_CartItemAmountPayload {
    payload: number;
    type: string;
}

export interface delete_CartItemPayload {
    payload: { id: number, price: number };
    type: string;
}

export interface CartSliceFunctions {

    set_CartItemProps: (state: Draft<CartSliceState>, action: {
        payload: set_CartItemPropsPayload;
        type: string;
    }) => void,

    set_DetailedCartItemProps: (state: Draft<CartSliceState>, action: {
        payload: set_DetailedCartItemPropsPayload;
        type: string;
    }) => void,

    add_CartItem: (state: Draft<CartSliceState>, action: {
        payload: add_CartItemPayload;
        type: string;
    }) => void,

    increase_CartTotalPrice: (state: Draft<CartSliceState>, action: {
        payload: increase_CartTotalPricePayload;
        type: string;
    }) => void,

    increase_CartItemAmount: (state: Draft<CartSliceState>, action: {
        payload: increase_CartItemAmountPayload;
        type: string;
    }) => void,

    shrink_CartItemAmount: (state: Draft<CartSliceState>, action: {
        payload: shrink_CartItemAmountPayload;
        type: string;
    }) => void,

    delete_CartItem: (state: Draft<CartSliceState>, action: {
        payload: delete_CartItemPayload;
        type: string;
    }) => void,

}