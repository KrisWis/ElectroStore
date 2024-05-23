import { Slider_downText__item } from '../Slider_downText__item/ui';
import styles from './styles.module.scss';
import { slider_downText_items_captions } from '../helpers';
import app_styles from '../../../app/layouts/App.module.scss';
import { useState, useEffect } from 'react';


export const Slider_downText: React.FC = (): React.JSX.Element => {

    /* Анимация появления после загрузки */
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);


    return (
        <div className={`${styles.slider_downText} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? app_styles.opacity_0 : ''}`}>

            {slider_downText_items_captions.map((item_caption) => (
                <Slider_downText__item
                    key={item_caption}
                    caption={item_caption}
                    desc="At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
                />
            ))}

        </div>
    )
}
