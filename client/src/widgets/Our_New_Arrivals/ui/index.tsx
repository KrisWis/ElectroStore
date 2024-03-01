import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Our_New_Arrivals: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.our_new_arrivals}>

            <div className={styles.header}>
                <h3 className={styles.header_caption}>OUR NEW ARRIVALS</h3>
                <Link to="/" aria-label="Посмотреть все продукты" className={styles.header_view_all}>View All Products</Link>
            </div>

            <div className={styles.products}>

            </div>

        </div>
    )
}

export default Our_New_Arrivals;