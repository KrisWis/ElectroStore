import styles from './styles.module.scss';
import React from 'react';


export const Loading_animation: React.FC = (): React.JSX.Element => {

    const [load, setLoad] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 500);
    }, []);

    return (
        <div className={`${styles.loading_animation_overlay} ${load ? styles.show : ''}`}>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
            <div className={styles.loading_animation_bar}></div>
        </div>
    )
}