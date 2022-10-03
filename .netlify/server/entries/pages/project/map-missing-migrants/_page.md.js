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
  "title": "Mapping Missing Migrants",
  "description": "Documenting migrants who have lost their lives while seeking refuge.",
  "date": "2019-10-22",
  "audience": "The world!",
  "featured": true,
  "image": "map-missing-migrants/header.png",
  "img_alt": "An example screen of the 'Mapping Missing Migrants' article",
  "techstack": ["Mapbox", "R"],
  "github": "https://github.com/connorrothschild/map-missing-migrants/",
  "url": "https://connorrothschild.github.io/map-missing-migrants"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://connorrothschild.github.io/map-missing-migrants",
          src: "/images/project/map-missing-migrants/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://connorrothschild.github.io/map-missing-migrants/"}" rel="${"nofollow"}"><strong>Mapping Missing Migrants</strong></a> is a visual storytelling piece focused on migrants and refugees who have lost their lives while traveling to another country. It was awarded the Student Bronze in the <a href="${"https://web.archive.org/web/20210121150713/https://www.malofiejgraphics.com/general/students-have-won-awards-too/2020/08"}" rel="${"nofollow"}">28th Malofiej Awards</a>.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was an example of a low-code but high-impact story. Rather than reinventing the wheel and implementing my own scrollytelling capabilities, I used two tools from Mapbox: their <a href="${"https://www.mapbox.com/solutions/interactive-storytelling"}" rel="${"nofollow"}">interactive storytelling template</a> and <a href="${"https://www.mapbox.com/mapbox-studio"}" rel="${"nofollow"}">Mapbox Studio</a>. In combination, I was able to write very little code but provide a highly tailored, powerful user experience for the reader.</p>
<p>I used Mapbox Studio to create each of the bubbles that is present on the map. As a corollary, I used Studio to define the size, fill, and location of each bubble. I created many different layers that toggled visibility on scroll.</p>
<p>To trigger scroll events, I used the Mapbox storytelling template. This was a simple JSON where, for each \u2018view\u2019, I defined three elements: the <em>text</em>, the <em>layer</em>, and the <em>location</em>.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/mac-1.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "100%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/mac-2.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/mac-3.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/mac-4.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/mac-5.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/phone-1.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/phone-2.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-missing-migrants/phone-3.png",
          alt: "Project image for 'Mapping Missing Migrants'",
          width: "32%"
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
