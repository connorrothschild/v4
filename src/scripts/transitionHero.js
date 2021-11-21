import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { SplitText } from "gsap/dist/SplitText.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const transition = async function (connor, rothschild, subtitle, overline) {
    connor = document.querySelector(".connor");
    rothschild = document.querySelector(".rothschild");
    subtitle = document.querySelector(".subtitle");
    overline = document.querySelector(".overline");

    let overlineSplit = new SplitText(overline, { type: "words,chars" });
    let connorSplit = new SplitText(connor, { type: "words,chars" });
    let rothschildSplit = new SplitText(rothschild, { type: "words,chars" });

    gsap.set(connor, { perspective: 400, opacity: 0 });
    gsap.set(rothschild, { perspective: 400, opacity: 0 });
    gsap.set(overline, { perspective: 400, opacity: 0 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(connor, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(rothschild, { opacity: 0 }, { opacity: 1, duration: 1.25 });

    gsap.fromTo(
      overlineSplit.chars,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.35,
        ease: "backwards",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      connorSplit.chars,
      // { y: "100%", scaleY: "100%", opacity: 0 },
      { y: "-50%", opacity: 0 },
      {
        x: 0,
        y: 0,
        // scaleY: "100%",
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "ease",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      rothschildSplit.chars,
      // { y: "-100%", scaleY: "100%", opacity: 0 },
      { y: "50%", opacity: 0 },
      {
        x: 0,
        y: 0,
        // scaleY: "100%",
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "ease",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, x: "-2.5%" },
      { opacity: 1, x: 0, duration: 1, delay: 1.1, clearProps: "opacity" }
    );

    gsap.to(".year", {
      scrollTrigger: {
        trigger: "#projects",
        end: 200,
        scrub: true,
        once: false,
      },
      opacity: 0,
    });
  };
