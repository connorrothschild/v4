import { c as create_ssr_component, j as createEventDispatcher } from "./app-2f09f60b.js";
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = null } = $$props;
  let { once = false } = $$props;
  let { root = null } = $$props;
  let { rootMargin = "0px" } = $$props;
  let { threshold = 0 } = $$props;
  let { entry = null } = $$props;
  let { intersecting = false } = $$props;
  let { observer = null } = $$props;
  createEventDispatcher();
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.rootMargin === void 0 && $$bindings.rootMargin && rootMargin !== void 0)
    $$bindings.rootMargin(rootMargin);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.observer === void 0 && $$bindings.observer && observer !== void 0)
    $$bindings.observer(observer);
  return `${slots.default ? slots.default({ intersecting, entry, observer }) : ``}`;
});
export { IntersectionObserver_1 as I };
