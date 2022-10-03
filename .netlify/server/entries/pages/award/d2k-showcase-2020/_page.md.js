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
  "title": "2nd Place, 2020 D2K Showcase",
  "place": "2nd Place",
  "place_code": "silver",
  "award": "2020 D2K Showcase",
  "organization": "Data to Knowledge Lab",
  "date": "2020-12-09",
  "featured": false,
  "media_url": "https://d2k.rice.edu/news/closing-gap-data-science-approach-reducing-academic-achievement-gaps",
  "project_url": "https://www.youtube.com/watch?v=6T5C4omYexs"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded second place out of 10+ teams in the 2020 Data to Knowledge Lab\u2019s showcase. My team provided a data science approach to predicting student engagement and success, allowing teachers to preemptively intervene in students academic careers and prevent failure.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
