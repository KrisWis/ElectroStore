import styles from './styles.module.scss';

export const NavBar: React.FC = (): React.JSX.Element => {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar__child}>Home</li>
            <li className={`${styles.navbar__child} ${styles.navbar__child_modal}`}>Pages</li>
            <li className={styles.navbar__child}>Collections</li>
            <li className={styles.navbar__child}>Sale</li>
            <li className={`${styles.navbar__child} ${styles.navbar__child_hover}`}>Get Pro</li>
        </ul>
    )
}
