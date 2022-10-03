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
  "title": "1st Place, Coronavirus Houston Response Projects",
  "place": "1st Place",
  "place_code": "gold",
  "award": "Coronavirus Houston Response Projects",
  "organization": "Data To Knowledge Lab",
  "date": "2020-04-15",
  "featured": true,
  "media_url": "https://news.rice.edu/2020/04/27/d2k-lab-awards-top-teams-at-virtual-showcase/",
  "project_url": "https://github.com/connorrothschild/covid-mobility"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place in the Rice Data to Knowledge Lab\u2019s \u2018COVID19 Houston Response Projects\u2019 competition. My team\u2019s project, \u201CMobility and Predictors of Movement During COVID-19,\u201D was a rigorous statistical analysis of how COVID19 impacted community movement, mobility, and social distancing. It took the form of a Shiny Web Application, where users could explore the effects of stay-at-home orders at reducing commnunity movement and COVID-19 transmission.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
