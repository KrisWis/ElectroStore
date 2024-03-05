import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
const hidden$1 = "_hidden_6c9tx_20";
const opacity_0$1 = "_opacity_0_6c9tx_24";
const App_module = {
  hidden: hidden$1,
  opacity_0: opacity_0$1
};
const navbar$1 = "_navbar_1pwgl_1";
const navbar__child_dropdown__text = "_navbar__child_dropdown__text_1pwgl_13";
const navbar__child$1 = "_navbar__child_1pwgl_13";
const dropdown__window = "_dropdown__window_1pwgl_33";
const dropdown__window__block = "_dropdown__window__block_1pwgl_57";
const dropdown__window__importance = "_dropdown__window__importance_1pwgl_63";
const dropdown__window__text = "_dropdown__window__text_1pwgl_74";
const navbar__child_hover = "_navbar__child_hover_1pwgl_79";
const navBar_styles = {
  navbar: navbar$1,
  navbar__child_dropdown__text,
  navbar__child: navbar__child$1,
  dropdown__window,
  dropdown__window__block,
  dropdown__window__importance,
  dropdown__window__text,
  navbar__child_hover
};
const closeNavbar = (setActiveNavbar, setNavBarIsOpen) => {
  setActiveNavbar(false);
  setNavBarIsOpen(false);
};
const dropdown__window__texts = ["Shop", "Single Product", "Blog", "Single Post", "Single Post w/sidebar", "About", "Cart", "Checkout", "My Account", "Order Tracking", "Wishlist"];
const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdown_window = React.useRef(null);
  const dropdown_window__text = React.useRef(null);
  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      var _a, _b;
      if (!((_a = dropdown_window.current) == null ? void 0 : _a.contains(e.target)) && !((_b = dropdown_window__text.current) == null ? void 0 : _b.contains(e.target))) {
        setDropdownOpen(false);
      }
    });
  }, []);
  return /* @__PURE__ */ jsxs("ul", { className: navBar_styles.navbar, children: [
    /* @__PURE__ */ jsx("li", { className: navBar_styles.navbar__child, children: "Home" }),
    /* @__PURE__ */ jsxs("li", { className: navBar_styles.navbar__child_dropdown_block, children: [
      /* @__PURE__ */ jsxs("div", { ref: dropdown_window__text, className: navBar_styles.navbar__child_dropdown__text, onClick: () => setDropdownOpen(!dropdownOpen), children: [
        /* @__PURE__ */ jsx("p", { className: navBar_styles.navbar__child, children: "Pages" }),
        /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-down", "aria-hidden": "true" })
      ] }),
      dropdownOpen && /* @__PURE__ */ jsx("ul", { ref: dropdown_window, className: navBar_styles.dropdown__window, "aria-labelledby": "dropdownPages", "data-bs-popper": "static", children: dropdown__window__texts.map((item) => /* @__PURE__ */ jsx("li", { className: navBar_styles.dropdown__window__block, children: /* @__PURE__ */ jsxs("a", { className: navBar_styles.dropdown__window__text, children: [
        item,
        /* @__PURE__ */ jsx("span", { className: navBar_styles.dropdown__window__importance, children: "PRO" })
      ] }) }, item)) })
    ] }),
    /* @__PURE__ */ jsx("li", { className: navBar_styles.navbar__child, children: "Collections" }),
    /* @__PURE__ */ jsx("li", { className: navBar_styles.navbar__child, children: "Sale" }),
    /* @__PURE__ */ jsx("li", { className: `${navBar_styles.navbar__child} ${navBar_styles.navbar__child_hover}`, children: "Get Pro" })
  ] });
};
const header_icons = "_header_icons_oj86m_1";
const header_icons__icon = "_header_icons__icon_oj86m_7";
const header_icons__navicon = "_header_icons__navicon_oj86m_16";
const styles$f = {
  header_icons,
  header_icons__icon,
  header_icons__navicon
};
const adaptive_navbar = "_adaptive_navbar_kwp1a_1";
const adaptive_navbar_header = "_adaptive_navbar_header_kwp1a_29";
const adaptive_navbar_caption = "_adaptive_navbar_caption_kwp1a_34";
const adaptive_navbar_close = "_adaptive_navbar_close_kwp1a_38";
const adaptive_navbar_active = "_adaptive_navbar_active_kwp1a_43";
const navbar = "_navbar_kwp1a_48";
const navbar__child = "_navbar__child_kwp1a_57";
const styles$e = {
  adaptive_navbar,
  adaptive_navbar_header,
  adaptive_navbar_caption,
  adaptive_navbar_close,
  adaptive_navbar_active,
  navbar,
  navbar__child
};
const Adaptive_NavBar = ({ navBarIsOpen, setNavBarIsOpen }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [activeNavbar, setActiveNavbar] = React.useState(false);
  const dropdown_window = React.useRef(null);
  const dropdown_window__text = React.useRef(null);
  const adaptiveNavbarRef = React.useRef(null);
  React.useEffect(() => {
    if (navBarIsOpen) {
      adaptiveNavbarRef.current.style.display = "flex";
      setTimeout(() => {
        setActiveNavbar(true);
      }, 100);
    } else {
      setTimeout(() => {
        adaptiveNavbarRef.current.style.display = "none";
        setActiveNavbar(false);
      }, 300);
    }
  }, [navBarIsOpen]);
  return /* @__PURE__ */ jsxs("div", { ref: adaptiveNavbarRef, className: `${styles$e.adaptive_navbar} ${activeNavbar && styles$e.adaptive_navbar_active}`, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$e.adaptive_navbar_header, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$e.adaptive_navbar_caption, children: "Menu" }),
      /* @__PURE__ */ jsx("i", { className: `${styles$e.adaptive_navbar_close} fa fa-close`, "aria-hidden": "true", onClick: () => closeNavbar(setActiveNavbar, setNavBarIsOpen) })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: styles$e.navbar, children: [
      /* @__PURE__ */ jsx("li", { className: styles$e.navbar__child, children: "Home" }),
      /* @__PURE__ */ jsxs("div", { className: navBar_styles.navbar__child_dropdown_block, children: [
        /* @__PURE__ */ jsxs("div", { ref: dropdown_window__text, className: navBar_styles.navbar__child_dropdown__text, onClick: () => setDropdownOpen(!dropdownOpen), children: [
          /* @__PURE__ */ jsx("li", { className: styles$e.navbar__child, children: "Pages" }),
          /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-down", "aria-hidden": "true" })
        ] }),
        dropdownOpen && /* @__PURE__ */ jsx("ul", { ref: dropdown_window, className: navBar_styles.dropdown__window, "aria-labelledby": "dropdownPages", "data-bs-popper": "static", children: dropdown__window__texts.map((item) => /* @__PURE__ */ jsx("li", { className: navBar_styles.dropdown__window__block, children: /* @__PURE__ */ jsxs("a", { className: navBar_styles.dropdown__window__text, children: [
          item,
          /* @__PURE__ */ jsx("span", { className: navBar_styles.dropdown__window__importance, children: "PRO" })
        ] }) }, item)) })
      ] }),
      /* @__PURE__ */ jsx("li", { className: styles$e.navbar__child, children: "Collections" }),
      /* @__PURE__ */ jsx("li", { className: styles$e.navbar__child, children: "Sale" }),
      /* @__PURE__ */ jsx("li", { className: `${styles$e.navbar__child} ${navBar_styles.navbar__child_hover}`, children: "Get Pro" })
    ] })
  ] });
};
const downText__item = "_downText__item_176tc_1";
const downText__caption = "_downText__caption_176tc_6";
const downText__desc = "_downText__desc_176tc_10";
const styles$d = {
  downText__item,
  downText__caption,
  downText__desc
};
const Slider_downText__item = ({ caption, desc }) => {
  return /* @__PURE__ */ jsxs("div", { className: styles$d.downText__item, children: [
    /* @__PURE__ */ jsx("h3", { className: styles$d.downText__caption, children: caption }),
    /* @__PURE__ */ jsx("p", { className: styles$d.downText__desc, children: desc })
  ] });
};
const slider_downText = "_slider_downText_1lz1h_1";
const styles$c = {
  slider_downText
};
const slider_downText_items_captions = ["Book An Appointment", "Pick Up In Store", "Special Packaging", "Free Global Returns"];
const hidden = "_hidden_6c9tx_20";
const opacity_0 = "_opacity_0_6c9tx_24";
const app_styles = {
  hidden,
  opacity_0
};
const Slider_downText = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `${styles$c.slider_downText} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: slider_downText_items_captions.map((item_caption2) => /* @__PURE__ */ jsx(
    Slider_downText__item,
    {
      caption: item_caption2,
      desc: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    item_caption2
  )) });
};
const welcome_block_header = "_welcome_block_header_nzb1s_1";
const welcome_block_caption = "_welcome_block_caption_nzb1s_8";
const welcome_block_desc = "_welcome_block_desc_nzb1s_14";
const styles$b = {
  welcome_block_header,
  welcome_block_caption,
  welcome_block_desc
};
const welcome_block_item = "_welcome_block_item_13pfa_1";
const welcome_block_item_title = "_welcome_block_item_title_13pfa_17";
const welcome_block_item_img_block = "_welcome_block_item_img_block_13pfa_20";
const welcome_block_item_parallax = "_welcome_block_item_parallax_13pfa_25";
const welcome_block_item_parallax_img = "_welcome_block_item_parallax_img_13pfa_46";
const welcome_block_item_link = "_welcome_block_item_link_13pfa_66";
const styles$a = {
  welcome_block_item,
  welcome_block_item_title,
  welcome_block_item_img_block,
  welcome_block_item_parallax,
  welcome_block_item_parallax_img,
  welcome_block_item_link
};
const widget_item = "_widget_item_1f2xf_1";
const item_image = "_item_image_1f2xf_11";
const item_add = "_item_add_1f2xf_19";
const item_desc = "_item_desc_1f2xf_48";
const item_caption = "_item_caption_1f2xf_54";
const item_price = "_item_price_1f2xf_62";
const styles$9 = {
  widget_item,
  item_image,
  item_add,
  item_desc,
  item_caption,
  item_price
};
const ViewAllProducts_header = "_ViewAllProducts_header_1kprf_1";
const ViewAllProducts_header_caption = "_ViewAllProducts_header_caption_1kprf_7";
const ViewAllProducts_header_view_all = "_ViewAllProducts_header_view_all_1kprf_12";
const styles$8 = {
  ViewAllProducts_header,
  ViewAllProducts_header_caption,
  ViewAllProducts_header_view_all
};
const Header_icons = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [navBarIsOpen, setNavBarIsOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: styles$f.header_icons, children: [
      /* @__PURE__ */ jsx("li", { className: `${styles$f.header_icons__icon} ${styles$f.header_icons__navicon}`, onClick: () => setNavBarIsOpen(true), children: /* @__PURE__ */ jsx("i", { className: "fa fa-navicon", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("li", { className: styles$f.header_icons__icon, children: /* @__PURE__ */ jsx("a", { "aria-label": "Страница Избранное", href: "/favourite", children: /* @__PURE__ */ jsx("i", { className: `${styles$f.header_icons__icon} fa fa-heart`, "aria-hidden": "true" }) }) }),
      /* @__PURE__ */ jsx("li", { className: styles$f.header_icons__icon, children: /* @__PURE__ */ jsx("i", { className: "fa fa-cart-plus", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("li", { className: styles$f.header_icons__icon, onClick: () => setModalIsOpen((prev) => !prev), children: /* @__PURE__ */ jsx("i", { className: "fa fa-search", "aria-hidden": "true" }) })
    ] }),
    /* @__PURE__ */ jsx(Search_Modal, { modalIsOpen, setModalIsOpen }),
    /* @__PURE__ */ jsx(Adaptive_NavBar, { navBarIsOpen, setNavBarIsOpen })
  ] });
};
const search_modal = "_search_modal_5hr47_1";
const search_modal_dialog = "_search_modal_dialog_5hr47_16";
const search_modal_content = "_search_modal_content_5hr47_26";
const search_modal_input_block = "_search_modal_input_block_5hr47_38";
const search_modal_input = "_search_modal_input_5hr47_38";
const search_modal_search = "_search_modal_search_5hr47_63";
const search_modal_browse = "_search_modal_browse_5hr47_70";
const search_modal_active = "_search_modal_active_5hr47_76";
const categories$1 = "_categories_5hr47_87";
const categories_item = "_categories_item_5hr47_96";
const categories_link = "_categories_link_5hr47_103";
const styles$7 = {
  search_modal,
  search_modal_dialog,
  search_modal_content,
  search_modal_input_block,
  search_modal_input,
  search_modal_search,
  search_modal_browse,
  search_modal_active,
  categories: categories$1,
  categories_item,
  categories_link
};
const categories = ["Jackets", "T-shirts", "Handbags", "Accessories", "Cosmetics", "Dresses", "Jumpsuits"];
const Search_Modal = ({ modalIsOpen, setModalIsOpen }) => {
  return /* @__PURE__ */ jsx("div", { className: `${styles$7.search_modal} ${modalIsOpen ? styles$7.search_modal_active : ""}`, onClick: () => setModalIsOpen((prev) => !prev), children: /* @__PURE__ */ jsx("div", { className: styles$7.search_modal_dialog, children: /* @__PURE__ */ jsxs("div", { className: styles$7.search_modal_content, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { className: styles$7.search_modal_input_block, children: [
      /* @__PURE__ */ jsx("input", { className: styles$7.search_modal_input, type: "text", placeholder: "Type and press enter" }),
      /* @__PURE__ */ jsx("i", { className: `${styles$7.search_modal_search} fa fa-search`, "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: styles$7.search_modal_browse, children: "Browse Categories" }),
    /* @__PURE__ */ jsx("ul", { className: styles$7.categories, children: categories.map((item) => /* @__PURE__ */ jsx("li", { className: styles$7.categories_item, children: /* @__PURE__ */ jsx("a", { "aria-label": "Нажатая категория", className: styles$7.categories_link, href: "/", children: item }) }, item)) })
  ] }) }) });
};
const background_animation = "_background_animation_1m6d7_6";
const move = "_move_1m6d7_1";
const styles$6 = {
  background_animation,
  move
};
const loading_animation_overlay = "_loading_animation_overlay_jghnh_1";
const show = "_show_jghnh_9";
const loading_animation_bar = "_loading_animation_bar_jghnh_12";
const styles$5 = {
  loading_animation_overlay,
  show,
  loading_animation_bar
};
const Loading_animation = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 300);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: `${styles$5.loading_animation_overlay} ${load ? styles$5.show : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar }),
    /* @__PURE__ */ jsx("div", { className: styles$5.loading_animation_bar })
  ] });
};
const header = "_header_1325f_1";
const styles$4 = {
  header
};
const Header = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: `${styles$4.header} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: [
    /* @__PURE__ */ jsx("a", { "aria-label": "Главная страница", href: "/", children: /* @__PURE__ */ jsx("img", { src: "icons/logo.svg", width: "204", height: "46", alt: "logo" }) }),
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx(Header_icons, {})
  ] });
};
const slider = "_slider_1ii5i_1";
const slider__left = "_slider__left_1ii5i_18";
const slider__right = "_slider__right_1ii5i_18";
const slider__item = "_slider__item_1ii5i_58";
const slider__item__parallax = "_slider__item__parallax_1ii5i_61";
const slider__item__parallax_layer = "_slider__item__parallax_layer_1ii5i_64";
const slider__item__parallax_image = "_slider__item__parallax_image_1ii5i_67";
const slider__item__img = "_slider__item__img_1ii5i_82";
const rotate_anim = "_rotate_anim_1ii5i_1";
const slider__swiper = "_slider__swiper_1ii5i_112";
const slider__swiper_item__active = "_slider__swiper_item__active_1ii5i_126";
const slider__content = "_slider__content_1ii5i_140";
const slider__content_caption = "_slider__content_caption_1ii5i_152";
const slider__content_text = "_slider__content_text_1ii5i_152";
const slider__content_button = "_slider__content_button_1ii5i_152";
const slider__content_button_hover = "_slider__content_button_hover_1ii5i_197";
const slider__content_active = "_slider__content_active_1ii5i_207";
const styles$3 = {
  slider,
  slider__left,
  slider__right,
  slider__item,
  slider__item__parallax,
  slider__item__parallax_layer,
  slider__item__parallax_image,
  slider__item__img,
  rotate_anim,
  slider__swiper,
  slider__swiper_item__active,
  slider__content,
  slider__content_caption,
  slider__content_text,
  slider__content_button,
  slider__content_button_hover,
  slider__content_active
};
const onClickSwiper = (swiper, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover) => {
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
};
const slideToPreviousItem = (slideToPrevItem, setButtonHover, setSwiperItemActive, swiperItemActive) => {
  slideToPrevItem();
  setButtonHover(false);
  setSwiperItemActive(swiperItemActive == 1 ? 3 : swiperItemActive - 1);
};
const slideToFollowingItem = (slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive) => {
  slideToNextItem();
  setButtonHover(false);
  setSwiperItemActive(swiperItemActive == 3 ? 1 : swiperItemActive + 1);
};
const HeaderSlider_items_props = [
  {
    id: 1,
    imageURL: "images/slider_items/slider_item--1.webp",
    caption: "Buy Electronic Gadgets at Affordable Prices",
    text: "Tech gadgets are all about making your life easier"
  },
  {
    id: 2,
    imageURL: "images/slider_items/slider_item--2.webp",
    caption: "Cool Tech Gadgets Collection 2023",
    text: "Tech gadgets are all about making your life easier"
  },
  {
    id: 3,
    imageURL: "images/slider_items/slider_item--3.webp",
    caption: "Sturdy and Multifnction New Gadgets",
    text: "Tech gadgets are all about making your life easier"
  }
];
const Header_Slider = () => {
  const [swiperItemActive, setSwiperItemActive] = React.useState(1);
  const slider_interval_ref = React.useRef();
  const [buttonHover, setButtonHover] = React.useState(false);
  const buttonHover_timeout_ref = React.useRef();
  const [doAnim, setDoAnim] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setDoAnim(true);
    }, 1500);
  }, []);
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: HeaderSlider_items_props.map((item) => ({
      id: `item-${item.id}`,
      renderItem: /* @__PURE__ */ jsx("div", { className: styles$3.slider__item__parallax, children: /* @__PURE__ */ jsxs("div", { className: `${styles$3.slider__item__parallax_image} ${styles$3.slider__item__parallax_layer}`, children: [
        /* @__PURE__ */ jsx("img", { className: styles$3.slider__item__img, srcSet: item.imageURL, src: item.imageURL, alt: `Слайд ${item.id}` }),
        /* @__PURE__ */ jsxs("div", { className: `${styles$3.slider__content} ${swiperItemActive === item.id && doAnim ? styles$3.slider__content_active : ""}`, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$3.slider__content_caption, children: item.caption }),
          /* @__PURE__ */ jsx("p", { className: styles$3.slider__content_text, children: item.text }),
          /* @__PURE__ */ jsx("button", { className: `${styles$3.slider__content_button} ${buttonHover ? styles$3.slider__content_button_hover : ""}`, children: "Show now" })
        ] })
      ] }) })
    }))
  });
  React.useEffect(() => {
    slider_interval_ref.current = setInterval(() => {
      slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive);
    }, 2e4);
    buttonHover_timeout_ref.current = setTimeout(() => {
      setButtonHover(true);
    }, 500);
    return () => {
      clearInterval(slider_interval_ref.current);
      clearTimeout(buttonHover_timeout_ref.current);
    };
  }, [buttonHover, slideToNextItem, swiperItemActive]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: `${styles$3.slider} ${isLoading && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "") ? app_styles.opacity_0 : ""}`, children: [
    /* @__PURE__ */ jsx("button", { "aria-label": "Кнопка для перелистывания слайдера назад", onClick: () => slideToPreviousItem(slideToPrevItem, setButtonHover, setSwiperItemActive, swiperItemActive), className: styles$3.slider__left, children: /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs("div", { className: styles$3.slider__item, children: [
      carouselFragment,
      /* @__PURE__ */ jsxs("div", { className: styles$3.slider__swiper, children: [
        /* @__PURE__ */ jsx("i", { className: `fa fa-circle-o ${swiperItemActive === 1 ? styles$3.slider__swiper_item__active : ""}`, onClick: () => onClickSwiper(1, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover), "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("i", { className: `fa fa-circle-o ${swiperItemActive === 2 ? styles$3.slider__swiper_item__active : ""}`, onClick: () => onClickSwiper(2, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover), "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("i", { className: `fa fa-circle-o ${swiperItemActive === 3 ? styles$3.slider__swiper_item__active : ""}`, onClick: () => onClickSwiper(3, setSwiperItemActive, swiperItemActive, slideToPrevItem, slideToNextItem, setButtonHover), "aria-hidden": "true" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { "aria-label": "Кнопка для перелистывания слайдера вперёд", onClick: () => slideToFollowingItem(slideToNextItem, setButtonHover, setSwiperItemActive, swiperItemActive), className: styles$3.slider__right, children: /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-right", "aria-hidden": "true" }) })
  ] });
};
const welcome_block = "_welcome_block_1bun9_1";
const welcome_block_items = "_welcome_block_items_1bun9_4";
const styles$2 = {
  welcome_block,
  welcome_block_items
};
const our_new_arrivals = "_our_new_arrivals_1ycvh_1";
const products = "_products_1ycvh_7";
const styles$1 = {
  our_new_arrivals,
  products
};
const bestSellers = "_bestSellers_kzjwp_1";
const bestSellers_slider = "_bestSellers_slider_kzjwp_15";
const bestSellers_items = "_bestSellers_items_kzjwp_26";
const bestSellers_items_arrow = "_bestSellers_items_arrow_kzjwp_39";
const bestSellers_items_arrow_left = "_bestSellers_items_arrow_left_kzjwp_68";
const bestSellers_items_arrow_right = "_bestSellers_items_arrow_right_kzjwp_71";
const bestSellers_items_firstItem = "_bestSellers_items_firstItem_kzjwp_74";
const bestSellers_items_secondItem = "_bestSellers_items_secondItem_kzjwp_77";
const bestSellers_items_thirdItem = "_bestSellers_items_thirdItem_kzjwp_80";
const bestSellers_items_lastitemIsActive = "_bestSellers_items_lastitemIsActive_kzjwp_80";
const styles = {
  bestSellers,
  bestSellers_slider,
  bestSellers_items,
  bestSellers_items_arrow,
  bestSellers_items_arrow_left,
  bestSellers_items_arrow_right,
  bestSellers_items_firstItem,
  bestSellers_items_secondItem,
  bestSellers_items_thirdItem,
  bestSellers_items_lastitemIsActive
};
const Welcome_block = React.lazy(() => import("../chunks/chunk-2eb92110.js"));
const Our_New_Arrivals = React.lazy(() => import("../chunks/chunk-080c9b45.js"));
const Best_Sellers = React.lazy(() => import("../chunks/chunk-42af06fa.js"));
const Background_animation = React.lazy(() => import("../chunks/chunk-b9424693.js"));
const Main = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Header_Slider, {}),
    /* @__PURE__ */ jsx(Slider_downText, {}),
    /* @__PURE__ */ jsxs(React.Suspense, { fallback: "Загрузка", children: [
      /* @__PURE__ */ jsx(Welcome_block, {}),
      /* @__PURE__ */ jsx(Our_New_Arrivals, {}),
      /* @__PURE__ */ jsx(Best_Sellers, {}),
      /* @__PURE__ */ jsx(Background_animation, {})
    ] }),
    /* @__PURE__ */ jsx(Loading_animation, {})
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Main, {}) });
};
function Page() {
  return /* @__PURE__ */ jsx(App, {});
}
const index_page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page,
  styles$a as a,
  styles$2 as b,
  app_styles as c,
  styles$1 as d,
  styles as e,
  styles$9 as f,
  styles$8 as g,
  styles$6 as h,
  index_page as i,
  styles$b as s
};
