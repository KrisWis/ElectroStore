import { useState, useEffect } from 'react';
import styles from './styles.module.scss';


const Loading_animation: React.FC = (): React.JSX.Element => {

    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 300);
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

export default Loading_animation;