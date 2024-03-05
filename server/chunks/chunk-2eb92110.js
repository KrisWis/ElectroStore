import { jsxs, jsx } from "react/jsx-runtime";
import { s as styles, a as styles$1, b as styles$2, c as app_styles } from "../entries/pages_index_index-page.mjs";
import React from "react";
import { i as isScrolledIntoView, c as checkScrollDirectionIsUp, W as WidgetAppearance } from "./chunk-823f82ae.js";
import "react-spring-carousel";
const Welcome_block_header = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles.welcome_block_header, children: [
    /* @__PURE__ */ jsx("h4", { className: styles.welcome_block_caption, children: "Welcome" }),
    /* @__PURE__ */ jsx("p", { className: styles.welcome_block_desc, children: "We're constantly testing new products, researching recent trends in the tech space, and updating our list of cool gadgets accordingly." })
  ] });
};
const Welcome_block_item = ({ number, title, imageURL }) => {
  const [parallaxScrollY, setParallaxScrollY] = React.useState(0);
  const welcomeBlockItem_ref = React.useRef(null);
  if (typeof document !== "undefined") {
    document.body.addEventListener("wheel", (event) => {
      if (isScrolledIntoView(welcomeBlockItem_ref.current)) {
        if (checkScrollDirectionIsUp(event) && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "")) {
          if (parallaxScrollY <= 50) {
            setParallaxScrollY(parallaxScrollY + 20);
          }
        } else {
          if (parallaxScrollY >= -50) {
            setParallaxScrollY(parallaxScrollY - 20);
          }
        }
      }
    });
  }
  return /* @__PURE__ */ jsxs("div", { className: styles$1.welcome_block_item, ref: welcomeBlockItem_ref, children: [
    /* @__PURE__ */ jsxs("h5", { className: styles$1.welcome_block_item_title, children: [
      number,
      ". ",
      title
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.welcome_block_item_img_block, children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.welcome_block_item_parallax, children: /* @__PURE__ */ jsx("img", { style: { objectPosition: `50% ${parallaxScrollY}px` }, className: styles$1.welcome_block_item_parallax_img, src: imageURL, alt: "Изображение секции" }) }),
      /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "Страница покупки", className: styles$1.welcome_block_item_link, children: "Shop It Now" })
    ] })
  ] });
};
const Welcome_block_items_props = [
  {
    number: "01",
    title: "ELECTRONIC GADGETS",
    imageURL: "images/Welcome_block_items/welcome_block_item--1.webp"
  },
  {
    number: "02",
    title: "COOL STUFF",
    imageURL: "images/Welcome_block_items/welcome_block_item--2.webp"
  },
  {
    number: "03",
    title: "ACCESSORIES",
    imageURL: "images/Welcome_block_items/welcome_block_item--3.webp"
  },
  {
    number: "04",
    title: "DISPLAY UNITS",
    imageURL: "images/Welcome_block_items/welcome_block_item--4.webp"
  }
];
const Welcome_block = () => {
  const WelcomeBlock_ref = React.useRef(null);
  const [isIntoView, setIsIntoView] = React.useState(false);
  WidgetAppearance(WelcomeBlock_ref, setIsIntoView);
  return /* @__PURE__ */ jsxs("div", { ref: WelcomeBlock_ref, className: `${styles$2.welcome_block} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: [
    /* @__PURE__ */ jsx(Welcome_block_header, {}),
    /* @__PURE__ */ jsx("div", { className: styles$2.welcome_block_items, children: Welcome_block_items_props.map((item) => {
      return /* @__PURE__ */ jsx(Welcome_block_item, { ...item }, item.number);
    }) })
  ] });
};
export {
  Welcome_block as default
};
