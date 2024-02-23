// Проверка на то, что скролл идёт вверх или вниз
export const checkScrollDirectionIsUp = (event: any): boolean => {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

// Проверка на то, что элемент в области видимости юзера
export const isScrolledIntoView = (el: HTMLElement): boolean => {
    var bounds = el.getBoundingClientRect();
    return (
        (bounds.top + bounds.height > 0) &&
        (window.innerHeight - bounds.top > 0) &&
        (bounds.left + bounds.width > 0) &&
        (window.innerWidth - bounds.left > 0)
    );
}