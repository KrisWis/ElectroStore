import { jsxs, jsx } from "react/jsx-runtime";
import { d as styles, c as app_styles } from "../entries/pages_index_index-page.mjs";
import { V as ViewAllProducts_Header, W as Widget_item } from "./chunk-d06fc484.js";
import { W as WidgetAppearance } from "./chunk-536582b4.js";
import React from "react";
import "react-spring-carousel";
const OurNewArrivals_items_props = [
  {
    id: 1,
    imageURL: "images/OurNewArrivals_items/OurNewArrivals_item--1.webp",
    caption: "Phone Cover 5.6 inches",
    price: "95.00"
  },
  {
    id: 2,
    imageURL: "images/OurNewArrivals_items/OurNewArrivals_item--2.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 3,
    imageURL: "images/OurNewArrivals_items/OurNewArrivals_item--3.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 4,
    imageURL: "images/OurNewArrivals_items/OurNewArrivals_item--4.webp",
    caption: "Smart Phone 128GB RAM",
    price: "55.00"
  },
  {
    id: 5,
    imageURL: "images/OurNewArrivals_items/OurNewArrivals_item--5.webp",
    caption: "22 Inch LED Display",
    price: "65.00"
  }
];
const Our_New_Arrivals = () => {
  const OurNewArrivals_ref = React.useRef(null);
  const [isIntoView, setIsIntoView] = React.useState(false);
  WidgetAppearance(OurNewArrivals_ref, setIsIntoView);
  return /* @__PURE__ */ jsxs("div", { ref: OurNewArrivals_ref, className: `${styles.our_new_arrivals} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: [
    /* @__PURE__ */ jsx(ViewAllProducts_Header, { caption: "View All Arrivals" }),
    /* @__PURE__ */ jsx("div", { className: styles.products, children: OurNewArrivals_items_props.map((item) => /* @__PURE__ */ jsx(Widget_item, { padding_top: 60, imageHeight: 400, ...item }, item.id)) })
  ] });
};
export {
  Our_New_Arrivals as default
};
