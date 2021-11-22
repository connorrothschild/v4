import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-cacdbe7f.js";
import "./CornerTitle-1139e2b5.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
const metadata = {
  "title": "Hudspeth Award",
  "place": "Winner",
  "award": "Hudspeth Award",
  "organization": "Rice Political Science Department",
  "date": "2020-05-19",
  "featured": false,
  "media_url": "https://politicalscience.rice.edu/undergraduate-awards",
  "project_url": "https://www.researchgate.net/publication/332470540_Vota_Testing_the_Impact_of_Spanish-Language_Ballots_on_Election_Results_and_Preferences"
};
const Hudspeth_2020 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Recipient of the Hudspeth Award in recognition of my seminar paper \u201C<a href="${"https://www.researchgate.net/publication/332470540_Vota_Testing_the_Impact_of_Spanish-Language_Ballots_on_Election_Results_and_Preferences"}" rel="${"nofollow"}">\xA1Vota! Testing the Impact of Spanish-Language Ballots on Election Results and Preferences</a>.\u201D The paper described an online experiment testing the impact of Spanish-language ballots on the policy preferences of white, monolingual English-speaking voters.</p>`
  })}`;
});
export { Hudspeth_2020 as default, metadata };
