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
  "title": "How Much Does Kid Cudi Hum?",
  "description": "An extensive analysis of music's most famous hum.",
  "date": "2020-12-31",
  "audience": "The world!",
  "featured": true,
  "image": "cudi-hums/header.png",
  "img_alt": 'A header image that says "how much does Kid Cudi hum?"',
  "techstack": ["D3.js", "Vue.js", "Bulma", "R", "Scrollama", "Genius API"],
  "github": "https://github.com/connorrothschild/cudi-hums",
  "url": "https://connorrothschild.github.io/cudi-hums/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://connorrothschild.github.io/cudi-hums/",
          src: "/images/project/cudi-hums/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://connorrothschild.github.io/cudi-hums/"}" rel="${"nofollow"}"><strong>How Much Does Kid Cudi Hum?</strong></a> is a visual storytelling piece centered around analyzing music\u2019s most famous hum. It was recognized as a winner of the <a href="${"https://pudding.cool/process/pudding-cup-2020/"}" rel="${"nofollow"}">2020 Pudding Cup</a> out of 130+ entries.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>I used <a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a> and <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3.js</a> for all things visual and front-end. This was the first <a href="${"https://medium.com/nightingale/from-storytelling-to-scrollytelling-a-short-introduction-and-beyond-fbda32066964"}" rel="${"nofollow"}">scrollytelling</a> project I built, and I wanted an accessible way to approach scrollytelling so that it wouldn\u2019t get in the way of other stuff (such as making cool visuals and telling an actually interesting story). I had heard good things about Russell Goldenberg\u2019s <a href="${"https://github.com/russellgoldenberg/scrollama"}" rel="${"nofollow"}"><code>Scrollama</code></a> and wanted to find an easy way to incorporate that library with Vue. I was able to do so with Vignesh Shenoy\u2019s <a href="${"https://github.com/vgshenoy/vue-scrollama"}" rel="${"nofollow"}"><code>vue-scrollama</code></a>. It had a few quirks, but allowed me to quickly hit the ground running with scrollytelling capabilities.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/albums-mac.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/tracks-mac.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/lyrics-mac.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/albums-phone.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/tracks-phone.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/lyrics-phone.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/intro-phone.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/cudi-hums/outro-phone.png",
          alt: "Project image for 'How Much Does Kid Cudi Hum?'",
          width: "48%"
        },
        {},
        {}
      )}
`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
