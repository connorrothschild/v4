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
  
  // const ua = navigator.userAgent.toLowerCase();
  // const isSafari = (ua.indexOf('safari') != -1) &&
  //   (!(ua.indexOf('chrome') != -1) &&
  //   (!(ua.indexOf('firefox') != -1)) &&
  //   (ua.indexOf('version/') != -1));

  const isSafari = browser.name === "Safari";
  // Use regex to replace anything in the os.version that is trailing the second decimal point
  // with a blank string.

  const osVersion = os.version.replace(/\.([\s\S]*)$/, '');
  console.log(osVersion) //FIXME: osVersion currently only returns the first major version number (10), we need it to show the first two (10.15)

  const safariSupportsHEVC = isSafari && osVersion < 10.15;
  return isSafari && hasMediaCapabilities && safariSupportsHEVC;
}
