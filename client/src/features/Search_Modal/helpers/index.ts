import axios from 'axios';
import { gql } from 'graphql-tag';
import { SearchItemInterface } from '../types';

/* Массив с категориями */
export const categories: string[] = ["Jackets", "T-shirts", "Handbags", "Accessories", "Cosmetics", "Dresses", "Jumpsuits"];

/* Получение данных с апи */
export const Search_Modal_fetch = (setSearchItemsArray: React.Dispatch<React.SetStateAction<SearchItemInterface[]>>): void => {
    const query = gql`
        query {
            goods {
            id
            name
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
        setSearchItemsArray(response.data);

    }).catch(() => {
        setSearchItemsArray([
            {
                id: 1,
                caption: 'Phone Cover 5.6 inches',
            },
            {
                id: 2,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 3,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 4,
                caption: 'Phone Cover 5.6 inches',
            },
            {
                id: 5,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 6,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 7,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 8,
                caption: '22 Inch LED Display',
            },
            {
                id: 9,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 10,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 11,
                caption: '22 Inch LED Display',
            },
            {
                id: 12,
                caption: 'Smart Phone 128GB RAM',
            },
            {
                id: 13,
                caption: '22 Inch LED Display',
            },
        ]);
    }
    )
}