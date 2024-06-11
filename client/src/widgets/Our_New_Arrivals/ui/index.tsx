import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import ViewAllProducts_Header from '../../../entities/ViewAllProducts_Header/ui';
import { useEffect, useRef, useState } from 'react';
import { OurNewArrivals_Skeleton } from '../../../entities';
import { Our_New_Arrivals_fetch } from '../helpers';
import { WidgetItemProps } from '../../../features/Widget_item/types';
import Widget_item from '../../../features/Widget_item/ui';

const Our_New_Arrivals: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const OurNewArrivals_ref = useRef<HTMLDivElement>(null);
    const [OurNewArrivals_items_props, setOurNewArrivals_items_props] = useState<WidgetItemProps[]>([]);

    const [isIntoView, setIsIntoView] = useState<boolean>(false);
    const [isAnim, setIsAnim] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    WidgetAppearance(OurNewArrivals_ref, setIsIntoView);

    useEffect(() => {
        if (isIntoView) {
            setTimeout(() => {
                setIsAnim(true);
            }, 100);
        }
    }, [isIntoView])

    useEffect(() => {

        /* На смартфонах компонент появляется через несколько секунд */
        if (is_touch_enabled()) {
            setTimeout(() => {
                setIsIntoView(true);
            }, 3000);
        }

        /* Получение данных с апи */
        Our_New_Arrivals_fetch(setOurNewArrivals_items_props, setIsLoading);

    }, [])


    return (
        <div className={`${app_styles.widget_wrapper} ${!isAnim ? app_styles.loading_height : ''}`} ref={OurNewArrivals_ref}>
            {isIntoView && <div className={`${styles.our_new_arrivals} ${!isAnim ? app_styles.opacity_0 : ''}`}>

                <ViewAllProducts_Header caption="View All Arrivals" />

                <div className={styles.products}>
                    {!isLoading ? OurNewArrivals_items_props.map((item) => (
                        <Widget_item key={item.id} imageHeight={300} {...item} />
                    )) : [...new Array(5)].map((_, index) => (
                        <OurNewArrivals_Skeleton key={index} />
                    ))}
                </div>

            </div>}
        </div>
    )
}

export default Our_New_Arrivals;