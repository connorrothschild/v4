import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin.js";
const Star_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1exk3bt{pointer-events:none}",
  map: null
};
const arrowPath = "M 2.398438 1.414062 L 2.398438 4.320312 C 2.398438 4.441406 2.496094 4.535156 2.617188 4.535156 L 17.015625 4.535156 L 1.152344 20.425781 C 1.054688 20.519531 1.054688 20.664062 1.152344 20.734375 L 3.191406 22.777344 C 3.289062 22.871094 3.433594 22.871094 3.503906 22.777344 L 19.488281 6.792969 L 19.488281 21.433594 C 19.488281 21.550781 19.585938 21.648438 19.703125 21.648438 L 22.609375 21.648438 C 22.726562 21.648438 22.824219 21.550781 22.824219 21.433594 L 22.824219 1.414062 C 22.824219 1.296875 22.726562 1.199219 22.609375 1.199219 L 2.617188 1.199219 C 2.496094 1.199219 2.398438 1.296875 2.398438 1.414062 Z M 2.398438 1.414062";
const starPath = "M 18.523438 12.539062 C 18.523438 12.539062 18.347656 14.273438 17.601562 13.503906 C 16.855469 12.738281 18.613281 9.703125 17.796875 7.945312 C 16.984375 6.1875 14.085938 4.914062 14.085938 4.914062 C 14.085938 4.914062 15.929688 6.671875 15.402344 7.175781 C 14.875 7.683594 12.875 7 11.910156 5.375 C 10.941406 3.75 12.105469 1.199219 12.105469 1.199219 C 12.105469 1.199219 10.171875 2.210938 9.933594 4.058594 C 9.691406 5.902344 10.128906 7.175781 10.347656 9.066406 C 10.570312 10.957031 9.933594 13.503906 8.238281 13.265625 C 6.546875 13.023438 7.535156 10.210938 7.535156 10.210938 C 7.535156 10.210938 2.371094 15.285156 5.558594 19.417969 C 8.746094 23.546875 12.546875 22.734375 12.546875 22.734375 C 13.878906 22.761719 15.265625 22.34375 16.332031 21.535156 C 16.347656 21.523438 16.363281 21.511719 16.378906 21.5 C 21.738281 17.679688 18.523438 12.539062 18.523438 12.539062 Z M 18.523438 12.539062 ";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { fill = "black" } = $$props;
  let { stroke = "transparent" } = $$props;
  let { hovered } = $$props;
  let { index } = $$props;
  gsap.registerPlugin(MorphSVGPlugin);
  let star;
  const changePath = function() {
    if (hovered == true) {
      gsap.to(star, { duration: 0.3, morphSVG: arrowPath });
    } else {
      gsap.to(star, { duration: 0.3, morphSVG: starPath });
    }
  };
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css);
  {
    changePath();
  }
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 24 24"}"${add_attribute("fill", fill, 0)}${add_attribute("stroke", stroke, 0)} class="${"svelte-1exk3bt"}"><path id="${"star-" + escape(index, true)}"${add_attribute("d", starPath, 0)}></path></svg>`;
});
export {
  Star as S
};
