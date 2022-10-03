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
  "title": "1st Place, 2021 Student Design Contest",
  "place": "1st Place",
  "place_code": "gold",
  "award": "2021 Student Design Contest",
  "organization": "Society for News Design",
  "date": "2021-05-10",
  "featured": true,
  "media_url": "https://msusnd.org/2021-college-design-contest/",
  "project_url": "https://connorrothschild.github.io/bob-ross-art-gallery/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded first place in the Standalone Multimedia category at the Society for News Design\u2019s 2021 Student Design Contest. </p>
<p>The award was in recognition of my project, <a href="${"https://connorrothschild.com/project/bob-ross-art-gallery/"}" rel="${"nofollow"}">The Bob Ross Virtual Art Gallery</a>. The project is a visual essay documenting the legacy of Bob Ross.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
