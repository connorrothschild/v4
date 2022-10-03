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
  "title": "Bronze, 2021 Malofiej Awards",
  "place": "Bronze",
  "place_code": "bronze",
  "award": "2021 Malofiej Awards",
  "organization": "Malofiej",
  "date": "2021-06-18",
  "featured": false,
  "media_url": "https://web.archive.org/web/20210618094613/https://www.malofiejgraphics.com/awards/students-have-won-awards-too-2/2021/06",
  "project_url": "https://www.connorrothschild.com/project/bob-ross-art-gallery"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded the Bronze in the Student Category at the 29th Annual Malofiej Awards (the self-described \u201CPulitzer for Infographics\u201D). The award was in recognition of my project, <a href="${"https://www.connorrothschild.com/project/bob-ross-art-gallery"}" rel="${"nofollow"}">The Bob Ross Virtual Art Gallery.</a></p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
