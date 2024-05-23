import { dropdown__window__texts } from '../helpers';
import { Nav_Dropdown_windowProps } from '../types';
import styles from './styles.module.scss';


export const Nav_DropDown_window: React.FC<Nav_Dropdown_windowProps> = ({ ref_prop, isVisible }): React.JSX.Element => {


    return (
        <ul ref={ref_prop} className={`${styles.dropdown__window} ${isVisible ? styles.dropdown__window__active : ""}`} aria-labelledby="dropdownPages" data-bs-popper="static">

            {dropdown__window__texts.map((item) => (
                <li key={item} className={styles.dropdown__window__block}>
                    <a className={styles.dropdown__window__text}>{item}<span className={styles.dropdown__window__importance}>PRO</span></a>
                </li>
            ))}

        </ul>
    )
}