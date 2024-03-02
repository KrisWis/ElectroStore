import styles from './styles.module.scss';
import React from 'react';


export const Background_animation: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.background_animation}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}