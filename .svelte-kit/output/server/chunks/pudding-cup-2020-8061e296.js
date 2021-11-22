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
  "title": "Winner, The 2020 Pudding Cup",
  "place": "Winner",
  "award": "The 2020 Pudding Cup",
  "organization": "The Pudding",
  "featured": true,
  "date": "2021-01-07",
  "media_url": "https://pudding.cool/process/pudding-cup-2020/",
  "project_url": "https://connorrothschild.github.io/cudi-hums/"
};
const Pudding_cup_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded winner (top 3) out of 130+ entries to the 2020 Pudding Cup, which is a contest for visual storytelling pieces. My piece, \u2019<a href="${"https://connorrothschild.github.io/cudi-hums/"}" rel="${"nofollow"}">How Much Does Kid Cudi Hum?</a>\u2019 explored the prevalence of hums in Kid Cudi\u2019s discography.</p>`
  })}`;
});
export { Pudding_cup_2020 as default, metadata };
