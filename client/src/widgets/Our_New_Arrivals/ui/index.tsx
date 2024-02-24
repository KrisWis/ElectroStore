import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Our_New_Arrivals: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.our_new_arrivals}>

            <div className={styles.header}>
                <h3 className={styles.header_caption}>OUR NEW ARRIVALS</h3>
                <Link className={styles.header_view_all}>View All Products</Link>
            </div>

            <div className={styles.products}>

            </div>

        </div>
    )
}
