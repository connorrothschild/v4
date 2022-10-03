import { r as readable, w as writable } from "./index2.js";
const pageTransitionDelay = readable(900);
const menuExpanded = writable(false);
const windowWidth = writable(0);
const windowHeight = writable(0);
const getInitialMotionPreference = () => {
  return false;
};
const prefersReducedMotion = readable(getInitialMotionPreference());
export {
  windowWidth as a,
  prefersReducedMotion as b,
  menuExpanded as m,
  pageTransitionDelay as p,
  windowHeight as w
};
