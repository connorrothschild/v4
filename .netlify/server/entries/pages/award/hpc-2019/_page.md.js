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
  "title": "2nd Place, 2019 Houston Policy Challenge",
  "place": "2nd Place",
  "place_code": "silver",
  "award": "2019 Houston Policy Challenge",
  "organization": "Rice University",
  "date": "2019-02-04",
  "featured": false,
  "media_url": "https://kinder.rice.edu/urbanedge/2019/02/26/affordable-housing-houston-rice-university"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded second place in the 2019 Houston Policy Challenge. Judged by Dwight Boykins, Houston city council member; Tory Gunsolley, president and CEO of the Houston Housing Authority; Amanda Timm, executive director of Local Initiatives Support Corporation; Tom McCasland, director of the City of Houston\u2019s Housing and Community Development department and Stephan Fairfield, founder and CEO of Covenant Community Capital.</p>
<p>My team and I proposed a program which incentivizes homeowners in high-opportunity neighborhoods to construct ADUs &amp; house voucher recipients. Our proposal prevents \u201CNIMBYism\u201D and community backlash to high-concentration public housing projects, and decentralizes low-income voucher recipients to high-opportunity neighborhoods.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
