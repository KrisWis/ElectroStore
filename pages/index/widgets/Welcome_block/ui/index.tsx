import { Welcome_block_header, Welcome_block_item } from '../../../entities';
import React from 'react';
import styles from './styles.module.scss';
import { Welcome_block_items_props } from '../helpers';
import { WidgetAppearance } from '../../../shared/utils';
import app_styles from '../../../app/layouts/App.module.scss';


const Welcome_block: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const WelcomeBlock_ref = React.useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = React.useState(false);

    WidgetAppearance(WelcomeBlock_ref, setIsIntoView);

    return (
        <div ref={WelcomeBlock_ref} className={`${styles.welcome_block} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? app_styles.opacity_0 : ''}`}>
            <Welcome_block_header />

            <div className={styles.welcome_block_items}>
                {Welcome_block_items_props.map((item) => {
                    return <Welcome_block_item key={item.number} {...item} />
                })}
            </div>
        </div>
    )
}

export default Welcome_block;