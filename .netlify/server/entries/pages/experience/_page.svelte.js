import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, i as null_to_empty, f as each } from "../../../chunks/index.js";
import { T as Transition, B as BackTo } from "../../../chunks/BackTo.js";
import { T as TransitionInView } from "../../../chunks/TransitionInView.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../chunks/motion.js";
import "../../../chunks/index2.js";
import "../../../chunks/IntersectionObserver.js";
const Job_svelte_svelte_type_style_lang = "";
const css = {
  code: ".job-container.svelte-1unm16i.svelte-1unm16i{padding:2rem 0;border-bottom:1px dashed var(--accent-color);display:flex;align-items:center;justify-content:space-between;cursor:pointer}h2.svelte-1unm16i.svelte-1unm16i{font-size:44px;font-weight:200;text-transform:uppercase;letter-spacing:0.64px;transition:all 300ms linear}@media screen and (max-width: 1168px){.preview.svelte-1unm16i h2.svelte-1unm16i{font-size:2.85vw}}h3.svelte-1unm16i.svelte-1unm16i{color:var(--text-color);font-size:34px;margin-bottom:6px;transition:all 300ms ease}.job-image.svelte-1unm16i.svelte-1unm16i{margin-left:16px;width:40px;transition:width 300ms ease}.job-container.hovered.svelte-1unm16i.svelte-1unm16i{cursor:pointer;border-bottom:1px solid var(--accent-color)}.job-container.hovered.svelte-1unm16i h2.svelte-1unm16i{color:var(--accent-color);text-decoration:none !important;letter-spacing:1px}.job-container.hovered.svelte-1unm16i h3.svelte-1unm16i{color:var(--accent-color);text-decoration:none;transform:translateX(5px)}.flex-container.svelte-1unm16i.svelte-1unm16i{display:flex;width:100%;justify-content:space-between}@keyframes svelte-1unm16i-right{0%{transform:translateX(0px)}50%{transform:translateX(5px)}100%{transform:translateX(0px)}}@media(max-width: 768px){h2.svelte-1unm16i.svelte-1unm16i{font-size:1.75rem !important}.job-container.svelte-1unm16i.svelte-1unm16i{padding:1.5rem 0}.job-image.svelte-1unm16i.svelte-1unm16i{width:28px;margin-left:10px}}@media(max-width: 400px){h2.svelte-1unm16i.svelte-1unm16i{font-size:1.5rem !important}.job-image.svelte-1unm16i.svelte-1unm16i{width:22px}}",
  map: null
};
const Job = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  let { slug } = $$props;
  let { preview = false } = $$props;
  let { hoveredFromChild = "Moksha Data" } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0)
    $$bindings.job(job);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  if ($$props.hoveredFromChild === void 0 && $$bindings.hoveredFromChild && hoveredFromChild !== void 0)
    $$bindings.hoveredFromChild(hoveredFromChild);
  $$result.css.add(css);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${[
        "job-container " + escape(hoveredFromChild == job.name ? "hovered" : "", true) + " svelte-1unm16i",
        preview ? "preview" : ""
      ].join(" ").trim()}" sveltekit:prefetch${add_attribute("href", slug, 0)}><div style="${"display: flex; place-items: center;"}" class="${escape(null_to_empty(preview ? "flex-container" : ""), true) + " svelte-1unm16i"}"><h2 class="${"svelte-1unm16i"}">${escape(job.name)}</h2>
      <img loading="${"lazy"}" src="${"/images/jobs/" + escape(job.imageUrl, true) + ".svg"}" class="${"job-image " + escape("", true) + " svelte-1unm16i"}" alt="${"logo"}"></div>
    ${!preview ? `<h3 class="${"svelte-1unm16i"}">\u2192</h3>` : ``}</a>`;
    }
  })}`;
});
let title = "Experience | Connor Rothschild";
let description = "Some of my work experience.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const sortedJobs = data.jobs.sort((a, b) => a.metadata.order - b.metadata.order);
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
  <h1 class="${"page-title transition-title overflow-hidden"}">Work</h1>

  <div class="${"transition-content"}">${each(sortedJobs, (job) => {
    return `${validate_component(Job, "JobSection").$$render(
      $$result,
      {
        job: job.metadata,
        slug: job.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", ""),
        preview: false,
        hoveredFromChild: null
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
