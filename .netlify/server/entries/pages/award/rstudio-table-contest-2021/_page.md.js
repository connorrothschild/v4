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
  "title": "Honorable Mention, RStudio Table Contest",
  "place": "Honorable Mention",
  "place_code": "bronze",
  "award": "RStudio Table Contest",
  "organization": "RStudio, Inc.",
  "date": "2021-01-06",
  "featured": false,
  "media_url": "https://blog.rstudio.com/2020/12/23/winners-of-the-2020-rstudio-table-contest/",
  "project_url": "https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Received an honorable mention in the 2020 RStudio Table Contest out of 80+ entries. My entry was a tutorial regarding the replication of a table by the Economist, using an R package called <code>reactable</code>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
