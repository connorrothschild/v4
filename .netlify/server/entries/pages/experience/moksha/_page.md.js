import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout2.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
const metadata = {
  "layout": "experience",
  "name": "Moksha Data",
  "imageUrl": "moksha",
  "order": 1,
  "description": '<p>I currently work as an Associate and Data Scientist at <a href="https://www.mokshadata.com/" target="_blank" rel="noopener noreferrer">Moksha Data</a>. I&#39;m currently building <strong>Moksha Interactive</strong>, a subsidiary of Moksha Data which specializes in telling visual stories on the web. </p> <p>Learn more about <a href="https://www.mokshadata.com/" target="_blank" rel="noopener noreferrer">what we&#39;re doing</a>, or <a href="mailto:connor@mokshadata.com?subject=Project%20Inquiry">get in touch</a>.</p>'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>I currently work as an Associate and Data Scientist at <a href="${"https://www.mokshadata.com/"}" rel="${"nofollow"}">Moksha Data</a>. I\u2019m currently building <strong>Moksha Interactive</strong>, a subsidiary of Moksha Data which specializes in telling visual stories on the web. </p>
<p>At Moksha, I\u2019ve been able to build dashboards, reports, and web applications for our partners in the social impact space (like Harris County, the Houston Food Bank, and others).</p>
<p>Here are a few of my favorite projects so far:</p>
<ul><li><a href="${"https://mokshadata.gitlab.io/harris-county-svi/"}" rel="${"nofollow"}">Harris County Rental Assistance Dashboard</a></li>
<li><a href="${"https://mokshadata.gitlab.io/collaborative-fund/impact-investing-interactive/"}" rel="${"nofollow"}">An Interactive History of Impact Investing</a></li></ul>
<p>Learn more about <a href="${"https://www.mokshadata.com/"}" rel="${"nofollow"}">what we\u2019re doing</a>, or <a href="${"mailto:connor@mokshadata.com?subject=Project%20Inquiry"}">get in touch</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
