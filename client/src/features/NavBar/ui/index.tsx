import { Nav_DropDown_window } from '../../Nav_DropDown_window/ui';
import styles from './styles.module.scss';
import { useState, useRef, useEffect } from 'react';


export const NavBar: React.FC = (): React.JSX.Element => {

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const dropdown_window = useRef<HTMLUListElement>(null);

    const dropdown_window__text = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.addEventListener("click", (e: MouseEvent): void => {
            if (!dropdown_window.current?.contains(e.target as Node) && !dropdown_window__text.current?.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        })
    }, [])


    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar__child}>Home</li>

            <li className={styles.navbar__child_dropdown_block}>
                <div ref={dropdown_window__text} className={styles.navbar__child_dropdown__text} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <p className={styles.navbar__child}>Pages</p>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </div>

                <Nav_DropDown_window isVisible={dropdownOpen} ref_prop={dropdown_window} />

            </li>

            <li className={styles.navbar__child}>Collections</li>
            <li className={styles.navbar__child}>Sale</li>
            <li className={`${styles.navbar__child} ${styles.navbar__child_hover}`}>Get Pro</li>
        </ul>
    )
}
