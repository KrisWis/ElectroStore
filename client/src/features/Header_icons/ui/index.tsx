import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Search_Modal } from '../..';
import React from 'react';
import { Adaptive_NavBar } from '../../../entities';

export const Header_icons: React.FC = (): React.JSX.Element => {

    /* Открытие модалки */

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    /* Открытие адаптивного попапа с навигацией */
    const [navBarIsOpen, setNavBarIsOpen] = React.useState(false);

    return (
        <ul className={styles.header_icons}>

            <li className={`${styles.header_icons__icon} ${styles.header_icons__navicon}`} onClick={() => setNavBarIsOpen(true)}>
                <i className="fa fa-navicon" aria-hidden="true"></i>
            </li>

            <Adaptive_NavBar navBarIsOpen={navBarIsOpen} setNavBarIsOpen={setNavBarIsOpen} />

            <Link to="/favourite">
                <li className={styles.header_icons__icon}>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                </li>
            </Link>

            <li className={styles.header_icons__icon}>
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </li>

            <li className={styles.header_icons__icon} onClick={() => setModalIsOpen((prev) => !prev)}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </li>

            <Search_Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </ul>
    )
}
