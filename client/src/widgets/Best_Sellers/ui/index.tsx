import ViewAllProducts_Header from '../../../entities/ViewAllProducts_Header/ui';
import Widget_item from '../../../entities/Widget_item/ui';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';
import { BestSellers_items_props } from '../helpers';
import { useSpringCarousel } from 'react-spring-carousel';
import { CarouselItems } from '../types';
import { useEffect, useRef, useState } from 'react';


const Best_Sellers: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const BestSellers_ref = useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = useState(false);

    WidgetAppearance(BestSellers_ref, setIsIntoView);

    /* Слайды карусели */
    const [ActiveSlide, setActiveSlide] = useState(1);

    const carousel_items: CarouselItems[] = [];

    const mediaQuery = window.matchMedia('(max-width: 700px)')

    for (let index = 0; index < BestSellers_items_props.length; mediaQuery.matches ? index += 1 : index += 3) {
        carousel_items.push({
            id: `item-${BestSellers_items_props[index].id}`,
            renderItem:
                <div className={`${styles.bestSellers_items} ${ActiveSlide == 3 ? styles.bestSellers_items_lastitemIsActive : index == 0 ? styles.bestSellers_items_firstItem : index == 3 ? styles.bestSellers_items_secondItem : index == 6 ? styles.bestSellers_items_thirdItem : ''}`}>
                    <Widget_item padding_top={90} imageHeight={600} {...BestSellers_items_props[index]} />
                    {BestSellers_items_props[index + 1] && <Widget_item padding_top={90} imageHeight={600} {...BestSellers_items_props[index + 1]} />}
                    {BestSellers_items_props[index + 2] && <Widget_item padding_top={90} imageHeight={600} {...BestSellers_items_props[index + 2]} />}
                </div>
        })
    }

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: carousel_items
    })

    /* Функции слайдера */
    const slideToPrevSlide = () => {
        slideToPrevItem();
        setActiveSlide(ActiveSlide == 1 ? 3 : ActiveSlide - 1)
    }

    const slideToNextSlide = () => {
        slideToNextItem();
        setActiveSlide(ActiveSlide == 3 ? 1 : ActiveSlide + 1)
    }

    /* На смартфонах компонент появляется через несколько секунд */
    useEffect(() => {
        if (is_touch_enabled()) {
            setTimeout(() => {
                setIsIntoView(true);
            }, 6000);
        }
    }, [])

    return (
        <div ref={BestSellers_ref} className={`${styles.bestSellers} ${!isIntoView ? app_styles.opacity_0 : ''}`}>
            <ViewAllProducts_Header caption="Best Sellers" />

            <div className={styles.bestSellers_slider}>

                <button aria-label="Кнопка для перелистывания слайдера назад" onClick={slideToPrevSlide} className={`${styles.bestSellers_items_arrow} ${styles.bestSellers_items_arrow_left}`}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>

                {carouselFragment}

                <button aria-label="Кнопка для перелистывания слайдера вперёд" onClick={slideToNextSlide} className={`${styles.bestSellers_items_arrow} ${styles.bestSellers_items_arrow_right}`}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>

            </div>
        </div>
    )
}

export default Best_Sellers;