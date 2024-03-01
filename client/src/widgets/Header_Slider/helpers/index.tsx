/* Функционал слайдера */
export const onClickSwiper = (swiper: number, setSwiperItemActive: React.Dispatch<React.SetStateAction<number>>, swiperItemActive: number, slideToPrevItem: any,
    slideToNextItem: any, setButtonHover: React.Dispatch<React.SetStateAction<boolean>>): void => {

    let swiperItemActiveDublicate = swiperItemActive;
    let swiperDublicate = swiper;

    if (swiperDublicate > swiperItemActiveDublicate) {
        swiperDublicate -= swiperItemActiveDublicate;
        while (swiperDublicate > 0) {
            slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive);
            swiperDublicate--;
        }

    } else {
        swiperItemActiveDublicate -= swiperDublicate;
        while (swiperItemActiveDublicate > 0) {
            slideToPreviousItem(slideToPrevItem, setButtonHover, setSwiperItemActive, swiperItemActive);
            swiperItemActiveDublicate--;
        }
    }

    setSwiperItemActive(swiper);
}

export const slideToPreviousItem = (slideToPrevItem: any, setButtonHover: React.Dispatch<React.SetStateAction<boolean>>, setSwiperItemActive: React.Dispatch<React.SetStateAction<number>>, swiperItemActive: number): void => {
    slideToPrevItem();
    setButtonHover(false);
    setSwiperItemActive(swiperItemActive == 1 ? 3 : swiperItemActive - 1);
}

export const slideToFollowingItem = (slideToNextItem: any, setButtonHover: React.Dispatch<React.SetStateAction<boolean>>, setSwiperItemActive: React.Dispatch<React.SetStateAction<number>>, swiperItemActive: number): void => {
    slideToNextItem();
    setButtonHover(false);
    setSwiperItemActive(swiperItemActive == 3 ? 1 : swiperItemActive + 1);
}