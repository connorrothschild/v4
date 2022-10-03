import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/IntersectionObserver.js";
const metadata = {
  "title": "Winner, The 2020 Pudding Cup",
  "place": "Winner",
  "place_code": "gold",
  "award": "The 2020 Pudding Cup",
  "organization": "The Pudding",
  "featured": true,
  "date": "2021-01-07",
  "media_url": "https://pudding.cool/process/pudding-cup-2020/",
  "project_url": "https://connorrothschild.github.io/cudi-hums/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded winner (top 3) out of 130+ entries to the 2020 Pudding Cup, which is a contest for visual storytelling pieces. My piece, \u2019<a href="${"https://connorrothschild.github.io/cudi-hums/"}" rel="${"nofollow"}">How Much Does Kid Cudi Hum?</a>\u2019 explored the prevalence of hums in Kid Cudi\u2019s discography.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
