import { CartItemProps } from '../../../types';
import styles from './styles.module.scss';

export const Cart__item: React.FC<CartItemProps> = ({ title, description, price, amount }): React.JSX.Element => {


    return (
        <div className={styles.cart__item}>

            <div className={styles.cart__item__name}>
                <h4 className={styles.cart__item__name__title}>{title} <span className={styles.cart__item__count}>{amount}</span></h4>
                <p className={styles.cart__item__name__description}>{description}</p>
            </div>

            <p className={styles.cart__item__price}>{price}$</p>

        </div>
    )
}
