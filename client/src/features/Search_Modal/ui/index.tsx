import { SearchModalProps } from '../types';
import styles from './styles.module.scss';
import { categories } from '../helpers';
import { useEffect, useState } from 'react';


export const Search_Modal: React.FC<SearchModalProps> = ({ modalIsOpen, setModalIsOpen }): React.JSX.Element => {

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

    return (
        <>
            {!modalIsClosed && <div className={`${styles.search_modal} ${modalIsOpenAnimation ? styles.search_modal_active : ''}`} onClick={() => setModalIsOpen((prev) => !prev)}>
                <div className={styles.search_modal_dialog}>
                    <div className={styles.search_modal_content} onClick={(e) => e.stopPropagation()}>

                        <div className={styles.search_modal_input_block}>
                            <input className={styles.search_modal_input} type="text" placeholder="Type and press enter" />
                            <i className={`${styles.search_modal_search} fa fa-search`} aria-hidden="true"></i>
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