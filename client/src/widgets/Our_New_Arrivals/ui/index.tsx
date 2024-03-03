import styles from './styles.module.scss';
import OurNewArrivals_item from '../../../entities/OurNewArrivals_item/ui';
import { OurNewArrivals_items_props } from '../helpers';
import app_styles from '../../../app/layouts/App.module.scss';
import { isScrolledIntoView } from '../../../shared/utils';
import React from 'react';
import ViewAllProducts_Header from '../../../entities/ViewAllProducts_Header/ui';


const Our_New_Arrivals: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const OurNewArrivals_ref = React.useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = React.useState(false);

    document.body.addEventListener('wheel', () => {
        if (isScrolledIntoView(OurNewArrivals_ref.current!)) {
            setIsIntoView(true);
        }
    });

    return (
        <div ref={OurNewArrivals_ref} className={`${styles.our_new_arrivals} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? app_styles.opacity_0 : ''}`}>

            <ViewAllProducts_Header caption="View All Arrivals" />

            <div className={styles.products}>
                {OurNewArrivals_items_props.map((item) => (
                    <OurNewArrivals_item key={item.imageURL} {...item} />
                ))}
            </div>

        </div>
    )
}

export default Our_New_Arrivals;