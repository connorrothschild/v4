import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute, g as getContext, v as validate_component, b as assign, n as now, l as loop, i as identity } from "./app-2f09f60b.js";
import { w as windowHeight, a as windowWidth, c as currentColorMode, b as writable, p as pageTransitionDelay, n as navigationState } from "./global-472f6872.js";
import "lodash.debounce";
import { s as seo } from "./store-30431d00.js";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin.js";
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_windowHeight;
  let $$unsubscribe_windowWidth;
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => value);
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  let { debounceDur = 300 } = $$props;
  if ($$props.debounceDur === void 0 && $$bindings.debounceDur && debounceDur !== void 0)
    $$bindings.debounceDur(debounceDur);
  $$unsubscribe_windowHeight();
  $$unsubscribe_windowWidth();
  return ``;
});
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  $$unsubscribe_seo();
  return `${$$result.head += `${$$result.title = `<title>${escape($seo.title)}</title>`, ""}<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1agpsf7"><meta name="${"twitter:site"}" content="${"@CL_Rothschild"}" data-svelte="svelte-1agpsf7"><meta name="${"twitter:creator"}" content="${"@CL_Rothschild"}" data-svelte="svelte-1agpsf7"><meta name="${"twitter:image"}"${add_attribute("content", $seo.image, 0)} data-svelte="svelte-1agpsf7"><meta name="${"twitter:title"}"${add_attribute("content", $seo.title, 0)} data-svelte="svelte-1agpsf7"><meta name="${"og:title"}"${add_attribute("content", $seo.title, 0)} data-svelte="svelte-1agpsf7"><meta name="${"description"}"${add_attribute("content", $seo.description, 0)} data-svelte="svelte-1agpsf7"><meta name="${"twitter:description"}"${add_attribute("content", $seo.description, 0)} data-svelte="svelte-1agpsf7"><meta name="${"og:image"}"${add_attribute("content", $seo.image, 0)} data-svelte="svelte-1agpsf7"><meta name="${"keywords"}"${add_attribute("content", $seo.keywords, 0)} data-svelte="svelte-1agpsf7"><meta name="${"topic"}"${add_attribute("content", $seo.keywords, 0)} data-svelte="svelte-1agpsf7"><meta name="${"language"}" content="${"EN"}" data-svelte="svelte-1agpsf7"><meta name="${"robots"}" content="${"index, follow"}" data-svelte="svelte-1agpsf7"><meta name="${"abstract"}"${add_attribute("content", $seo.description, 0)} data-svelte="svelte-1agpsf7"><meta name="${"summary"}"${add_attribute("content", $seo.description, 0)} data-svelte="svelte-1agpsf7"><meta name="${"author"}" content="${"Connor Rothschild"}" data-svelte="svelte-1agpsf7"><meta name="${"url"}" content="${"http://www.connorrothschild.com"}" data-svelte="svelte-1agpsf7">`, ""}`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
