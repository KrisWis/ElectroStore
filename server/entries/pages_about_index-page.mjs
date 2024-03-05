import { jsxs, Fragment, jsx } from "react/jsx-runtime";
const code = "";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Example of using ",
      /* @__PURE__ */ jsx("code", { children: "vite-plugin-ssr" }),
      "."
    ] })
  ] });
}
export {
  Page
};
