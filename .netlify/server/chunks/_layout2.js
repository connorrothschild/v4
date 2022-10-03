import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "./index.js";
import { T as Transition, B as BackTo } from "./BackTo.js";
import { S as Seo } from "./Seo.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-1k62azy{height:0.75em;transition:transform 500ms ease}.logo.svelte-1k62azy:hover{transform:rotate(360deg)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { imageUrl } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/Connor Rothschild | ${name}.png?subtitle=Some details about my work experience at ${name}.&theme=light&md=true&hasImage=true`;
  let element, intersecting;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, { split: "words", stagger: 0.07 }, {}, {})}
${validate_component(Seo, "Seo").$$render($$result, { title: name, description, image }, {}, {})}
<main>${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      { element, intersecting },
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
              href: "/experience",
              text: "Experience",
              classes: "page-overline transition-content"
            },
            {},
            {}
          )}

      <h1 class="${"content-title uppercase transition-title "}">${escape(name)}
        <img loading="${"lazy"}"${add_attribute("src", imageUrl ? `/images/jobs/${imageUrl}.svg` : "", 0)} alt="${"Logo for " + escape(name, true)}" class="${"logo svelte-1k62azy"}"></h1></div>`;
        }
      }
    )}
  <div class="${"main-content transition-content"}"><div class="${"content"}">${slots.default ? slots.default({}) : ``}
      ${validate_component(BackTo, "BackTo").$$render(
      $$result,
      {
        href: "/experience",
        text: "Back to all jobs",
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
