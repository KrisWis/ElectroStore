import { Header_icons, NavBar } from '../../../features';
import styles from './styles.module.scss';

export const Header: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.header}>
            <h2 className={styles.caption}>ElectroStore</h2>
            <NavBar />
            <Header_icons />
        </div>
    )
}
