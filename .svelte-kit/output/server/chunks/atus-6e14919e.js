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
  "title": "I Can Guess What You're Doing Right Now",
  "description": "Using the American Time Use Survey to predict your daily activities.",
  "date": "2020-02-23",
  "audience": "The world!",
  "featured": false,
  "archived": true,
  "image": "atus/header.png",
  "img_alt": "ATUS header image, includes an image of a MacBook with the application open.",
  "techstack": "JavaScript, Bulma, R",
  "github": "https://github.com/connorrothschild/what-are-you-doing",
  "url": "https://connorrothschild.github.io/what-are-you-doing/"
};
const Atus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://connorrothschild.github.io/what-are-you-doing/",
      src: "/images/project/atus/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://connorrothschild.github.io/what-are-you-doing/"}" rel="${"nofollow"}"><strong>What Are You Doing Right Now?</strong></a> is an application that leverages data from the American Time Use Survey to guess your current activities.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was built using vanilla JavaScript, and styling was done with assistance from <a href="${"https://bulma.io/"}" rel="${"nofollow"}">Bulma</a>. It was rather easy to build. It was one of my first JS projects and so it was mostly an attempt to learn \u{1F642}.</p>
<p>Methodologically, for each demographic profile (a combination of race, age, marital status), I found the most common activities at every given time. (Technically, I grouped per hour to prevent issues with low N\u2019s). I would then display that activity to the user, given their parameters. If that didn\u2019t fit (according to the user), I would show the second most common activity, and so on!</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/atus/mac-1.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/atus/phone-1.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "22%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/atus/phone-2.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "22%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/atus/mac-2.png",
      alt: "Project image for the project 'I Can Guess What You're Doing Right Now'",
      width: "74%"
    }, {}, {})}`
  })}`;
});
export { Atus as default, metadata };
