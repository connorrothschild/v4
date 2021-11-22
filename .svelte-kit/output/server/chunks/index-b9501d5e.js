import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, s as subscribe, m as set_store_value, h as each } from "./app-2f09f60b.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import "bowser";
import { T as TransitionInView } from "./TransitionInView-ff3b4530.js";
import { s as seo } from "./store-30431d00.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "./IntersectionObserver-89b2e997.js";
var Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".project-card.svelte-16vzxrt{position:relative;border-radius:5px;box-shadow:1px 1px 4px var(--box-shadow-color);height:100%;height:100%;cursor:pointer;display:block}.project-image.svelte-16vzxrt{width:100%;height:100%;min-height:200px;object-fit:cover;border-radius:5px;filter:blur(0);z-index:0}.hovered-gradient.svelte-16vzxrt{position:absolute;background-image:linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0),\n      rgba(0, 0, 0, 1)\n    );width:100%;height:100%;background-size:cover;pointer-events:none;border-radius:5px;z-index:1}.project-text.svelte-16vzxrt{position:absolute;bottom:0;left:0;pointer-events:none;padding:1.5rem;z-index:3}.title.svelte-16vzxrt,.description.svelte-16vzxrt{color:white}.title.svelte-16vzxrt{font-size:1.5rem;line-height:1.15;text-shadow:1px 1px 6px black}.description.svelte-16vzxrt{font-family:var(--font-sans);font-size:1rem;line-height:1.2;font-weight:300;margin-top:12px;letter-spacing:0.64px;text-shadow:1px 1px 6px black}@media screen and (max-width: 600px){.hovered-gradient.svelte-16vzxrt{background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0))}.project-text.svelte-16vzxrt{padding:1rem}.title.svelte-16vzxrt{font-size:1.2rem}.description.svelte-16vzxrt{font-size:0.8rem;letter-spacing:0.3px;margin-top:6px}}",
  map: null
};
const Project$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { slug } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css$1);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => `<a class="${"project-card no-underline svelte-16vzxrt"}"${add_attribute("href", slug, 0)} sveltekit:prefetch>${``}
    <img loading="${"lazy"}" src="${"/images/project/" + escape(project.image)}" alt="${"Project image for " + escape(project.title)}" class="${["project-image svelte-16vzxrt", ""].join(" ").trim()}">
    ${``}</a>`
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6zfycw{max-width:860px;margin:0 auto;padding:1rem;width:95%;margin-bottom:4rem;margin-top:var(--nav-height)}.projects-container.svelte-6zfycw{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:10px}@media screen and (max-width: 700px){.projects-container.svelte-6zfycw{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr)}}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch(`/projects.json`);
  const projects = await res.json();
  return { props: { projects } };
}
let title = "Projects | Connor Rothschild";
let description = "Some of my projects.";
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { projects } = $$props;
  let filteredProjects = projects.filter((d) => d.metadata.archived != true).sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured)
      return 1;
    if (!b.metadata.featured && a.metadata.featured)
      return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  set_store_value(seo, $seo = {
    title,
    description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`
  }, $seo);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  $$unsubscribe_seo();
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
<main class="${"svelte-6zfycw"}">
  ${validate_component(BackTo, "BackTo").$$render($$result, {
    href: "/",
    text: "Home",
    classes: "page-overline transition-subtitle centered"
  }, {}, {})}
  <h1 class="${"page-title transition-title overflow-hidden"}">Projects
    </h1>

  <div class="${"projects-container transition-content svelte-6zfycw"}">${each(filteredProjects, (project) => `${validate_component(Project$1, "ProjectSection").$$render($$result, {
    project: project.metadata,
    slug: project.path.replace(/\.[^/.]+$/, "")
  }, {}, {})}`)}</div>
</main>`;
});
export { Project as default, load };
