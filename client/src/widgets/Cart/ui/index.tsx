import { useAppSelector } from '../../../app/AppStore';
import { Cart__item } from '../child_components/Cart__item/ui';
import { CartItemProps, CartProps } from '../types';
import styles from './styles.module.scss';

export const Cart: React.FC<CartProps> = ({ isActive, setIsActive }): React.JSX.Element => {

    /* TODO: сделать добавление в корзину и изменение цены с анимашками какими нибудь, сделать у элемента в корзине счётчик его количества, 
    добавить кнопку удаления из корзины, анимированную иконку, анимацию перед заходом на сайт на канвасе */

    const CartItems: CartItemProps[] = useAppSelector((state) => state.cart.CartItemProps);
    const totalPrice: number = useAppSelector((state) => state.cart.CartTotalPrice);


    return (
        <div className={`${styles.cart} ${isActive ? styles.cart__is_active : ''}`}>
            <i className={`fa fa-close ${styles.cart__close}`} aria-hidden="true" onClick={() => setIsActive(false)}></i>

            <div className={styles.cart__header}>
                <h3 className={styles.cart__header__caption}>Your Cart</h3>
                <span className={styles.cart__header__goods_count}>
                    <span>{CartItems.length}</span>
                </span>
            </div>

            <div className={styles.cart__items}>
                {CartItems.map((item) => (
                    <Cart__item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} />
                ))}
            </div>

            <p className={styles.cart__price_text}>Total (USD) <span className={styles.cart__price_number}>${totalPrice}</span></p>

            <button className={styles.cart__continue} type="submit">Continue to Checkout</button>

        </div>
    )
}
