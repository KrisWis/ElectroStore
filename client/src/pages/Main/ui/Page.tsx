import React from "react"
import { Header, Header_Slider } from "../../../widgets"
import { Slider_downText } from "../../../entities"
import Loading_animation from "../../../features/Loading_animation/ui";


/* Z-INDEXES:
0 - весь обычный контент;
1 - стрелочки слайдера;
2 - модальное окно; */


const Welcome_block = React.lazy(() => import("../../../widgets/Welcome_block/ui/index"));
const Our_New_Arrivals = React.lazy(() => import("../../../widgets/Our_New_Arrivals/ui/index"));
const Best_Sellers = React.lazy(() => import("../../../widgets/Best_Sellers/ui/index"));
const Background_animation = React.lazy(() => import("../../../features/Background_animation/ui/index"));
const OurNewsletter = React.lazy(() => import("../../../widgets/OurNewsletter/ui/index"));
const Footer = React.lazy(() => import("../../../widgets/Footer/ui/index"));

// TODO: Сделать анимацию перед заходом на сайт на канвасе (на след.странице)

export const Main: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Header_Slider />
            <Slider_downText />

            <React.Suspense>
                <Welcome_block />
                <Our_New_Arrivals />
                <Best_Sellers />
                <OurNewsletter />
                <Footer />
            </React.Suspense>

            <Background_animation />
            <Loading_animation />
        </>
    )
}
