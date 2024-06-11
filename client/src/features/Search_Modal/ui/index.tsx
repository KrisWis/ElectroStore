import { SearchItemInterface, SearchModalProps } from '../types';
import styles from './styles.module.scss';
import { Search_Modal_fetch, categories } from '../helpers';
import { useEffect, useState } from 'react';
import app_styles from '../../../app/layouts/App.module.scss';
import { Link } from 'react-router-dom';


export const Search_Modal: React.FC<SearchModalProps> = ({ modalIsOpen, setModalIsOpen }): React.JSX.Element => {

    /* Открытие модального окна */

    const [modalIsOpenAnimation, setModalIsOpenAnimation] = useState(false);
    const [modalIsClosed, setModalIsClosed] = useState(true);

    useEffect(() => {
        if (modalIsOpen) {
            setModalIsClosed(false);
            setTimeout(() => {
                setModalIsOpenAnimation(true);
            }, 100);
        } else {
            setModalIsOpenAnimation(false);
            setTimeout(() => {
                setModalIsClosed(true);
            }, 350);

        }

    }, [modalIsOpen])

    /* Функционал поиска */
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchItemsArray, setSearchItemsArray] = useState<SearchItemInterface[]>([]);

    useEffect(() => {
        Search_Modal_fetch(setSearchItemsArray);
    }, [])

    return (
        <>
            {!modalIsClosed && <div className={`${styles.search_modal} ${modalIsOpenAnimation ? styles.search_modal_active : ''}`} onClick={() => setModalIsOpen((prev) => !prev)}>
                <div className={styles.search_modal_dialog}>
                    <div className={styles.search_modal_content} onClick={(e) => e.stopPropagation()}>

                        <div className={styles.search_modal_input_block}>
                            <input value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} className={styles.search_modal_input} type="text" placeholder="Type and press enter" />
                            <i className={`${styles.search_modal_search} fa fa-search`} aria-hidden="true"></i>
                        </div>

                        <div className={`${!searchInputValue ? app_styles.opacity_0 : ""} ${styles.search_modal_results}`}>
                            {searchItemsArray.filter((item) => item.caption.toLowerCase().startsWith(searchInputValue.toLowerCase()) && searchInputValue).map((item) => (
                                <Link to={`/item/:${item.id}`} key={item.id} className={styles.search_modal_result}>{item.caption}</Link>
                            ))}
                        </div>

                        <p className={styles.search_modal_browse}>Browse Categories</p>

                        <ul className={styles.categories}>
                            {categories.map((item) => (
                                <li key={item} className={styles.categories_item}>
                                    <a aria-label="Нажатая категория" className={styles.categories_link} href="/">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>}
        </>
    );
};