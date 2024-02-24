import React from "react"
import { Header, Header_Slider, Our_New_Arrivals, Welcome_block } from "../../../widgets"
import { Slider_downText } from "../../../entities"

/* Z-INDEXES:
0 - весь обычный контент;
1 - стрелочки слайдера;
2 - модальное окно; */


export const Main: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Header_Slider />
            <Slider_downText />
            <Welcome_block />
            <Our_New_Arrivals />
        </>
    )
}
