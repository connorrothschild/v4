

import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText.js';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin.js';

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, MorphSVGPlugin);
}

export * from "gsap";
export { SplitText, MorphSVGPlugin };
