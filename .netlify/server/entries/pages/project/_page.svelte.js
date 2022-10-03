import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/index.js";
import { T as Transition, B as BackTo } from "../../../chunks/BackTo.js";
import { P as Project } from "../../../chunks/Project.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../chunks/motion.js";
import "../../../chunks/index2.js";
import "../../../chunks/device.js";
import "bowser";
import "../../../chunks/TransitionInView.js";
import "../../../chunks/IntersectionObserver.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-uvasr7{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:10px}@media screen and (max-width: 700px){.projects-container.svelte-uvasr7{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr)}}",
  map: null
};
let title = "Projects | Connor Rothschild";
let description = "Some of my projects.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let filteredProjects = data.projects.filter((d) => d.metadata.archived != true).sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured)
      return 1;
    if (!b.metadata.featured && a.metadata.featured)
      return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
${validate_component(Seo, "Seo").$$render($$result, { title, description, image }, {}, {})}
<main class="${"main"}">${validate_component(BackTo, "BackTo").$$render(
    $$result,
    {
      href: "/",
      text: "Home",
      classes: "page-overline transition-content centered"
    },
    {},
    {}
  )}
  <h1 class="${"page-title transition-title overflow-hidden"}">Projects</h1>

  <div class="${"projects-container transition-content svelte-uvasr7"}">${each(filteredProjects, (project) => {
    return `${validate_component(Project, "ProjectSection").$$render(
      $$result,
      {
        project: project.metadata,
        slug: project.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", "")
      },
      {},
      {}
    )}`;
  })}</div>
</main>`;
});
export {
  Page as default
};
