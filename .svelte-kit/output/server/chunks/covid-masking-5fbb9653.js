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
  "title": "Mask Wearing in Your County",
  "description": "Visualizing COVID-19 mask usage in your county.",
  "date": "2020-08-01",
  "audience": "The world!",
  "featured": false,
  "image": "covid-masking/header.png",
  "img_alt": "COVID masking header image, includes an image of a MacBook with the application open.",
  "techstack": "Observable",
  "github": "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county",
  "url": "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county"
};
const Covid_masking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county",
      src: "/images/project/covid-masking/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://observablehq.com/@connorrothschild/mask-wearing-in-your-county"}" rel="${"nofollow"}"><strong>Mask Wearing in Your County</strong></a> is an Observable notebook that allows users to explore mask wearing in their county, compared to COVID-19 case counts and mask wearing in other counties.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was exclusively built with <a href="${"https://observablehq.com/"}" rel="${"nofollow"}">Observable</a>. The notebook contains a series of visualizations, each of which build upon the prior. Altogether, the intention is to tell a <em>story</em> about masking, not just create a series of visuals.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/mac-1.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "100%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/mac-2.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "32%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/mac-3.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "32%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/mac-4.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "32%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/phone-1.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "48%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/phone-2.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "48%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/mac-5.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "74%"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/covid-masking/phone-3.png",
      alt: "Project image for 'Mask Wearing in Your County'",
      width: "24%"
    }, {}, {})}`
  })}`;
});
export { Covid_masking as default, metadata };