var NavListItem_svelte_svelte_type_style_lang = "";
var OpenToClose_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "svg.svelte-32a0su{width:1.9rem;height:1.9rem;fill:var(--accent-color)}",
  map: null
};
let openPath = "M 3.121094 5.519531 L 3.121094 6.960938 L 20.878906 6.960938 L 20.878906 5.519531 Z M 3.121094 11.28125 L 3.121094 12.71875 L 20.878906 12.71875 L 20.878906 11.28125 Z M 3.121094 17.039062 L 3.121094 18.480469 L 20.878906 18.480469 L 20.878906 17.039062 Z M 3.121094 17.039062 ";
let closedPath = "M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289Z";
const OpenToClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded } = $$props;
  gsap.registerPlugin(MorphSVGPlugin);
  let icon;
  const switchIcon = function() {
    gsap.to(icon, {
      duration: 0.6,
      morphSVG: expanded ? closedPath : openPath,
      ease: "power3.inOut"
    });
  };
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$5);
  {
    switchIcon();
  }
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"svelte-32a0su"}"><g><path id="${"icon"}"${add_attribute("d", openPath, 0)}></path></g></svg>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#nav.svelte-k0f0l9{display:flex;place-items:center;background:var(--primary-color);margin:0 auto;width:100%;height:var(--nav-height);z-index:102;justify-content:space-between}.toggle-button.svelte-k0f0l9{display:flex;margin-right:1rem;cursor:pointer;user-select:none}.massive-word.svelte-k0f0l9{position:absolute;font-size:20vw;right:2.5vw;bottom:0;opacity:0.15;user-select:none;pointer-events:none}.home-button.svelte-k0f0l9{display:flex;place-items:center;padding-left:1rem;margin-left:0;font-weight:300;letter-spacing:1px;font-size:2rem;font-family:var(--font-serif);cursor:pointer}@media screen and (max-width: 560px){.home-button.svelte-k0f0l9{font-size:1.5rem}}@media screen and (max-width: 460px){.home-button.svelte-k0f0l9{padding-left:0.85rem;font-size:1.35rem}}.fullpage-nav.svelte-k0f0l9{display:flex;flex-direction:column;place-items:flex-start;justify-content:center;padding-left:7.5vw;background:var(--primary-color);margin:0 auto;width:100vw;height:100vh;z-index:101;position:fixed}.nav-items.svelte-k0f0l9{display:flex;flex-direction:column;width:100%}html.disable-scroll{overflow-y:hidden}@media screen and (max-width: 868px){.fullpage-nav.svelte-k0f0l9{padding-left:0}ul.svelte-k0f0l9{text-align:center}.massive-word.svelte-k0f0l9{font-size:30vw;right:4vw}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { styles = "" } = $$props;
  let expanded = false;
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"nav"}"${add_attribute("style", styles, 0)} class="${"svelte-k0f0l9"}"><a class="${"home-button no-underline svelte-k0f0l9"}" href="${"/"}">CR</a>
  <h2 class="${"toggle-button svelte-k0f0l9"}">${validate_component(OpenToClose, "OpenToClose").$$render($$result, { expanded }, {}, {})}</h2></div>
${``}`;
  } while (!$$settled);
  return $$rendered;
});
var ColorSwitcher_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "p.svelte-1b6zq0b{cursor:pointer;position:fixed;bottom:3.5%;left:2%;font-family:var(--font-sans);font-weight:300;font-size:1.5rem;z-index:300;user-select:none}@media screen and (max-width: 768px){p.svelte-1b6zq0b{left:20px;bottom:20px}}",
  map: null
};
const ColorSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentMode = "dark";
  $$result.css.add(css$3);
  {
    currentColorMode.set(currentMode);
  }
  return `<p class="${"color-switcher svelte-1b6zq0b"}">${escape("\u{1F315}")}
