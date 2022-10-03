import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout4.js";
import { I as Image } from "../../../../chunks/Image.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      */const metadata = {
  "layout": "project",
  "title": "Texas School District COVID-19 Monitoring Dashboard",
  "description": "Informing data-driven decisions about school reopenings.",
  "date": "2021-05-05",
  "audience": "Texas policymakers, parents",
  "featured": false,
  "archived": true,
  "image": "tpl-schools-db/header.png",
  "img_alt": "TPL header image, includes an image of a MacBook with the application open.",
  "techstack": ["R", "Shiny"],
  "url": "http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/",
          src: "/images/project/tpl-schools-db/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"http://news.rice.edu/2021/05/05/dashboard-developed-at-rice-will-help-texas-schools-open-safely-amid-pandemic/"}" rel="${"nofollow"}"><strong>The Texas School District COVID-19 Monitoring Dashboard</strong></a> was a dashboard built by my team at the Texas Policy Lab for Texas policymakers (and any other interested parties) to survey the landscape of COVID-19 in their school districts.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>The app is built with R and is a Shiny web application. I was mostly responsible for the frontend development and some design. I helped less with the backend data retrieval, wrangling, and testing.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/tpl-schools-db/mac-1.png",
          alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
          width: "49%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/tpl-schools-db/mac-2.png",
          alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
          width: "49%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/tpl-schools-db/iphone-1.png",
          alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
          width: "31%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/tpl-schools-db/iphone-2.png",
          alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
          width: "31%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/tpl-schools-db/iphone-3.png",
          alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
          width: "31%"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
