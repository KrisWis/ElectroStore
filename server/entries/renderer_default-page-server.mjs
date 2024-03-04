import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function PageShell({ children, pageContext }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
const logoUrl = "/ElectroStore/assets/static/react.35ef61ed.svg";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  documentProps && documentProps.title || "Vite SSR app";
  documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject(_a || (_a = __template(['<!doctype html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" >\n        <link rel="icon" type="image/svg+xml" href="', `" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" >
        <meta name="description" content='Магазин ElectroStore для покупки электронного оборудования'>
        <meta name="keywords" content="html, css, js, ts, ElectroStore">
        <meta name="author" content="Некрасов Евгений">
        <link rel="stylesheet" rel="preload" href="../pages/index/shared/font-awesome/css/font-awesome.min.css" as="style">
        <title content="Название сайта">Electrostore - Electronic Gadge Store</title>
      </head>
      <body itemscope itemtype="https://schema.org/WebPage">
        <div id="root">`, '</div>\n        <script defer type="module" src="../pages/index/app/AppEntry.tsx"><\/script>\n        <script defer type="module" src="../pages/index/shared/SmoothScroll.js"><\/script>\n      </body>\n    </html>\n    '])), logoUrl, dangerouslySkipEscape(pageHtml));
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
