import { useSpringCarousel } from 'react-spring-carousel';
import styles from './styles.module.scss';
import React from 'react';

export const Header_Slider: React.FC = (): React.JSX.Element => {

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

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: [
            {
                id: 'item-1',
                renderItem:
                    <div className={styles.slider__item__parallax} >
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_item--1.jpg" alt="Slider Item 1" />
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
                    <div className={`${styles.slider__item__wrapper} ${styles.slider__item__parallax}`}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_item--2.jpg" alt="Slider Item 2" />
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
                    <div className={`${styles.slider__item__wrapper} ${styles.slider__item__parallax}`}>
                        <div className={`${styles.slider__item__parallax_image} ${styles.slider__item__parallax_layer}`}>
                            <img className={styles.slider__item__img} src="images/slider_item--3.jpg" alt="Slider Item 3" />
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

    const slideToPreviousItem = (): void => {
        slideToPrevItem();
        setSwiperItemActive((prev) => prev == 1 ? 3 : prev - 1);
    }

    const slideToFollowingItem = (): void => {
        slideToNextItem();
        setSwiperItemActive((prev) => prev == 3 ? 1 : prev + 1);
    }

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
