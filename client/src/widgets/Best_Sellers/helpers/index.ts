import axios from 'axios';
import { gql } from 'graphql-tag';
import { WidgetItemProps } from '../../../features/Widget_item/types';

/* Получение данных с апи */
export const Best_Sellers_fetch = (setBestSellers_items_props: React.Dispatch<React.SetStateAction<WidgetItemProps[]>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): void => {
    const query = gql`
        query {
            goods {
            id
            name
            price
            imageURL
            }
        }
    `;

    axios({
        url: 'http://127.0.0.1:8000/ElectroStore/api/goods',
        method: 'post',
        data: {
            query: query
        }

    }).then(response => {
        setBestSellers_items_props(response.data);
        setIsLoading(false);

    }).catch(() => {
        setBestSellers_items_props([
            {
                id: 1,
                imageURL: 'images/BestSellers_items/BestSellers_item--1.webp',
                caption: 'Phone Cover 5.6 inches',
                price: 95.00,
                description: "ewe1221w",
            },
            {
                id: 2,
                imageURL: 'images/BestSellers_items/BestSellers_item--2.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "ewe1221w",
            },
            {
                id: 3,
                imageURL: 'images/BestSellers_items/BestSellers_item--3.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "ewe1221w",
            },
            {
                id: 4,
                imageURL: 'images/BestSellers_items/BestSellers_item--4.webp',
                caption: 'Phone Cover 5.6 inches',
                price: 95.00,
                description: "ewe1221w",
            },
            {
                id: 5,
                imageURL: 'images/BestSellers_items/BestSellers_item--5.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "ewe1221w",
            },
            {
                id: 6,
                imageURL: 'images/BestSellers_items/BestSellers_item--6.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "ewe1221w",
            },
            {
                id: 7,
                imageURL: 'images/BestSellers_items/BestSellers_item--7.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "ewe1221w",
            },
            {
                id: 8,
                imageURL: 'images/BestSellers_items/BestSellers_item--8.webp',
                caption: '22 Inch LED Display',
                price: 65.00,
                description: "ewe1221w",
            },
        ]);

        setIsLoading(false);
    }
    )
}