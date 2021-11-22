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
  "title": "The Bob Ross Virtual Art Gallery",
  "description": "A visual, virtual tour of every piece in The Joy of Painting.",
  "date": "2021-03-22",
  "audience": "The world!",
  "featured": true,
  "image": "bob-ross-art-gallery/header.png",
  "img_alt": 'A header image that says "The Bob Ross (virtual) Art Gallery"',
  "techstack": "D3.js, Svelte, R, Scrollama",
  "github": "https://github.com/connorrothschild/bob-ross-art-gallery/",
  "url": "https://connorrothschild.github.io/bob-ross-art-gallery/"
};
const Bob_ross_art_gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://connorrothschild.github.io/bob-ross-art-gallery/",
      src: "/images/project/bob-ross-art-gallery/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://connorrothschild.github.io/bob-ross-art-gallery/"}" rel="${"nofollow"}"><strong>The Bob Ross Virtual Art Gallery</strong></a> is a visual storytelling piece analyzing Bob Ross\u2019 series <em>The Joy of Painting</em>. </p>

<p>It has since been retired due to a cease and desist from Bob Ross, Inc. Before that, it attracted media attention from <a href="${"https://www.yahoo.com/now/bob-ross-virtual-gallery-offers-195835693.html"}" rel="${"nofollow"}">Yahoo</a>, <a href="${"https://nerdist.com/article/bob-ross-virtual-gallery-art/"}" rel="${"nofollow"}">Nerdist</a>, <a href="${"https://www.openculture.com/2021/06/the-bob-ross-virtual-art-gallery.html"}" rel="${"nofollow"}">OpenCulture</a>, <a href="${"https://www.fatherly.com/play/bob-ross-virtual-art-gallery-perfect-relax/"}" rel="${"nofollow"}">Fatherly</a>, <a href="${"https://designtaxi.com/news/414284/Bob-Ross-Virtual-Art-Gallery-Lets-You-Take-A-Happy-Little-Break-To-See-His-Art/"}" rel="${"nofollow"}">DesignTaxi</a>, <a href="${"https://flowingdata.com/2021/06/01/colors-of-bob-ross-explored/"}" rel="${"nofollow"}">FlowingData</a> and others. It also won first place in the Standalone Multimedia category at the Society for News Design\u2019s <a href="${"https://msusnd.org/2021-college-design-contest/"}" rel="${"nofollow"}">2021 Student Design Contest</a>.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>I used <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a> and <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3.js</a> for all things visual and front-end. I used The Pudding\u2019s <a href="${"https://github.com/the-pudding/svelte-starter"}" rel="${"nofollow"}">Svelte Starter template</a> which made configuration much easier, and made a lot of the visual aspects of the project less difficult to create (e.g. their <code>Window</code> component simplified resize events a ton).</p>
<p>For the scroll-based interactions, I used Russell Goldenberg\u2019s <a href="${"https://github.com/russellgoldenberg/scrollama"}" rel="${"nofollow"}">Scrollama</a>. As of the creation of this project, there is no formal or official Svelte-based scrollytelling library. I therefore used Scrollama in its vanilla form, and plugged it into the Svelte component as if I were writing normal JavaScript.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/mac-1.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/iphone-1.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "22%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/iphone-2.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "22%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/mac-2.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/iphone-3.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "18%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/mac-3.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "58%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/iphone-4.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "18%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/mac-4.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "48%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/bob-ross-art-gallery/mac-5.png",
      alt: "Project image for 'The Bob Ross Virtual Art Gallery'",
      width: "48%"
    }, {}, {})}
`
  })}`;
});
export { Bob_ross_art_gallery as default, metadata };
