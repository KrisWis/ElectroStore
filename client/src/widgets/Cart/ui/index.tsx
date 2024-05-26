import { useEffect } from 'react';
import { useAppSelector } from '../../../app/AppStore';
import { Cart__item } from '../child_components/Cart__item/ui';
import { CartItemProps, CartProps } from '../types';
import styles from './styles.module.scss';
import AnimatedNumbers from "react-animated-numbers";

export const Cart: React.FC<CartProps> = ({ isActive, setIsActive }): React.JSX.Element => {

    /* TODO: добавить кнопку для увеличения и уменьшения количества, анимированную иконку, глянуть проблемы со скроллом,
    сделать меньше расстояния в адаптиве, сделать адаптив корзины лучше, настроить слайдер лучше в Best Sellers, проверить оптимизацию, добавить функционал поиска,
    анимацию перед заходом на сайт на канвасе (на след.странице) */

    const CartItems: CartItemProps[] = useAppSelector((state) => state.cart.CartItemProps);
    const DetailedCartItems: CartItemProps[] = useAppSelector((state) => state.cart.DetailedCartItemProps);
    const totalPrice: number = useAppSelector((state) => state.cart.CartTotalPrice);

    useEffect(() => {
        if (CartItems.length == 1) {
            setTimeout(() => {
                document.querySelector("#cart__header__goods_count div div div")!.textContent = "1";
            }, 0);
        }
    }, [CartItems])


    return (
        <div className={`${styles.cart} ${isActive ? styles.cart__is_active : ''}`}>
            <i className={`fa fa-close ${styles.cart__close}`} aria-hidden="true" onClick={() => setIsActive(false)}></i>

            <div className={styles.cart__header}>
                <h3 className={styles.cart__header__caption}>Your Cart</h3>
                <span className={styles.cart__header__goods_count} id="cart__header__goods_count">
                    <AnimatedNumbers
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.1,
                        })}
                        animateToNumber={DetailedCartItems.reduce((sum, item) => (sum += item.amount!), 0)}
                    />
                </span>
            </div>

            <div className={styles.cart__items}>
                {CartItems.map((item) => (
                    <Cart__item key={item.id} id={item.id} />
                ))}
            </div>

            <p className={styles.cart__price_text}>Total (USD) <span className={styles.cart__price_number}>${totalPrice}</span></p>

            <button className={styles.cart__continue} type="submit">Continue to Checkout</button>

        </div>
    )
}
