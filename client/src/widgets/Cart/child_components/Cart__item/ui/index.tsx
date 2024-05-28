import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/AppStore';
import { delete_CartItem, increase_CartItemAmount, shrink_CartItemAmount } from '../../../../../app/slices/CartSlice/CartSlice';
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

    const increaseAmount = (): void => {
        if (CartItem.amount == 1) {
            deleteItem();
        } else {
            dispatch(shrink_CartItemAmount(id))
        }
    }

    return (
        <div className={`${styles.cart__itemWrapper} ${CartItemDelete && styles.cart__item__Itemdelete}`}>

            <div className={styles.cart__item}>

                <div className={styles.cart__item__nameWrapper}>
                    <div className={styles.cart__item__increase_and_shrink}>
                        <i onClick={() => dispatch(increase_CartItemAmount(id))} className={`${styles.cart__item__increase} fa fa-plus-circle`} aria-hidden="true"></i>
                        <i onClick={increaseAmount} className={`${styles.cart__item__shrink} fa fa-minus-circle`} aria-hidden="true"></i>
                    </div>

                    <div className={styles.cart__item__name}>
                        <h4 className={styles.cart__item__name__title}>{CartItem.title} <span className={styles.cart__item__count}>{CartItem.amount}</span></h4>
                        <p className={styles.cart__item__name__description}>{CartItem.description}</p>
                    </div>
                </div>

                <p className={styles.cart__item__price}>{CartItem.price}$</p>
            </div>

            <button className={styles.cart__item__delete} onClick={deleteItem}>Delete</button>

        </div>
    )
}
