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
            images
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
        setOurNewArrivals_items_props(response.data);
        setIsLoading(false);

    }).catch(() => {
        setOurNewArrivals_items_props([
            {
                "name": "Умная колонка Vk Капсула Нео Black (VKSP1BK)",
                "price": 4599.99,
                "description": "some description",
                "id": 1,
                "created_at": "2024-06-19T19:24:20.065238",
                "updated_at": "2024-06-19T19:24:20.065238",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb2/722274000.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 1,
                        "id": 1
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb/722274000.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 1,
                        "id": 2
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb3/722274000.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 1,
                        "id": 3
                    }
                ]
            },
            {
                "name": "Триммер Rowenta Formula 1",
                "price": 4999.42,
                "description": "Триммер Rowenta Formula 1® TN604MF0 предназначен для комплексного ухода за волосами на лице. Данная модель имеет стильный привлекательный дизайн. Влагостойкий корпус выполнен из прочного, долговечного материала высокого качества. Прибор можно использовать даже в душе. Он рассчитан на долгое время работы за счет прочных, острых лезвий из нержавеющей стали с титановым покрытием, обеспечивающих качественное бритье. Экспериментировать над образом позволяет наличие 6 настроек длины стрижки (от 0,4 до 6 мм). Скорость мотора равна 8000 об/мин. С таким прибором можно осуществлять влажное и сухое бритье.",
                "id": 4,
                "created_at": "2024-06-19T19:24:20.144853",
                "updated_at": "2024-06-19T19:24:20.144853",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb/37677200.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 4,
                        "id": 10
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb2/37677200.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 4,
                        "id": 11
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb3/37677200.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 4,
                        "id": 12
                    }
                ]
            },
            {
                "name": "Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)",
                "price": 37999.99,
                "description": "Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3) имеет экран Retina с разрешением 2160x1620 пикселей, что обеспечивает вывод контента с оптимальной детализацией. Благодаря технологии True Tone можно комфортно смотреть фотографии и изображения, видеоролики, фильмы и сериалы при разном освещении. Процессор A13 Bionic обеспечивает высокий уровень производительности при запуске ресурсоемких приложений, игр, работе в режиме многозадачности. Для хранения данных предназначена внутренняя память объемом 64 ГБ.",
                "id": 2,
                "created_at": "2024-06-19T19:24:20.113582",
                "updated_at": "2024-06-19T19:24:20.113582",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/p/b2/24046300.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 2,
                        "id": 4
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b3/24046300.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 2,
                        "id": 5
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b4/24046300.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 2,
                        "id": 6
                    }
                ]
            }
        ]);

        setIsLoading(false);
    }
    )
}