</p>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1jz5at3.svelte-1jz5at3{display:flex;place-items:center;padding:0;width:100%;background:var(--footer-bg);color:var(--pure-text-color);z-index:99}footer.svelte-1jz5at3.svelte-1jz5at3{height:600px;position:relative}.flex-container.svelte-1jz5at3.svelte-1jz5at3{max-width:1268px;width:100%;height:100%;margin:auto;display:flex;justify-content:space-between;place-items:center}footer.svelte-1jz5at3 h1.svelte-1jz5at3,footer.svelte-1jz5at3 h2.svelte-1jz5at3{color:var(--pure-text-color)}footer.svelte-1jz5at3 h1.svelte-1jz5at3::selection,footer.svelte-1jz5at3 h2.svelte-1jz5at3::selection,footer.svelte-1jz5at3 a.svelte-1jz5at3::selection,footer.svelte-1jz5at3 .svelte-1jz5at3::selection{background:var(--pure-text-color);color:var(--primary-color)}.me.svelte-1jz5at3.svelte-1jz5at3,.you.svelte-1jz5at3.svelte-1jz5at3{flex:1;padding:1rem;display:flex;flex-direction:column}.thanks.svelte-1jz5at3.svelte-1jz5at3{font-family:var(--font-sans);margin-bottom:1rem;font-weight:200;font-size:1.8rem}.name.svelte-1jz5at3.svelte-1jz5at3{font-size:4rem;font-weight:100;line-height:1}.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{line-height:1;margin-bottom:2rem;font-size:3.5rem;font-weight:200;display:flex;align-items:flex-end}.links.svelte-1jz5at3.svelte-1jz5at3{display:flex;justify-content:space-between;width:450px}.link.svelte-1jz5at3.svelte-1jz5at3{font-family:var(--font-sans);letter-spacing:0.05rem;padding-bottom:0.5rem;font-weight:500;transition:color 500ms ease;text-transform:uppercase;color:rgba(var(--text-color-rgb), 0.7)}.link.svelte-1jz5at3.svelte-1jz5at3:hover{color:var(--pure-text-color)}.emoji.svelte-1jz5at3.svelte-1jz5at3{position:absolute;font-size:4rem;padding:1rem;cursor:pointer}.top.svelte-1jz5at3.svelte-1jz5at3{top:0}.bottom.svelte-1jz5at3.svelte-1jz5at3{bottom:0}.left.svelte-1jz5at3.svelte-1jz5at3{left:0}.right.svelte-1jz5at3.svelte-1jz5at3{right:0}.inline-emoji.svelte-1jz5at3.svelte-1jz5at3{margin-left:0.5rem}@media screen and (max-width: 1068px){.thanks.svelte-1jz5at3.svelte-1jz5at3{font-size:1.55rem}.name.svelte-1jz5at3.svelte-1jz5at3,.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{font-size:3.25rem}}@media screen and (max-width: 900px){.thanks.svelte-1jz5at3.svelte-1jz5at3{font-size:1.25rem}.name.svelte-1jz5at3.svelte-1jz5at3,.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{font-size:2.825rem}.links.svelte-1jz5at3.svelte-1jz5at3{width:350px}}@media screen and (max-width: 800px){.flex-container.svelte-1jz5at3.svelte-1jz5at3{flex-direction:column}.me.svelte-1jz5at3.svelte-1jz5at3,.you.svelte-1jz5at3.svelte-1jz5at3{justify-content:center;flex:1}.me.svelte-1jz5at3.svelte-1jz5at3{align-self:flex-start}.you.svelte-1jz5at3.svelte-1jz5at3{align-self:flex-end}.inline-emoji.svelte-1jz5at3.svelte-1jz5at3{margin-left:0;margin-right:0.75rem}.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{flex-direction:row-reverse}}@media screen and (max-width: 600px){.name.svelte-1jz5at3.svelte-1jz5at3,.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{font-size:3rem}.you.svelte-1jz5at3.svelte-1jz5at3{align-self:flex-start}.inline-emoji.svelte-1jz5at3.svelte-1jz5at3{margin-right:0;margin-left:0.5rem}.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{flex-direction:row}}@media screen and (max-width: 500px){.thanks.svelte-1jz5at3.svelte-1jz5at3{font-size:1.1rem}.name.svelte-1jz5at3.svelte-1jz5at3,.stay-in-touch.svelte-1jz5at3.svelte-1jz5at3{font-size:11vw}.link.svelte-1jz5at3.svelte-1jz5at3{font-size:0.85rem}.emoji.svelte-1jz5at3.svelte-1jz5at3{font-size:3rem}.links.svelte-1jz5at3.svelte-1jz5at3{width:100%}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-1jz5at3"}"><span aria-hidden="${"true"}" class="${"emoji bottom right svelte-1jz5at3"}">${escape("\u{1F440}")}</span>
  <span aria-hidden="${"true"}" class="${"emoji top right svelte-1jz5at3"}">${escape("\u{1F525}")}</span>
  <span aria-hidden="${"true"}" class="${"emoji top left svelte-1jz5at3"}">${escape("\u{1F920}")}</span>
  <div class="${"flex-container svelte-1jz5at3"}"><div class="${"me svelte-1jz5at3"}"><h2 class="${"thanks svelte-1jz5at3"}">Thanks for visiting the personal site of</h2>
      <h1 class="${"name svelte-1jz5at3"}">Connor Rothschild</h1></div>
    <div class="${"you svelte-1jz5at3"}"><h1 class="${"stay-in-touch svelte-1jz5at3"}">Let&#39;s stay in touch <span class="${"inline-emoji svelte-1jz5at3"}">${escape("\u{1F447}")}</span></h1>
      <div class="${"links svelte-1jz5at3"}"><a class="${"link no-underline svelte-1jz5at3"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@connorrothschild.com"}">Email</a>
        <a class="${"link no-underline svelte-1jz5at3"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.linkedin.com/in/connor-rothschild/"}">LinkedIn</a>
        <a class="${"link no-underline svelte-1jz5at3"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://github.com/connorrothschild/"}">GitHub</a>
        <a class="${"link no-underline svelte-1jz5at3"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://twitter.com/intent/follow?screen_name=CL_Rothschild"}">Twitter</a></div></div></div>
