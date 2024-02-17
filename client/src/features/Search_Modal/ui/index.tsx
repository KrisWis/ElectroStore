import { Link } from 'react-router-dom';
import { SearchModalProps } from '../model';
import styles from './styles.module.scss';

export const Search_Modal: React.FC<SearchModalProps> = ({ modalIsOpen, setModalIsOpen }): React.JSX.Element => {

    return (
        <div className={`${styles.search_modal} ${modalIsOpen ? styles.search_modal_active : ''}`} onClick={() => setModalIsOpen((prev) => !prev)}>
            <div className={styles.search_modal_dialog}>
                <div className={styles.search_modal_content} onClick={(e) => e.stopPropagation()}>

                    <div className={styles.search_modal_input_block}>
                        <input className={styles.search_modal_input} type="text" placeholder="Type and press enter" />
                        <i className={`${styles.search_modal_search} fa fa-search`} aria-hidden="true"></i>
                    </div>

                    <p className={styles.search_modal_browse}>Browse Categories</p>
                    <ul className={styles.categories}>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Jackets
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                T-shirts
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Handbags
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Accessories
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Cosmetics
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Dresses
                            </Link>
                        </li>
                        <li className={styles.categories_item}>
                            <Link className={styles.categories_link} to="/">
                                Jumpsuits
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};