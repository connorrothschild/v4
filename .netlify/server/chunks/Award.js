import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "./index.js";
import { T as TransitionInView } from "./TransitionInView.js";
const Award_svelte_svelte_type_style_lang = "";
const css = {
  code: '.flex-mobile.svelte-1fegd0u.svelte-1fegd0u{display:none;visibility:hidden}.container.svelte-1fegd0u.svelte-1fegd0u{display:flex;padding:1.15rem 0;filter:none;justify-content:space-between;position:relative;border-bottom-color:rgba(var(--text-color-rgb), 0.05);border-bottom-style:solid;border-bottom-width:2px;cursor:pointer}.container.svelte-1fegd0u.svelte-1fegd0u::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1px;bottom:-1px;left:0;background-color:var(--accent-color);transform-origin:bottom left;transition:transform 500ms ease}.container.svelte-1fegd0u.svelte-1fegd0u:hover::after{transform:scaleX(1)}.container.svelte-1fegd0u>.svelte-1fegd0u{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}.title.svelte-1fegd0u.svelte-1fegd0u{flex:1;font-size:1.25rem;font-weight:400;line-height:1.15;font-family:var(--font-sans);letter-spacing:-0.4px;color:var(--text-color)}.organization.svelte-1fegd0u.svelte-1fegd0u{font-size:1.25rem;padding:0 1rem;line-height:1.3;font-family:var(--font-serif);display:flex;place-items:center;justify-content:center;text-align:center;color:var(--accent-color);font-weight:200;font-style:italic;letter-spacing:0.01rem}time.svelte-1fegd0u.svelte-1fegd0u{color:var(--text-color);padding:0 1rem;font-family:var(--font-serif);font-weight:200;text-align:right;display:flex;place-items:center;font-size:1.25rem;letter-spacing:1px}.inactive.svelte-1fegd0u>.svelte-1fegd0u{color:transparent;opacity:0.5;text-shadow:0 0 2px rgba(var(--text-color-rgb), 0.8)}.inactive.svelte-1fegd0u.svelte-1fegd0u{border-bottom-color:rgba(var(--text-color-rgb), 0.05)}@media screen and (max-width: 700px){.container.svelte-1fegd0u.svelte-1fegd0u{flex-direction:column;padding:1rem 0;align-items:flex-start}.title.svelte-1fegd0u.svelte-1fegd0u{margin-bottom:0.35rem}.organization.svelte-1fegd0u.svelte-1fegd0u{padding:0;font-size:1.1rem}time.svelte-1fegd0u.svelte-1fegd0u{padding:0}.hidden-mobile.svelte-1fegd0u.svelte-1fegd0u{display:none;visibility:hidden}.flex-mobile.svelte-1fegd0u.svelte-1fegd0u{width:100%;display:flex;justify-content:space-between;visibility:visible}}',
  map: null
};
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { award } = $$props;
  let { slug } = $$props;
  let { anyHovered = false } = $$props;
  let active = false;
  if ($$props.award === void 0 && $$bindings.award && award !== void 0)
    $$bindings.award(award);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.anyHovered === void 0 && $$bindings.anyHovered && anyHovered !== void 0)
    $$bindings.anyHovered(anyHovered);
  $$result.css.add(css);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${"container no-underline " + escape(
        anyHovered && !active ? "inactive" : "",
        true
      ) + " " + escape(award.place_code, true) + " svelte-1fegd0u"}"${add_attribute("href", slug, 0)} sveltekit:prefetch><h2 class="${"title svelte-1fegd0u"}">${escape(award.title)}</h2>
    <p class="${"organization hidden-mobile svelte-1fegd0u"}">${escape(award.organization)}</p>
    <time${add_attribute("datetime", award.date, 0)} class="${"hidden-mobile svelte-1fegd0u"}">${escape(award.date.slice(0, 4))}</time>
    <div class="${"flex-mobile svelte-1fegd0u"}"><p class="${"organization svelte-1fegd0u"}">${escape(award.organization)}</p>
      <time${add_attribute("datetime", award.date, 0)} class="${"svelte-1fegd0u"}">${escape(award.date.slice(0, 4))}</time></div></a>`;
    }
  })}`;
});
export {
  Award as A
};
