import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component, h as each } from "./app-2f09f60b.js";
import { A as Award$1 } from "./Award-8595d013.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import { s as seo } from "./store-30431d00.js";
import "./TransitionInView-ff3b4530.js";
import "./IntersectionObserver-89b2e997.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-10mid94{max-width:860px;margin:0 auto;padding:1rem;width:95%;margin-bottom:4rem;margin-top:var(--nav-height)}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch(`/awards.json`);
  const awards = await res.json();
  return { props: { awards } };
}
let title = "Awards | Connor Rothschild";
let description = "Some of my awards.";
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { awards } = $$props;
  awards.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  let anyHovered;
  set_store_value(seo, $seo = {
    title,
    description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`
  }, $seo);
  if ($$props.awards === void 0 && $$bindings.awards && awards !== void 0)
    $$bindings.awards(awards);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
<main class="${"svelte-10mid94"}">
  ${validate_component(BackTo, "BackTo").$$render($$result, {
      href: "/",
      text: "Home",
      classes: "page-overline transition-subtitle centered"
    }, {}, {})}
  <h1 class="${"page-title transition-title overflow-hidden"}">Awards
    </h1>

  <div class="${"awards-grid transition-content"}">${each(awards, (award) => `${validate_component(Award$1, "AwardSection").$$render($$result, {
      award: award.metadata,
      slug: award.path.replace(/\.[^/.]+$/, ""),
      anyHovered
    }, {
      anyHovered: ($$value) => {
        anyHovered = $$value;
        $$settled = false;
      }
    }, {})}`)}</div>
</main>`;
  } while (!$$settled);
  $$unsubscribe_seo();
  return $$rendered;
});
export { Award as default, load };
