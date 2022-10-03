import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as escape } from "./index.js";
import { i as isTouchscreen } from "./device.js";
import { T as TransitionInView } from "./TransitionInView.js";
const Project_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-card.svelte-16vzxrt{position:relative;border-radius:5px;box-shadow:1px 1px 4px var(--box-shadow-color);height:100%;height:100%;cursor:pointer;display:block}.project-image.svelte-16vzxrt{width:100%;height:100%;min-height:200px;object-fit:cover;border-radius:5px;filter:blur(0);z-index:0}.hovered-gradient.svelte-16vzxrt{position:absolute;background-image:linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0),\n      rgba(0, 0, 0, 1)\n    );width:100%;height:100%;background-size:cover;pointer-events:none;border-radius:5px;z-index:1}.project-text.svelte-16vzxrt{position:absolute;bottom:0;left:0;pointer-events:none;padding:1.5rem;z-index:3}.title.svelte-16vzxrt,.description.svelte-16vzxrt{color:white}.title.svelte-16vzxrt{font-size:1.5rem;line-height:1.15;text-shadow:1px 1px 6px black}.description.svelte-16vzxrt{font-family:var(--font-sans);font-size:1rem;line-height:1.2;font-weight:300;margin-top:12px;letter-spacing:0.64px;text-shadow:1px 1px 6px black}@media screen and (max-width: 600px){.hovered-gradient.svelte-16vzxrt{background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0))}.project-text.svelte-16vzxrt{padding:1rem}.title.svelte-16vzxrt{font-size:1.2rem}.description.svelte-16vzxrt{font-size:0.8rem;letter-spacing:0.3px;margin-top:6px}}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isTouchscreen, $$unsubscribe_isTouchscreen;
  $$unsubscribe_isTouchscreen = subscribe(isTouchscreen, (value) => $isTouchscreen = value);
  let { project } = $$props;
  let { slug } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css);
  $$unsubscribe_isTouchscreen();
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${"project-card no-underline svelte-16vzxrt"}"${add_attribute("href", slug, 0)} sveltekit:prefetch>${$isTouchscreen ? `<div class="${"hovered-gradient svelte-16vzxrt"}"></div>` : ``}
    <img loading="${"lazy"}" src="${"/images/project/" + escape(project.image, true)}" alt="${"Project image for " + escape(project.title, true)}" class="${["project-image svelte-16vzxrt", ""].join(" ").trim()}">
    ${$isTouchscreen ? `<div class="${"project-text svelte-16vzxrt"}"><h1 class="${"title svelte-16vzxrt"}"><!-- HTML_TAG_START -->${project.title}<!-- HTML_TAG_END --></h1>
        <h2 class="${"description svelte-16vzxrt"}"><!-- HTML_TAG_START -->${project.description}<!-- HTML_TAG_END --></h2></div>` : ``}</a>`;
    }
  })}`;
});
export {
  Project as P
};
