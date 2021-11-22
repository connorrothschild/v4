import { c as create_ssr_component } from "./app-2f09f60b.js";
var HighlightFromProp_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-p78l24{background:rgba(var(--accent-color-rgb), 0.2);padding:1px 4px}",
  map: null
};
const HighlightFromProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hoveredIdProp } = $$props;
  let { highlightedLinesProp } = $$props;
  let { hoveredId } = $$props;
  let { highlightedLines } = $$props;
  if ($$props.hoveredIdProp === void 0 && $$bindings.hoveredIdProp && hoveredIdProp !== void 0)
    $$bindings.hoveredIdProp(hoveredIdProp);
  if ($$props.highlightedLinesProp === void 0 && $$bindings.highlightedLinesProp && highlightedLinesProp !== void 0)
    $$bindings.highlightedLinesProp(highlightedLinesProp);
  if ($$props.hoveredId === void 0 && $$bindings.hoveredId && hoveredId !== void 0)
    $$bindings.hoveredId(hoveredId);
  if ($$props.highlightedLines === void 0 && $$bindings.highlightedLines && highlightedLines !== void 0)
    $$bindings.highlightedLines(highlightedLines);
  $$result.css.add(css);
  return `<span class="${"svelte-p78l24"}">${slots.default ? slots.default({}) : ``}</span>`;
});
export { HighlightFromProp as H };
