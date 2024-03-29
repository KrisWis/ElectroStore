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
        let bounds = el.getBoundingClientRect();
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