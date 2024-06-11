import { Welcome_block_header, Welcome_block_item } from '../../../entities';
import styles from './styles.module.scss';
import { Welcome_block_items_props } from '../helpers';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import app_styles from '../../../app/layouts/App.module.scss';
import { useEffect, useRef, useState } from 'react';


const Welcome_block: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const WelcomeBlock_ref = useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = useState<boolean>(false);
    const [isAnim, setIsAnim] = useState<boolean>(false);

    WidgetAppearance(WelcomeBlock_ref, setIsIntoView);

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
            }, 1000);
        }
    }, [])

    return (
        <div className={`${app_styles.widget_wrapper} ${!isAnim ? app_styles.loading_height : ''}`} ref={WelcomeBlock_ref}>
            {isIntoView && <div className={`${styles.welcome_block} ${!isAnim ? app_styles.opacity_0 : ''}`}>
                <Welcome_block_header />

                <div className={styles.welcome_block_items}>
                    {Welcome_block_items_props.map((item) => {
                        return <Welcome_block_item key={item.number} {...item} />
                    })}
                </div>
            </div>}
        </div>
    )
}

export default Welcome_block;