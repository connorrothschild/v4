import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape } from "./index.js";
import { C as CornerTitle } from "./CornerTitle.js";
import { T as Transition, B as BackTo } from "./BackTo.js";
import { S as Seo } from "./Seo.js";
import { d as dateFormat } from "./utils.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".misc.svelte-3m1w1k{display:flex;place-items:center;justify-content:space-between;height:100%;overflow:visible}.description.svelte-3m1w1k{font-weight:200;user-select:none}.two-thirds.svelte-3m1w1k{flex:2}.one-third.svelte-3m1w1k{flex:1}.live-site.svelte-3m1w1k{padding:2rem;background:var(--semitransparent-bg);text-transform:uppercase;font-size:2.5rem;font-weight:200;font-family:var(--font-serif);border-radius:50%;transition:border-radius 500ms ease}.live-site.svelte-3m1w1k:hover{border-radius:0}.tags.svelte-3m1w1k{display:flex;flex-wrap:wrap;place-items:center;justify-content:center;margin-top:1rem}.tag.svelte-3m1w1k{font-size:1.15rem;margin:0.5rem 0 0 0.5rem;background:rgba(var(--accent-color-rgb), 0.2);padding:0.45rem 0.55rem;border-radius:2px;letter-spacing:0.05rem;color:var(--text-color);font-family:var(--font-serif)}@media screen and (max-width: 1068px){.misc.svelte-3m1w1k{flex-direction:column}.one-third.svelte-3m1w1k{margin-top:4rem}.live-site.svelte-3m1w1k{font-size:2rem;padding:1rem 4rem}}@media screen and (max-width: 568px){.tag.svelte-3m1w1k{font-size:1rem;margin:0.25rem 0 0 0.25rem}.misc.svelte-3m1w1k{align-items:flex-end}.tags.svelte-3m1w1k{justify-content:flex-end}.one-third.svelte-3m1w1k{margin-top:2.5rem;margin-bottom:1rem}.live-site.svelte-3m1w1k{font-size:1.5rem;padding:1rem 2rem;margin-top:0;justify-content:flex-end}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { techstack } = $$props;
  let { url } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  let element, intersecting;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.techstack === void 0 && $$bindings.techstack && techstack !== void 0)
    $$bindings.techstack(techstack);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
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
          return `<div class="${"top-level"}" style="${"max-width: none;"}"${add_attribute("this", element, 0)}>${validate_component(BackTo, "BackTo").$$render(
            $$result,
            {
              href: "/project",
              text: "Projects",
              classes: "page-overline transition-content"
            },
            {},
            {}
          )}
      <h1 class="${"content-title uppercase transition-title"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h1>
      <div class="${"transition-content misc overflow-hidden content-description svelte-3m1w1k"}"><div class="${"two-thirds svelte-3m1w1k"}"><h2 class="${"description svelte-3m1w1k"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h2>
          ${techstack ? `<div class="${"tags svelte-3m1w1k"}">${each(techstack, (tech) => {
            return `<span class="${"tag svelte-3m1w1k"}">${escape(tech)}</span>`;
          })}</div>` : ``}</div>
        <h2 class="${"one-third svelte-3m1w1k"}"><a class="${"live-site svelte-3m1w1k"}" target="${"_blank"}" rel="${"noopener noreferrer"}"${add_attribute("href", url, 0)}>Live site \u2192</a></h2></div></div>`;
        }
      }
    )}
  <div class="${"project main-content transition-content"}">${slots.default ? slots.default({}) : ``}
    ${validate_component(BackTo, "BackTo").$$render(
      $$result,
      {
        href: "/project",
        text: "Back to all projects",
        classes: "border-top"
      },
      {},
      {}
    )}</div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as L
};
