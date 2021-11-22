import { c as create_ssr_component, s as subscribe, e as escape, v as validate_component, h as each, a as add_attribute } from "./app-2f09f60b.js";
import { p as pageTransitionDelay, w as windowHeight } from "./global-472f6872.js";
import "bowser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { SplitText } from "gsap/dist/SplitText.js";
import { T as TransitionInView } from "./TransitionInView-ff3b4530.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver-89b2e997.js";
import { d as dateFormat } from "./utils-09998264.js";
import { S as Star } from "./Star-d8949469.js";
import { A as Award } from "./Award-8595d013.js";
import "gsap/dist/MorphSVGPlugin.js";
gsap.registerPlugin(ScrollTrigger, SplitText);
var Hero_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "@keyframes svelte-1m2420z-arrow-line{0%{transform:translate3d(0, -101%, 0)}25%{transform:translate3d(0, 101%, 0)}50%{transform:translate3d(0, 101%, 0)}75%{transform:translate3d(0, 101%, 0)}100%{transform:translate3d(0, -101%, 0)}}@keyframes svelte-1m2420z-arrow{0%{-webkit-transform:translateZ(0) rotate(45deg);transform:translateZ(0) rotate(45deg)}100%{-webkit-transform:translate3d(0, 10px, 0) rotate(45deg);transform:translate3d(0, 10px, 0) rotate(45deg)}}section.svelte-1m2420z{width:95%;margin:auto;display:flex;flex-direction:column;justify-content:center;place-items:center;overflow:hidden;position:relative;transition:height 100ms ease}.year.svelte-1m2420z{position:absolute;bottom:5.35%;left:0.75%;margin-left:1rem;color:rgba(var(--text-color-rgb), 0.35);font-family:var(--font-sans);font-weight:300;font-size:1.5rem;letter-spacing:-0.05rem;user-select:none}.begin-invisible.svelte-1m2420z:not(.transitioned){opacity:0}.hero-container.svelte-1m2420z{line-height:0.85;user-select:none;margin-top:calc(0px - var(--nav-height))}.overline.svelte-1m2420z{font-weight:200;text-align:left;margin-bottom:0.5rem}.title.svelte-1m2420z{margin-bottom:1.25rem}.connor.svelte-1m2420z,.rothschild.svelte-1m2420z{display:block;font-weight:500;letter-spacing:-0.1rem;text-transform:uppercase;overflow-y:hidden}.connor.svelte-1m2420z{font-size:17.55vw}.rothschild.svelte-1m2420z{font-size:12.15vw}.subtitle.svelte-1m2420z{font-size:3vw;max-width:1068px;font-weight:300;margin-bottom:1rem;text-align:right;margin-left:auto;color:rgba(var(--text-color-rgb), 0.9)}.switch.svelte-1m2420z{cursor:pointer;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);transition:border-bottom-color 200ms ease;display:inline-block;padding-bottom:0.5rem}.switch.unclicked.svelte-1m2420z{animation:svelte-1m2420z-wiggle 3000ms infinite}@keyframes svelte-1m2420z-wiggle{0%{transform:rotate(0deg)}25%{transform:rotate(2deg)}50%{transform:rotate(-2deg)}75%{transform:rotate(0deg)}100%{transform:rotate(0deg)}}.switch.svelte-1m2420z:hover{border-bottom-color:rgba(var(--accent-color-rgb), 0.6)}@media screen and (max-width: 768px){.subtitle.svelte-1m2420z{font-size:4vw}}@media screen and (max-width: 468px){section.svelte-1m2420z{place-items:center}.overline.svelte-1m2420z,.subtitle.svelte-1m2420z,.hero-container.svelte-1m2420z{text-align:left}.overline.svelte-1m2420z{font-size:2.25rem;margin-bottom:0.75rem}.subtitle.svelte-1m2420z{font-size:1.4rem}.year.svelte-1m2420z{font-size:1.5rem;left:2.5%}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subtitleString;
  let $$unsubscribe_pageTransitionDelay;
  let $windowHeight, $$unsubscribe_windowHeight;
  $$unsubscribe_pageTransitionDelay = subscribe(pageTransitionDelay, (value) => value);
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => $windowHeight = value);
  let subtitleIndex = 0;
  let subtitleOptions = [
    "on the web.",
    "with data.",
    "like these <span style='vertical-align: top; font-size: .8em;'>&darr;</span>"
  ];
  $$result.css.add(css$7);
  subtitleString = subtitleOptions[subtitleIndex];
  $$unsubscribe_pageTransitionDelay();
  $$unsubscribe_windowHeight();
  return `<section id="${"hero"}" style="${"min-height: " + escape($windowHeight ? `calc(${$windowHeight * 1.01}px - var(--nav-height))` : "101vh") + ";"}" class="${"svelte-1m2420z"}">
  <div class="${"hero-container svelte-1m2420z"}"><h1 class="${["overline begin-invisible svelte-1m2420z", ""].join(" ").trim()}">Hi, I&#39;m</h1>
    <div class="${"title svelte-1m2420z"}"><h1 class="${[
    "connor begin-invisible gradient-accented svelte-1m2420z",
    ""
  ].join(" ").trim()}">Connor
      </h1>
      <h1 class="${[
    "rothschild begin-invisible gradient-accented svelte-1m2420z",
    ""
  ].join(" ").trim()}">Rothschild
      </h1></div>
    <h2 class="${["subtitle begin-invisible  svelte-1m2420z", ""].join(" ").trim()}">And I tell visual stories <span class="${["switch svelte-1m2420z", "unclicked"].join(" ").trim()}"><!-- HTML_TAG_START -->${subtitleString}<!-- HTML_TAG_END --></span></h2></div>
  <h1 class="${"year svelte-1m2420z"}">Portfolio 2021</h1>
</section>`;
});
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.registerPlugin(SplitText);
  let { intersecting } = $$props;
  let { element } = $$props;
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  {
    if (intersecting) {
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
    }
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
var HoverVideo_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".absolute-container.svelte-1f921ml.svelte-1f921ml{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible}.projects.svelte-1f921ml.svelte-1f921ml{display:flex;flex-direction:column;justify-content:flex-start;width:95%;height:100%;text-align:left;position:relative;max-width:1168px;margin:auto}.project-card.svelte-1f921ml.svelte-1f921ml{height:100%;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);display:inline-flex;width:fit-content;align-items:center;justify-content:space-between;cursor:pointer;transition:all 600ms ease}.section-container.svelte-1f921ml.svelte-1f921ml{position:relative;overflow:hidden}h1.svelte-1f921ml.svelte-1f921ml{font-size:3rem;text-transform:uppercase;font-weight:200;transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}.inactive.svelte-1f921ml.svelte-1f921ml{opacity:1;z-index:1}.inactive.svelte-1f921ml h1.svelte-1f921ml{color:transparent;opacity:0.5;text-shadow:0 0 2px rgba(var(--text-color-rgb), 0.8)}.blurred.svelte-1f921ml h1.svelte-1f921ml{text-shadow:0 0 5px rgba(var(--text-color-rgb), 0.5)}.active.svelte-1f921ml.svelte-1f921ml{z-index:5;border-bottom:1px solid rgba(var(--accent-color-rgb), 0.8)}.active.svelte-1f921ml h1.svelte-1f921ml{color:var(--accent-color)}.absolute-container.svelte-1f921ml.svelte-1f921ml{z-index:2;pointer-events:none;transition:transform 500ms ease}video.svelte-1f921ml.svelte-1f921ml{height:100%;display:block;-o-object-fit:cover;object-fit:cover;margin:auto;position:absolute;top:0;left:0;opacity:1;cursor:pointer;transition:opacity 200ms linear}.videoTransitioning.svelte-1f921ml.svelte-1f921ml{opacity:0}.title-0.svelte-1f921ml.svelte-1f921ml{margin-top:1rem}.title-3.svelte-1f921ml.svelte-1f921ml{transform:scaleY(0.95)}@media screen and (max-height: 600px){.section-container.svelte-1f921ml.svelte-1f921ml{height:auto}}@media screen and (min-width: 1269px){.absolute-container.svelte-1f921ml.svelte-1f921ml{transform:translateX(55%);position:absolute;right:0;left:unset}.title-0.svelte-1f921ml.svelte-1f921ml{font-size:3.75rem}.title-1.svelte-1f921ml.svelte-1f921ml{font-size:4.05rem}.title-2.svelte-1f921ml.svelte-1f921ml{font-size:4.8rem}.title-3.svelte-1f921ml.svelte-1f921ml{font-size:9.1rem}}@media screen and (max-width: 1268px){.absolute-container.svelte-1f921ml.svelte-1f921ml{transform:none}video.svelte-1f921ml.svelte-1f921ml{left:50%;transform:translateX(-50%)}.projects.svelte-1f921ml.svelte-1f921ml{text-align:center;width:100%}.project-card.svelte-1f921ml.svelte-1f921ml{padding:1rem;margin:auto;width:100%}.section-container.svelte-1f921ml.svelte-1f921ml{height:auto;overflow-y:hidden}.inactive.svelte-1f921ml.svelte-1f921ml{border-bottom:1px solid transparent;border-top:1px solid transparent}.active.svelte-1f921ml.svelte-1f921ml{background:rgba(var(--primary-color-rgb), 0.8);border-bottom:1px solid var(--accent-color);border-top:1px solid var(--accent-color)}.project-card.svelte-1f921ml.svelte-1f921ml{display:flex;place-items:center;justify-content:center}.title-0.svelte-1f921ml.svelte-1f921ml{font-size:5.69vw}.title-1.svelte-1f921ml.svelte-1f921ml{font-size:6.2vw}.title-2.svelte-1f921ml.svelte-1f921ml{font-size:7.3vw}.title-3.svelte-1f921ml.svelte-1f921ml{font-size:13.9vw}}",
  map: null
};
const HoverVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $windowHeight, $$unsubscribe_windowHeight;
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value2) => $windowHeight = value2);
  let { projects } = $$props;
  let { videos } = $$props;
  let { videosLoaded } = $$props;
  let video, value = 0;
  console.log(projects);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  if ($$props.videosLoaded === void 0 && $$bindings.videosLoaded && videosLoaded !== void 0)
    $$bindings.videosLoaded(videosLoaded);
  $$result.css.add(css$6);
  $$unsubscribe_windowHeight();
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => `<div class="${"section-container svelte-1f921ml"}" style="${"height: " + escape(Math.max($windowHeight * 0.6, 500)) + "px"}"><div class="${"projects svelte-1f921ml"}">${each(projects, (project, i) => `<a${add_attribute("href", project.path.replace(/\.[^/.]+$/, ""), 0)} sveltekit:prefetch class="${"project-card no-underline " + escape(value === i ? "active" : "inactive") + " " + escape("") + " svelte-1f921ml"}"><h1 class="${"title-" + escape(i) + " svelte-1f921ml"}">${escape(project.metadata.title)}</h1>
        </a>`)}</div>
    <div class="${"absolute-container svelte-1f921ml"}"><video preload="${"metadata"}" autoplay muted playsinline id="${"video"}" class="${["svelte-1f921ml", ""].join(" ").trim()}"${add_attribute("this", video, 0)}></video></div></div>`
  })}`;
});
var ScrollVideo_svelte_svelte_type_style_lang = "";
var Projects_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-18iem3v{margin:auto;margin-bottom:var(--section-margin-bottom);width:100%;overflow:hidden}.see-all-flex.svelte-18iem3v,#projects-title.svelte-18iem3v{width:95%;max-width:1168px;margin-left:auto;margin-right:auto}#projects-title.svelte-18iem3v{margin-bottom:0}section.svelte-18iem3v{overflow:visible}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  let element;
  let intersecting;
  let filteredProjects = projects.filter((d) => d.metadata.featured == true);
  let videos = [];
  function preload(i) {
    let videoUrl = `./videos/${i}.webm`;
    let req = fetch(videoUrl).then((response) => response.blob());
    req.then((blob) => {
      videos[i] = blob;
    });
  }
  let videosLoaded = false;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (intersecting) {
        for (let i = 0; i < filteredProjects.length; i++) {
          preload(i);
          if (i == filteredProjects.length - 1)
            videosLoaded = true;
        }
      }
    }
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { element, once: true, intersecting }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<section id="${"projects"}" class="${"svelte-18iem3v"}"${add_attribute("this", element, 0)}><div class="${"sticky-top"}"><div class="${"see-all-flex svelte-18iem3v"}"><h1 class="${"page-overline"}">
          01. Selected projects
        </h1>
        <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/project"}">See all projects \u2197
        </a></div>
      ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#projects-title" }, {}, {
        default: () => `<h1 id="${"projects-title"}" class="${"section-title overflow-hidden svelte-18iem3v"}">Projects I\u2019ve
          <span class="${"gradient-accented bolded"}">built</span></h1>`
      })}</div>
    ${`${validate_component(HoverVideo, "HoverVideo").$$render($$result, {
        projects: filteredProjects,
        videos,
        videosLoaded
      }, {}, {})}`}</section>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var BlogText_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.post-container.svelte-137y06u.svelte-137y06u{display:block;width:100%;height:100%;padding:1rem 1rem 2rem 1rem;overflow:hidden;transition:all 100ms linear, border 300ms ease;cursor:pointer;border-bottom:1px solid rgba(var(--text-color-rgb), 0.2);position:relative}.post-card.svelte-137y06u.svelte-137y06u{display:flex;flex-direction:column;justify-content:space-between;height:100%;pointer-events:none}.post-date.svelte-137y06u.svelte-137y06u{text-transform:uppercase;letter-spacing:0.34px;font-size:1rem;font-family:var(--font-serif);color:var(--off-text-color);font-weight:200;margin-bottom:0.75rem}.post-title.svelte-137y06u.svelte-137y06u{font-size:1.5rem;margin-bottom:0.75rem;font-family:var(--font-sans);font-weight:500;line-height:1.2}.post-description.svelte-137y06u.svelte-137y06u{font-size:1.2rem;font-family:var(--font-sans);font-weight:200;line-height:1.15}.post-misc.svelte-137y06u.svelte-137y06u{margin-top:1rem;display:flex;justify-content:space-between;place-items:flex-end}.read-more.svelte-137y06u.svelte-137y06u{text-align:left;color:var(--accent-color)}.post-tags.svelte-137y06u.svelte-137y06u{text-align:right}.post-tag.svelte-137y06u.svelte-137y06u{font-family:var(--font-sans);padding:3px 8px;background:rgba(var(--accent-color-rgb), 0.05);margin:2px;margin-right:2px;border-radius:3px;color:rgba(var(--accent-color-rgb), 1);font-size:0.85rem;font-weight:200;text-transform:uppercase;margin-right:0.25rem;letter-spacing:1px}.featured-star.svelte-137y06u.svelte-137y06u{position:absolute;top:0;right:0;padding:6px}.unhovered.svelte-137y06u.svelte-137y06u{filter:grayscale(0.7);border-bottom:1px solid rgba(var(--text-color-rgb), 0.05)}.post-container.svelte-137y06u.svelte-137y06u::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1px;bottom:0;left:0;background-color:var(--accent-color);transform-origin:bottom left;transition:transform 500ms ease}.post-container.svelte-137y06u.svelte-137y06u:hover::after{transform:scaleX(1)}.unhovered.svelte-137y06u .post-date.svelte-137y06u,.unhovered.svelte-137y06u .post-title.svelte-137y06u,.unhovered.svelte-137y06u .post-description.svelte-137y06u,.unhovered.svelte-137y06u .post-tag.svelte-137y06u,.unhovered.svelte-137y06u .featured-star.svelte-137y06u{color:transparent;opacity:0.5;text-shadow:0 0 2px var(--text-color)}.post-date.svelte-137y06u.svelte-137y06u,.post-title.svelte-137y06u.svelte-137y06u,.post-description.svelte-137y06u.svelte-137y06u,.post-tag.svelte-137y06u.svelte-137y06u,.featured-star.svelte-137y06u.svelte-137y06u{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}@media screen and (max-width: 400px){.post-date.svelte-137y06u.svelte-137y06u{font-size:0.85rem}.post-title.svelte-137y06u.svelte-137y06u{font-size:1.2rem;margin-bottom:1rem}.post-description.svelte-137y06u.svelte-137y06u{font-size:1rem}.post-tag.svelte-137y06u.svelte-137y06u{font-size:0.75rem}}',
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
  $$result.css.add(css$4);
  return `${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => `<a class="${"post-container no-underline " + escape(post.featured ? "featured" : "") + " " + escape(anyHovered ? "unhovered" : "") + " svelte-137y06u"}" sveltekit:prefetch${add_attribute("href", slug, 0)}>${post.featured ? `<div class="${"featured-star svelte-137y06u"}">${validate_component(Star, "Star").$$render($$result, {
      width: "20",
      height: "20",
      fill: "var(--accent-color)",
      stroke: "none",
      hovered,
      index
    }, {}, {})}</div>` : ``}
    <div class="${"post-card svelte-137y06u"}"><div class="${"post-info"}"><h2 class="${"post-date svelte-137y06u"}">${escape(dateFormat(post.date))}</h2>
        <h1 class="${"post-title svelte-137y06u"}">${escape(post.title)}</h1>
        <h2 class="${"post-description svelte-137y06u"}">${escape(post.description)}</h2></div>
      <div class="${"post-misc svelte-137y06u"}">${`<p class="${"placeholder"}">\u200B\u200B</p>`}
        <div class="${"post-tags svelte-137y06u"}">${each(post.tags, (tag) => `<span class="${"post-tag svelte-137y06u"}">${escape(tag)}</span>`)}</div></div></div></a>`
  })}`;
});
var Blog_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-1jgk20q{width:100%;margin-bottom:var(--section-margin-bottom)}.width-container.svelte-1jgk20q{width:95%;max-width:1168px;margin-left:auto;margin-right:auto}.posts-grid.svelte-1jgk20q{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:3rem;justify-items:center;grid-row-gap:1rem}@media screen and (max-width: 1000px){.posts-grid.svelte-1jgk20q{grid-template-columns:repeat(2, 1fr)}}@media screen and (max-width: 700px){.posts-grid.svelte-1jgk20q{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr);grid-auto-rows:auto;width:95%}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let finalPosts;
  let { isMobile } = $$props;
  let { posts } = $$props;
  let anyHovered = false;
  let filteredPosts = posts.filter((d) => !d.metadata.draft && !d.metadata.archived).sort((a, b) => {
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
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    finalPosts = isMobile ? filteredPosts.filter((d) => d.metadata.featured) : filteredPosts;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { element, intersecting }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<section id="${"blog"}" class="${"svelte-1jgk20q"}"${add_attribute("this", element, 0)}><div class="${"sticky-top"}"><div class="${"width-container svelte-1jgk20q"}"><div class="${"see-all-flex"}"><h1 class="${"page-overline"}">
            03. Selected blog posts
          </h1>
          <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/post"}">See all posts \u2197</a></div>
        ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#posts-title" }, {}, {
        default: () => `<h1 id="${"posts-title"}" class="${"section-title overflow-hidden"}">Posts I\u2019ve
            <span class="${"gradient-accented bolded"}">written</span>\u200B
          </h1>`
      })}</div></div>
    <div class="${"posts-grid width-container svelte-1jgk20q"}">${each(finalPosts, (post, index) => `${validate_component(BlogText, "BlogSection").$$render($$result, {
        post: post.metadata,
        slug: post.path.replace(/\.[^/.]+$/, ""),
        index,
        anyHovered
      }, {
        anyHovered: ($$value) => {
          anyHovered = $$value;
          $$settled = false;
        }
      }, {})}`)}</div></section>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var Awards_svelte_svelte_type_style_lang = "";
const css$2 = {
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
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredAwards = isMobile ? awards.filter((d) => d.metadata.featured) : awards;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { element, intersecting }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<section id="${"awards"}" class="${"svelte-9nxrt5"}"${add_attribute("this", element, 0)}><div class="${"sticky-top"}"><div class="${"see-all-flex"}"><h1 class="${"page-overline"}">
          02. Selected awards
        </h1>
        <a class="${"page-overline padding-bottom see-all"}" sveltekit:prefetch href="${"/award"}">See all awards \u2197</a></div>
      ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { intersecting, element: "#awards-title" }, {}, {
        default: () => `<h1 id="${"awards-title"}" class="${"section-title overflow-hidden"}">Awards I\u2019ve
          <span class="${"gradient-accented bolded "}">won</span></h1>`
      })}</div>

    <div class="${"awards-grid"}">${each(filteredAwards, (award, index) => `${validate_component(Award, "AwardSection").$$render($$result, {
        award: award.metadata,
        slug: award.path.replace(/\.[^/.]+$/, ""),
        anyHovered
      }, {
        anyHovered: ($$value) => {
          anyHovered = $$value;
          $$settled = false;
        }
      }, {})}`)}</div></section>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var CircleText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".circle.svelte-hfj58p{position:sticky;right:6px;bottom:6px;padding:1rem;z-index:99;overflow:hidden;width:min-content;margin-left:auto;margin-right:6px;transform:translateZ(0);transition:all 600ms ease;cursor:pointer}.circle.svelte-hfj58p:hover{transform:scale3d(1.05, 1.05, 1.05)}img.svelte-hfj58p{position:absolute;border-radius:50%;width:100px;height:100px;object-fit:contain;transform:scale(0.795);z-index:100}text.svelte-hfj58p{fill:var(--text-color);font-family:var(--font-serif);font-weight:200;font-size:63px;letter-spacing:-1px;text-shadow:1px 0px 0px var(--pure-background-color);user-select:none}path.svelte-hfj58p{fill:rgba(var(--accent-color-rgb), 0.2)}.circleText.svelte-hfj58p{width:100px;height:100px;overflow:visible;transform-origin:center center;stroke-opacity:0.75;animation:svelte-hfj58p-rotate 25s linear infinite}@keyframes svelte-hfj58p-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@media screen and (max-width: 560px){.circle.svelte-hfj58p{display:none}}",
  map: null
};
const CircleText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text;
  $$result.css.add(css$1);
  text = "\u{1F44B} Connor \u{1F440} Rothschild \u{1F920} Connor \u{1F525} Rothschild";
  return `<div class="${"circle svelte-hfj58p"}" sveltekit:prefetch>${``}
  <svg class="${"circleText svelte-hfj58p"}" viewBox="${"0 0 500 500"}" data-duration="${"5"}"><path id="${"circle"}" fill="${"none"}" data-duration="${"5"}" d="${"M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"}" class="${"svelte-hfj58p"}"></path><text dy="${"-25"}" class="${"svelte-hfj58p"}"><textPath xlink:href="${"#circle"}">${escape(text)}</textPath></text></svg>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-anfs99{width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;background-color:var(--primary-color);z-index:100}",
  map: null
};
async function load({ fetch: fetch2 }) {
  const projectsJson = await fetch2(`/projects.json`);
  const projects = await projectsJson.json();
  const postsJson = await fetch2(`/posts.json`);
  const posts = await postsJson.json();
  const awardsJson = await fetch2(`/awards.json`);
  const awards = await awardsJson.json();
  return {
    props: {
      projects,
      posts,
      awards
    }
  };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let { projects } = $$props;
  let { posts } = $$props;
  let { awards } = $$props;
  let pageWidth;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.awards === void 0 && $$bindings.awards && awards !== void 0)
    $$bindings.awards(awards);
  $$result.css.add(css);
  isMobile = pageWidth < 768;
  return `
<main id="${"home"}" class="${"svelte-anfs99"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
  
  ${validate_component(Projects, "Projects").$$render($$result, { projects }, {}, {})}
  ${validate_component(Awards, "Awards").$$render($$result, { awards, isMobile }, {}, {})}
  ${validate_component(Blog, "Blog").$$render($$result, { posts, isMobile }, {}, {})}
  ${validate_component(CircleText, "Circle").$$render($$result, {}, {}, {})}
</main>`;
});
export { Routes as default, load };
