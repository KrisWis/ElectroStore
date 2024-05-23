import styles from './styles.module.scss';
import navBar_styles from '../../../features/NavBar/ui/styles.module.scss';
import { AdaptiveNavBarProps } from '../types';
import { closeNavbar } from '../helpers';
import { useEffect, useRef, useState } from 'react';
import { Nav_DropDown_window } from '../../../features';


export const Adaptive_NavBar: React.FC<AdaptiveNavBarProps> = ({ navBarIsOpen, setNavBarIsOpen }): React.JSX.Element => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [activeNavbar, setActiveNavbar] = useState(false);

    const dropdown_window__text = useRef<HTMLDivElement>(null);

    const adaptiveNavbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (adaptiveNavbarRef.current) {
            if (navBarIsOpen) {
                adaptiveNavbarRef.current.style.display = 'flex';

                setTimeout(() => {
                    setActiveNavbar(true);
                }, 100);

            } else {
                setTimeout(() => {
                    adaptiveNavbarRef.current ? adaptiveNavbarRef.current.style.display = 'none' : '';
                    setActiveNavbar(false);
                }, 300);
            }
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

                    <Nav_DropDown_window isVisible={dropdownOpen} />

                </div>

                <li className={styles.navbar__child}>Collections</li>
                <li className={styles.navbar__child}>Sale</li>
                <li className={`${styles.navbar__child} ${navBar_styles.navbar__child_hover}`}>Get Pro</li>
            </ul>

        </div>
    )
}
