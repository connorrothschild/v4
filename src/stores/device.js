import {
    readable
} from 'svelte/store';
import {
    browser
} from '$app/env';

function detectTouchscreen() {
    if (!browser) return false;
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

export const isTouchscreen = readable(detectTouchscreen());

import Bowser from "bowser";

// function getBrowserDetails() {
//     if (!browser) return false;
//     const navigator = window.navigator;

//     const thisBrowser = Bowser.getParser(window.navigator.userAgent).getBrowser();
//     const os = Bowser.getParser(window.navigator.userAgent).getOS();

//     return {
//         navigator,
//         thisBrowser,
//         os
//     }
// }

function supportsHEVCAlpha() {
     if (!browser) return false;
    const navigator = window.navigator;

    const thisBrowser = Bowser.getParser(window.navigator.userAgent).getBrowser();
    const os = Bowser.getParser(window.navigator.userAgent).getOS();

    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)

    const isSafari = thisBrowser.name === "Safari";
    const isMac = os.name === "macOS";
    const isIOS = os.name === "iOS";

    const version = {
        major: os.version.split('.')[0],
        minor: os.version.split('.')[1]
    };
    const isPast1015 = version.major > 10 || (version.major >= 10 && version.minor >= 15);

    if (isMac && isSafari && isPast1015) return true;
    if (isSafari && hasMediaCapabilities) return true;
    if (isIOS) return true;

    return false;
}

export const isHEVC = readable(supportsHEVCAlpha());

function check1015() {
    if (!browser) return false;
    const os = Bowser.getParser(window.navigator.userAgent).getOS();

    const isMac = os.name === "macOS";

    const version = {
        major: os.version.split('.')[0],
        minor: os.version.split('.')[1]
    };
    const isPast1015 = version.major > 10 || (version.major >= 10 && version.minor >= 15);

    const cannotRenderTransparentVideo = isMac && !isPast1015;
    return cannotRenderTransparentVideo;
}

export const isPre1015 = readable(check1015());
