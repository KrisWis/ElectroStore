import { Slider_downText__item } from '../Slider_downText__item/ui';
import styles from './styles.module.scss';
import React from 'react';
import { slider_downText_items_captions } from '../helpers';


export const Slider_downText: React.FC = (): React.JSX.Element => {


    return (
        <div className={styles.slider_downText}>

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
