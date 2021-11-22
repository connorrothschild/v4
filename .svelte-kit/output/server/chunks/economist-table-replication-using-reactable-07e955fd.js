import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
import { I as Image } from "./Image-8bdf2a2d.js";
/* empty css                                             */import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./CornerTitle-1139e2b5.js";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                              */const metadata = {
  "layout": "blog",
  "title": "Recreating a Table by The Economist Using Reactable",
  "description": "Recreating a table by The Economist entirely in R, using reactable",
  "date": "2020-05-02",
  "image": "economist-table-replication-using-reactable/header.png",
  "archived": true,
  "tags": ["r", "tutorial"]
};
const Economist_table_replication_using_reactable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Thanks for visiting this blog post, but it has moved! It can be found in its fully interactive form <a href="${"https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable/"}" rel="${"nofollow"}">here</a>.</p>
<p><a href="${"https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable/"}" rel="${"nofollow"}">${validate_component(Image, "Image").$$render($$result, {
      alt: "A table depicting excess deaths by country during 2020.",
      src: "../images/post/economist-table-replication-using-reactable/featured.png"
    }, {}, {})}</a></p>`
  })}`;
});
export { Economist_table_replication_using_reactable as default, metadata };
