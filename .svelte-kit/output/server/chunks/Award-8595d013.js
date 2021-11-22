import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "./app-2f09f60b.js";
import { T as TransitionInView } from "./TransitionInView-ff3b4530.js";
var Award_svelte_svelte_type_style_lang = "";
const css = {
  code: '.flex-mobile.svelte-10v4fkf.svelte-10v4fkf{display:none;visibility:hidden}.container.svelte-10v4fkf.svelte-10v4fkf{display:flex;padding:1.25rem 0;filter:none;justify-content:space-between;position:relative;border-bottom-color:rgba(var(--text-color-rgb), 0.05);border-bottom-style:solid;border-bottom-width:2px}.container.svelte-10v4fkf.svelte-10v4fkf::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1px;bottom:-1px;left:0;background-color:var(--accent-color);transform-origin:bottom left;transition:transform 500ms ease}.container.svelte-10v4fkf.svelte-10v4fkf:hover::after{transform:scaleX(1)}.container.svelte-10v4fkf>.svelte-10v4fkf{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}.title.svelte-10v4fkf.svelte-10v4fkf{flex:1;font-size:1.25rem;font-weight:400;line-height:1.15;font-family:var(--font-sans);letter-spacing:-0.4px;color:var(--text-color)}.organization.svelte-10v4fkf.svelte-10v4fkf{font-size:1.25rem;padding:0 1rem;line-height:1.15;font-family:var(--font-serif);display:flex;place-items:center;justify-content:center;text-align:center;color:var(--accent-color);font-weight:200;letter-spacing:0.025rem}time.svelte-10v4fkf.svelte-10v4fkf{color:var(--text-color);padding:0 1rem;font-family:var(--font-serif);font-weight:200;text-align:right;display:flex;place-items:center;font-size:1.25rem;letter-spacing:1px}.inactive.svelte-10v4fkf>.svelte-10v4fkf{color:transparent;opacity:0.5;text-shadow:0 0 2px rgba(var(--text-color-rgb), 0.8)}.inactive.svelte-10v4fkf.svelte-10v4fkf{border-bottom-color:rgba(var(--text-color-rgb), 0.05)}@media screen and (max-width: 700px){.container.svelte-10v4fkf.svelte-10v4fkf{flex-direction:column;padding:1rem 0;align-items:flex-start}.title.svelte-10v4fkf.svelte-10v4fkf{margin-bottom:0.35rem}.organization.svelte-10v4fkf.svelte-10v4fkf{padding:0;font-size:1.1rem;font-weight:200}time.svelte-10v4fkf.svelte-10v4fkf{padding:0}.hidden-mobile.svelte-10v4fkf.svelte-10v4fkf{display:none;visibility:hidden}.flex-mobile.svelte-10v4fkf.svelte-10v4fkf{width:100%;display:flex;justify-content:space-between;visibility:visible}}',
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
    default: () => `<a class="${"container no-underline " + escape(anyHovered && !active ? "inactive" : "") + " svelte-10v4fkf"}" sveltekit:prefetch${add_attribute("href", slug, 0)}><h2 class="${"title svelte-10v4fkf"}">${escape(award.title)}</h2>
    <p class="${"organization hidden-mobile svelte-10v4fkf"}">${escape(award.organization)}</p>
    <time${add_attribute("datetime", award.date, 0)} class="${"hidden-mobile svelte-10v4fkf"}">${escape(award.date.slice(0, 4))}</time>
    <div class="${"flex-mobile svelte-10v4fkf"}"><p class="${"organization svelte-10v4fkf"}">${escape(award.organization)}</p>
      <time${add_attribute("datetime", award.date, 0)} class="${"svelte-10v4fkf"}">${escape(award.date.slice(0, 4))}</time></div></a>`
  })}`;
});
export { Award as A };
