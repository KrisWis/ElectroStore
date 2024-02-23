import styles from './styles.module.scss';
import React from 'react';

export const Slider_downText: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.slider_downText}>

            <div className={styles.downText__item}>
                <h3 className={styles.downText__caption}>Book An Appointment</h3>
                <p className={styles.downText__desc}>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>

            <div className={styles.downText__item}>
                <h3 className={styles.downText__caption}>Pick Up In Store</h3>
                <p className={styles.downText__desc}>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>

            <div className={styles.downText__item}>
                <h3 className={styles.downText__caption}>Special Packaging</h3>
                <p className={styles.downText__desc}>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>

            <div className={styles.downText__item}>
                <h3 className={styles.downText__caption}>Free Global Returns</h3>
                <p className={styles.downText__desc}>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
        </div>
    )
}
