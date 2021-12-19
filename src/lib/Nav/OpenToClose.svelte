<script>
  export let expanded;

  import { gsap } from "gsap";
  import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin.js";
  import { onMount } from "svelte";

  gsap.registerPlugin(MorphSVGPlugin);
  const colors = ["#46a4cc", "#50a39e", "#a63e4b", "#e3aa59", "#a63ba0"];

  let icon;

  onMount(() => {
    icon = document.querySelector("#icon");
  });

  let openPath =
    "M 3.121094 5.519531 L 3.121094 6.960938 L 20.878906 6.960938 L 20.878906 5.519531 Z M 3.121094 11.28125 L 3.121094 12.71875 L 20.878906 12.71875 L 20.878906 11.28125 Z M 3.121094 17.039062 L 3.121094 18.480469 L 20.878906 18.480469 L 20.878906 17.039062 Z M 3.121094 17.039062 ";
  let closedPath =
    "M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289Z";

  const switchIcon = function () {
    gsap.to(icon, {
      duration: 0.6,
      morphSVG: expanded ? closedPath : openPath,
      ease: "power3.inOut",
    });
  };

  $: expanded, switchIcon();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g>
    <path id="icon" d={openPath} />
  </g>
</svg>

<style>
  svg {
    width: 1.9rem;
    height: 1.9rem;
    fill: var(--accent-color);
  }
</style>
