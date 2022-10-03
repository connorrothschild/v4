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
  "title": "1st Place, BIPP Competition",
  "place": "1st Place",
  "place_code": "gold",
  "award": "BIPP Competition",
  "organization": "The Baker Institute for Public Policy",
  "date": "2018-04-15",
  "featured": false,
  "media_url": "https://mailchi.mp/rice.edu/gala-547673?e=a93e1ef59d#AnnualReport",
  "project_url": "https://issuu.com/ricejpp/docs/rjppfinalsingle/20"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place in the Baker Institute Student Forum\u2019s fifth annual undergraduate public policy competition. Judged by Dr. Luis Duno-Gottberg, Dr. Francisco J. Monaldi, H. Richard Sindelar, and Oscar Arredondo.</p>
<p>The award was in recognition of a 6000-word research paper and a 20 minute presentation on U.S. foreign policy toward the Western Hemisphere; my partner and I\u2019s paper critiqued current mechanisms for distributing food aid to Haiti. Awarded prize money and publication in the Rice Journal of Public Policy (Spring 2019 issue).</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
