import { c as create_ssr_component, b as subscribe, d as add_attribute } from "./index.js";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText.js";
import { p as pageTransitionDelay, b as prefersReducedMotion } from "./motion.js";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pageTransitionDelay;
  let $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_pageTransitionDelay = subscribe(pageTransitionDelay, (value) => value);
  $$unsubscribe_prefersReducedMotion = subscribe(prefersReducedMotion, (value) => value);
  let { split = "chars" } = $$props;
  let { stagger = 0.02 } = $$props;
  let { startingOpacity = 0 } = $$props;
  gsap.registerPlugin(SplitText);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  if ($$props.stagger === void 0 && $$bindings.stagger && stagger !== void 0)
    $$bindings.stagger(stagger);
  if ($$props.startingOpacity === void 0 && $$bindings.startingOpacity && startingOpacity !== void 0)
    $$bindings.startingOpacity(startingOpacity);
  $$unsubscribe_pageTransitionDelay();
  $$unsubscribe_prefersReducedMotion();
  return ``;
});
const BackTo_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-97s2x2{font-size:1rem;text-transform:uppercase;letter-spacing:0;font-weight:300 !important;font-family:var(--font-sans)}",
  map: null
};
const BackTo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { text = "" } = $$props;
  let { classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  return `<div${add_attribute("class", classes, 0)}><a class="${"padding-bottom svelte-97s2x2"}"${add_attribute("href", href, 0)} sveltekit:prefetch>\u2190 <!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></a>
</div>`;
});
export {
  BackTo as B,
  Transition as T
};
