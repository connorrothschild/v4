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
  "title": "1st Place, Coronavirus Houston Response Projects",
  "place": "1st Place",
  "award": "Coronavirus Houston Response Projects",
  "organization": "Data To Knowledge Lab",
  "date": "2020-04-15",
  "featured": true,
  "media_url": "https://news.rice.edu/2020/04/27/d2k-lab-awards-top-teams-at-virtual-showcase/",
  "project_url": "https://github.com/connorrothschild/covid-mobility"
};
const Chrp_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place in the Rice Data to Knowledge Lab\u2019s \u2018COVID19 Houston Response Projects\u2019 competition. My team\u2019s project, \u201CMobility and Predictors of Movement During COVID-19,\u201D was a rigorous statistical analysis of how COVID19 impacted community movement, mobility, and social distancing. It took the form of a Shiny Web Application, where users could explore the effects of stay-at-home orders at reducing commnunity movement and COVID-19 transmission.</p>`
  })}`;
});
export { Chrp_2020 as default, metadata };
