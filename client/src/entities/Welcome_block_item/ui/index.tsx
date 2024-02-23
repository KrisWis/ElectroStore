import { Link } from 'react-router-dom';
import { WelcomeBlockItemProps } from '../model';
import styles from './styles.module.scss';
import React from 'react';
import { checkScrollDirectionIsUp, isScrolledIntoView } from '../../../shared/utils';

export const Welcome_block_item: React.FC<WelcomeBlockItemProps> = ({ number, title, imageURL }): React.JSX.Element => {

    const [parallaxScrollY, setParallaxScrollY] = React.useState(0);

    /* Отслеживание направления движения скролла */
    const welcomeBlockItem_ref = React.useRef<HTMLDivElement>(null);

    document.body.addEventListener('wheel', (event: WheelEvent) => {
        if (isScrolledIntoView(welcomeBlockItem_ref.current!)) {
            if (checkScrollDirectionIsUp(event)) {
                if (parallaxScrollY <= 250) {
                    setParallaxScrollY(parallaxScrollY + 7);
                }
            } else {
                if (parallaxScrollY >= -250) {
                    setParallaxScrollY(parallaxScrollY - 7);
                }
            }
        }
    });

    return (
        <div className={styles.welcome_block_item} ref={welcomeBlockItem_ref}>
            <h5 className={styles.welcome_block_item_title}>{number}. {title}</h5>

            <div className={styles.welcome_block_item_img_block}>

                <div className={styles.welcome_block_item_parallax}>
                    <img style={{ transform: `translate3d(0px, ${parallaxScrollY}px, 0px)` }} className={styles.welcome_block_item_parallax_img} src={imageURL} alt="Изображение секции" />
                </div>

                <Link className={styles.welcome_block_item_link}>Shop It Now</Link>
            </div>
        </div>
    )
}
