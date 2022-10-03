import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Connor Rothschild" } = $$props;
  let { description = "I tell visual stories on the web." } = $$props;
  let { keywords = "web design, data science, data visualization" } = $$props;
  let { image = "https://connorr.netlify.app/social.png" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-k345bl"><meta name="${"twitter:site"}" content="${"@CL_Rothschild"}" data-svelte="svelte-k345bl"><meta name="${"twitter:creator"}" content="${"@CL_Rothschild"}" data-svelte="svelte-k345bl"><meta name="${"twitter:image"}"${add_attribute("content", image, 0)} data-svelte="svelte-k345bl"><meta name="${"twitter:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-k345bl"><meta name="${"twitter:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-k345bl"><meta name="${"title"}" property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-k345bl"><meta name="${"description"}" property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-k345bl"><meta name="${"image"}" property="${"og:image"}"${add_attribute("content", image, 0)} data-svelte="svelte-k345bl"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-k345bl"><meta name="${"topic"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-k345bl"><meta name="${"language"}" content="${"EN"}" data-svelte="svelte-k345bl"><meta name="${"robots"}" content="${"index, follow"}" data-svelte="svelte-k345bl"><meta name="${"abstract"}"${add_attribute("content", description, 0)} data-svelte="svelte-k345bl"><meta name="${"summary"}"${add_attribute("content", description, 0)} data-svelte="svelte-k345bl"><meta name="${"author"}" content="${"Connor Rothschild"}" data-svelte="svelte-k345bl"><meta name="${"url"}" content="${"http://www.connorrothschild.com"}" data-svelte="svelte-k345bl">`, ""}`;
});
export {
  Seo as S
};
