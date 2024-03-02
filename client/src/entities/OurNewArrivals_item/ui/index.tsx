import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { OurNewArrivalsItemProps } from '../types';

const OurNewArrivals_item: React.FC<OurNewArrivalsItemProps> = ({ imageURL, caption, price }): React.JSX.Element => {
    return (
        <div className={styles.ourNewArrivals_item}>

            <div className={styles.item_image}>
                <img src={imageURL} alt="Изображение предмета" />
                <button className={styles.item_add}>
                    <Link to="/">
                        Add to Cart
                    </Link>
                </button>
            </div>

            <div className={styles.item_desc}>
                <h3 className={styles.item_caption}>{caption}</h3>
                <p className={styles.item_price}>${price}</p>
            </div>

        </div>
    )
}

export default OurNewArrivals_item;