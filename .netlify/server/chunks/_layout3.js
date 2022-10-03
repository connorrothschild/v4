import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "./index.js";
import { T as Transition, B as BackTo } from "./BackTo.js";
import { C as CornerTitle } from "./CornerTitle.js";
import { d as dateFormat } from "./utils.js";
import { S as Seo } from "./Seo.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-flex.svelte-1j3rz7r.svelte-1j3rz7r{display:flex;place-items:center}.content-flex.svelte-1j3rz7r .description.svelte-1j3rz7r{flex:2}.content-flex.svelte-1j3rz7r .misc.svelte-1j3rz7r{flex:1}.date.svelte-1j3rz7r.svelte-1j3rz7r,.tags.svelte-1j3rz7r.svelte-1j3rz7r{text-transform:uppercase;color:var(--text-color)}.date.svelte-1j3rz7r.svelte-1j3rz7r{font-family:var(--font-serif);font-weight:200;font-size:1.5rem}.tags.svelte-1j3rz7r.svelte-1j3rz7r{display:flex;flex-wrap:wrap;justify-content:center;margin-top:1rem}.tag.svelte-1j3rz7r.svelte-1j3rz7r{font-size:0.9rem;margin:0.5rem 0 0 0.5rem;background:rgba(var(--accent-color-rgb), 0.2);padding:0.45rem 0.55rem;border-radius:2px;letter-spacing:0.05rem;font-family:var(--font-serif)}@media screen and (max-width: 768px){.content-flex.svelte-1j3rz7r.svelte-1j3rz7r{flex-direction:column}.content-flex.svelte-1j3rz7r .description.svelte-1j3rz7r{margin-bottom:2rem}.content-flex.svelte-1j3rz7r .misc.svelte-1j3rz7r{display:flex;flex-direction:row;place-items:center;justify-content:space-between;width:95%}.tags.svelte-1j3rz7r.svelte-1j3rz7r,.tag.svelte-1j3rz7r.svelte-1j3rz7r{margin-top:0}}@media screen and (max-width: 468px){.content-flex.svelte-1j3rz7r .description.svelte-1j3rz7r{margin-bottom:0.75rem;font-size:1.35rem}.content-flex.svelte-1j3rz7r .misc.svelte-1j3rz7r{flex-direction:column-reverse;align-items:flex-end;width:100%;margin-top:1rem}.date.svelte-1j3rz7r.svelte-1j3rz7r{font-size:1.45rem}.tags.svelte-1j3rz7r.svelte-1j3rz7r{margin-bottom:1rem}.tag.svelte-1j3rz7r.svelte-1j3rz7r{font-size:1rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { tags } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
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
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, { split: "words", stagger: 0.07 }, {}, {})}
${validate_component(Seo, "Seo").$$render(
      $$result,
      {
        title: `${title} | Connor Rothschild`,
        description,
        image
      },
      {},
      {}
    )}
${validate_component(CornerTitle, "CornerTitle").$$render(
      $$result,
      {
        title,
        subtitle: dateFormat(date),
        intersecting
      },
      {},
      {}
    )}
<main>${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      {
        element,
        rootMargin: "-60px",
        intersecting
      },
      {
        intersecting: ($$value) => {
          intersecting = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"top-level"}"${add_attribute("this", element, 0)}>${validate_component(BackTo, "BackTo").$$render(
            $$result,
            {
              href: "/post",
              text: "Blog",
              classes: "page-overline transition-content"
            },
            {},
            {}
          )}
      <h1 class="${"content-title smaller uppercase transition-title"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h1>
      <div class="${"content-flex transition-content content-description svelte-1j3rz7r"}"><h2 class="${"description overflow-hidden svelte-1j3rz7r"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h2>
        <div class="${"misc overflow-hidden svelte-1j3rz7r"}"><h2 class="${"date svelte-1j3rz7r"}">${escape(dateFormat(date))}</h2>
          <div class="${"tags svelte-1j3rz7r"}">${tags ? `${each(tags, (tag) => {
            return `<span class="${"tag svelte-1j3rz7r"}">${escape(tag)}</span>`;
          })}` : ``}</div></div></div></div>`;
        }
      }
    )}
  <div class="${"main-content transition-content"}"><div class="${"content"}">${slots.default ? slots.default({}) : ``}
      ${validate_component(BackTo, "BackTo").$$render(
      $$result,
      {
        href: "/post",
        text: "Back to all posts",
        classes: "border-top"
      },
      {},
      {}
    )}</div></div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as L
};
