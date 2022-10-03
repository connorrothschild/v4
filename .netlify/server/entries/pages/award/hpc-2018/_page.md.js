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
  "title": "1st Place, 2018 Houston Policy Challenge",
  "place": "1st Place",
  "place_code": "gold",
  "award": "2018 Houston Policy Challenge",
  "organization": "Rice University",
  "date": "2018-02-04",
  "featured": false,
  "media_url": "https://www.houstonpublicmedia.org/articles/news/2018/02/27/270232/rice-students-win-flood-policy-contest-for-multi-home-buyout-idea/",
  "project_url": "http://news.rice.edu/2018/02/23/martel-college-students-win-rices-inaugural-houston-centered-policy-challenge/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place at Rice University\u2019s inaugural Houston Centered Policy Design Competition. Judged by Houston Mayor Pro Tem Ellen Cohen; former president and CEO of the Jewish Federation of Greater Houston, Lee Wunsch; City Council at-large 2 representative, David Robinson; director of Rice\u2019s Kinder Institute for Urban Research, Bill Fulton; and \u201Cflood czar\u201D Stephen Costello.</p>
<p>My partner and I proposed an innovative, multi-home buyout system for the Meyerland community in the wake of Hurricane Harvey. We recommended multi-home buyouts in order to address the \u201Ccheckerboard effect\u201D of home buyouts and also increase community solidarity. Awarded prize money and seed money for implementation.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
