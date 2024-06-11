import { Header_icons, NavBar } from '../../../features';
import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';
import { useState, useEffect } from 'react';


export const Header: React.FC = (): React.JSX.Element => {

    /* Анимация появления после загрузки */
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);


    return (
        <header className={`${styles.header} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? app_styles.opacity_0 : ''}`}>
            <a aria-label="Главная страница" href="/">
                <img src="assets/logo.svg" width="204" height="46" alt="logo" />
            </a>
            <NavBar />
            <Header_icons />
        </header>
    )
}
