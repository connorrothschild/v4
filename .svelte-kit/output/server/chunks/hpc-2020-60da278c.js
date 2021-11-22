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
  "title": "1st Place, 2020 Houston Policy Challenge",
  "place": "1st Place",
  "award": "2020 Houston Policy Challenge",
  "organization": "Rice University",
  "date": "2020-03-09",
  "featured": false,
  "media_url": "https://news.rice.edu/2020/03/02/rice-students-tackle-criminal-justice-reform-at-houston-policy-challenge/"
};
const Hpc_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place (out of 13 teams) at Rice University\u2019s 2020 Houston Policy Challenge. Judged by Harris County Sheriff Ed Gonzalez, Harris County District Attorney Kim Ogg, U.S. Magistrate Judge Andrew Edison, Southern District of Texas, and Judge Franklin Bynum, Harris County Criminal Court at Law No. 8.</p>
<p>My partner and I proposed a pre-trial diversion program, \u2018New Path,\u2019 for pregnant women and mothers of young children.</p>`
  })}`;
});
export { Hpc_2020 as default, metadata };
