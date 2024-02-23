import { Welcome_block_header, Welcome_block_item } from '../../../entities';
import React from 'react';
import { WelcomeBlockItemProps } from '../../../entities/Welcome_block_item/model';
import styles from './styles.module.scss';


export const Welcome_block: React.FC = (): React.JSX.Element => {

    const items_props: WelcomeBlockItemProps[] = [
        {
            number: '01',
            title: "ELECTRONIC GADGETS",
            imageURL: 'images/Welcome_block_items/welcome_block_item--1.webp'
        },
        {
            number: '02',
            title: "COOL STUFF",
            imageURL: 'images/Welcome_block_items/welcome_block_item--2.webp'
        },
        {
            number: '03',
            title: "ACCESSORIES",
            imageURL: 'images/Welcome_block_items/welcome_block_item--3.webp'
        },
        {
            number: '04',
            title: "DISPLAY UNITS",
            imageURL: 'images/Welcome_block_items/welcome_block_item--4.webp'
        },
    ]

    return (
        <>
            <Welcome_block_header />

            <div className={styles.welcome_block_items}>
                {items_props.map((item) => {
                    return <Welcome_block_item key={item.number} {...item} />
                })}
            </div>
        </>
    )
}
