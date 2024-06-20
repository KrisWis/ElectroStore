import axios from 'axios';
import { gql } from 'graphql-tag';
import { WidgetItemProps } from '../../../features/Widget_item/types';
import { DocumentNode } from 'graphql/language/ast';
import { SERVER_PORT, goods_URL } from '../../../app/appConfig';

/* Получение данных с апи */
export const Best_Sellers_fetch = (setBestSellers_items_props: React.Dispatch<React.SetStateAction<WidgetItemProps[]>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): void => {

    const endpoint_url: goods_URL = `http://${SERVER_PORT}/goods/best_ones`;

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
        setBestSellers_items_props(response.data);
        setIsLoading(false);

    }).catch(() => {
        setBestSellers_items_props([
            {
                "name": "Смартфон Huawei Mate 50 8+256GB Black",
                "price": 54990.07,
                "description": "Смартфон Huawei Mate 50 8+256GB Black оборудован корпусом, который соответствует классу IP68. Это способствует надежной защите устройства от воздействия пыли и влаги. Чип бренда Qualcomm с восемью ядрами обеспечивает оптимальную производительность и быстродействие устройства в многозадачном режиме.",
                "id": 7,
                "created_at": "2024-06-19T19:24:20.191559",
                "updated_at": "2024-06-19T19:24:20.191559",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/p/b/362604001.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 7,
                        "id": 19
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b1/362604001.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 7,
                        "id": 20
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b2/362604001.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 7,
                        "id": 21
                    }
                ]
            },
            {
                "name": "Электросамокат Accesstyle Typhoon 30S",
                "price": 37990.15,
                "description": "Электросамокат Accesstyle Typhoon 30S оснащен двигателем мощностью 380 Вт. Это позволяет развивать скорость движения до 30 км/ч. Модель имеет два больших колеса диаметром 10 дюймов, при изготовлении которых используется резина высокого качества. Это повышает комфорт при езде по любым дорожным покрытиям. Дисковые тормоза, установленные на обоих колесах, обеспечивают быструю остановку вне зависимости от скорости движения.",
                "id": 6,
                "created_at": "2024-06-19T19:24:20.174763",
                "updated_at": "2024-06-19T19:24:20.174763",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/p/b/018314001.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 6,
                        "id": 16
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb1/018314001.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 6,
                        "id": 17
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb2/018314001.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 6,
                        "id": 18
                    }
                ]
            },
            {
                "name": "Игровая приставка Nintendo Switch, неоновый синий/неоновый красный (HAD-S-KABAA RUS)",
                "price": 31999.95,
                "description": "Игровая приставка Nintendo Switch (HAD-S-KABAA RUS) представлена в ярком неоново-синем и неоново-красном цвете. Модель предлагает множество возможностей для развлечения и игрового опыта. Портативное устройство компактного размера со встроенным дисплеем. Благодаря этому можно играть в самолете, дороге, в поезде.",
                "id": 5,
                "created_at": "2024-06-19T19:24:20.159179",
                "updated_at": "2024-06-19T19:24:20.159179",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/photos/71/716/800/48/new_71680048_l_1702296234.jpeg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 5,
                        "id": 13
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b1/02697400.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 5,
                        "id": 14
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/p/b2/02697400.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 5,
                        "id": 15
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
                "name": "Смартфон Apple iPhone 15 Pro 128GB Natural Titanium (Dual Sim)",
                "price": 116999.03,
                "description": "Смартфон Apple iPhone 15 Pro 128GB Natural Titanium (Dual Sim) оснащен шестиядерным процессором А17 Pro. За счет этого устройство мгновенно реагирует на заданные команды, без задержек загружает медиафайлы из интернета. Модель оснащена безрамочным экраном с матрицей OLED Super Retina XDR. Благодаря этому достигаются детализация и высокое качество передаваемого изображения. Большой дисплей удобен для общения в мессенджерах и социальных сетях. Технология ProMotion обеспечивает экономичное потребление энергоресурса при воспроизведении видео.",
                "id": 3,
                "created_at": "2024-06-19T19:24:20.129332",
                "updated_at": "2024-06-19T19:24:20.129332",
                "images": [
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb/37496300.jpg/resize/468x468/",
                        "size": "vertical",
                        "good_id": 3,
                        "id": 7
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb2/37496300.jpg/resize/468x468/",
                        "size": "quadrant",
                        "good_id": 3,
                        "id": 8
                    },
                    {
                        "link": "https://static.eldorado.ru/img1/b/bb3/37496300.jpg/resize/468x468/",
                        "size": "horizontal",
                        "good_id": 3,
                        "id": 9
                    }
                ]
            }
        ]);

        setIsLoading(false);
    }
    )
}