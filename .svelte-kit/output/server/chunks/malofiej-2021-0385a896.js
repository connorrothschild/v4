import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-cacdbe7f.js";
import "./CornerTitle-1139e2b5.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
const metadata = {
  "title": "Bronze, 2021 Malofiej Awards",
  "place": "Bronze",
  "award": "2021 Malofiej Awards",
  "organization": "Malofiej",
  "date": "2021-06-18",
  "featured": false,
  "media_url": "https://web.archive.org/web/20210618094613/https://www.malofiejgraphics.com/awards/students-have-won-awards-too-2/2021/06",
  "project_url": "https://www.connorrothschild.com/project/bob-ross-art-gallery"
};
const Malofiej_2021 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded the Bronze in the Student Category at the 29th Annual Malofiej Awards (the self-described \u201CPulitzer for Infographics\u201D). The award was in recognition of my project, <a href="${"https://www.connorrothschild.com/project/bob-ross-art-gallery"}" rel="${"nofollow"}">The Bob Ross Virtual Art Gallery.</a></p>`
  })}`;
});
export { Malofiej_2021 as default, metadata };
