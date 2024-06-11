// Проверка на то, что скролл идёт вверх или вниз
export const checkScrollDirectionIsUp = (event: any): boolean => {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

// Проверка на то, что элемент в области видимости юзера
export const isScrolledIntoView = (el: HTMLElement): boolean | void => {

    if (el) {
        let bounds: DOMRect = el.getBoundingClientRect();
        return (
            (bounds.top + bounds.height > 0) &&
            (window.innerHeight - bounds.top > 0) &&
            (bounds.left + bounds.width > 0) &&
            (window.innerWidth - bounds.left > 0)
        );
    }

}

/* Проверка на то, что секция в области видимости */
export const WidgetAppearance = (ref: React.RefObject<HTMLElement>, setAppearance: (value: React.SetStateAction<boolean>) => void) => {
    if (typeof document !== 'undefined') {
        document.body.addEventListener('wheel', () => {
            if (isScrolledIntoView(ref.current!)) {
                setAppearance(true);
            }
        });
    }
}

/* Проверка на то, что у пользователя смартфон */
export const is_touch_enabled = (): boolean => {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

/* Функционал анимированной иконки */
const favicon: HTMLElement | null = document.getElementById("favicon");
const favicons_hrefs = ["images/favicons/favicon_1.png", "images/favicons/favicon_2.png", "images/favicons/favicon_1.png", "images/favicons/favicon_3.png",
    "images/favicons/favicon_4.png", "images/favicons/favicon_5.png", "images/favicons/favicon_6.png", "images/favicons/favicon_7.png", "images/favicons/favicon_8.png",
    "images/favicons/favicon_9.png", "images/favicons/favicon_10.png", "images/favicons/favicon_11.png"];
let favicon_count = 0;

setTimeout(() => {
    setInterval(() => {
        (favicon as HTMLLinkElement).href = favicons_hrefs[favicon_count];
        favicon_count++;

        if (favicon_count == favicons_hrefs.length) {
            favicon_count = 0;
        }
    }, 1000);
}, 1000);
