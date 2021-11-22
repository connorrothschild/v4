import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-23bca642.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./IntersectionObserver-89b2e997.js";
const metadata = {
  "layout": "experience",
  "name": "Axios",
  "imageUrl": "axios",
  "order": 2,
  "description": '<p>I worked as a visual journalist at Axios in the summer after graduating. While there, I created a variety of visualizations for journalists and even had the opportunity to write a few of my own stories!</p> <p><a href="https://muckrack.com/connor-rothschild-1" target="_blank" rel="noopener noreferrer">Find all my stories here.</a></p>'
};
const Axios = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>I worked as a visual journalist at Axios in the summer after graduating. While there, I created a variety of visualizations for journalists and even had the opportunity to write a few of my own stories!</p>
<p>Here are some of my favorite visuals I created in my tenure there:</p>
<ul><li><a href="${"https://www.axios.com/olympics-medal-count-usa-tokyo-762804df-d836-4fb2-8407-9a9c5b273643.html"}" rel="${"nofollow"}">The Olympic medals tracker</a></li>
<li><a href="${"https://www.axios.com/olympic-winners-a1912446-22ef-4c2a-9fda-85bfe8dedb08.html"}" rel="${"nofollow"}">Olympic winners, over time</a></li>
<li><a href="${"https://www.axios.com/diversity-majority-minority-white-american-census-bd181b53-f170-40b2-9913-dd43363e1aaf.html"}" rel="${"nofollow"}">More than 400 U.S. counties are now minority white</a></li>
<li><a href="${"https://www.axios.com/coronavirus-vaccines-vulnerability-states-outbreaks-variants-b418fe6d-31f6-4790-9d79-bd7c4d747dd3.html?utm_source=twitter&utm_medium=social&utm_campaign=editorial&utm_content=health-statesvaccines"}" rel="${"nofollow"}">States most vulnerable to COVID are also some of the least vaccinated</a></li>
<li><a href="${"https://www.axios.com/partisan-media-biden-trump-26f54a8b-d4e2-4319-a185-bd5f55ac661f.html"}" rel="${"nofollow"}">Boring news cycle deals blow to partisan media</a></li></ul>
<p><a href="${"https://muckrack.com/connor-rothschild-1"}" rel="${"nofollow"}">Find all my stories here.</a></p>`
  })}`;
});
export { Axios as default, metadata };
