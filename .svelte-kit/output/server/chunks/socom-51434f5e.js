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
  "name": "USSOCOM",
  "imageUrl": "socom",
  "order": 3,
  "description": '<p>I spent the summer of 2020 as a data science intern with the <a href="https://www.socom.mil/" target="_blank" rel="noopener noreferrer">US Special Operations Command</a>. During the tenure of my internship, I built a full stack web application that automated the process of verifying inventory data. This tool is estimated to save roughly 2,500 man hours and $102,000 annually.</p> <p><a href="https://www.fedscoop.com/socom-internships-colleges-students-coding-it-forward/" target="_blank" rel="noopener noreferrer">Read more about the experience</a>.</p>'
};
const Socom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>I spent the summer of 2020 as a data science intern with the <a href="${"https://www.socom.mil/"}" rel="${"nofollow"}">US Special Operations Command</a>. I was matched with USSOCOM through <a href="${"https://www.codingitforward.com/"}" rel="${"nofollow"}">Coding it Forward</a>, a prestigious fellowship that matches technical students with government agencies in need of assistance.</p>
<p>During the tenure of my internship, I built a full stack web application that automated the process of verifying inventory data. This tool is estimated to save roughly 2,500 man hours and $102,000 annually.</p>
<p><a href="${"https://www.fedscoop.com/socom-internships-colleges-students-coding-it-forward/"}" rel="${"nofollow"}">Read more about the experience</a>.</p>`
  })}`;
});
export { Socom as default, metadata };
