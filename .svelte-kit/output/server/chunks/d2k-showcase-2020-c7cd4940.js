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
  "title": "2nd Place, 2020 D2K Showcase",
  "place": "2nd Place",
  "award": "2020 D2K Showcase",
  "organization": "Data to Knowledge Lab",
  "date": "2020-12-09",
  "featured": false,
  "media_url": "https://d2k.rice.edu/news/closing-gap-data-science-approach-reducing-academic-achievement-gaps",
  "project_url": "https://www.youtube.com/watch?v=6T5C4omYexs"
};
const D2k_showcase_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded second place out of 10+ teams in the 2020 Data to Knowledge Lab\u2019s showcase. My team provided a data science approach to predicting student engagement and success, allowing teachers to preemptively intervene in students academic careers and prevent failure.</p>`
  })}`;
});
export { D2k_showcase_2020 as default, metadata };
