import styles from './styles.module.scss';
import React from 'react';

export const NavBar: React.FC = (): React.JSX.Element => {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const dropdown_window = React.useRef<HTMLUListElement>(null);

    const dropdown_window__text = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.body.addEventListener("click", (e: MouseEvent): void => {
            if (!dropdown_window.current?.contains(e.target as Node) && !dropdown_window__text.current?.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        })
    }, [])

    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar__child}>Home</li>

            <div className={styles.navbar__child_dropdown_block}>
                <div ref={dropdown_window__text} className={styles.navbar__child_dropdown__text} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <li className={styles.navbar__child}>Pages</li>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </div>

                {dropdownOpen &&
                    <ul ref={dropdown_window} className={styles.dropdown__window} aria-labelledby="dropdownPages" data-bs-popper="static">
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Shop <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Single Product <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Blog <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Single Post <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Single Post w/sidebar <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>About <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Cart <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Checkout <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Coming Soon <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Contact <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Error Page <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>FAQs <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>My Account <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Order Tracking <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Wishlist <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                        <li className={styles.dropdown__window__block}>
                            <a className={styles.dropdown__window__text}>Styles <span className={styles.dropdown__window__importance}>PRO</span></a>
                        </li>
                    </ul>}

            </div>

            <li className={styles.navbar__child}>Collections</li>
            <li className={styles.navbar__child}>Sale</li>
            <li className={`${styles.navbar__child} ${styles.navbar__child_hover}`}>Get Pro</li>
        </ul>
    )
}
