import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/AppStore';
import { delete_CartItem } from '../../../../../app/slices/CartSlice/CartSlice';
import { getCartItemById } from '../../../../../app/slices/CartSlice/selectors';
import { CartItemProps } from '../../../types';
import styles from './styles.module.scss';

export const Cart__item: React.FC<CartItemProps> = ({ id }): React.JSX.Element => {

    const CartItem: CartItemProps = useAppSelector((state) => getCartItemById(state, id));

    const [CartItemDelete, setCartItemDelete] = useState(false);

    const dispatch = useAppDispatch();

    const deleteItem = () => {

        setCartItemDelete(true);

        setTimeout(() => {
            setCartItemDelete(false);
            dispatch(delete_CartItem({ id: id, price: CartItem.price! * CartItem.amount! }));
        }, 300);
    }


    return (
        <div className={`${styles.cart__itemWrapper} ${CartItemDelete && styles.cart__item__Itemdelete}`}>

            <div className={styles.cart__item}>
                <div className={styles.cart__item__name}>
                    <h4 className={styles.cart__item__name__title}>{CartItem.title} <span className={styles.cart__item__count}>{CartItem.amount}</span></h4>
                    <p className={styles.cart__item__name__description}>{CartItem.description}</p>
                </div>

                <p className={styles.cart__item__price}>{CartItem.price}$</p>
            </div>

            <button className={styles.cart__item__delete} onClick={deleteItem}>Delete</button>

        </div>
    )
}
