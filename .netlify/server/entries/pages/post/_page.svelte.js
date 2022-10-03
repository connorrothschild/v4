import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, d as add_attribute, f as each } from "../../../chunks/index.js";
import { scaleLinear } from "d3-scale";
import { d as dateFormat } from "../../../chunks/utils.js";
import { S as Star } from "../../../chunks/Star.js";
import { a as windowWidth } from "../../../chunks/motion.js";
import { T as TransitionInView } from "../../../chunks/TransitionInView.js";
import { T as Transition, B as BackTo } from "../../../chunks/BackTo.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "gsap";
import "gsap/dist/MorphSVGPlugin.js";
import "../../../chunks/index2.js";
import "../../../chunks/IntersectionObserver.js";
import "gsap/dist/SplitText.js";
const Blog_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-container.svelte-1uw1sgh.svelte-1uw1sgh{display:block;width:100%;height:100%;border-radius:10px;background:var(--semitransparent-bg);padding:20px;margin:6px;overflow:hidden;border:1px solid transparent;transition:all 100ms linear, border 300ms ease;cursor:pointer}.perspective-container.svelte-1uw1sgh.svelte-1uw1sgh{display:block;height:100%;display:flex;position:relative;margin:-4px}.card-highlight.svelte-1uw1sgh.svelte-1uw1sgh{position:absolute;width:100%;height:100%;border-radius:50%;background:rgba(0, 0, 0, 0.01);filter:blur(20px);z-index:1;pointer-events:none}.post-card.svelte-1uw1sgh.svelte-1uw1sgh{display:flex;flex-direction:column;justify-content:space-between;height:100%;pointer-events:none}.post-date.svelte-1uw1sgh.svelte-1uw1sgh{text-transform:uppercase;letter-spacing:0.34px;font-size:1rem;font-family:var(--font-serif);color:var(--off-text-color);font-weight:200;margin-bottom:0.75rem}.post-title.svelte-1uw1sgh.svelte-1uw1sgh{font-size:1.5rem;margin-bottom:0.75rem;font-family:var(--font-sans);font-weight:500;line-height:1.2}.post-description.svelte-1uw1sgh.svelte-1uw1sgh{font-size:1.2rem;font-family:var(--font-sans);font-weight:200;line-height:1.15}.post-tags.svelte-1uw1sgh.svelte-1uw1sgh{margin-top:1rem;text-align:right}.post-tag.svelte-1uw1sgh.svelte-1uw1sgh{font-family:var(--font-sans);padding:3px 8px;background:rgba(var(--accent-color-rgb), 0.1);margin:2px;margin-right:2px;border-radius:3px;color:rgba(var(--accent-color-rgb), 1);font-size:0.85rem;font-weight:200;text-transform:uppercase;margin-right:0.25rem;letter-spacing:1px}.featured-star.svelte-1uw1sgh.svelte-1uw1sgh{position:absolute;top:0;right:0;padding:6px}.hovered.svelte-1uw1sgh.svelte-1uw1sgh{border:1px solid var(--accent-color)}.unhovered.svelte-1uw1sgh.svelte-1uw1sgh{filter:grayscale(1)}.unhovered.svelte-1uw1sgh .post-date.svelte-1uw1sgh,.unhovered.svelte-1uw1sgh .post-title.svelte-1uw1sgh,.unhovered.svelte-1uw1sgh .post-description.svelte-1uw1sgh,.unhovered.svelte-1uw1sgh .post-tag.svelte-1uw1sgh,.unhovered.svelte-1uw1sgh .featured-star.svelte-1uw1sgh{color:transparent;opacity:0.5;text-shadow:0 0 2px var(--text-color)}.post-date.svelte-1uw1sgh.svelte-1uw1sgh,.post-title.svelte-1uw1sgh.svelte-1uw1sgh,.post-description.svelte-1uw1sgh.svelte-1uw1sgh,.post-tag.svelte-1uw1sgh.svelte-1uw1sgh,.featured-star.svelte-1uw1sgh.svelte-1uw1sgh{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}@media screen and (max-width: 400px){.post-date.svelte-1uw1sgh.svelte-1uw1sgh{font-size:0.85rem}.post-title.svelte-1uw1sgh.svelte-1uw1sgh{font-size:1.2rem;margin-bottom:1rem}.post-description.svelte-1uw1sgh.svelte-1uw1sgh{font-size:1rem}.post-tag.svelte-1uw1sgh.svelte-1uw1sgh{font-size:0.75rem}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getCardDimensions;
  let rotationX;
  let rotationY;
  let circleXPosition;
  let circleYPosition;
  let shadowX;
  let shadowY;
  let scale3dVal;
  let $$unsubscribe_windowWidth;
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  let { post } = $$props;
  let { slug } = $$props;
  let { anyHovered } = $$props;
  let { index } = $$props;
  let card, cardWidth, cardHeight, scrollYPosition = 0;
  let hovered = false;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.anyHovered === void 0 && $$bindings.anyHovered && anyHovered !== void 0)
    $$bindings.anyHovered(anyHovered);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  getCardDimensions = function(card2) {
    card2 ? card2.getBoundingClientRect().left : 0;
    card2 ? card2.getBoundingClientRect().top + scrollYPosition : 0;
  };
  {
    getCardDimensions(card);
  }
  {
    getCardDimensions(card);
  }
  scaleLinear().domain([0, cardWidth]).range([-4, 4]);
  scaleLinear().domain([cardHeight, 0]).range([-4, 4]);
  rotationX = 0;
  rotationY = 0;
  scaleLinear().domain([0, cardWidth]).range([-50, 50]);
  scaleLinear().domain([0, cardHeight]).range([-50, 50]);
  circleXPosition = 0;
  circleYPosition = 0;
  shadowX = 0;
  shadowY = 0;
  scale3dVal = 1;
  $$unsubscribe_windowWidth();
  return `

${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${"perspective-container no-underline svelte-1uw1sgh"}" style="${"perspective: " + escape(cardWidth, true) + "px"}"${add_attribute("href", slug, 0)} sveltekit:prefetch${add_attribute("this", card, 0)}><div style="${"transform: rotateY(" + escape(rotationX, true) + "deg) rotateX(" + escape(rotationY, true) + "deg) scale3d(" + escape(scale3dVal, true) + ", " + escape(scale3dVal, true) + ", " + escape(scale3dVal, true) + "); box-shadow: " + escape(shadowX, true) + "px " + escape(shadowY, true) + "px 15px rgba(0, 0, 0, 0.1);"}" class="${"post-container no-underline " + escape(post.featured ? "featured" : "", true) + " " + escape(anyHovered ? "unhovered" : "", true) + " svelte-1uw1sgh"}">${post.featured ? `<div class="${"featured-star svelte-1uw1sgh"}">${validate_component(Star, "Star").$$render(
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
      <div class="${"card-highlight svelte-1uw1sgh"}" style="${"left: " + escape(circleXPosition, true) + "%; top: " + escape(circleYPosition, true) + "%"}"></div>
      <div class="${"post-card svelte-1uw1sgh"}"><div class="${"post-info"}"><h2 class="${"post-date svelte-1uw1sgh"}">${escape(dateFormat(post.date))}</h2>
          <h1 class="${"post-title svelte-1uw1sgh"}"><!-- HTML_TAG_START -->${post.title}<!-- HTML_TAG_END --></h1>
          <h2 class="${"post-description svelte-1uw1sgh"}"><!-- HTML_TAG_START -->${post.description}<!-- HTML_TAG_END --></h2></div>
        <div class="${"post-tags svelte-1uw1sgh"}">${each(post.tags, (tag) => {
        return `<span class="${"post-tag svelte-1uw1sgh"}">${escape(tag)}</span>`;
      })}</div></div></div></a>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts-grid.svelte-1ge7og7{display:grid;grid-template-columns:repeat(2, 1fr);grid-auto-rows:1fr;grid-gap:10px}.button.svelte-1ge7og7{margin:12px 0 12px auto}.archives-title.svelte-1ge7og7{font-size:3rem;margin:1.5rem 1rem 1rem 1rem;border-top:1px solid rgba(var(--accent-color-rgb), 0.5);padding:2rem 0 0.5rem 0;font-weight:100;color:var(--pure-text-color);text-transform:uppercase;text-align:center}@media screen and (max-width: 668px){.posts-grid.svelte-1ge7og7{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr);grid-auto-rows:auto}.archives-title.svelte-1ge7og7{font-size:9vw}}",
  map: null
};
let title = "Blog | Connor Rothschild";
let description = "Some of my writing.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let filteredPosts = data.posts.filter((d) => {
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
  data.posts.filter((d) => d.metadata.archived == true).sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date));
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  let anyHovered = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
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
  <h1 class="${"page-title transition-title overflow-hidden"}">Writing</h1>
  <div class="${"transition-content posts-grid svelte-1ge7og7"}">${each(filteredPosts, (post, index) => {
      return `${validate_component(Blog, "BlogSection").$$render(
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
    })}</div>
  ${``}
  <button class="${"button pulled-right block transition-content svelte-1ge7og7"}">${escape("Show the archives \u{1F62C}")}</button>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
