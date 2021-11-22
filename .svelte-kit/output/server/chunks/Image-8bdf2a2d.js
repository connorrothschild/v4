import { c as create_ssr_component, a as add_attribute } from "./app-2f09f60b.js";
/* empty css                                              */const css = {
  code: ".centered.svelte-1n0adjk{display:block;margin:1rem auto}.fullscreen-unscrollable.svelte-1n0adjk{width:100vw;height:100vh;background:rgba(0, 0, 0, 0.7);position:fixed;top:0;left:0;z-index:100;display:flex;place-items:center;justify-content:center}img.svelte-1n0adjk:not(.expanded){cursor:zoom-in}img.href.svelte-1n0adjk{cursor:pointer}.expanded.svelte-1n0adjk{z-index:100;max-height:95%;max-width:95%;left:50%;top:50%;position:fixed;transform:translate(-50%, -50%);border-radius:5px;cursor:zoom-out}@media screen and (max-width: 768px){img.svelte-1n0adjk:not(.project img){width:100% !important}}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { width = "100%" } = $$props;
  let { centered = false } = $$props;
  let { style = "" } = $$props;
  let { href = null } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `

${``}
<a${add_attribute("href", href, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"no-underline"}"><img loading="${"lazy"}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("width", width, 0)}${add_attribute("style", style, 0)} class="${["svelte-1n0adjk", (centered ? "centered" : "") + " " + (href ? "href" : "")].join(" ").trim()}">
</a>`;
});
export { Image as I };
