import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
/* empty css                                                     */import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      */const metadata = {
  "layout": "blog",
  "title": "Recreating a Table by The Economist Using Reactable",
  "description": "Recreating a table by The Economist entirely in R, using <code>reactable</code>",
  "date": "2020-05-02",
  "image": "economist-table-replication-using-reactable/header.png",
  "archived": true,
  "tags": ["r", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Thanks for visiting this blog post, but it has moved! It can be found in its fully interactive form <a href="${"https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable/"}" rel="${"nofollow"}">here</a>.</p>
<p><a href="${"https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable/"}" rel="${"nofollow"}">${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A table depicting excess deaths by country during 2020.",
          src: "/images/post/economist-table-replication-using-reactable/featured.png"
        },
        {},
        {}
      )}</a></p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
