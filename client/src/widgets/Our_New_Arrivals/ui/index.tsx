import styles from './styles.module.scss';
import Widget_item from '../../../entities/Widget_item/ui/index';
import { OurNewArrivals_items_props } from '../helpers';
import app_styles from '../../../app/layouts/App.module.scss';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import ViewAllProducts_Header from '../../../entities/ViewAllProducts_Header/ui';
import { useEffect, useRef, useState } from 'react';


const Our_New_Arrivals: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const OurNewArrivals_ref = useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = useState(false);
    const [isAnim, setIsAnim] = useState(false);

    WidgetAppearance(OurNewArrivals_ref, setIsIntoView);

    useEffect(() => {
        if (isIntoView) {
            setTimeout(() => {
                setIsAnim(true);
            }, 100);
        }
    }, [isIntoView])

    /* На смартфонах компонент появляется через несколько секунд */
    useEffect(() => {
        if (is_touch_enabled()) {
            setTimeout(() => {
                setIsIntoView(true);
            }, 3000);
        }
    }, [])


    return (
        <div className={app_styles.widget_wrapper} ref={OurNewArrivals_ref}>
            {isIntoView && <div className={`${styles.our_new_arrivals} ${!isAnim ? app_styles.opacity_0 : ''}`}>

                <ViewAllProducts_Header caption="View All Arrivals" />

                <div className={styles.products}>
                    {OurNewArrivals_items_props.map((item) => (
                        <Widget_item key={item.id} padding_top={60} imageHeight={400} {...item} />
                    ))}
                </div>

            </div>}
        </div>
    )
}

export default Our_New_Arrivals;