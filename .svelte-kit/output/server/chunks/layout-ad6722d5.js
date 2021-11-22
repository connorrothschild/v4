import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component, a as add_attribute, e as escape, h as each } from "./app-2f09f60b.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import { C as CornerTitle } from "./CornerTitle-1139e2b5.js";
import { s as seo } from "./store-30431d00.js";
import { d as dateFormat } from "./utils-09998264.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver-89b2e997.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
var layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-flex.svelte-9q9w3b.svelte-9q9w3b{display:flex;place-items:center}.content-flex.svelte-9q9w3b .description.svelte-9q9w3b{flex:2}.content-flex.svelte-9q9w3b .misc.svelte-9q9w3b{flex:1}.date.svelte-9q9w3b.svelte-9q9w3b,.tags.svelte-9q9w3b.svelte-9q9w3b{text-transform:uppercase;color:var(--text-color)}.date.svelte-9q9w3b.svelte-9q9w3b{font-family:var(--font-serif);font-weight:200;font-size:1.5rem}.tags.svelte-9q9w3b.svelte-9q9w3b{display:flex;flex-wrap:wrap;justify-content:center;margin-top:1rem}.tag.svelte-9q9w3b.svelte-9q9w3b{font-size:0.9rem;margin:0.5rem 0 0 0.5rem;background:rgba(var(--accent-color-rgb), 0.2);padding:0.45rem 0.55rem;border-radius:2px;letter-spacing:0.05rem}@media screen and (max-width: 768px){.content-flex.svelte-9q9w3b.svelte-9q9w3b{flex-direction:column}.content-flex.svelte-9q9w3b .description.svelte-9q9w3b{margin-bottom:2rem}.content-flex.svelte-9q9w3b .misc.svelte-9q9w3b{display:flex;flex-direction:row;place-items:center;justify-content:space-between}.tags.svelte-9q9w3b.svelte-9q9w3b,.tag.svelte-9q9w3b.svelte-9q9w3b{margin-top:0}}@media screen and (max-width: 468px){.content-flex.svelte-9q9w3b .description.svelte-9q9w3b{margin-bottom:1rem}.content-flex.svelte-9q9w3b .misc.svelte-9q9w3b{flex-direction:column-reverse}.date.svelte-9q9w3b.svelte-9q9w3b{font-size:1rem}.tags.svelte-9q9w3b.svelte-9q9w3b{margin-bottom:1rem}.tag.svelte-9q9w3b.svelte-9q9w3b{font-size:0.7rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { tags } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  set_store_value(seo, $seo = { title, description, image }, $seo);
  let element, intersecting;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, { split: "words" }, {}, {})}
${validate_component(CornerTitle, "CornerTitle").$$render($$result, {
      title,
      subtitle: dateFormat(date),
      intersecting
    }, {}, {})}
<main>${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, {
      element,
      rootMargin: "-60px",
      intersecting
    }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"top-level"}"${add_attribute("this", element, 0)}>${validate_component(BackTo, "BackTo").$$render($$result, {
        href: "/post",
        text: "Blog",
        classes: "page-overline transition-subtitle"
      }, {}, {})}
      <h1 class="${"content-title uppercase transition-title overflow-hidden"}">${escape(title)}</h1>
      <div class="${"content-flex svelte-9q9w3b"}"><h2 class="${"description transition-content content-description overflow-hidden svelte-9q9w3b"}">${escape(description)}</h2>
        <div class="${"misc transition-content content-description overflow-hidden svelte-9q9w3b"}"><h2 class="${"date svelte-9q9w3b"}">${escape(dateFormat(date))}</h2>
          <div class="${"tags svelte-9q9w3b"}">${tags ? `${each(tags, (tag) => `<span class="${"tag svelte-9q9w3b"}">${escape(tag)}</span>`)}` : ``}</div></div></div></div>`
    })}
  <div class="${"main-content transition-content"}"><div class="${"content"}">${slots.default ? slots.default({}) : ``}
      ${validate_component(BackTo, "BackTo").$$render($$result, {
      href: "/post",
      text: "Back to all posts",
      classes: "border-top"
    }, {}, {})}</div></div>
</main>`;
  } while (!$$settled);
  $$unsubscribe_seo();
  return $$rendered;
});
export { Layout as default };
