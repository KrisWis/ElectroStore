import styles from './styles.module.scss';
import { dropdown__window__texts } from '../../../entities/Adaptive_NavBar/helpers';
import { useState, useRef, useEffect } from 'react';


export const NavBar: React.FC = (): React.JSX.Element => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

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

                {dropdownOpen &&
                    <ul ref={dropdown_window} className={styles.dropdown__window} aria-labelledby="dropdownPages" data-bs-popper="static">

                        {dropdown__window__texts.map((item) => (
                            <li key={item} className={styles.dropdown__window__block}>
                                <a className={styles.dropdown__window__text}>{item}<span className={styles.dropdown__window__importance}>PRO</span></a>
                            </li>
                        ))}

                    </ul>}

            </li>

            <li className={styles.navbar__child}>Collections</li>
            <li className={styles.navbar__child}>Sale</li>
            <li className={`${styles.navbar__child} ${styles.navbar__child_hover}`}>Get Pro</li>
        </ul>
    )
}
