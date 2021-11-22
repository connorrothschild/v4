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
  "title": "1st Place, BIPP Competition",
  "place": "1st Place",
  "award": "BIPP Competition",
  "organization": "The Baker Institute for Public Policy",
  "date": "2018-04-15",
  "featured": false,
  "media_url": "https://mailchi.mp/rice.edu/gala-547673?e=a93e1ef59d#AnnualReport",
  "project_url": "https://issuu.com/ricejpp/docs/rjppfinalsingle/20"
};
const Bipp_2018 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place in the Baker Institute Student Forum\u2019s fifth annual undergraduate public policy competition. Judged by Dr. Luis Duno-Gottberg, Dr. Francisco J. Monaldi, H. Richard Sindelar, and Oscar Arredondo.</p>
<p>The award was in recognition of a 6000-word research paper and a 20 minute presentation on U.S. foreign policy toward the Western Hemisphere; my partner and I\u2019s paper critiqued current mechanisms for distributing food aid to Haiti. Awarded prize money and publication in the Rice Journal of Public Policy (Spring 2019 issue).</p>`
  })}`;
});
export { Bipp_2018 as default, metadata };
