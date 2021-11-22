import { c as create_ssr_component, v as validate_component, e as escape } from "./app-2f09f60b.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1lfi9v6.svelte-1lfi9v6{max-width:868px;width:95%;margin:0 auto;margin-bottom:4rem;margin-top:var(--nav-height)}p.svelte-1lfi9v6.svelte-1lfi9v6{margin-bottom:1.15rem;line-height:1.5}.conversation-container.svelte-1lfi9v6.svelte-1lfi9v6{display:flex;flex-wrap:wrap;width:100%;justify-content:space-between}.topic.svelte-1lfi9v6.svelte-1lfi9v6{flex:1 1 calc(50% - 1rem);padding:1rem 0;text-align:left}.topic-title.svelte-1lfi9v6.svelte-1lfi9v6{margin-bottom:1rem;font-size:1.75rem;font-weight:300;letter-spacing:0.025rem}li.svelte-1lfi9v6.svelte-1lfi9v6{list-style-type:none;padding-left:0;margin-left:0}.more.svelte-1lfi9v6.svelte-1lfi9v6{border-left:5px solid var(--accent-color);padding-left:1rem}.more.svelte-1lfi9v6 p.svelte-1lfi9v6{line-height:1.35}.else.svelte-1lfi9v6.svelte-1lfi9v6{transition:opacity 300ms ease}.else.showMore.svelte-1lfi9v6.svelte-1lfi9v6{opacity:0.2}.interested.svelte-1lfi9v6.svelte-1lfi9v6{cursor:pointer;border-bottom:1px solid var(--accent-color);padding-bottom:2px;user-select:none}.topic.svelte-1lfi9v6.svelte-1lfi9v6:nth-of-type(even){text-align:right}.abbr.svelte-1lfi9v6.svelte-1lfi9v6{position:relative;border-bottom:1px solid rgba(var(--text-color-rgb), 0.5);cursor:help}.abbr.svelte-1lfi9v6.svelte-1lfi9v6::after{position:absolute;bottom:100%;left:0;display:block;padding:0.75rem 1rem;margin-bottom:0.5rem;border-radius:5px;background:var(--pure-text-color);color:var(--pure-background-color);content:attr(desc);width:320px;line-height:1.25;font-size:1.1rem;font-weight:200;letter-spacing:-0.025rem;opacity:0;pointer-events:none;transition:opacity 0.3s ease-in-out;box-shadow:1px 1px 5px var(--box-shadow-color)}.abbr.svelte-1lfi9v6.svelte-1lfi9v6:hover::after{opacity:1}@media screen and (max-width: 375px){.abbr.svelte-1lfi9v6.svelte-1lfi9v6::after{width:260px}}@media screen and (max-width: 768px){.conversation-container.svelte-1lfi9v6.svelte-1lfi9v6{flex-direction:column}.topic-title.svelte-1lfi9v6.svelte-1lfi9v6{font-weight:400}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
<main class="${"svelte-1lfi9v6"}">${validate_component(BackTo, "BackTo").$$render($$result, {
    href: "/",
    text: "Home",
    classes: "page-overline transition-subtitle centered"
  }, {}, {})}
  <h1 class="${"page-title transition-title overflow-hidden"}">About</h1>
  <div class="${"transition-content"}"><p class="${"svelte-1lfi9v6"}">Hi! I&#39;m Connor. <span class="${["else svelte-1lfi9v6", ""].join(" ").trim()}">I&#39;ll spare you the personal details about my life, unless</span>
      <span class="${"interested svelte-1lfi9v6"}">${escape("you're")} really interested${escape(".")}</span></p>

    ${``}
    <div class="${["else svelte-1lfi9v6", ""].join(" ").trim()}"><p class="${"svelte-1lfi9v6"}">
        Let me use your brief time on my website to say: I love learning from and
        teaching passionate people, and hope that this site can be an outlet for
        that.
      </p>

      <p class="${"svelte-1lfi9v6"}"><span class="${"abbr svelte-1lfi9v6"}" desc="${"I know everyone says \u201Cplease reach out\u201D on their website, but I actually want you to \u{1F642}"}">Please reach out</span> if you&#39;re interested in talking about design, business strategy, data visualization,
        or anything else you think I would be interested in. Need a conversation
        starter? \u{1F447}
      </p>

      <div class="${"conversation-container svelte-1lfi9v6"}"><div class="${"topic svelte-1lfi9v6"}"><h1 class="${"topic-title svelte-1lfi9v6"}">Things I&#39;m good at</h1>
          <ul><li class="${"svelte-1lfi9v6"}">R</li>
            <li class="${"svelte-1lfi9v6"}">Vue</li>
            <li class="${"svelte-1lfi9v6"}">D3.js</li>
            <li class="${"svelte-1lfi9v6"}">Svelte</li></ul></div>
        <div class="${"topic svelte-1lfi9v6"}"><h1 class="${"topic-title svelte-1lfi9v6"}">Things I&#39;m learning</h1>
          <ul><li class="${"svelte-1lfi9v6"}">Three.js</li>
            <li class="${"svelte-1lfi9v6"}">Canvas</li>
            <li class="${"svelte-1lfi9v6"}">Figma</li>
            <li class="${"svelte-1lfi9v6"}">Web3</li></ul></div>
        <div class="${"topic svelte-1lfi9v6"}"><h1 class="${"topic-title svelte-1lfi9v6"}">Ways I can help</h1>
          <ul><li class="${"svelte-1lfi9v6"}">Early career advice (journalism, government)</li>
            <li class="${"svelte-1lfi9v6"}">Starting your first personal website</li>
            <li class="${"svelte-1lfi9v6"}">Technical book recommendations</li>
            <li class="${"svelte-1lfi9v6"}">Feedback on dataviz</li></ul></div>
        <div class="${"topic svelte-1lfi9v6"}"><h1 class="${"topic-title svelte-1lfi9v6"}">Miscellaneous</h1>
          <ul><li class="${"svelte-1lfi9v6"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://open.spotify.com/user/12127359561?si=d02b4e64af7f420d"}">Music</a></li>
            <li class="${"svelte-1lfi9v6"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.are.na/connor-rothschild"}">Anything here</a></li>
            <li class="${"svelte-1lfi9v6"}">Married at First Sight</li></ul></div></div></div></div>
</main>`;
});
export { About as default };
