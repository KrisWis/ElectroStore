import React from "react"
import { Header, Header_Slider } from "../../../widgets"
import { Slider_downText } from "../../../entities"
import { Background_animation } from "../../../features";


/* Z-INDEXES:
0 - весь обычный контент;
1 - стрелочки слайдера;
2 - модальное окно; */


const Welcome_block = React.lazy(() => import("../../../widgets/Welcome_block/ui/index"));
const Our_New_Arrivals = React.lazy(() => import("../../../widgets/Our_New_Arrivals/ui/index"));


export const Main: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Header_Slider />
            <Slider_downText />
            <Welcome_block />
            <Our_New_Arrivals />
            <Background_animation />
        </>
    )
}
