import { r as readable } from "./index2.js";
import "bowser";
function detectTouchscreen() {
  return false;
}
const isTouchscreen = readable(detectTouchscreen());
function supportsHEVCAlpha() {
  return false;
}
const isHEVC = readable(supportsHEVCAlpha());
function check1015() {
  return false;
}
const isPre1015 = readable(check1015());
export {
  isHEVC as a,
  isPre1015 as b,
  isTouchscreen as i
};
