import axios from 'axios';
import { gql } from 'graphql-tag';
import { WidgetItemProps } from '../../../features/Widget_item/types';
import { DocumentNode } from 'graphql/language/ast';
import { SERVER_PORT, goods_URL } from '../../../app/appConfig';

/* Получение данных с апи */
export const Our_New_Arrivals_fetch = (setOurNewArrivals_items_props: React.Dispatch<React.SetStateAction<WidgetItemProps[]>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): void => {

    const endpoint_url: goods_URL = `http://${SERVER_PORT}/goods/recent`;

    const query: DocumentNode = gql`
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
        url: endpoint_url,
        method: 'get',
        data: {
            query: query
        }

    }).then(response => {
        setOurNewArrivals_items_props(response.data.recent_goods);
        setIsLoading(false);

    }).catch(() => {
        setOurNewArrivals_items_props([
            {
                id: 1,
                imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--1.webp',
                caption: 'Phone Cover 5.6 inches',
                price: 95.00,
                description: "test",
            },
            {
                id: 2,
                imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--2.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "test",
            },
            {
                id: 3,
                imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--3.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "test",
            },
            {
                id: 4,
                imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--4.webp',
                caption: 'Smart Phone 128GB RAM',
                price: 55.00,
                description: "test",
            },
            {
                id: 5,
                imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--5.webp',
                caption: '22 Inch LED Display',
                price: 65.00,
                description: "test",
            },
        ]);

        setIsLoading(false);
    }
    )
}