</footer>`;
});
var FooterSmall_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-v11fez.svelte-v11fez{display:flex;place-items:center;height:300px;padding:3rem 1rem;background:var(--footer-bg);color:var(--pure-text-color);position:relative}.btt.svelte-v11fez.svelte-v11fez{position:absolute;bottom:0;right:0;left:unset;font-size:1rem;padding:1rem;cursor:pointer}.flex-container.svelte-v11fez.svelte-v11fez{max-width:1268px;height:100%;width:100%;margin:auto;display:flex;justify-content:space-between;place-items:center}footer.svelte-v11fez h1.svelte-v11fez,footer.svelte-v11fez h2.svelte-v11fez{color:var(--pure-text-color)}footer.svelte-v11fez h1.svelte-v11fez::selection,footer.svelte-v11fez h2.svelte-v11fez::selection,footer.svelte-v11fez a.svelte-v11fez::selection{background:var(--pure-background-color);color:var(--pure-text-color)}.right.svelte-v11fez.svelte-v11fez{display:flex;justify-content:space-evenly}.left.svelte-v11fez.svelte-v11fez,.right.svelte-v11fez.svelte-v11fez{flex:1}.left.svelte-v11fez.svelte-v11fez{text-align:left}.name.svelte-v11fez.svelte-v11fez{font-size:2.5rem;font-weight:500;line-height:1;margin-bottom:1rem;letter-spacing:0.025rem}.copyright.svelte-v11fez.svelte-v11fez{font-size:0.85rem;font-weight:400;text-transform:uppercase;color:var(--pure-text-color);font-family:var(--font-sans)}.column-header.svelte-v11fez.svelte-v11fez{text-align:center;margin-bottom:0.5rem;text-transform:uppercase;font-family:var(--font-sans);font-weight:700;font-size:1rem;color:var(--accent-color)}.column-content.svelte-v11fez.svelte-v11fez{display:flex;flex-direction:column}.link.svelte-v11fez.svelte-v11fez{color:var(--pure-text-color);font-family:var(--font-sans);margin-bottom:0.15rem;padding-bottom:0.15rem;font-weight:200;font-size:1rem;letter-spacing:0.01rem;width:min-content}@media screen and (max-width: 768px){.flex-container.svelte-v11fez.svelte-v11fez{flex-direction:column}.left.svelte-v11fez.svelte-v11fez{width:100%}.right.svelte-v11fez.svelte-v11fez{width:50%;margin-left:auto}.name.svelte-v11fez.svelte-v11fez{font-size:2.5rem}.link.svelte-v11fez.svelte-v11fez{font-size:1rem}}@media screen and (max-width: 400px){footer.svelte-v11fez.svelte-v11fez{height:330px}.right.svelte-v11fez.svelte-v11fez{width:100%;justify-content:space-between}.right.svelte-v11fez .column:last-child .column-content.svelte-v11fez{align-items:flex-end}.name.svelte-v11fez.svelte-v11fez{font-size:2rem}.copyright.svelte-v11fez.svelte-v11fez{font-size:0.65rem}}",
  map: null
};
const FooterSmall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-v11fez"}"><p aria-hidden="${"true"}" class="${"btt svelte-v11fez"}">\u2191 Back to top
  </p>
  <div class="${"flex-container svelte-v11fez"}"><div class="${"left svelte-v11fez"}">
      <h1 class="${"name svelte-v11fez"}">Thanks for visiting \u{1F44B}</h1>
      <h2 class="${"copyright svelte-v11fez"}">\xA9 Connor Rothschild / 2021 / All rights reserved
      </h2></div>
    <div class="${"right svelte-v11fez"}"><div class="${"column"}"><h5 class="${"column-header svelte-v11fez"}">Connect</h5>
        <div class="${"column-content svelte-v11fez"}"><a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.linkedin.com/in/connor-rothschild/"}">LinkedIn</a>
          <a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://github.com/connorrothschild/"}">GitHub</a>
          <a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://twitter.com/intent/follow?screen_name=CL_Rothschild"}">Twitter</a></div></div>
      <div class="${"column"}"><h5 class="${"column-header svelte-v11fez"}">Contact</h5>
        <div class="${"column-content svelte-v11fez"}"><a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@connorrothschild.com"}">Personal</a>
          <a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@mokshadata.com"}">Work</a>
          <a class="${"link svelte-v11fez"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://calendly.com/connorrothschild/meeting"}">Meet</a></div></div></div></div>
</footer>`;
});
var fonts = "";
var immutable = "";
var code = "";
var style = "";
var blog = "";
var project = "";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
var Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullscreen-loading.svelte-165l7u4{width:100vw;height:100vh;position:fixed;left:0;top:0;background:var(--primary-color);z-index:1000}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageTransitionDelay, $$unsubscribe_pageTransitionDelay;
  let $navigationState, $$unsubscribe_navigationState;
  $$unsubscribe_pageTransitionDelay = subscribe(pageTransitionDelay, (value) => $pageTransitionDelay = value);
  $$unsubscribe_navigationState = subscribe(navigationState, (value) => $navigationState = value);
  const progress = tweened(0, { duration: 2e3, easing: cubicOut });
  let transitioning = false;
  let initTransition = function() {
    transitioning = true;
    setTimeout(() => {
      transitioning = false;
    }, $pageTransitionDelay);
  };
  $$result.css.add(css);
  {
    progress.set(0, { duration: 0 });
  }
  {
    progress.set(1, { duration: 1e3, easing: cubicOut });
  }
  {
    initTransition();
  }
  $$unsubscribe_pageTransitionDelay();
  $$unsubscribe_navigationState();
  return `
${transitioning && $navigationState != "loading" ? `<div class="${"fullscreen-loading svelte-165l7u4"}"></div>` : ``}`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  path = $page.path;
  $$unsubscribe_page();
  return `

${validate_component(Window, "Window").$$render($$result, {}, {}, {})}
${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})}
${validate_component(Nav, "Nav").$$render($$result, {
    styles: path === "/" ? "" : "position: fixed;"
  }, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}
${validate_component(ColorSwitcher, "ColorSwitcher").$$render($$result, {}, {}, {})}
${path === "/" ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : `${validate_component(FooterSmall, "SmallFooter").$$render($$result, {}, {}, {})}`}`;
});
export { _layout as default };
