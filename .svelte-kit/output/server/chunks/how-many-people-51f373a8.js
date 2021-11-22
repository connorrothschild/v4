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
  "title": "How Many People Have Had COVID-19?",
  "description": "A novel way to visualize COVID-19 case counts.",
  "date": "2020-11-06",
  "audience": "The world!",
  "featured": false,
  "image": "how-many-people/header.png",
  "img_alt": "An example screen of the 'How Many People' application",
  "techstack": "D3.js, Vue.js, Bulma",
  "github": "https://github.com/connorrothschild/how-many-people",
  "url": "https://connorrothschild.github.io/how-many-people"
};
const How_many_people = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://connorrothschild.github.io/how-many-people",
      src: "/images/project/how-many-people/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://connorrothschild.github.io/how-many-people"}" rel="${"nofollow"}">How Many People Have Had COVID-19?</a> is a small web application that visualizes COVID-19 case counts in a novel way: via state populations. The application\u2019s user can see cases either in the US or globally. The goal is to capture case counts with some comparison that everyone can understand.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This application was built with <a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a>. The minimal styling was thanks to <a href="${"https://bulma.io/"}" rel="${"nofollow"}">Bulma</a>, my framework of choice recently. The application was simpler than some others I have built (there were only <a href="${"https://github.com/connorrothschild/how-many-people/tree/master/src/components"}" rel="${"nofollow"}">three components</a>). It was mostly a fun exercise to play around with SVGs and Vue, and also an exercise to better handle user interactions. The tool needed to be robust to many changes, including 1) the adding of state populations together, 2) a \u2018ceiling\u2019 (the case counts) that state populations could not exceed, 3) resets on toggle of US/global views.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/how-many-people/mac-1.png",
      alt: "Project image for 'How Many People Have COVID-19??'"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/how-many-people/mac-2.png",
      alt: "Project image for 'How Many People Have COVID-19??'"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/how-many-people/phone-1.png",
      alt: "Project image for 'How Many People Have COVID-19??'",
      width: "48%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/how-many-people/phone-2.png",
      alt: "Project image for 'How Many People Have COVID-19??'",
      width: "48%"
    }, {}, {})}`
  })}`;
});
export { How_many_people as default, metadata };
