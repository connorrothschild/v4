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
  "title": "Honorable Mention, RStudio Table Contest",
  "place": "Honorable Mention",
  "award": "RStudio Table Contest",
  "organization": "RStudio, Inc.",
  "date": "2021-01-06",
  "featured": false,
  "media_url": "https://blog.rstudio.com/2020/12/23/winners-of-the-2020-rstudio-table-contest/",
  "project_url": "https://connorrothschild.github.io/v2/post/economist-table-replication-using-reactable"
};
const Rstudio_table_contest_2021 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Received an honorable mention in the 2020 RStudio Table Contest out of 80+ entries. My entry was a tutorial regarding the replication of a table by the Economist, using an R package called <code>reactable</code>.</p>`
  })}`;
});
export { Rstudio_table_contest_2021 as default, metadata };
