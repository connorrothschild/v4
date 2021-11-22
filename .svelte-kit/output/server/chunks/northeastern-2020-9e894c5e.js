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
  "title": "Student Winner, Computation + Journalism 2020 Conference",
  "place": "Student Winner",
  "award": "Computation + Journalism 2020 Conference",
  "organization": "Northeastern University",
  "date": "2020-01-07",
  "featured": true,
  "media_url": "https://cj2020.northeastern.edu/student-contest/",
  "project_url": "https://connorrothschild.shinyapps.io/automation/"
};
const Northeastern_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Honored with the student award for best visualization at the 2020 Computation + Journalism Conference (2020) at Northeastern University. The winning visualization was \u2018<a href="${"https://connorrothschild.shinyapps.io/automation/"}" rel="${"nofollow"}">Automation and Its Impact on Jobs</a>.\u2019</p>`
  })}`;
});
export { Northeastern_2020 as default, metadata };
