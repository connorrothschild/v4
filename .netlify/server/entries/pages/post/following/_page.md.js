import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
const Following_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1co1vl9{font-weight:400}",
  map: null
};
const Following = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let people = [
    {
      name: "Amelia Wattenberger",
      twitter: "https://twitter.com/Wattenberger"
    },
    {
      name: "Will Chase",
      twitter: "https://twitter.com/W_R_Chase"
    },
    {
      name: "Danielle Alberti",
      twitter: "https://twitter.com/DanielleAlberti"
    },
    {
      name: "Nathan Yau",
      twitter: "https://twitter.com/flowingdata"
    },
    {
      name: "Simran Parwani",
      twitter: "https://twitter.com/simranparwani"
    },
    {
      name: "Jon Schwabish",
      twitter: "https://twitter.com/jschwabish"
    },
    {
      name: "Alli Torban",
      twitter: "https://twitter.com/AlliTorban"
    },
    {
      name: "Russell Goldenberg",
      twitter: "https://twitter.com/codenberg"
    },
    {
      name: "Alberto Cairo",
      twitter: "https://twitter.com/AlbertoCairo"
    },
    {
      name: "Michelle McGhee",
      twitter: "https://twitter.com/mich_mcghee"
    },
    {
      name: "Gabrielle Merite",
      twitter: "https://twitter.com/Data_Soul"
    },
    {
      name: "Shirley Wu",
      twitter: "https://twitter.com/sxywu"
    },
    {
      name: "Nadieh Bremer",
      twitter: "https://twitter.com/NadiehBremer"
    }
  ];
  $$result.css.add(css);
  return `<div style="${"margin-bottom: 1.15rem;"}">${each(people, (person) => {
    return `<li><a target="${"_blank"}" rel="${"noopener noreferrer"}"${add_attribute("href", person.twitter, 0)} class="${"svelte-1co1vl9"}">${escape(person.name)}</a>
    </li>`;
  })}
</div>`;
});
const metadata = {
  "layout": "blog",
  "title": "People I'm following",
  "description": "A definitely non-exhaustive list of people I've learned a lot from",
  "image": "flat-data-r/header.png",
  "date": "2021-01-07",
  "draft": true,
  "tags": ["personal", "career"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>I\u2019ve been asked a few times for recommendations as to \u201Cwho to follow\u201D in the data viz/design space. To prevent accidentally omitting people (and stay up to date), this page will serve as a running, non-exhaustive list of the people I recommend others follow.</p>
<p>This is just the tip of the iceberg when it comes to awesome data design folks that learn in public. If you know of any you think should be added, <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">let me know</a>.</p>
${validate_component(Following, "Following").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
