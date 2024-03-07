import { useSpringCarousel } from 'react-spring-carousel';
import styles from './styles.module.scss';
import React from 'react';
import { HeaderSlider_items_props, onClickSwiper, slideToFollowingItem, slideToPreviousItem } from '../helpers';
import app_styles from '../../../app/layouts/App.module.scss';
import { Parallax } from 'react-parallax';


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
        items: HeaderSlider_items_props.map((item) => ({
            id: `item-${item.id}`,
            renderItem:

                <div className={styles.slider__item__parallax} >

                    <Parallax className={styles.slider__item__img} bgImage={item.imageURL} strength={250}>
                        <div style={{ height: '700px' }}>
                            <div className={`${styles.slider__content} ${swiperItemActive === item.id && doAnim ? styles.slider__content_active : ''}`}>

                                <h3 className={styles.slider__content_caption}>{item.caption}</h3>
                                <p className={styles.slider__content_text}>{item.text}</p>
                                <button className={`${styles.slider__content_button} ${buttonHover ? styles.slider__content_button_hover : ''}`}>Show now</button>
                            </div>
                        </div>
                    </Parallax>

                </div >
        }))
    });

    /* Анимация появления после загрузки */
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);


    return (
        <div className={`${styles.slider} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? app_styles.opacity_0 : ''}`}>

            <button aria-label="Кнопка для перелистывания слайдера назад" onClick={() => slideToPreviousItem(slideToPrevItem, setButtonHover, setSwiperItemActive, swiperItemActive)} className={styles.slider__left}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            <div className={styles.slider__item}>
                {carouselFragment}
                <div className={styles.slider__swiper}>
                    {[1, 2, 3].map((item) => (
                        <i key={item} className={`fa fa-circle-o ${swiperItemActive === item ? styles.slider__swiper_item__active : ''}`} onClick={() => onClickSwiper(item, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover)} aria-hidden="true"></i>
                    ))}
                </div>
            </div>

            <button aria-label="Кнопка для перелистывания слайдера вперёд" onClick={() => slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive)} className={styles.slider__right}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}
