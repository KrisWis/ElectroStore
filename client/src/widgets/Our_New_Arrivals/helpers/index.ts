import { WidgetItemProps } from "../../../entities/Widget_item/types";
import axios from 'axios';
import { gql } from 'graphql-tag';

export let OurNewArrivals_items_props: WidgetItemProps[] = [
    {
        id: 1,
        imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--1.webp',
        caption: 'Phone Cover 5.6 inches',
        price: '95.00'
    },
    {
        id: 2,
        imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--2.webp',
        caption: 'Smart Phone 128GB RAM',
        price: '55.00'
    },
    {
        id: 3,
        imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--3.webp',
        caption: 'Smart Phone 128GB RAM',
        price: '55.00'
    },
    {
        id: 4,
        imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--4.webp',
        caption: 'Smart Phone 128GB RAM',
        price: '55.00'
    },
    {
        id: 5,
        imageURL: 'images/OurNewArrivals_items/OurNewArrivals_item--5.webp',
        caption: '22 Inch LED Display',
        price: '65.00'
    },
];;
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
    OurNewArrivals_items_props = response.data;
})