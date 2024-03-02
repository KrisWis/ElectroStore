import { Welcome_block_header, Welcome_block_item } from '../../../entities';
import React from 'react';
import styles from './styles.module.scss';
import { Welcome_block_items_props } from '../helpers';
import { isScrolledIntoView } from '../../../shared/utils';
import app_styles from '../../../app/layouts/App.module.scss';


const Welcome_block: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const WelcomeBlock_ref = React.useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = React.useState(false);

    document.body.addEventListener('wheel', () => {
        if (isScrolledIntoView(WelcomeBlock_ref.current!)) {
            setIsIntoView(true);
        }
    });

    return (
        <div ref={WelcomeBlock_ref} className={`${styles.welcome_block} ${!isIntoView ? app_styles.opacity_0 : ''}`}>
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