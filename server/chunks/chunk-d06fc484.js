import { jsxs, jsx } from "react/jsx-runtime";
import { f as styles, g as styles$1 } from "../entries/pages_index_index-page.mjs";
const Widget_item = ({ imageURL, caption, price, imageHeight, padding_top }) => {
  return /* @__PURE__ */ jsxs("div", { style: { height: imageHeight }, className: styles.widget_item, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.item_image, style: { paddingTop: padding_top }, children: [
      /* @__PURE__ */ jsx("img", { src: imageURL, srcSet: imageURL, alt: "Изображение предмета" }),
      /* @__PURE__ */ jsx("button", { className: styles.item_add, children: /* @__PURE__ */ jsx("a", { href: "/", children: "Add to Cart" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.item_desc, children: [
      /* @__PURE__ */ jsx("h3", { className: styles.item_caption, children: caption }),
      /* @__PURE__ */ jsxs("p", { className: styles.item_price, children: [
        "$",
        price
      ] })
    ] })
  ] });
};
const ViewAllProducts_Header = ({ caption }) => {
  return /* @__PURE__ */ jsxs("div", { className: styles$1.ViewAllProducts_header, children: [
    /* @__PURE__ */ jsx("h3", { className: styles$1.ViewAllProducts_header_caption, children: caption }),
    /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "Посмотреть все продукты", className: styles$1.ViewAllProducts_header_view_all, children: "View All Products" })
  ] });
};
export {
  ViewAllProducts_Header as V,
  Widget_item as W
};
