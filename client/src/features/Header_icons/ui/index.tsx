import styles from './styles.module.scss';
import { Search_Modal } from '../..';
import { Adaptive_NavBar } from '../../../entities';
import { useEffect, useState } from 'react';
import { Cart } from '../../../widgets';
import { Cart_fetch } from '../../../widgets/Cart/helpers';
import { useAppDispatch } from '../../../app/AppStore';
import { set_CartItemProps } from '../../../app/slices/CartSlice/CartSlice';


export const Header_icons: React.FC = (): React.JSX.Element => {

    /* Открытие модалки */
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /* Открытие адаптивного попапа с навигацией */
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);

    /* Получение товаров из бд */

    const dispatch = useAppDispatch();

    useEffect(() => {
        Cart_fetch(dispatch, set_CartItemProps);
    }, [])

    /* Открытие корзины */
    const [cartIsOpen, setCartIsOpen] = useState(false);

    return (
        <>
            <ul className={styles.header_icons}>

                <li className={`${styles.header_icons__icon} ${styles.header_icons__navicon}`} onClick={() => setNavBarIsOpen(true)}>
                    <i className="fa fa-navicon" aria-hidden="true"></i>
                </li>

                <li className={styles.header_icons__icon}>
                    <a aria-label='Страница Избранное' href="/favourite">
                        <i className={`${styles.header_icons__icon} fa fa-heart`} aria-hidden="true"></i>
                    </a>
                </li>

                <li className={styles.header_icons__icon} onClick={(): void => setCartIsOpen(true)}>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </li>

                <li className={styles.header_icons__icon} onClick={() => setModalIsOpen((prev) => !prev)}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </li>
            </ul>

            <Search_Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

            <Adaptive_NavBar navBarIsOpen={navBarIsOpen} setNavBarIsOpen={setNavBarIsOpen} />

            <Cart isActive={cartIsOpen} setIsActive={setCartIsOpen} />
        </>

    )
}
