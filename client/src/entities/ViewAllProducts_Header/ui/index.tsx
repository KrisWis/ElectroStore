import styles from './styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { ViewAllProducts_Header_Props } from '../types';


const ViewAllProducts_Header: React.FC<ViewAllProducts_Header_Props> = ({ caption }): React.JSX.Element => {

    return (
        <div className={styles.ViewAllProducts_header}>
            <h3 className={styles.ViewAllProducts_header_caption}>{caption}</h3>
            <Link to="/" aria-label="Посмотреть все продукты" className={styles.ViewAllProducts_header_view_all}>View All Products</Link>
        </div>
    )
}

export default ViewAllProducts_Header;