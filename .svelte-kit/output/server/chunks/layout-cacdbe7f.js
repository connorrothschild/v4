import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component, a as add_attribute, e as escape } from "./app-2f09f60b.js";
import { C as CornerTitle } from "./CornerTitle-1139e2b5.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import { s as seo } from "./store-30431d00.js";
import { d as dateFormat } from "./utils-09998264.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver-89b2e997.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { title } = $$props;
  let { description } = $$props;
  let { media_url } = $$props;
  let { date } = $$props;
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
  set_store_value(seo, $seo = { title, description, image }, $seo);
  let element, intersecting;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.media_url === void 0 && $$bindings.media_url && media_url !== void 0)
    $$bindings.media_url(media_url);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, { split: "words" }, {}, {})}
${validate_component(CornerTitle, "CornerTitle").$$render($$result, {
      title,
      subtitle: dateFormat(date),
      intersecting,
      rootMargin: "-60px"
    }, {}, {})}
<main>${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, {
      element,
      rootMargin: "-60px",
      intersecting
    }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"top-level"}"${add_attribute("this", element, 0)}>${validate_component(BackTo, "BackTo").$$render($$result, {
        href: "/award",
        text: "Awards",
        classes: "page-overline transition-subtitle"
      }, {}, {})}

      <h1 class="${"content-title uppercase transition-title overflow-hidden"}">${escape(title)}</h1></div>`
    })}
  <div class="${"content main-content transition-content"}">${slots.default ? slots.default({}) : ``}

    <p class="${"media-link"}"><a${add_attribute("href", media_url, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}">See media here.</a></p>
    ${validate_component(BackTo, "BackTo").$$render($$result, {
      href: "/award",
      text: "Back to all awards",
      classes: "border-top"
    }, {}, {})}</div>
</main>`;
  } while (!$$settled);
  $$unsubscribe_seo();
  return $$rendered;
});
export { Layout as default };
