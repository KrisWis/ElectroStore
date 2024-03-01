import { useSpringCarousel } from 'react-spring-carousel';
import styles from './styles.module.scss';
import React from 'react';
import { onClickSwiper, slideToFollowingItem, slideToPreviousItem } from '../helpers';

export const Header_Slider: React.FC = (): React.JSX.Element => {

    /* Функционал слайдера */

    const [swiperItemActive, setSwiperItemActive] = React.useState(1);

    /* Функционал того, что каждые несколько секунд меняется слайд */

    const slider_interval_ref = React.useRef<NodeJS.Timeout>();

    /* Функционал анимации появления кнопки и текста */
    const [buttonHover, setButtonHover] = React.useState(false);
    const buttonHover_timeout_ref = React.useRef<NodeJS.Timeout>();
    const [doAnim, setDoAnim] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setDoAnim(true)
        }, 1500);
    }, [])

    React.useEffect(() => {
        slider_interval_ref.current = setInterval(() => {
            slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive);
        }, 20000);

        buttonHover_timeout_ref.current = setTimeout(() => {
            setButtonHover(true);
        }, 500);

        return () => {
            clearInterval(slider_interval_ref.current);
            clearTimeout(buttonHover_timeout_ref.current);
        }
    }, [buttonHover]);

    /* Слайды карусели */
    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: [
            {
                id: 'item-1',
                renderItem:
                    <div className={styles.slider__item__parallax} >
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_items/slider_item--1.webp" alt="Slider Item 1" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 1 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Buy Electronic Gadgets at Affordable Prices</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>
                        </div>
                    </div >,
            },
            {
                id: 'item-2',
                renderItem:
                    <div className={styles.slider__item__parallax}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_items/slider_item--2.webp" alt="Slider Item 2" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 2 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Cool Tech Gadgets Collection 2023</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>
                        </div>
                    </div>,
            },
            {
                id: 'item-3',
                renderItem:
                    <div className={styles.slider__item__parallax}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_items/slider_item--3.webp" alt="Slider Item 3" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 3 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Sturdy and Multifnction New Gadgets</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>
                        </div>
                    </div>,
            },
        ],
    })

    return (
        <div className={styles.slider}>
            <button aria-label="Кнопка для перелистывания слайдера вперёд" onClick={() => slideToPreviousItem(slideToPrevItem, setButtonHover, setSwiperItemActive, swiperItemActive)} className={styles.slider__left}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <div className={styles.slider__item}>
                {carouselFragment}
                <div className={styles.slider__swiper}>
                    <i className={`fa fa-circle-o ${swiperItemActive === 1 ? styles.slider__swiper_item__active : ''}`} onClick={() => onClickSwiper(1, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover)} aria-hidden="true"></i>
                    <i className={`fa fa-circle-o ${swiperItemActive === 2 ? styles.slider__swiper_item__active : ''}`} onClick={() => onClickSwiper(2, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover)} aria-hidden="true"></i>
                    <i className={`fa fa-circle-o ${swiperItemActive === 3 ? styles.slider__swiper_item__active : ''}`} onClick={() => onClickSwiper(3, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover)} aria-hidden="true"></i>
                </div>
            </div>
            <button aria-label="Кнопка для перелистывания слайдера назад" onClick={() => slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive)} className={styles.slider__right}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}
