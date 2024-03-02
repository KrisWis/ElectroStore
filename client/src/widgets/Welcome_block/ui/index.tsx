import { Welcome_block_header, Welcome_block_item } from '../../../entities';
import React from 'react';
import styles from './styles.module.scss';
import { Welcome_block_items_props } from '../helpers';


const Welcome_block: React.FC = (): React.JSX.Element => {

    return (
        <>
            <Welcome_block_header />

            <div className={styles.welcome_block_items}>
                {Welcome_block_items_props.map((item) => {
                    return <Welcome_block_item key={item.number} {...item} />
                })}
            </div>
        </>
    )
}

export default Welcome_block;