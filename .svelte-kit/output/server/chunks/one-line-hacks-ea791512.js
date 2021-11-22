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
  "title": "One Line Hacks",
  "description": "A collection of random utilities that I find myself Googling too often.",
  "date": "2021-05-01",
  "audience": "The world!",
  "featured": false,
  "image": "one-line-hacks/header.png",
  "img_alt": "One line hacks header image, includes an image of a MacBook with the application open.",
  "techstack": "JavaScript, Vue, Tailwind",
  "github": "https://connorrothschild.github.io/one-line-hacks/",
  "url": "https://connorrothschild.github.io/one-line-hacks/"
};
const One_line_hacks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://connorrothschild.github.io/one-line-hacks/",
      src: "/images/project/one-line-hacks/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://connorrothschild.github.io/one-line-hacks/"}" rel="${"nofollow"}"><strong>One Line Hacks</strong></a> is a collection of random utilities and functions that I find myself Googling too often.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This small site was built with Vue and Tailwind. I use Nuxt and Nuxt Content for Markdown-based content creation.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/one-line-hacks/mac-1.png",
      alt: "Project image for the project 'One Line Hacks'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/one-line-hacks/phone-1.png",
      alt: "Project image for the project 'One Line Hacks'",
      width: "22%"
    }, {}, {})}`
  })}`;
});
export { One_line_hacks as default, metadata };
