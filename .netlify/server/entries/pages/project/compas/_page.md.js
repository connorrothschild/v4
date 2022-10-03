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
  "title": "Are You Smarter Than COMPAS?",
  "description": "A quick game to see if you are more intelligent than an algorithm used to sentence millions of Americans.",
  "date": "2020-02-23",
  "audience": "The world!",
  "featured": false,
  "archived": true,
  "image": "compas/header.png",
  "img_alt": "COMPAS header image, includes an image of a MacBook with the application open.",
  "techstack": ["D3.js", "Bulma", "R"],
  "github": "https://github.com/connorrothschild/compas",
  "url": "https://connorrothschild.github.io/compas/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://connorrothschild.github.io/compas/",
          style: "box-shadow: none;",
          src: "/images/project/compas/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://connorrothschild.github.io/compas/"}" rel="${"nofollow"}"><strong>Are You Smarter Than COMPAS?</strong></a> is an application that allows users to explore how accurately they can predict recidivism, compared to a popular criminal justice sentencing algorithm known as COMPAS.</p>
<p>The application is meant to showcase how inaccurate COMPAS is, and illustrate that human judgment can more accurately assess risk than an algorithm that has sentenced millions behind bars.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was built using vanilla JavaScript, and styling was done with assistance from <a href="${"https://bulma.io/"}" rel="${"nofollow"}">Bulma</a>. It was rather easy to build; it was mostly an exercise to 1) inform users about how inaccurate sentencing algorithms are, and 2) learn JavaScript \u{1F642}.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/compas/mac-1.png",
          alt: "Project image for the project 'Are You Smarter Than COMPAS?'",
          width: "74%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/compas/phone-1.png",
          alt: "Project image for the project 'Are You Smarter Than COMPAS?'",
          width: "22%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/compas/phone-2.png",
          alt: "Project image for the project 'Are You Smarter Than COMPAS?'",
          width: "22%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/compas/mac-2.png",
          alt: "Project image for the project 'Are You Smarter Than COMPAS?'",
          width: "74%"
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
