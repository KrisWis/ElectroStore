import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import OurNewArrivals_item from '../../../entities/OurNewArrivals_item/ui';
import { OurNewArrivals_items_props } from '../helpers';

const Our_New_Arrivals: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.our_new_arrivals}>

            <div className={styles.header}>
                <h3 className={styles.header_caption}>OUR NEW ARRIVALS</h3>
                <Link to="/" aria-label="Посмотреть все продукты" className={styles.header_view_all}>View All Products</Link>
            </div>

            <div className={styles.products}>
                {OurNewArrivals_items_props.map((item) => (
                    <OurNewArrivals_item {...item} />
                ))}
            </div>

        </div>
    )
}

export default Our_New_Arrivals;