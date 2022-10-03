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
  "title": "1st Place, 2020 Houston Policy Challenge",
  "place": "1st Place",
  "place_code": "gold",
  "award": "2020 Houston Policy Challenge",
  "organization": "Rice University",
  "date": "2020-03-09",
  "featured": false,
  "media_url": "https://news.rice.edu/2020/03/02/rice-students-tackle-criminal-justice-reform-at-houston-policy-challenge/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place (out of 13 teams) at Rice University\u2019s 2020 Houston Policy Challenge. Judged by Harris County Sheriff Ed Gonzalez, Harris County District Attorney Kim Ogg, U.S. Magistrate Judge Andrew Edison, Southern District of Texas, and Judge Franklin Bynum, Harris County Criminal Court at Law No. 8.</p>
<p>My partner and I proposed a pre-trial diversion program, \u2018New Path,\u2019 for pregnant women and mothers of young children.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
