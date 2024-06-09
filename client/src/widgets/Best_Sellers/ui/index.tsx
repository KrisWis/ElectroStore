import ViewAllProducts_Header from '../../../entities/ViewAllProducts_Header/ui';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';
import { useSpringCarousel } from 'react-spring-carousel';
import { CarouselItems } from '../types';
import { useEffect, useRef, useState } from 'react';
import { BestSellers_Skeleton } from '../../../entities';
import { Best_Sellers_fetch } from '../helpers';
import { WidgetItemProps } from '../../../features/Widget_item/types';
import Widget_item from '../../../features/Widget_item/ui';


const Best_Sellers: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const BestSellers_ref = useRef<HTMLDivElement>(null);
    const [BestSellers_items_props, setBestSellers_items_props] = useState<WidgetItemProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isIntoView, setIsIntoView] = useState(false);

    WidgetAppearance(BestSellers_ref, setIsIntoView);

    /* Слайды карусели */
    const [ActiveSlide, setActiveSlide] = useState(1);

    const carousel_items: CarouselItems[] = [];

    const mediaQuery_tablet = window.matchMedia('(max-width: 1000px)')
    const mediaQuery_mobile = window.matchMedia('(max-width: 700px)')



    if (!isLoading) {
        if (carousel_items.length == 0) {
            for (let index = 0; index < BestSellers_items_props.length; mediaQuery_mobile.matches ? index += 1 : mediaQuery_tablet.matches ? index += 2 : index += 3) {
                if (carousel_items.length < BestSellers_items_props.length) {
                    carousel_items.push({
                        id: `item-${BestSellers_items_props[index].id}`,
                        renderItem:
                            <div className={`${styles.bestSellers_items}`}>
                                <Widget_item padding_top={90} imageHeight={500} {...BestSellers_items_props[index]} />
                                {!mediaQuery_mobile.matches && BestSellers_items_props[index + 1] && <Widget_item padding_top={90} imageHeight={500} {...BestSellers_items_props[index + 1]} />}
                                {!mediaQuery_tablet.matches && BestSellers_items_props[index + 2] && <Widget_item padding_top={90} imageHeight={500} {...BestSellers_items_props[index + 2]} />}
                            </div>
                    });
                }
            }
        }
    } else {
        for (let index = 0; index < 8; mediaQuery_mobile.matches ? index += 1 : mediaQuery_tablet.matches ? index += 2 : index += 3) {
            carousel_items.push({
                id: `item-${index}`,
                renderItem:
                    <div className={`${styles.bestSellers_items}`}>
                        <BestSellers_Skeleton />
                        <BestSellers_Skeleton />
                        <BestSellers_Skeleton />
                    </div>
            });
        }
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

        /* Получение данных с апи */
        Best_Sellers_fetch(setBestSellers_items_props, setIsLoading);

    }, [])

    return (
        <div ref={BestSellers_ref} className={`${styles.bestSellers} ${!isIntoView ? `${app_styles.opacity_0} ${app_styles.loading_height}` : ''}`}>
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