export function dateFormat(date) {
    const parsed = new Date(date);
    const month = parsed.toLocaleString("default", { month: "long" });
    const year = parsed.getUTCFullYear();

    return `${month} ${year}`;
};

export function detectTouchscreen() {
  var result = false;
  if (window.PointerEvent && ('maxTouchPoints' in navigator)) {
    // if Pointer Events are supported, just check maxTouchPoints
    if (navigator.maxTouchPoints > 0) {
      result = true;
    }
  } else {
    // no Pointer Events...
    if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
      // check for any-pointer:coarse which mostly means touchscreen
      result = true;
    } else if (window.TouchEvent || ('ontouchstart' in window)) {
      // last resort - check for exposed touch events API / event handler
      result = true;
    }
  }
  return result;
}

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

import Bowser from "bowser"; // TypeScript

export function supportsHEVCAlpha() {
  const navigator = window.navigator;

  console.log(Bowser.getParser(window.navigator.userAgent))
  const browser = Bowser.getParser(window.navigator.userAgent).getBrowser();
  const os = Bowser.getParser(window.navigator.userAgent).getOS();

  const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)

  const isSafari = browser.name === "Safari";
  const isMac = os.name === "macOS";
  const isIOS = os.name === "iOS";
  const version = {major: os.version.split('.')[0], minor: os.version.split('.')[1]};
  const isPast1015 = version.major > 10 || (version.major >= 10 && version.minor >= 15);

  if (isMac && isSafari && isPast1015) return true;
  if (isSafari && hasMediaCapabilities) return true;
  if (isIOS) return true;

  return false;
}
