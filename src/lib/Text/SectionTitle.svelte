<script>

  import { gsap, SplitText } from "../../scripts/gsap";
  import { prefersReducedMotion } from "../../stores/motion";

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
