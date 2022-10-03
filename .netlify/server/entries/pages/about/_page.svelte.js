import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { T as Transition, B as BackTo } from "../../../chunks/BackTo.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../chunks/motion.js";
import "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1atmguu{margin-bottom:1.15rem;line-height:1.25}.conversation-container.svelte-1atmguu{display:flex;flex-wrap:wrap;width:100%;justify-content:space-between;padding-bottom:2rem;border-bottom:1px solid rgba(var(--accent-color-rgb), 0.2)}.topic.svelte-1atmguu{flex:1 1 calc(50% - 1rem);padding:1rem 0;text-align:left;margin:1rem 1rem 0 0;border-radius:0.2rem}.topic.svelte-1atmguu:nth-child(even){text-align:right}.topic-title.svelte-1atmguu{margin-bottom:1rem;font-size:1.15rem;font-family:var(--font-sans);text-transform:uppercase;font-weight:700}li.svelte-1atmguu{list-style:none;font-weight:300;font-size:1.1rem;margin-bottom:0;padding-left:0;margin-left:0}.subsection.svelte-1atmguu{margin-top:2.5rem}.subsection-title.svelte-1atmguu{font-size:2.5rem;font-family:var(--font-serif);margin-bottom:1.5rem;text-align:center;text-transform:uppercase;font-weight:200}.larger.svelte-1atmguu{font-size:1.5rem;line-height:1.3;font-weight:400;margin-bottom:2rem;letter-spacing:-0.01rem;color:var(--text-color)}@media screen and (max-width: 768px){.conversation-container.svelte-1atmguu{flex-direction:column}}@media screen and (max-width: 568px){.topic.svelte-1atmguu{max-width:100%;margin:0.5rem 0}li.svelte-1atmguu{width:auto}.larger.svelte-1atmguu{font-size:1.25rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
${validate_component(Seo, "Seo").$$render($$result, { title: `About | Connor Rothschild` }, {}, {})}
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
  <h1 class="${"page-title transition-title overflow-hidden"}" style="${"border-bottom: none; margin-bottom: 1rem; padding-bottom: 0;"}">Connor Rothschild
  </h1>
  <h2 class="${"content-description transition-subtitle centered overflow-hidden"}" style="${"padding-bottom: 2.5rem; margin-bottom: 4rem;"}">is a data scientist, web developer, and designer in Houston, TX.
  </h2>
  <div class="${"transition-content main-content"}">
    
    <div><p class="${"larger svelte-1atmguu"}">I live in Houston, Texas and help run <a href="${"https://mokshadata.studio"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Moksha Data Studio.</a> We build microsites, interactives, and visualizations for clients working
        in the social impact space.
      </p>
      <p class="${"svelte-1atmguu"}">I also have experience working with data in newsrooms (at Axios) and the
        federal government (at USSOCOM). A more comprehensive overview of my
        work experience can be found
        <a href="${"https://read.cv/connorr"}" target="${"_blank"}" rel="${"noopener noreferrer"}">here.</a></p>
      <p class="${"svelte-1atmguu"}">Please reach out (via <a class="${"link"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://twitter.com/intent/follow?screen_name=CL_Rothschild"}">Twitter</a>
        or
        <a class="${"link"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:connor@connorrothschild.com"}">email</a>) if you\u2019re interested in working together, or just want to chat. Need
        a conversation starter? \u{1F447}
      </p>
      

      <div class="${"conversation-container svelte-1atmguu"}"><div class="${"topic svelte-1atmguu"}"><h1 class="${"topic-title svelte-1atmguu"}">Things I\u2019m good at</h1>
          <ul><li class="${"svelte-1atmguu"}">R</li>
            <li class="${"svelte-1atmguu"}">SVG</li>
            <li class="${"svelte-1atmguu"}">D3.js</li>
            <li class="${"svelte-1atmguu"}">Svelte</li></ul></div>
        <div class="${"topic svelte-1atmguu"}"><h1 class="${"topic-title svelte-1atmguu"}">Things I\u2019m learning</h1>
          <ul><li class="${"svelte-1atmguu"}">Three.js</li>
            <li class="${"svelte-1atmguu"}">Canvas</li>
            <li class="${"svelte-1atmguu"}">Figma</li>
            <li class="${"svelte-1atmguu"}">Web3</li></ul></div>
        <div class="${"topic svelte-1atmguu"}"><h1 class="${"topic-title svelte-1atmguu"}">Ways I can help</h1>
          <ul><li class="${"svelte-1atmguu"}">Starting your first personal website</li>
            <li class="${"svelte-1atmguu"}">Technical book recommendations</li>
            <li class="${"svelte-1atmguu"}">Feedback on dataviz</li>
            <li class="${"svelte-1atmguu"}">Early career advice</li></ul></div>
        <div class="${"topic svelte-1atmguu"}"><h1 class="${"topic-title svelte-1atmguu"}">Miscellaneous</h1>
          <ul><li class="${"svelte-1atmguu"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://open.spotify.com/user/12127359561?si=d02b4e64af7f420d"}">Music</a></li>
            <li class="${"svelte-1atmguu"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.fontshare.com/"}">Typography</a></li>
            <li class="${"svelte-1atmguu"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.are.na/connor/"}">Anything here</a></li>
            <li class="${"svelte-1atmguu"}">Reality TV</li></ul></div></div></div>
    <div class="${"subsection svelte-1atmguu"}"><h2 class="${"subsection-title svelte-1atmguu"}" style="${"cursor: pointer;"}">(More Personal Stuff${escape("?")})
      </h2>
      ${``}</div></div>
</main>`;
});
export {
  Page as default
};
