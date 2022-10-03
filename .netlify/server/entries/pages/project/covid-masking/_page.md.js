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
  "title": "Mask Wearing in Your County",
  "description": "Visualizing COVID-19 mask usage in your county.",
  "date": "2020-08-01",
  "audience": "The world!",
  "featured": false,
  "image": "covid-masking/header.png",
  "img_alt": "COVID masking header image, includes an image of a MacBook with the application open.",
  "techstack": ["Observable"],
  "github": "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county",
  "url": "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://observablehq.com/@connorrothschild/mask-wearing-in-your-county",
          src: "/images/project/covid-masking/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://observablehq.com/@connorrothschild/mask-wearing-in-your-county"}" rel="${"nofollow"}"><strong>Mask Wearing in Your County</strong></a> is an Observable notebook that allows users to explore mask wearing in their county, compared to COVID-19 case counts and mask wearing in other counties.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was exclusively built with <a href="${"https://observablehq.com/"}" rel="${"nofollow"}">Observable</a>. The notebook contains a series of visualizations, each of which build upon the prior. Altogether, the intention is to tell a <em>story</em> about masking, not just create a series of visuals.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/mac-1.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "100%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/mac-2.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/mac-3.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/mac-4.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/phone-1.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/phone-2.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/mac-5.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "74%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/covid-masking/phone-3.png",
          alt: "Project image for 'Mask Wearing in Your County'",
          width: "24%"
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
