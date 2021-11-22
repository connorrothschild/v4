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
  "name": "Texas Policy Lab",
  "imageUrl": "tpl",
  "order": 4,
  "description": '<p>The Lab is where I first transitioned into data science by teaching myself R, and eventually assumed the position of Senior Data Science Intern. I worked directly with our lead data scientist on dashboards, static reports, and standalone analyses for our government partners. </p> <p><a href="https://www.texaspolicylab.org/" target="_blank" rel="noopener noreferrer">Learn more about TPL</a>.</p>'
};
const Tpl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>My first formative data science experience was with the Texas Policy Lab. I joined TPL as a research intern and slowly made my way into data science as I taught myself R.</p>
<p>At the Lab, I eventually assumed the position of Senior Data Science Intern. I worked directly with our lead data scientist on dashboards, static reports, and standalone analyses for our government partners. </p>
<p>We used a variety of tools, such as PowerBI and R Shiny, to build dashboards for partners like the Texas Juvenile Justice Department, the Texas Department of Family Protective Services, and the Texas Department of Criminal Justice.</p>
<p><a href="${"https://www.texaspolicylab.org/"}" rel="${"nofollow"}">Learn more about TPL</a>.</p>`
  })}`;
});
export { Tpl as default, metadata };
