import styles from './styles.module.scss';
import { WidgetItemProps } from '../types';
import { AppDispatch, useAppDispatch, useAppSelector } from '../../../app/AppStore';
import { add_CartItem, increase_CartItemAmount } from '../../../app/slices/CartSlice/CartSlice';
import { CartItemProps } from '../../../widgets/Cart/types';
import { getCartItemById } from '../../../app/slices/CartSlice/selectors';

const Widget_item: React.FC<WidgetItemProps> = ({ images, id, description, name, price, imageHeight, padding_top }): React.JSX.Element => {

    const dispatch: AppDispatch = useAppDispatch();

    const CartItem: CartItemProps | undefined = useAppSelector((state) => getCartItemById(state, id));

    const addToCart = () => {
        if (CartItem) {
            dispatch(increase_CartItemAmount(id));
        } else {
            const item: CartItemProps = { id: id, title: name, description: description, price: price, amount: 1 };
            dispatch(add_CartItem(item));
        }
    }

    return (
        <div className={`${styles.widget_item} ${imageHeight == 300 && styles.ourNewArrivals_widgetItem} ${imageHeight == 500 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && styles.BestSellersWidget_item__mobile}`}>

            <div className={styles.item_image} style={{ paddingTop: padding_top }}>
                <img style={{ height: imageHeight }} src={images[2]["link"]} srcSet={images[2]["link"]} alt="Изображение предмета" />
                <button className={styles.item_add} onClick={addToCart}>Add to Cart</button>
            </div>

            <div className={styles.item_desc}>
                <h3 className={styles.item_caption}>{name}</h3>
                <p className={styles.item_price}>${price.toFixed(2)}</p>
            </div>

        </div>
    )
}

export default Widget_item;