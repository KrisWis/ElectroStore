import React from "react"
import { Header, Header_Slider } from "../../../widgets"

/* Z-INDEXES:
0 - весь обычный контент;
1 - стрелочки слайдера;
2 - модальное окно; */


export const Main: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Header_Slider />
        </>
    )
}
