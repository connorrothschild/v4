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
  "title": "Bronze, 2020 Malofiej Awards",
  "place": "Bronze",
  "place_code": "bronze",
  "award": "2020 Malofiej Awards",
  "organization": "Malofiej",
  "date": "2020-08-07",
  "featured": true,
  "media_url": "https://web.archive.org/web/20210121150713/https://www.malofiejgraphics.com/general/students-have-won-awards-too/2020/08",
  "project_url": "https://connorrothschild.github.io/map-missing-migrants/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded the Bronze in the Student Category at the 28th Annual Malofiej Awards (the self-described \u201CPulitzer for Infographics\u201D). The award was in recognition of my visualization <a href="${"https://connorrothschild.github.io/map-missing-migrants/"}" rel="${"nofollow"}">Mapping Missing Migrants</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
