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
  "title": "1st Place (Houston Track), 2020 Rice Datathon",
  "place": "1st Place (Houston Track)",
  "place_code": "gold",
  "award": "2020 Rice Datathon",
  "organization": "Rice DataSci Club",
  "date": "2020-01-09",
  "featured": false,
  "media_url": "https://connorrothschild.github.io/datathon-2020/source/",
  "project_url": "https://connorrothschild.github.io/datathon-2020/source/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place in the \u2018Houston/Texas trends\u2019 track at the 2020 Rice Datathon. The winning project, \u2019<a href="${"https://connorrothschild.github.io/datathon-2020/source/"}" rel="${"nofollow"}">Mapping Houston Homicides</a>,\u2019 created in 16 hours, maps Houston homicides across time and demographics.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
