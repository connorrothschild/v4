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
  "title": "1st Place, 2021 Student Design Contest",
  "place": "1st Place",
  "award": "2021 Student Design Contest",
  "organization": "Society for News Design",
  "date": "2021-05-10",
  "featured": true,
  "media_url": "https://msusnd.org/2021-college-design-contest/",
  "project_url": "https://connorrothschild.github.io/bob-ross-art-gallery/"
};
const Snd_2021 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded first place in the Standalone Multimedia category at the Society for News Design\u2019s 2021 Student Design Contest. </p>
<p>The award was in recognition of my project, <a href="${"https://connorrothschild.com/project/bob-ross-art-gallery/"}" rel="${"nofollow"}">The Bob Ross Virtual Art Gallery</a>. The project is a visual essay documenting the legacy of Bob Ross.</p>`
  })}`;
});
export { Snd_2021 as default, metadata };
