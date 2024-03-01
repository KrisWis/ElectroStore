import styles from './styles.module.scss';
import React from 'react';
import navBar_styles from '../../../features/NavBar/ui/styles.module.scss';
import { AdaptiveNavBarProps } from '../types';
import { closeNavbar, dropdown__window__texts } from '../helpers';


export const Adaptive_NavBar: React.FC<AdaptiveNavBarProps> = ({ navBarIsOpen, setNavBarIsOpen }): React.JSX.Element => {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const [activeNavbar, setActiveNavbar] = React.useState(false);

    const dropdown_window = React.useRef<HTMLUListElement>(null);

    const dropdown_window__text = React.useRef<HTMLDivElement>(null);

    const adaptiveNavbarRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {

        if (navBarIsOpen) {
            adaptiveNavbarRef.current!.style.display = 'flex';

            setTimeout(() => {
                setActiveNavbar(true);
            }, 100);

        } else {
            setTimeout(() => {
                adaptiveNavbarRef.current!.style.display = 'none';
                setActiveNavbar(false);
            }, 300);
        }

    }, [navBarIsOpen])

    return (
        <div ref={adaptiveNavbarRef} className={`${styles.adaptive_navbar} ${activeNavbar && styles.adaptive_navbar_active}`}>
            <div className={styles.adaptive_navbar_header}>
                <h3 className={styles.adaptive_navbar_caption}>Menu</h3>
                <i className={`${styles.adaptive_navbar_close} fa fa-close`} aria-hidden="true" onClick={() => closeNavbar(setActiveNavbar, setNavBarIsOpen)}></i>
            </div>

            <ul className={styles.navbar}>
                <li className={styles.navbar__child}>Home</li>

                <div className={navBar_styles.navbar__child_dropdown_block}>
                    <div ref={dropdown_window__text} className={navBar_styles.navbar__child_dropdown__text} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <li className={styles.navbar__child}>Pages</li>
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>

                    {dropdownOpen &&
                        <ul ref={dropdown_window} className={navBar_styles.dropdown__window} aria-labelledby="dropdownPages" data-bs-popper="static">

                            {dropdown__window__texts.map((item) => (
                                <li className={navBar_styles.dropdown__window__block}>
                                    <a className={navBar_styles.dropdown__window__text}>{item}<span className={navBar_styles.dropdown__window__importance}>PRO</span></a>
                                </li>
                            ))}

                        </ul>}

                </div>

                <li className={styles.navbar__child}>Collections</li>
                <li className={styles.navbar__child}>Sale</li>
                <li className={`${styles.navbar__child} ${navBar_styles.navbar__child_hover}`}>Get Pro</li>
            </ul>

        </div>
    )
}
