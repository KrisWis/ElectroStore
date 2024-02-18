import { useSpringCarousel } from 'react-spring-carousel';
import styles from './styles.module.scss';
import React from 'react';

export const Header_Slider: React.FC = (): React.JSX.Element => {

    /* Функционал слайдера */

    const [swiperItemActive, setSwiperItemActive] = React.useState(1);

    const onClickSwiper = (swiper: number): void => {
        setSwiperItemActive(swiper);
        let swiperItemActiveDublicate = swiperItemActive;

        if (swiper > swiperItemActiveDublicate) {
            swiper -= swiperItemActiveDublicate;
            while (swiper > 0) {
                slideToNextItem();
                swiper--;
            }

        } else {
            swiperItemActiveDublicate -= swiper;
            while (swiperItemActiveDublicate > 0) {
                slideToPrevItem();
                swiperItemActiveDublicate--;
            }
        }
    }

    const slideToPreviousItem = (): void => {
        slideToPrevItem();
        setSwiperItemActive((prev) => prev == 1 ? 3 : prev - 1);
        setButtonHover(false);
    }

    const slideToFollowingItem = (): void => {
        slideToNextItem();
        setSwiperItemActive((prev) => prev == 3 ? 1 : prev + 1);
        setButtonHover(false);
    }

    /* Функционал того, что каждые несколько секунд меняется слайд */

    const slider_interval_ref = React.useRef<NodeJS.Timeout>();

    /* Функционал анимации появления кнопки и текста */
    const [buttonHover, setButtonHover] = React.useState(false);
    const buttonHover_timeout_ref = React.useRef<NodeJS.Timeout>();
    const [doAnim, setDoAnim] = React.useState(false);

    React.useEffect(() => {
        slider_interval_ref.current = setInterval(() => {
            slideToFollowingItem();
        }, 20000);

        buttonHover_timeout_ref.current = setTimeout(() => {
            setDoAnim(true);

            setTimeout(() => {
                setButtonHover(true);
            }, 1000);
        }, 100);

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
                            <img className={styles.slider__item__img} src="images/slider_item--1.jpg" alt="Slider Item 1" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 1 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Buy Electronic Gadgets at Affordable Prices</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>

                            <div className={styles.slider__swiper}>
                                <i className={`fa fa-circle-o ${swiperItemActive === 1 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(1) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 2 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(2) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 3 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(3) }} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div >,
            },
            {
                id: 'item-2',
                renderItem:
                    <div className={styles.slider__item__parallax}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_item--2.jpg" alt="Slider Item 2" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 2 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Cool Tech Gadgets Collection 2023</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>

                            <div className={styles.slider__swiper}>
                                <i className={`fa fa-circle-o ${swiperItemActive === 1 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(1) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 2 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(2) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 3 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(3) }} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>,
            },
            {
                id: 'item-3',
                renderItem:
                    <div className={styles.slider__item__parallax}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_item--3.jpg" alt="Slider Item 3" />

                            <div className={`${styles.slider__content} ${swiperItemActive === 3 && doAnim ? styles.slider__content_active : ''}`}>
                                <h3 className={styles.slider__content_caption}>Sturdy and Multifnction New Gadgets</h3>
                                <p className={styles.slider__content_text}>Tech gadgets are all about making your life easier</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>

                            <div className={styles.slider__swiper}>
                                <i className={`fa fa-circle-o ${swiperItemActive === 1 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(1) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 2 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(2) }} aria-hidden="true"></i>
                                <i className={`fa fa-circle-o ${swiperItemActive === 3 ? styles.slider__swiper_item__active : ''}`} onClick={() => { onClickSwiper(3) }} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>,
            },
        ],
    })

    return (
        <div className={styles.slider}>
            <button onClick={slideToPreviousItem} className={styles.slider__left}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <div className={styles.slider__item}>
                {carouselFragment}
            </div>
            <button onClick={slideToFollowingItem} className={styles.slider__right}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}
