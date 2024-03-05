const checkScrollDirectionIsUp = (event) => {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
};
const isScrolledIntoView = (el) => {
  if (el) {
    let bounds = el.getBoundingClientRect();
    return bounds.top + bounds.height > 0 && window.innerHeight - bounds.top > 0 && bounds.left + bounds.width > 0 && window.innerWidth - bounds.left > 0;
  }
};
const WidgetAppearance = (ref, setAppearance) => {
  if (typeof document !== "undefined") {
    document.body.addEventListener("wheel", () => {
      if (isScrolledIntoView(ref.current)) {
        setAppearance(true);
      }
    });
  }
};
export {
  WidgetAppearance as W,
  checkScrollDirectionIsUp as c,
  isScrolledIntoView as i
};
