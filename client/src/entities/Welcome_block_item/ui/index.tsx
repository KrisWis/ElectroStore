import { WelcomeBlockItemProps } from '../types';
import styles from './styles.module.scss';
import { Parallax } from 'react-parallax';


export const Welcome_block_item: React.FC<WelcomeBlockItemProps> = ({ number, title, imageURL }): React.JSX.Element => {

    return (
        <div className={styles.welcome_block_item}>
            <h5 className={styles.welcome_block_item_title}>{number}. {title}</h5>

            <div className={styles.welcome_block_item_img_block}>

                <Parallax bgImage={imageURL} strength={250}>
                    <div style={{ height: '500px' }}>
                        <a href="/" aria-label="Страница покупки" className={styles.welcome_block_item_link}>Shop It Now</a>
                    </div>
                </Parallax>

            </div>
        </div>
    )
}
