import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "./index.js";
import { C as CornerTitle } from "./CornerTitle.js";
import { T as Transition, B as BackTo } from "./BackTo.js";
import { S as Seo } from "./Seo.js";
import { d as dateFormat } from "./utils.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".flex.svelte-vv7sge{display:flex;justify-content:space-between;place-items:center;padding-top:2rem;margin-top:0}.misc.svelte-vv7sge{display:flex;flex-direction:column;justify-content:flex-start}.media.svelte-vv7sge{padding:2rem;background:var(--semitransparent-bg);text-transform:uppercase;font-size:2.5rem;font-weight:200;font-family:var(--font-serif);border-radius:50%;transition:border-radius 500ms ease}.media.svelte-vv7sge:hover{border-radius:0}@media screen and (max-width: 1068px){.media.svelte-vv7sge{font-size:2rem;padding:1rem 4rem}}@media screen and (max-width: 568px){.flex.svelte-vv7sge{display:flex;flex-direction:column;place-items:unset;padding-top:1rem}.misc.svelte-vv7sge{margin-bottom:2rem}.media.svelte-vv7sge{font-size:1.5rem;padding:1rem 2rem;margin-top:0;text-align:right;align-self:flex-end}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { organization } = $$props;
  let { media_url } = $$props;
  let { date } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${organization}, ${date}&theme=light&md=true&hasImage=true`;
  let element, intersecting;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.organization === void 0 && $$bindings.organization && organization !== void 0)
    $$bindings.organization(organization);
  if ($$props.media_url === void 0 && $$bindings.media_url && media_url !== void 0)
    $$bindings.media_url(media_url);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
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
        description: `${organization}, ${date}`,
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
              href: "/award",
              text: "Awards",
              classes: "page-overline transition-content"
            },
            {},
            {}
          )}

      <h1 class="${"content-title uppercase transition-title"}" style="${"margin-bottom: 1rem;"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h1>
      <h2 class="${"content-description overflow-hidden flex svelte-vv7sge"}"><div class="${"misc transition-subtitle  svelte-vv7sge"}"><span style="${"display: block; font-weight: 600; margin-bottom: .25rem;"}">${escape(organization)}</span>
          <span style="${"display: block; font-weight: 300; text-transform: uppercase; font-size: 1.05rem;"}">${escape(dateFormat(date))}</span></div>
        <a${add_attribute("href", media_url, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"media transition-subtitle svelte-vv7sge"}">See media \u2192</a></h2></div>`;
        }
      }
    )}
  <div class="${"content main-content transition-content"}">${slots.default ? slots.default({}) : ``}
    ${validate_component(BackTo, "BackTo").$$render(
      $$result,
      {
        href: "/award",
        text: "Back to all awards",
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
