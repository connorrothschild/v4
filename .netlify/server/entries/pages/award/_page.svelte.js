import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/index.js";
import { A as Award } from "../../../chunks/Award.js";
import { T as Transition, B as BackTo } from "../../../chunks/BackTo.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "../../../chunks/TransitionInView.js";
import "../../../chunks/IntersectionObserver.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../chunks/motion.js";
import "../../../chunks/index2.js";
let title = "Awards | Connor Rothschild";
let description = "Some of my awards.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.awards.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  let anyHovered;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
${validate_component(Seo, "Seo").$$render($$result, { title, description, image }, {}, {})}
<main class="${"main"}">${validate_component(BackTo, "BackTo").$$render(
      $$result,
      {
        href: "/",
        text: "Home",
        classes: "page-overline transition-content centered"
      },
      {},
      {}
    )}
  <h1 class="${"page-title transition-title overflow-hidden"}">Awards</h1>

  <div class="${"awards-grid transition-content"}">${each(data.awards, (award) => {
      return `${validate_component(Award, "AwardSection").$$render(
        $$result,
        {
          award: award.metadata,
          slug: award.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", ""),
          anyHovered
        },
        {
          anyHovered: ($$value) => {
            anyHovered = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
