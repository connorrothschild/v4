<script>
  import { gsap } from "gsap";
  import { SplitText } from "gsap/dist/SplitText.js";
  import { prefersReducedMotion } from "../../stores/motion";

  gsap.registerPlugin(SplitText);

  export let intersecting;
  export let element;

  $: if (intersecting) {
    transition();
  }

  let transition = function () {
    if ($prefersReducedMotion) return;

    let titleSplit = new SplitText(document.querySelector(element), {
      type: "words,chars",
    });
    let titleChars = titleSplit.chars;

    gsap.fromTo(
      titleChars,
      { y: 100, opacity: 0, rotation: 0 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.025,
        duration: 0.5,
        delay: 0.25,
        ease: "backwards",
      }
    );
  };
</script>

<slot />
