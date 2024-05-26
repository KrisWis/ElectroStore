import axios from 'axios';
import { gql } from 'graphql-tag';
import { CartItemProps } from '../types';
import { increase_CartTotalPrice } from '../../../app/slices/CartSlice/CartSlice';

/* Получение данных с апи */
export const Cart_fetch = (dispatch: any, set_CartItemProps: React.Dispatch<React.SetStateAction<CartItemProps[]>>): void => {

    const url = 'http://127.0.0.1:8000/ElectroStore/api/cart_goods';

    const query = gql`
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