import { c as create_ssr_component, e as escape } from "./app-2f09f60b.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-3590vb{margin-top:var(--nav-height)}",
  map: null
};
function load({ error, status }) {
  console.log(error);
  return {
    props: {
      title: `${status}: ${error.message}`,
      errorCode: `${error.stack}`
    }
  };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { errorCode } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.errorCode === void 0 && $$bindings.errorCode && errorCode !== void 0)
    $$bindings.errorCode(errorCode);
  $$result.css.add(css);
  return `<div class="${"error svelte-3590vb"}"><h1>${escape(title)}</h1>

  <p>${escape("Show")} the technical details
  </p>
  ${``}
</div>`;
});
export { _error as default, load };
