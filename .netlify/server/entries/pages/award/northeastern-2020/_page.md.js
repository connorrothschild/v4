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
  "title": "Student Winner, Computation + Journalism 2020 Conference",
  "place": "Student Winner",
  "place_code": "gold",
  "award": "Computation + Journalism 2020 Conference",
  "organization": "Northeastern University",
  "date": "2020-01-07",
  "featured": true,
  "media_url": "https://cj2020.northeastern.edu/student-contest/",
  "project_url": "https://connorrothschild.shinyapps.io/automation/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Honored with the student award for best visualization at the 2020 Computation + Journalism Conference (2020) at Northeastern University. The winning visualization was \u2018<a href="${"https://connorrothschild.shinyapps.io/automation/"}" rel="${"nofollow"}">Automation and Its Impact on Jobs</a>.\u2019</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
