import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-43f95667.js";
import { I as Image } from "./Image-8bdf2a2d.js";
import "./CornerTitle-1139e2b5.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                              */const metadata = {
  "layout": "project",
  "title": "How Much Does Your State Spend on Police?",
  "description": "Contextualizing police spending in your state.",
  "date": "2020-06-02",
  "audience": "The world!",
  "featured": false,
  "image": "state-police-spending/header.png",
  "img_alt": "State police spending header, includes an image of a MacBook with the application open.",
  "techstack": "D3.js",
  "github": "https://github.com/connorrothschild/state-police-spending",
  "url": "https://connorrothschild.github.io/state-police-spending/"
};
const State_police_spending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://connorrothschild.github.io/state-police-spending/",
      src: "/images/project/state-police-spending/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://connorrothschild.github.io/state-police-spending/"}" rel="${"nofollow"}"><strong>How Much Does Your State Spend on Police?</strong></a> allows users to compare their state\u2019s police spending to a variety of equivalent costing programs, such as residential drug treatment programs or additional SNAP recipients. The goal is to contextualize police spending in numbers that everyone can understand, in particular by comparing it to other known programs.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>I used <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3.js</a> for the minor visualization that accompanies these numbers. The rest of the computation is done by simply dividing the state\u2019s police spending by a specified denominator, one for each metric. This was a technically simple project. The goal is not to amaze, but to provide simple, easy comparisons that better inform the user about their state\u2019s police spending.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/state-police-spending/mac.png",
      alt: "Project image for 'How Much Does Your State Spend on Police?'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/state-police-spending/phone.png",
      alt: "Project image for 'How Much Does Your State Spend on Police?'",
      width: "22%"
    }, {}, {})}`
  })}`;
});
export { State_police_spending as default, metadata };
