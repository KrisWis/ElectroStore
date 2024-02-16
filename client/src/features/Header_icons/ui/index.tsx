import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Header_icons: React.FC = (): React.JSX.Element => {
    return (
        <ul className={styles.header_icons}>
            <Link to="/favourite">
                <li className={styles.header_icons__icon}>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                </li>
            </Link>
            <li className={styles.header_icons__icon}>
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </li>
            <li className={styles.header_icons__icon}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </li>
        </ul>
    )
}
