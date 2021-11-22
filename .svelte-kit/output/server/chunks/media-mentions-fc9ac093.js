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
  "title": "The Race for Media Attention",
  "description": "Visualizing media coverage of 2020 presidential candidates over time.",
  "date": "2019-11-12",
  "audience": "The world!",
  "featured": false,
  "image": "media-mentions/header.png",
  "img_alt": "Media mentions header image, includes an image of a MacBook with the application open.",
  "techstack": "Observable",
  "github": "https://observablehq.com/@connorrothschild/bar-chart-race",
  "url": "https://observablehq.com/@connorrothschild/bar-chart-race"
};
const Media_mentions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://observablehq.com/@connorrothschild/bar-chart-race/",
      src: "/images/project/media-mentions/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://observablehq.com/@connorrothschild/bar-chart-race"}" rel="${"nofollow"}"><strong>The Race for Media Attention?</strong></a> is an animated bar chart race depicting media mentions of Democratic presidential candidates during the 2020 presidential election. I made it before animated bar chart races were cool (and then <a href="${"https://www.newsbreak.com/news/1465770194170/reddits-dataisbeautiful-is-sick-of-bar-chart-races-so-its-banning-them"}" rel="${"nofollow"}">uncool</a>).</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was built with <a href="${"https://observablehq.com/"}" rel="${"nofollow"}">Observable</a>. It was my first Observable notebook, and mostly an attempt to learn. (It was a fork of Mike Bostock\u2019s existing bar chart race.)</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/media-mentions/mac.png",
      alt: "Project image for 'The Race for Media Attention'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/media-mentions/phone.png",
      alt: "Project image for 'The Race for Media Attention'",
      width: "22%"
    }, {}, {})}`
  })}`;
});
export { Media_mentions as default, metadata };
