import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, k as null_to_empty, s as subscribe, m as set_store_value, h as each } from "./app-2f09f60b.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import { T as TransitionInView } from "./TransitionInView-ff3b4530.js";
import { s as seo } from "./store-30431d00.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./IntersectionObserver-89b2e997.js";
var Job_svelte_svelte_type_style_lang = "";
const css$1 = {
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
  $$result.css.add(css$1);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => `<a class="${[
      "job-container " + escape(hoveredFromChild == job.name ? "hovered" : "") + " svelte-1unm16i",
      preview ? "preview" : ""
    ].join(" ").trim()}" sveltekit:prefetch${add_attribute("href", slug, 0)}><div style="${"display: flex; place-items: center;"}" class="${escape(null_to_empty(preview ? "flex-container" : "")) + " svelte-1unm16i"}"><h2 class="${"svelte-1unm16i"}">${escape(job.name)}</h2>
      <img loading="${"lazy"}" src="${"/images/jobs/" + escape(job.imageUrl) + ".svg"}" class="${"job-image " + escape("") + " svelte-1unm16i"}" alt="${"logo"}"></div>
    ${!preview ? `<h3 class="${"svelte-1unm16i"}">\u2192</h3>` : ``}</a>`
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1p4srcu{max-width:860px;margin:0 auto;padding:1rem;width:95%;margin-top:var(--nav-height);margin-bottom:4rem}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch(`/experience.json`);
  const jobs = await res.json();
  return { props: { jobs } };
}
let title = "Experience | Connor Rothschild";
let description = "Some of my work experience.";
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { jobs } = $$props;
  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);
  set_store_value(seo, $seo = {
    title,
    description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`
  }, $seo);
  if ($$props.jobs === void 0 && $$bindings.jobs && jobs !== void 0)
    $$bindings.jobs(jobs);
  $$result.css.add(css);
  $$unsubscribe_seo();
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
<main class="${"svelte-1p4srcu"}">
  ${validate_component(BackTo, "BackTo").$$render($$result, {
    href: "/",
    text: "Home",
    classes: "page-overline transition-subtitle centered"
  }, {}, {})}
  <h1 class="${"page-title transition-title overflow-hidden"}">Work
    </h1>

  <div class="${"transition-content"}">${each(sortedJobs, (job) => `${validate_component(Job, "JobSection").$$render($$result, {
    job: job.metadata,
    slug: job.path.replace(/\.[^/.]+$/, ""),
    preview: false,
    hoveredFromChild: null
  }, {}, {})}`)}</div>
</main>`;
});
export { Experience as default, load };
