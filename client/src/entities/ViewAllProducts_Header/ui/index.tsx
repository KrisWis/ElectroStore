import styles from './styles.module.scss';
import { ViewAllProducts_Header_Props } from '../types';


const ViewAllProducts_Header: React.FC<ViewAllProducts_Header_Props> = ({ caption }): React.JSX.Element => {

    return (
        <div className={styles.ViewAllProducts_header}>
            <h3 className={styles.ViewAllProducts_header_caption}>{caption}</h3>
            <a href="/" aria-label="Посмотреть все продукты" className={styles.ViewAllProducts_header_view_all}>View All Products</a>
        </div>
    )
}

export default ViewAllProducts_Header;