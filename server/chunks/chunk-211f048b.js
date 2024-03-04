import { jsxs, jsx } from "react/jsx-runtime";
import { W as Widget_item, V as ViewAllProducts_Header } from "./chunk-d06fc484.js";
import { W as WidgetAppearance } from "./chunk-536582b4.js";
import { e as styles, c as app_styles } from "../entries/pages_index_index-page.mjs";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
const BestSellers_items_props = [
  {
    id: 1,
    imageURL: "images/BestSellers_items/BestSellers_item--1.webp",
    caption: "Phone Cover 5.6 inches",
    price: "95.00"
  },
  {
    id: 2,
    imageURL: "images/BestSellers_items/BestSellers_item--2.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 3,
    imageURL: "images/BestSellers_items/BestSellers_item--3.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 4,
    imageURL: "images/BestSellers_items/BestSellers_item--4.webp",
    caption: "Phone Cover 5.6 inches",
    price: "95.00"
  },
  {
    id: 5,
    imageURL: "images/BestSellers_items/BestSellers_item--5.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 6,
    imageURL: "images/BestSellers_items/BestSellers_item--6.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 7,
    imageURL: "images/BestSellers_items/BestSellers_item--7.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 8,
    imageURL: "images/BestSellers_items/BestSellers_item--8.webp",
    caption: "22 Inch LED Display",
    price: "65.00"
  }
];
const Best_Sellers = () => {
  const BestSellers_ref = React.useRef(null);
  const [isIntoView, setIsIntoView] = React.useState(false);
  WidgetAppearance(BestSellers_ref, setIsIntoView);
  const [ActiveSlide, setActiveSlide] = React.useState(1);
  const carousel_items = [];
  for (let index = 0; index < BestSellers_items_props.length; index += 3) {
    carousel_items.push({
      id: `item-${BestSellers_items_props[index].id}`,
      renderItem: /* @__PURE__ */ jsxs("div", { className: `${styles.bestSellers_items} ${ActiveSlide == 3 ? styles.bestSellers_items_lastitemIsActive : index == 0 ? styles.bestSellers_items_firstItem : index == 3 ? styles.bestSellers_items_secondItem : index == 6 ? styles.bestSellers_items_thirdItem : ""}`, children: [
        /* @__PURE__ */ jsx(Widget_item, { padding_top: 90, imageHeight: 600, ...BestSellers_items_props[index] }),
        BestSellers_items_props[index + 1] && /* @__PURE__ */ jsx(Widget_item, { padding_top: 90, imageHeight: 600, ...BestSellers_items_props[index + 1] }),
        BestSellers_items_props[index + 2] && /* @__PURE__ */ jsx(Widget_item, { padding_top: 90, imageHeight: 600, ...BestSellers_items_props[index + 2] })
      ] })
    });
  }
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: carousel_items
  });
  const slideToPrevSlide = () => {
    slideToPrevItem();
    setActiveSlide(ActiveSlide == 1 ? 3 : ActiveSlide - 1);
  };
  const slideToNextSlide = () => {
    slideToNextItem();
    setActiveSlide(ActiveSlide == 3 ? 1 : ActiveSlide + 1);
  };
  return /* @__PURE__ */ jsxs("div", { ref: BestSellers_ref, className: `${styles.bestSellers} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: [
    /* @__PURE__ */ jsx(ViewAllProducts_Header, { caption: "Best Sellers" }),
    /* @__PURE__ */ jsxs("div", { className: styles.bestSellers_slider, children: [
      /* @__PURE__ */ jsx("button", { "aria-label": "Кнопка для перелистывания слайдера назад", onClick: slideToPrevSlide, className: `${styles.bestSellers_items_arrow} ${styles.bestSellers_items_arrow_left}`, children: /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }) }),
      carouselFragment,
      /* @__PURE__ */ jsx("button", { "aria-label": "Кнопка для перелистывания слайдера вперёд", onClick: slideToNextSlide, className: `${styles.bestSellers_items_arrow} ${styles.bestSellers_items_arrow_right}`, children: /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-right", "aria-hidden": "true" }) })
    ] })
  ] });
};
export {
  Best_Sellers as default
};
