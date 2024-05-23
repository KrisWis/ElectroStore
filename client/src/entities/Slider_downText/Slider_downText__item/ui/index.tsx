import { Slider_downText__item_Props } from '../types';
import styles from './styles.module.scss';

export const Slider_downText__item: React.FC<Slider_downText__item_Props> = ({ caption, desc }): React.JSX.Element => {

    return (
        <div className={styles.downText__item}>
            <h3 className={styles.downText__caption}>{caption}</h3>
            <p className={styles.downText__desc}>{desc}</p>
        </div>
    )
}
