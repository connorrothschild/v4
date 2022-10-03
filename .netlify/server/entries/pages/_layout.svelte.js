import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component, e as escape } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import "lodash.debounce";
import { w as windowHeight, a as windowWidth, m as menuExpanded, p as pageTransitionDelay } from "../../chunks/motion.js";
import { p as page } from "../../chunks/stores.js";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin.js";
import { i as isTouchscreen } from "../../chunks/device.js";
import "bowser";
const defaultValue = "dark";
const initialValue = defaultValue;
const theme = writable(initialValue);
theme.subscribe((value) => {
});
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
const NavListItem_svelte_svelte_type_style_lang = "";
const OpenToClose_svelte_svelte_type_style_lang = "";
const css$6 = {
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
  $$result.css.add(css$6);
  {
    switchIcon();
  }
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"svelte-32a0su"}"><g><path id="${"icon"}"${add_attribute("d", openPath, 0)}></path></g></svg>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#nav.svelte-3vdwdn.svelte-3vdwdn{display:flex;place-items:center;position:fixed;margin:0 auto;width:100%;height:var(--nav-height);z-index:102;justify-content:space-between;pointer-events:none}#nav.svelte-3vdwdn>.svelte-3vdwdn{pointer-events:all}.toggle-button.svelte-3vdwdn.svelte-3vdwdn{display:flex;margin-right:1rem;cursor:pointer;user-select:none;background:none;border:none}.toggle-button.svelte-3vdwdn.svelte-3vdwdn:focus,.toggle-button.svelte-3vdwdn.svelte-3vdwdn:active{background:none}.massive-word.svelte-3vdwdn.svelte-3vdwdn{position:absolute;font-size:20vw;right:2.5vw;bottom:0;opacity:0.15;user-select:none;pointer-events:none}.home-button.svelte-3vdwdn.svelte-3vdwdn{display:flex;place-items:center;padding-left:1rem;margin-left:0;font-weight:300;letter-spacing:1px;font-size:2rem;font-family:var(--font-serif);cursor:pointer}@media screen and (max-width: 868px){.hasBackground.svelte-3vdwdn.svelte-3vdwdn{background:var(--primary-color)}}@media screen and (max-width: 560px){.home-button.svelte-3vdwdn.svelte-3vdwdn{font-size:1.5rem}}@media screen and (max-width: 460px){.home-button.svelte-3vdwdn.svelte-3vdwdn{padding-left:0.85rem;font-size:1.35rem}}.fullpage-nav.svelte-3vdwdn.svelte-3vdwdn{position:fixed;z-index:101;display:flex;flex-direction:column;place-items:flex-start;justify-content:center;padding-left:7.5vw;background:var(--primary-color);margin:0 auto;width:100vw;height:100%}.nav-items.svelte-3vdwdn.svelte-3vdwdn{display:flex;flex-direction:column;width:100%}.disable-scroll, .disable-scroll body{touch-action:none;-webkit-overflow-scrolling:none;overflow:hidden;overscroll-behavior:none}.disable-scroll body{overflow-y:scroll}@media screen and (max-width: 868px){.fullpage-nav.svelte-3vdwdn.svelte-3vdwdn{padding-left:0}ul.svelte-3vdwdn.svelte-3vdwdn{text-align:center}.massive-word.svelte-3vdwdn.svelte-3vdwdn{font-size:30vw;right:4vw}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_windowWidth;
  let $$unsubscribe_windowHeight;
  let $$unsubscribe_page;
  let $$unsubscribe_isTouchscreen;
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  $$unsubscribe_windowHeight = subscribe(windowHeight, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_isTouchscreen = subscribe(isTouchscreen, (value) => value);
  let { styles = "" } = $$props;
  let { hasBackground = false } = $$props;
  let expanded = false;
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  if ($$props.hasBackground === void 0 && $$bindings.hasBackground && hasBackground !== void 0)
    $$bindings.hasBackground(hasBackground);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      menuExpanded.set(expanded);
    }
    $$rendered = `<div id="${"nav"}"${add_attribute("style", styles, 0)} class="${["svelte-3vdwdn", hasBackground ? "hasBackground" : ""].join(" ").trim()}"><a class="${"home-button no-underline svelte-3vdwdn"}" href="${"/"}">CR</a>
  <button class="${"toggle-button svelte-3vdwdn"}"${add_attribute("aria-label", "Open menu", 0)}>${validate_component(OpenToClose, "OpenToClose").$$render($$result, { expanded }, {}, {})}</button></div>
${``}`;
  } while (!$$settled);
  $$unsubscribe_windowWidth();
  $$unsubscribe_windowHeight();
  $$unsubscribe_page();
  $$unsubscribe_isTouchscreen();
  return $$rendered;
});
const ColorSwitcher_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".fullscreen-transition.svelte-16jx9vm{width:100vw;height:100vh;position:fixed;background:grey;z-index:10000}p.svelte-16jx9vm{cursor:pointer;position:fixed;bottom:20px;left:20px;font-family:var(--font-sans);font-weight:300;font-size:1.5rem;z-index:101;user-select:none}",
  map: null
};
const ColorSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $$unsubscribe_windowWidth;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  $$unsubscribe_windowWidth();
  return `${``}
<p class="${"color-switcher svelte-16jx9vm"}">${escape($theme == "dark" ? "\u{1F319}" : "\u2600\uFE0F")}</p>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-1n8zlbx.svelte-1n8zlbx{display:flex;place-items:center;height:300px;padding:3rem 1rem;background:var(--footer-bg);color:var(--pure-text-color);position:relative;z-index:99;box-shadow:-1px -1px 6px var(--box-shadow-color);transition:height 300ms ease}.flex-container.svelte-1n8zlbx.svelte-1n8zlbx{max-width:1268px;height:100%;width:100%;margin:auto;display:flex;justify-content:space-between;place-items:center}footer.svelte-1n8zlbx h1.svelte-1n8zlbx{color:var(--pure-text-color)}.right.svelte-1n8zlbx.svelte-1n8zlbx{display:flex;justify-content:space-evenly}.left.svelte-1n8zlbx.svelte-1n8zlbx,.right.svelte-1n8zlbx.svelte-1n8zlbx{flex:1}.left.svelte-1n8zlbx.svelte-1n8zlbx{text-align:left}.name.svelte-1n8zlbx.svelte-1n8zlbx{font-size:2.5rem;font-weight:600;line-height:1;margin-bottom:1rem;letter-spacing:0.025rem}.copyright.svelte-1n8zlbx.svelte-1n8zlbx{font-size:0.85rem;font-weight:400;text-transform:uppercase;color:var(--pure-text-color);font-family:var(--font-sans)}.column-header.svelte-1n8zlbx.svelte-1n8zlbx{text-align:center;margin-bottom:1rem;text-transform:uppercase;font-family:var(--font-serif);font-weight:600;font-size:2rem;color:var(--pure-text-color)}.column-content.svelte-1n8zlbx.svelte-1n8zlbx{display:flex;flex-direction:column}.column-content.copyright.svelte-1n8zlbx.svelte-1n8zlbx{place-items:flex-start}.column-content.connect.svelte-1n8zlbx.svelte-1n8zlbx,.column-content.contact.svelte-1n8zlbx.svelte-1n8zlbx{place-items:center}.link.svelte-1n8zlbx.svelte-1n8zlbx{color:var(--pure-text-color);font-family:var(--font-sans);margin-bottom:0.15rem;padding-bottom:0.25rem;font-weight:200;font-size:1.1rem;letter-spacing:0.025rem;width:min-content;text-transform:uppercase}.wave.svelte-1n8zlbx.svelte-1n8zlbx:hover{display:inline-block;animation:svelte-1n8zlbx-wiggle 700ms linear forwards}@keyframes svelte-1n8zlbx-wiggle{0%{transform:rotate(0)}20%{transform:rotate(7.5deg)}40%{transform:rotate(-7.5deg)}60%{transform:rotate(7.5deg)}80%{transform:rotate(-7.5deg)}100%{transform:rotate(0)}}@media screen and (max-width: 868px){footer.svelte-1n8zlbx.svelte-1n8zlbx{height:400px}.flex-container.svelte-1n8zlbx.svelte-1n8zlbx{flex-direction:column}.left.svelte-1n8zlbx.svelte-1n8zlbx{width:100%}.right.svelte-1n8zlbx.svelte-1n8zlbx{width:80%;margin-left:auto;justify-content:flex-end;place-items:flex-end !important}.right.svelte-1n8zlbx .column.svelte-1n8zlbx:first-of-type{margin-right:10%}.name.svelte-1n8zlbx.svelte-1n8zlbx{font-size:2.5rem}.link.svelte-1n8zlbx.svelte-1n8zlbx{font-size:1rem}.column-content.connect.svelte-1n8zlbx.svelte-1n8zlbx,.column-content.contact.svelte-1n8zlbx.svelte-1n8zlbx{place-items:flex-end}}@media screen and (max-width: 468px){.right.svelte-1n8zlbx.svelte-1n8zlbx{width:100%;justify-content:space-between}.right.svelte-1n8zlbx .column:first-of-type .column-content.svelte-1n8zlbx{align-items:flex-start}.right.svelte-1n8zlbx .column:last-of-type .column-content.svelte-1n8zlbx{align-items:flex-end}.name.svelte-1n8zlbx.svelte-1n8zlbx{font-size:2rem}.copyright.svelte-1n8zlbx.svelte-1n8zlbx{font-size:0.65rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="${"svelte-1n8zlbx"}"><div class="${"flex-container svelte-1n8zlbx"}"><div class="${"left svelte-1n8zlbx"}"><h1 class="${"name svelte-1n8zlbx"}">Thanks for visiting <span class="${"wave svelte-1n8zlbx"}">\u{1F44B}</span></h1>
      <div class="${"column-content copyright svelte-1n8zlbx"}"><p style="${"font-weight: 400; font-size: 1.2rem;"}">Connor Rothschild</p>
        <p style="${"font-size: .95rem;"}">All rights reserved \xA9 2022</p></div></div>
    <div class="${"right svelte-1n8zlbx"}"><div class="${"column svelte-1n8zlbx"}"><h5 class="${"column-header svelte-1n8zlbx"}">Connect</h5>
        <div class="${"column-content connect svelte-1n8zlbx"}"><a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.linkedin.com/in/connor-rothschild/"}">LinkedIn</a>
          <a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://github.com/connorrothschild/"}">GitHub</a>
          <a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://twitter.com/intent/follow?screen_name=CL_Rothschild"}">Twitter</a></div></div>
      <div class="${"column svelte-1n8zlbx"}"><h5 class="${"column-header svelte-1n8zlbx"}">Contact</h5>
        <div class="${"column-content contact svelte-1n8zlbx"}"><a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@connorrothschild.com"}">Personal</a>
          <a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@mokshadata.com"}">Work</a>
          <a class="${"link svelte-1n8zlbx"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://calendly.com/connorrothschild/meeting"}">Meet</a></div></div></div></div>
</footer>`;
});
const CircleText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".circle.svelte-1asjvwp{position:sticky;right:6px;bottom:6px;padding:1rem;z-index:101;overflow:hidden;width:min-content;margin-left:auto;margin-right:6px;transform:translateZ(0);transition:all 600ms ease;cursor:pointer}.circle.svelte-1asjvwp:hover{transform:scale3d(1.05, 1.05, 1.05)}img.svelte-1asjvwp{position:absolute;border-radius:50%;width:100px;height:100px;object-fit:contain;transform:scale(0.795);z-index:100}text.svelte-1asjvwp{fill:var(--text-color);font-family:var(--font-serif);font-weight:200;font-size:63px;letter-spacing:-1px;text-shadow:1px 0px 0px var(--pure-background-color);user-select:none}path.svelte-1asjvwp{fill:rgba(var(--accent-color-rgb), 0.2)}.circleText.svelte-1asjvwp{width:100px;height:100px;overflow:visible;transform-origin:center center;stroke-opacity:0.75;animation:svelte-1asjvwp-rotate 25s linear infinite}@keyframes svelte-1asjvwp-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.invisible.svelte-1asjvwp{opacity:0}",
  map: null
};
const CircleText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text;
  let $windowWidth, $$unsubscribe_windowWidth;
  let $menuExpanded, $$unsubscribe_menuExpanded;
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => $windowWidth = value);
  $$unsubscribe_menuExpanded = subscribe(menuExpanded, (value) => $menuExpanded = value);
  $$result.css.add(css$2);
  text = "\u{1F44B} Connor \u{1F440} Rothschild \u{1F920} Connor \u{1F525} Rothschild";
  $$unsubscribe_windowWidth();
  $$unsubscribe_menuExpanded();
  return `${$windowWidth > 968 ? `<div aria-hidden="${"true"}" class="${"circle " + escape($menuExpanded ? "invisible" : "", true) + " svelte-1asjvwp"}" sveltekit:prefetch>${``}
    <svg class="${"circleText svelte-1asjvwp"}" viewBox="${"0 0 500 500"}" data-duration="${"5"}"><path id="${"circle"}" fill="${"none"}" data-duration="${"5"}" d="${"M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"}" class="${"svelte-1asjvwp"}"></path><text dy="${"-25"}" class="${"svelte-1asjvwp"}"><textPath xlink:href="${"#circle"}">${escape(text)}</textPath></text></svg></div>` : ``}`;
});
const Noise_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.noise.svelte-1ki45fh{width:100vw;height:100vh;position:fixed;pointer-events:none}.noise.svelte-1ki45fh::before{width:100%;height:100%;z-index:9;content:"";position:absolute;pointer-events:none;background-position:50%;background-image:url("/images/noise/basic.png");animation:svelte-1ki45fh-shake 1s steps(1) infinite;-webkit-animation:svelte-1ki45fh-shake 1s steps(1) infinite;opacity:var(--noise-opacity)}@keyframes svelte-1ki45fh-shake{0%{transform:translate3d(0, 0.9rem, 0);-webkit-transform:translate3d(0, 0.9rem, 0);-moz-transform:translate3d(0, 0.9rem, 0);-ms-transform:translate3d(0, 0.9rem, 0);-o-transform:translate3d(0, 0.9rem, 0)}10%{transform:translate3d(-0.1rem, -0.4rem, 0);-webkit-transform:translate3d(-0.1rem, -0.4rem, 0);-moz-transform:translate3d(-0.1rem, -0.4rem, 0);-ms-transform:translate3d(-0.1rem, -0.4rem, 0);-o-transform:translate3d(-0.1rem, -0.4rem, 0)}20%{transform:translate3d(-0.8rem, 0.2rem, 0);-webkit-transform:translate3d(-0.8rem, 0.2rem, 0);-moz-transform:translate3d(-0.8rem, 0.2rem, 0);-ms-transform:translate3d(-0.8rem, 0.2rem, 0);-o-transform:translate3d(-0.8rem, 0.2rem, 0)}30%{transform:translate3d(0.9rem, -0.9rem, 0);-webkit-transform:translate3d(0.9rem, -0.9rem, 0);-moz-transform:translate3d(0.9rem, -0.9rem, 0);-ms-transform:translate3d(0.9rem, -0.9rem, 0);-o-transform:translate3d(0.9rem, -0.9rem, 0)}40%{transform:translate3d(-0.2rem, 0.7rem, 0);-webkit-transform:translate3d(-0.2rem, 0.7rem, 0);-moz-transform:translate3d(-0.2rem, 0.7rem, 0);-ms-transform:translate3d(-0.2rem, 0.7rem, 0);-o-transform:translate3d(-0.2rem, 0.7rem, 0)}50%{transform:translate3d(-0.9rem, -0.4rem, 0);-webkit-transform:translate3d(-0.9rem, -0.4rem, 0);-moz-transform:translate3d(-0.9rem, -0.4rem, 0);-ms-transform:translate3d(-0.9rem, -0.4rem, 0);-o-transform:translate3d(-0.9rem, -0.4rem, 0)}60%{transform:translate3d(0.2rem, 0.6rem, 0);-webkit-transform:translate3d(0.2rem, 0.6rem, 0);-moz-transform:translate3d(0.2rem, 0.6rem, 0);-ms-transform:translate3d(0.2rem, 0.6rem, 0);-o-transform:translate3d(0.2rem, 0.6rem, 0)}70%{transform:translate3d(0.7rem, -0.8rem, 0);-webkit-transform:translate3d(0.7rem, -0.8rem, 0);-moz-transform:translate3d(0.7rem, -0.8rem, 0);-ms-transform:translate3d(0.7rem, -0.8rem, 0);-o-transform:translate3d(0.7rem, -0.8rem, 0)}80%{transform:translate3d(-0.9rem, 0.1rem, 0);-webkit-transform:translate3d(-0.9rem, 0.1rem, 0);-moz-transform:translate3d(-0.9rem, 0.1rem, 0);-ms-transform:translate3d(-0.9rem, 0.1rem, 0);-o-transform:translate3d(-0.9rem, 0.1rem, 0)}90%{transform:translate3d(0.6rem, -0.5rem, 0);-webkit-transform:translate3d(0.6rem, -0.5rem, 0);-moz-transform:translate3d(0.6rem, -0.5rem, 0);-ms-transform:translate3d(0.6rem, -0.5rem, 0);-o-transform:translate3d(0.6rem, -0.5rem, 0)}100%{transform:translate3d(-0.7rem, 0, 0);-webkit-transform:translate3d(-0.7rem, 0, 0);-moz-transform:translate3d(-0.7rem, 0, 0);-ms-transform:translate3d(-0.7rem, 0, 0);-o-transform:translate3d(-0.7rem, 0, 0)}}',
  map: null
};
const Noise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"noise svelte-1ki45fh"}"></div>`;
});
const fonts = "";
const immutable = "";
const code = "";
const blog = "";
const project = "";
const style = "";
const Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullscreen-loading.svelte-5sgcct{width:100vw;height:100vh;position:fixed;left:0;top:0;background:var(--primary-color);z-index:100}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pageTransitionDelay;
  let $$unsubscribe_page;
  $$unsubscribe_pageTransitionDelay = subscribe(pageTransitionDelay, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_pageTransitionDelay();
  $$unsubscribe_page();
  return `${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  let $page, $$unsubscribe_page;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  async function scrollTop() {
  }
  $page.url.pathname;
  {
    scrollTop();
  }
  $$unsubscribe_theme();
  $$unsubscribe_page();
  return `${validate_component(Window, "Window").$$render($$result, {}, {}, {})}

${validate_component(Nav, "Nav").$$render($$result, { hasBackground: true }, {}, {})}
${validate_component(Noise, "Noise").$$render($$result, {}, {}, {})}
${validate_component(ColorSwitcher, "ColorSwitcher").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}
${validate_component(CircleText, "Circle").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
