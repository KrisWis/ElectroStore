import styles from './styles.module.scss';
import { WidgetItemProps } from '../types';
import { useAppDispatch, useAppSelector } from '../../../app/AppStore';
import { add_CartItem, increase_CartItemAmount, increase_CartTotalPrice } from '../../../app/slices/CartSlice/CartSlice';
import { CartItemProps } from '../../../widgets/Cart/types';
import { getCartItemById } from '../../../app/slices/CartSlice/selectors';

const Widget_item: React.FC<WidgetItemProps> = ({ imageURL, id, description, caption, price, imageHeight, padding_top }): React.JSX.Element => {

    const dispatch = useAppDispatch();

    const CartItem: CartItemProps = useAppSelector((state) => getCartItemById(state, id));

    const addToCart = () => {
        dispatch(increase_CartTotalPrice(price));
        if (CartItem) {
            dispatch(increase_CartItemAmount(id));
        } else {
            const item: CartItemProps = { id: id, title: caption, description: description, price: price, amount: 1 };
            dispatch(add_CartItem(item));
        }
    }


    return (
        <div className={styles.widget_item}>

            <div className={styles.item_image} style={{ paddingTop: padding_top }}>
                <img style={{ height: imageHeight }} src={imageURL} srcSet={imageURL} alt="Изображение предмета" />
                <button className={styles.item_add} onClick={addToCart}>Add to Cart</button>
            </div>

            <div className={styles.item_desc}>
                <h3 className={styles.item_caption}>{caption}</h3>
                <p className={styles.item_price}>${price}</p>
            </div>

        </div>
    )
}

export default Widget_item;