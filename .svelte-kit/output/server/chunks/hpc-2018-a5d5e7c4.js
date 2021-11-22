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
  "title": "1st Place, 2018 Houston Policy Challenge",
  "place": "1st Place",
  "award": "2018 Houston Policy Challenge",
  "organization": "Rice University",
  "date": "2018-02-04",
  "featured": false,
  "media_url": "https://www.houstonpublicmedia.org/articles/news/2018/02/27/270232/rice-students-win-flood-policy-contest-for-multi-home-buyout-idea/",
  "project_url": "http://news.rice.edu/2018/02/23/martel-college-students-win-rices-inaugural-houston-centered-policy-challenge/"
};
const Hpc_2018 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place at Rice University\u2019s inaugural Houston Centered Policy Design Competition. Judged by Houston Mayor Pro Tem Ellen Cohen; former president and CEO of the Jewish Federation of Greater Houston, Lee Wunsch; City Council at-large 2 representative, David Robinson; director of Rice\u2019s Kinder Institute for Urban Research, Bill Fulton; and \u201Cflood czar\u201D Stephen Costello.</p>
<p>My partner and I proposed an innovative, multi-home buyout system for the Meyerland community in the wake of Hurricane Harvey. We recommended multi-home buyouts in order to address the \u201Ccheckerboard effect\u201D of home buyouts and also increase community solidarity. Awarded prize money and seed money for implementation.</p>`
  })}`;
});
export { Hpc_2018 as default, metadata };
