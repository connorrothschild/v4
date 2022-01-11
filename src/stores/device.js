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

function supportsHEVCAlpha() {
     if (!browser) return false;
    const navigator = window.navigator;

    const thisBrowser = Bowser.getParser(window.navigator.userAgent).getBrowser();
    const os = Bowser.getParser(window.navigator.userAgent).getOS();

    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)

    const isSafari = thisBrowser.name === "Safari";
    const isIOS = os.name === "iOS";

    // If user is on Safari/iOS and supports HEVC with alpha, return true
    if (isSafari && hasMediaCapabilities) return true;
    if (isIOS) return true;

    // Otherwise, if Firefox, Chrome, etc. return false which will render .webm instead of .mov
    return false;
}

export const isHEVC = readable(supportsHEVCAlpha());

function check1015() {
    if (!browser) return false;
    
    const os = Bowser.getParser(window.navigator.userAgent).getOS();
    const isMac = os.name === "macOS";
    
    // We only care about os.version if the user is on Mac OS X
    if (!isMac) return false;
    
    // The following approach works only on Mac OSX because their os.version is always in the format 'xx.xx.xx'
    // If OS version is a whole number with no decimal, do not split but instead make minor == 0
    const version = {
        major: +os.version.split('.')[0],
        minor:  +os.version.split('.')[1] || +0
    };

    const isPast1015 = version.major > 10 || (version.major >= 10 && version.minor >= 15);

    // If user is on a mac and pre 10.15, they cannot render transparent video of any type, so we revert to non-video fallback
    const cannotRenderTransparentVideo = isMac && !isPast1015;
    return cannotRenderTransparentVideo;
}

export const isPre1015 = readable(check1015());
