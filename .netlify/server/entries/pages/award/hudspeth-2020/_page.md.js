import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/IntersectionObserver.js";
const metadata = {
  "title": "Hudspeth Award",
  "place": "Winner",
  "place_code": "gold",
  "award": "Hudspeth Award",
  "organization": "Rice Political Science Department",
  "date": "2020-05-19",
  "featured": false,
  "media_url": "https://politicalscience.rice.edu/undergraduate-awards",
  "project_url": "https://www.researchgate.net/publication/332470540_Vota_Testing_the_Impact_of_Spanish-Language_Ballots_on_Election_Results_and_Preferences"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Recipient of the Hudspeth Award in recognition of my seminar paper \u201C<a href="${"https://www.researchgate.net/publication/332470540_Vota_Testing_the_Impact_of_Spanish-Language_Ballots_on_Election_Results_and_Preferences"}" rel="${"nofollow"}">\xA1Vota! Testing the Impact of Spanish-Language Ballots on Election Results and Preferences</a>.\u201D The paper described an online experiment testing the impact of Spanish-language ballots on the policy preferences of white, monolingual English-speaking voters.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
