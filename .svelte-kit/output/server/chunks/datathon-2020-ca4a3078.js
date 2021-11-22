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
  "title": "1st Place (Houston Track), 2020 Rice Datathon",
  "place": "1st Place (Houston Track)",
  "award": "2020 Rice Datathon",
  "organization": "Rice DataSci Club",
  "date": "2020-01-09",
  "featured": false,
  "media_url": "https://connorrothschild.github.io/datathon-2020/source/",
  "project_url": "https://connorrothschild.github.io/datathon-2020/source/"
};
const Datathon_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place in the \u2018Houston/Texas trends\u2019 track at the 2020 Rice Datathon. The winning project, \u2019<a href="${"https://connorrothschild.github.io/datathon-2020/source/"}" rel="${"nofollow"}">Mapping Houston Homicides</a>,\u2019 created in 16 hours, maps Houston homicides across time and demographics.</p>`
  })}`;
});
export { Datathon_2020 as default, metadata };
