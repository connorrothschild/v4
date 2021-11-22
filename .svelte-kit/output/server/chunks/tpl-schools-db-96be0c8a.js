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
  "title": "Texas School District COVID-19 Monitoring Dashboard",
  "description": "Informing data-driven decisions about school reopenings.",
  "date": "2021-05-05",
  "audience": "Texas policymakers, parents",
  "featured": false,
  "archived": true,
  "image": "tpl-schools-db/header.png",
  "img_alt": "TPL header image, includes an image of a MacBook with the application open.",
  "techstack": "R, Shiny",
  "url": "http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/"
};
const Tpl_schools_db = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/",
      src: "/images/project/tpl-schools-db/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/"}" rel="${"nofollow"}"><strong>The Texas School District COVID-19 Monitoring Dashboard</strong></a> was a dashboard built by my team at the Texas Policy Lab for Texas policymakers (and any other interested parties) to survey the landscape of COVID-19 in their school districts.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>The app is built with R and is a Shiny web application. I was mostly responsible for the frontend development and some design. I helped less with the backend data retrieval, wrangling, and testing.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/tpl-schools-db/mac-1.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "49%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/tpl-schools-db/mac-2.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "49%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/tpl-schools-db/iphone-1.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "31%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/tpl-schools-db/iphone-2.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "31%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/tpl-schools-db/iphone-3.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "31%"
    }, {}, {})}`
  })}`;
});
export { Tpl_schools_db as default, metadata };
