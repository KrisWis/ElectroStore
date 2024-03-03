import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { WidgetItemProps } from '../types';

const Widget_item: React.FC<WidgetItemProps> = ({ imageURL, caption, price, imageHeight, padding_top }): React.JSX.Element => {
    return (
        <div style={{ height: imageHeight }} className={styles.widget_item}>

            <div className={styles.item_image} style={{ paddingTop: padding_top }}>
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

export default Widget_item;