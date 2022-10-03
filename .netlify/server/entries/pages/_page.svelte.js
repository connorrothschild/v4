import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, f as each, d as add_attribute } from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
import { w as windowHeight, a as windowWidth, b as prefersReducedMotion } from "../../chunks/motion.js";
import { scaleLinear } from "d3-scale";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { SplitText } from "gsap/dist/SplitText.js";
import { T as TransitionInView } from "../../chunks/TransitionInView.js";
import { i as isTouchscreen, a as isHEVC, b as isPre1015 } from "../../chunks/device.js";
import { P as Project } from "../../chunks/Project.js";
import { I as IntersectionObserver_1 } from "../../chunks/IntersectionObserver.js";
import { d as dateFormat } from "../../chunks/utils.js";
import { S as Star } from "../../chunks/Star.js";
import { A as Award } from "../../chunks/Award.js";
import "../../chunks/index2.js";
import "bowser";
import "gsap/dist/MorphSVGPlugin.js";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-lu3vai{width:100%;margin:auto;display:flex;flex-direction:column;justify-content:center;place-items:center;overflow:hidden;position:relative;transition:height 100ms ease}.year.svelte-lu3vai{position:absolute;bottom:calc(20px + 1.5rem / 2);left:20px;margin-left:2rem;color:rgba(var(--text-color-rgb), 0.35);font-family:var(--font-sans);font-weight:300;font-size:1.5rem;letter-spacing:-0.05rem;user-select:none}.hero-container.svelte-lu3vai{line-height:0.85;user-select:none}.overline.svelte-lu3vai{font-weight:200;text-align:left;margin-bottom:0.75rem;font-style:italic;font-size:2.75rem}.title.svelte-lu3vai{margin-bottom:1.5rem}.connor.svelte-lu3vai,.rothschild.svelte-lu3vai{display:block;font-weight:500;letter-spacing:-0.1rem;text-transform:uppercase;text-shadow:1px 1px 2px var(--box-shadow-color);overflow:hidden}.connor *{transform-origin:center bottom;transform-style:preserve-3d;transition:opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1)}.rothschild *{transform-origin:center bottom;transform-style:preserve-3d;transition:opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1)}.connor.svelte-lu3vai{font-size:20vw}.rothschild.svelte-lu3vai{font-size:13.65vw}.subtitle.svelte-lu3vai{font-size:3vw;max-width:1068px;font-weight:300;margin-bottom:1rem;text-align:right;margin-left:auto;color:rgba(var(--text-color-rgb), 0.9)}.switch.svelte-lu3vai{cursor:pointer;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);transition:border-bottom-color 200ms ease;display:inline-block;padding-bottom:0.5rem;font-style:italic;font-weight:200}@keyframes svelte-lu3vai-wiggle{0%{transform:rotate(0deg)}25%{transform:rotate(2deg)}50%{transform:rotate(-2deg)}75%{transform:rotate(0deg)}100%{transform:rotate(0deg)}}.switch.svelte-lu3vai:hover{border-bottom-color:rgba(var(--accent-color-rgb), 0.6)}@media screen and (max-width: 768px){.overline.svelte-lu3vai{font-size:2rem;margin-bottom:0.75rem}.subtitle.svelte-lu3vai{font-size:1.8rem}.year.svelte-lu3vai{font-size:1.5rem}}@media screen and (max-width: 468px){section.svelte-lu3vai{place-items:center}.overline.svelte-lu3vai{font-size:8vw}.subtitle.svelte-lu3vai{font-size:5.75vw}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subtitleString;
  let $windowHeight, $$unsubscribe_windowHeight;
  let $windowWidth, $$unsubscribe_windowWidth;
  let $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => $windowHeight = value);
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => $windowWidth = value);
  $$unsubscribe_prefersReducedMotion = subscribe(prefersReducedMotion, (value) => value);
  let subtitleIndex = 0;
  let subtitleOptions = [
    "on the web.",
    "with data.",
    "like these <span style='vertical-align: top; font-size: .8em;'>&darr;</span>"
  ];
  let xDeg = 0;
  let yDeg = 0;
  $$result.css.add(css$6);
  subtitleString = subtitleOptions[subtitleIndex];
  scaleLinear().domain([0, $windowWidth]).range([-10, 10]);
  scaleLinear().domain([0, $windowHeight]).range([-10, 10]);
  $$unsubscribe_windowHeight();
  $$unsubscribe_windowWidth();
  $$unsubscribe_prefersReducedMotion();
  return `<section id="${"hero"}" style="${"min-height: " + escape($windowHeight ? `${$windowHeight * 1.01}px` : "101vh", true) + "; perspective: 100vw;"}" class="${"svelte-lu3vai"}"><div class="${"hero-container svelte-lu3vai"}" style="${"transition: 1000ms cubic-bezier(.3, 1, 1, .3); transform: translateX(" + escape(xDeg, true) + "px) translateY(" + escape(yDeg, true) + "px);"}"><h1 class="${["overline begin-invisible svelte-lu3vai", ""].join(" ").trim()}">Hi, I&#39;m</h1>
    <div class="${"title svelte-lu3vai"}"><h1 class="${[
    "connor begin-invisible gradient-accented svelte-lu3vai",
    ""
  ].join(" ").trim()}">Connor
      </h1>
      <h1 class="${[
    "rothschild begin-invisible gradient-accented svelte-lu3vai",
    ""
  ].join(" ").trim()}">Rothschild
      </h1></div>
    <h2 class="${["subtitle begin-invisible svelte-lu3vai", ""].join(" ").trim()}">And I tell visual stories
      <span class="${["switch svelte-lu3vai", "unclicked"].join(" ").trim()}"><!-- HTML_TAG_START -->${subtitleString}<!-- HTML_TAG_END --></span></h2></div>
  <h1 class="${"year svelte-lu3vai"}">Portfolio 2021</h1>
</section>`;
});
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_prefersReducedMotion = subscribe(prefersReducedMotion, (value) => $prefersReducedMotion = value);
  gsap.registerPlugin(SplitText);
  let { intersecting } = $$props;
  let { element } = $$props;
  let transition = function() {
    if ($prefersReducedMotion)
      return;
    let titleSplit = new SplitText(document.querySelector(element), { type: "words,chars" });
    let titleChars = titleSplit.chars;
    gsap.fromTo(titleChars, { y: 100, opacity: 0, rotation: 0 }, {
      y: 0,
      opacity: 1,
      rotation: 0,
      stagger: 0.025,
      duration: 0.5,
      delay: 0.25,
      ease: "backwards"
    });
  };
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  {
    if (intersecting) {
      transition();
    }
  }
  $$unsubscribe_prefersReducedMotion();
  return `${slots.default ? slots.default({}) : ``}`;
});
const HoverVideo_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.absolute-container.svelte-1j8n00i.svelte-1j8n00i{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible}.projects.svelte-1j8n00i.svelte-1j8n00i{display:flex;flex-direction:column;justify-content:flex-start;width:95%;height:100%;text-align:left;position:relative;max-width:1168px;margin:auto}.project-card.svelte-1j8n00i.svelte-1j8n00i{height:100%;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);display:inline-flex;width:fit-content;align-items:center;justify-content:space-between;cursor:pointer;transition:all 600ms ease}.section-container.svelte-1j8n00i.svelte-1j8n00i{position:relative;overflow:hidden}h1.svelte-1j8n00i.svelte-1j8n00i{font-size:3rem;text-transform:uppercase;font-weight:200;transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}.inactive.svelte-1j8n00i.svelte-1j8n00i{opacity:1;z-index:1}.inactive.svelte-1j8n00i h1.svelte-1j8n00i{color:transparent;opacity:0.5;text-shadow:0 0 2px rgba(var(--text-color-rgb), 0.8)}.blurred.svelte-1j8n00i h1.svelte-1j8n00i{text-shadow:0 0 5px rgba(var(--text-color-rgb), 0.5)}.blurred.svelte-1j8n00i.svelte-1j8n00i{border-bottom:1px solid rgba(var(--text-color-rgb), 0.1)}.active.svelte-1j8n00i.svelte-1j8n00i{z-index:5;border-bottom:1px solid rgba(var(--accent-color-rgb), 0.8)}.active.svelte-1j8n00i h1.svelte-1j8n00i{color:var(--accent-color)}.absolute-container.svelte-1j8n00i.svelte-1j8n00i{z-index:2;pointer-events:none;transition:transform 500ms ease}video.svelte-1j8n00i.svelte-1j8n00i{height:100%;display:block;-o-object-fit:cover;object-fit:cover;margin:auto;position:absolute;top:0;left:0;opacity:1;cursor:pointer;transition:opacity 200ms linear}.videoTransitioning.svelte-1j8n00i.svelte-1j8n00i{opacity:0}.title-3.svelte-1j8n00i.svelte-1j8n00i{transform:scaleY(0.95)}@media screen and (max-height: 600px){.section-container.svelte-1j8n00i.svelte-1j8n00i{height:auto}}@media screen and (min-width: 1269px){.absolute-container.svelte-1j8n00i.svelte-1j8n00i{transform:translateX(52.5%);position:absolute;right:0;left:unset}.title-0.svelte-1j8n00i.svelte-1j8n00i{font-size:3.75rem}.title-1.svelte-1j8n00i.svelte-1j8n00i{font-size:4.05rem}.title-2.svelte-1j8n00i.svelte-1j8n00i{font-size:4.8rem}.title-3.svelte-1j8n00i.svelte-1j8n00i{font-size:9.1rem}}@media screen and (max-width: 1268px){.absolute-container.svelte-1j8n00i.svelte-1j8n00i{transform:none}video.svelte-1j8n00i.svelte-1j8n00i{left:50%;transform:translateX(-50%)}.projects.svelte-1j8n00i.svelte-1j8n00i{text-align:center;width:100%}.project-card.svelte-1j8n00i.svelte-1j8n00i{padding:1rem;margin:auto;width:100%}.section-container.svelte-1j8n00i.svelte-1j8n00i{height:auto;overflow-y:hidden}.inactive.svelte-1j8n00i.svelte-1j8n00i{border-bottom:1px solid transparent;border-top:1px solid transparent}.active.svelte-1j8n00i.svelte-1j8n00i{background:rgba(var(--primary-color-rgb), 0.8);border-bottom:1px solid var(--accent-color);border-top:1px solid var(--accent-color)}.project-card.svelte-1j8n00i.svelte-1j8n00i{display:flex;place-items:center;justify-content:center}.title-0.svelte-1j8n00i.svelte-1j8n00i{font-size:5.69vw}.title-1.svelte-1j8n00i.svelte-1j8n00i{font-size:6.2vw}.title-2.svelte-1j8n00i.svelte-1j8n00i{font-size:7.3vw}.title-3.svelte-1j8n00i.svelte-1j8n00i{font-size:13.9vw}}@media screen and (max-width: 538px){.title-0.svelte-1j8n00i.svelte-1j8n00i{font-size:8.9vw}.title-1.svelte-1j8n00i.svelte-1j8n00i{font-size:11.2vw}.title-2.svelte-1j8n00i.svelte-1j8n00i{font-size:11.3vw}.title-3.svelte-1j8n00i.svelte-1j8n00i{font-size:14vw}}.loading.svelte-1j8n00i.svelte-1j8n00i{display:inline-block;width:80px;height:80px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1}.loading.svelte-1j8n00i.svelte-1j8n00i:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #8e8a8a;border-color:#8e8a8a transparent #8e8a8a transparent;animation:svelte-1j8n00i-spin 1.2s ease infinite;z-index:1}@keyframes svelte-1j8n00i-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
  map: null
};
const HoverVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isTouchscreen;
  let $windowHeight, $$unsubscribe_windowHeight;
  $$unsubscribe_isTouchscreen = subscribe(isTouchscreen, (value2) => value2);
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value2) => $windowHeight = value2);
  let { projects } = $$props;
  let { videos } = $$props;
  let { videosLoaded } = $$props;
  let video, value = 0;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  if ($$props.videosLoaded === void 0 && $$bindings.videosLoaded && videosLoaded !== void 0)
    $$bindings.videosLoaded(videosLoaded);
  $$result.css.add(css$5);
  $$unsubscribe_isTouchscreen();
  $$unsubscribe_windowHeight();
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"section-container svelte-1j8n00i"}" style="${"height: " + escape(Math.max($windowHeight * 0.6, 550), true) + "px"}"><div class="${"projects svelte-1j8n00i"}">${each(projects, (project, i) => {
        return `<div sveltekit:prefetch class="${"project-card no-underline " + escape(value === i ? "active" : "inactive", true) + " " + escape(
          "",
          true
        ) + " svelte-1j8n00i"}"><h1 class="${"title-" + escape(i, true) + " svelte-1j8n00i"}">${escape(project.metadata.title)}</h1>
        </div>`;
      })}</div>
    <div class="${"absolute-container svelte-1j8n00i"}">${videos[0] ? `<video preload="${"auto"}" autoplay muted playsinline id="${"video"}" class="${["svelte-1j8n00i", ""].join(" ").trim()}"${add_attribute("this", video, 0)}></video>` : `<div class="${"loading svelte-1j8n00i"}"></div>`}</div></div>`;
    }
  })}`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-1wc5mcr{margin:auto;margin-bottom:var(--section-margin-bottom);width:100%;overflow-y:visible}.see-all-flex.svelte-1wc5mcr,#projects-title.svelte-1wc5mcr{width:95%;max-width:1168px;margin-left:auto;margin-right:auto}#projects-title.svelte-1wc5mcr{margin-bottom:0}.projects-container.svelte-1wc5mcr{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:10px;width:100%;margin:auto;padding:1rem;max-width:1168px}@media screen and (max-width: 700px){.projects-container.svelte-1wc5mcr{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr)}}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isHEVC, $$unsubscribe_isHEVC;
  let $isPre1015, $$unsubscribe_isPre1015;
  $$unsubscribe_isHEVC = subscribe(isHEVC, (value) => $isHEVC = value);
  $$unsubscribe_isPre1015 = subscribe(isPre1015, (value) => $isPre1015 = value);
  let { projects } = $$props;
  let element;
  let intersecting;
  let filteredProjects = projects.filter((d) => d.metadata.featured == true);
  let videos = [];
  function preload(i) {
    let videoUrl = $isHEVC ? `./videos/${i}.mov` : `./videos/${i}.webm`;
    let req = fetch(videoUrl).then((response) => response.blob());
    req.then((blob) => {
      videos[i] = blob;
    });
  }
  let videosLoaded = false;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (intersecting) {
        for (let i = 0; i < filteredProjects.length; i++) {
          preload(i);
        }
      }
    }
    videosLoaded = videos.length == 4;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      { element, once: true, intersecting },
      {
        intersecting: ($$value) => {
          intersecting = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<section id="${"projects"}" class="${"svelte-1wc5mcr"}"${add_attribute("this", element, 0)}><div class="${"see-all-flex svelte-1wc5mcr"}"><h1 class="${"page-overline"}">
        01. Selected projects
      </h1>
      <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/project"}">See all projects \u2197
      </a></div>
    ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#projects-title" }, {}, {
            default: () => {
              return `<h1 id="${"projects-title"}" class="${"section-title overflow-hidden svelte-1wc5mcr"}">Projects I\u2019ve
        <span class="${"gradient-accented bolded"}">built</span></h1>`;
            }
          })}
    ${$isPre1015 ? `<div class="${"projects-container svelte-1wc5mcr"}">${each(filteredProjects, (project) => {
            return `${validate_component(Project, "ProjectSection").$$render(
              $$result,
              {
                project: project.metadata,
                slug: project.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", "")
              },
              {},
              {}
            )}`;
          })}</div>` : `${validate_component(HoverVideo, "HoverVideo").$$render(
            $$result,
            {
              projects: filteredProjects,
              videos,
              videosLoaded
            },
            {},
            {}
          )}`}</section>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_isHEVC();
  $$unsubscribe_isPre1015();
  return $$rendered;
});
const BlogText_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.post-container.svelte-fibkw1.svelte-fibkw1{display:block;width:100%;height:100%;padding:1rem 1rem 2rem 1rem;overflow:hidden;transition:all 100ms linear, border 300ms ease;cursor:pointer;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);position:relative}.post-card.svelte-fibkw1.svelte-fibkw1{display:flex;flex-direction:column;justify-content:space-between;height:100%;pointer-events:none}.post-date.svelte-fibkw1.svelte-fibkw1{text-transform:uppercase;letter-spacing:0.34px;font-size:1rem;font-family:var(--font-serif);color:var(--off-text-color);font-weight:200;margin-bottom:0.75rem}.post-title.svelte-fibkw1.svelte-fibkw1{font-size:1.5rem;margin-bottom:0.75rem;font-family:var(--font-sans);font-weight:500;line-height:1.2}.post-description.svelte-fibkw1.svelte-fibkw1{font-size:1.2rem;font-family:var(--font-sans);font-weight:200;line-height:1.15}.post-misc.svelte-fibkw1.svelte-fibkw1{margin-top:1rem;display:flex;justify-content:space-between;place-items:flex-end}.read-more.svelte-fibkw1.svelte-fibkw1{text-align:left;color:var(--accent-color)}.post-tags.svelte-fibkw1.svelte-fibkw1{text-align:right}.post-tag.svelte-fibkw1.svelte-fibkw1{font-family:var(--font-sans);padding:3px 8px;background:rgba(var(--accent-color-rgb), 0.1);margin:2px;margin-right:2px;border-radius:3px;color:rgba(var(--accent-color-rgb), 1);font-size:0.85rem;font-weight:400;text-transform:uppercase;margin-right:0.25rem;letter-spacing:1px}.featured-star.svelte-fibkw1.svelte-fibkw1{position:absolute;top:0;right:0;padding:6px}.unhovered.svelte-fibkw1.svelte-fibkw1{filter:grayscale(0.7);border-bottom:1px solid rgba(var(--text-color-rgb), 0.05)}.post-container.svelte-fibkw1.svelte-fibkw1::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1px;bottom:0;left:0;background-color:var(--accent-color);transform-origin:bottom left;transition:transform 500ms ease}.post-container.svelte-fibkw1.svelte-fibkw1:hover::after{transform:scaleX(1)}.unhovered.svelte-fibkw1 .post-date.svelte-fibkw1,.unhovered.svelte-fibkw1 .post-title.svelte-fibkw1,.unhovered.svelte-fibkw1 .post-description.svelte-fibkw1,.unhovered.svelte-fibkw1 .post-tag.svelte-fibkw1,.unhovered.svelte-fibkw1 .featured-star.svelte-fibkw1{color:transparent;opacity:0.5;text-shadow:0 0 2px var(--text-color)}.post-date.svelte-fibkw1.svelte-fibkw1,.post-title.svelte-fibkw1.svelte-fibkw1,.post-description.svelte-fibkw1.svelte-fibkw1,.post-tag.svelte-fibkw1.svelte-fibkw1,.featured-star.svelte-fibkw1.svelte-fibkw1{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}@media screen and (max-width: 400px){.post-date.svelte-fibkw1.svelte-fibkw1{font-size:0.85rem}.post-title.svelte-fibkw1.svelte-fibkw1{font-size:1.2rem;margin-bottom:1rem}.post-description.svelte-fibkw1.svelte-fibkw1{font-size:1rem}.post-tag.svelte-fibkw1.svelte-fibkw1{font-size:0.75rem}}',
  map: null
};
const BlogText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { slug } = $$props;
  let { anyHovered } = $$props;
  let { index } = $$props;
  let hovered = false;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.anyHovered === void 0 && $$bindings.anyHovered && anyHovered !== void 0)
    $$bindings.anyHovered(anyHovered);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$3);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${"post-container no-underline " + escape(post.featured ? "featured" : "", true) + " " + escape(anyHovered ? "unhovered" : "", true) + " svelte-fibkw1"}" sveltekit:prefetch${add_attribute("href", slug, 0)}>${post.featured ? `<div class="${"featured-star svelte-fibkw1"}">${validate_component(Star, "Star").$$render(
        $$result,
        {
          width: "20",
          height: "20",
          fill: "var(--accent-color)",
          stroke: "none",
          hovered,
          index
        },
        {},
        {}
      )}</div>` : ``}
    <div class="${"post-card svelte-fibkw1"}"><div class="${"post-info"}"><h2 class="${"post-date svelte-fibkw1"}">${escape(dateFormat(post.date))}</h2>
        <h1 class="${"post-title svelte-fibkw1"}"><!-- HTML_TAG_START -->${post.title}<!-- HTML_TAG_END --></h1>
        <h2 class="${"post-description svelte-fibkw1"}"><!-- HTML_TAG_START -->${post.description}<!-- HTML_TAG_END --></h2></div>
      <div class="${"post-misc svelte-fibkw1"}">${`<p class="${"placeholder"}">\u200B\u200B</p>`}
        <div class="${"post-tags svelte-fibkw1"}">${each(post.tags, (tag) => {
        return `<span class="${"post-tag svelte-fibkw1"}">${escape(tag)}</span>`;
      })}</div></div></div></a>`;
    }
  })}`;
});
const Blog_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1jgk20q{width:100%;margin-bottom:var(--section-margin-bottom)}.width-container.svelte-1jgk20q{width:95%;max-width:1168px;margin-left:auto;margin-right:auto}.posts-grid.svelte-1jgk20q{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:3rem;justify-items:center;grid-row-gap:1rem}@media screen and (max-width: 1000px){.posts-grid.svelte-1jgk20q{grid-template-columns:repeat(2, 1fr)}}@media screen and (max-width: 700px){.posts-grid.svelte-1jgk20q{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr);grid-auto-rows:auto;width:95%}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let finalPosts;
  let { isMobile } = $$props;
  let { posts } = $$props;
  let anyHovered = false;
  let filteredPosts = posts.filter((d) => {
    var _a, _b;
    return !((_a = d.metadata) == null ? void 0 : _a.draft) && !((_b = d.metadata) == null ? void 0 : _b.archived);
  }).sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured)
      return 1;
    if (!b.metadata.featured && a.metadata.featured)
      return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  let element;
  let intersecting;
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    finalPosts = isMobile ? filteredPosts.filter((d) => d.metadata.featured) : filteredPosts;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
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
          return `<section id="${"blog"}" class="${"svelte-1jgk20q"}"${add_attribute("this", element, 0)}><div class="${"width-container svelte-1jgk20q"}"><div class="${"see-all-flex"}"><h1 class="${"page-overline"}">
          03. Selected blog posts
        </h1>
        <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/post"}">See all posts \u2197</a></div>
      ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#posts-title" }, {}, {
            default: () => {
              return `<h1 id="${"posts-title"}" class="${"section-title overflow-hidden"}">Posts I\u2019ve
          <span class="${"gradient-accented bolded"}">written</span>\u200B
        </h1>`;
            }
          })}</div>
    <div class="${"posts-grid width-container svelte-1jgk20q"}">${each(finalPosts, (post, index) => {
            return `${validate_component(BlogText, "BlogSection").$$render(
              $$result,
              {
                post: post.metadata,
                slug: post.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", ""),
                index,
                anyHovered
              },
              {
                anyHovered: ($$value) => {
                  anyHovered = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          })}</div></section>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Awards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-9nxrt5{width:95%;max-width:1168px;margin:auto;margin-bottom:var(--section-margin-bottom)}",
  map: null
};
const Awards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredAwards;
  let { isMobile } = $$props;
  let { awards } = $$props;
  let element;
  let intersecting;
  awards.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  let anyHovered;
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  if ($$props.awards === void 0 && $$bindings.awards && awards !== void 0)
    $$bindings.awards(awards);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredAwards = isMobile ? awards.filter((d) => d.metadata.featured) : awards;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
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
          return `<section id="${"awards"}" class="${"svelte-9nxrt5"}"${add_attribute("this", element, 0)}><div class="${"see-all-flex"}"><h1 class="${"page-overline"}">
        02. Selected awards
      </h1>
      <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/award"}">See all awards \u2197</a></div>
    ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#awards-title" }, {}, {
            default: () => {
              return `<h1 id="${"awards-title"}" class="${"section-title overflow-hidden"}">Awards I\u2019ve
        <span class="${"gradient-accented bolded "}">won</span></h1>`;
            }
          })}

    <div class="${"awards-grid"}">${each(filteredAwards, (award) => {
            return `${validate_component(Award, "AwardSection").$$render(
              $$result,
              {
                award: award.metadata,
                slug: award.path.replace(/\.[^/.]+$/, "").replace("./", "/").replace("+page", ""),
                anyHovered
              },
              {
                anyHovered: ($$value) => {
                  anyHovered = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          })}</div></section>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-sllhw3{width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;z-index:100;position:relative}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let { data } = $$props;
  let pageWidth;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  isMobile = pageWidth < 768;
  return `
${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})}
<main id="${"home"}" class="${"svelte-sllhw3"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
  ${validate_component(Projects, "Projects").$$render($$result, { projects: data.projects }, {}, {})}
  ${validate_component(Awards, "Awards").$$render($$result, { awards: data.awards, isMobile }, {}, {})}
  ${validate_component(Blog, "Blog").$$render($$result, { posts: data.posts, isMobile }, {}, {})}
</main>`;
});
export {
  Page as default
};
