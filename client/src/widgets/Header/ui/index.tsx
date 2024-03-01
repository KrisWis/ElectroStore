import { Header_icons, NavBar } from '../../../features';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.header}>
            <Link aria-label="Главная страница" to="/">
                <img src="assets/logo.svg" width="204" height="46" alt="logo" />
            </Link>
            <NavBar />
            <Header_icons />
        </div>
    )
}
