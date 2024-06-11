import axios from 'axios';
import { gql } from 'graphql-tag';
import { CartItemProps } from '../types';
import { increase_CartTotalPrice, set_DetailedCartItemProps } from '../../../app/slices/CartSlice/CartSlice';
import { AppDispatch } from '../../../app/AppStore';
import { DocumentNode } from 'graphql/language/ast';
import { URL } from '../../../app/appConfig';

/* Получение данных с апи */
export const Cart_fetch = (dispatch: AppDispatch, set_CartItemProps: any) => {

    const url: URL = 'http://127.0.0.1:8000/ElectroStore/api/cart_goods';

    const query: DocumentNode = gql`
        query {
            cart_goods {
            id
            name
            description
            price
            }
        }
    `;

    let CartItemProps: CartItemProps[] = [];


    axios({
        url: url,
        method: 'post',
        data: {
            query: query
        }

    }).then(response => {
        CartItemProps = response.data;
        dispatch(set_CartItemProps(CartItemProps));
        dispatch(set_DetailedCartItemProps(CartItemProps));

    }).catch(() => {
        // CartItemProps = [{ id: 1, title: "22 Inch Monito12r", description: "ewe1221w", price: 43 },
        // { id: 2, title: "22 Inch 21Monitor", description: "ewew", price: 121 }, { id: 3, title: "22 Inch Mon1221itor", description: "ewew2121", price: 12332 }];
        // dispatch(set_CartItemProps(CartItemProps));
    }
    ).finally(() => {
        dispatch(increase_CartTotalPrice(CartItemProps.reduce(function (sum: number, item) {
            return sum + item.price!;
        }, 0)));
    })
}