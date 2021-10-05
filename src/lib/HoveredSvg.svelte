<script>
  import gsap from "gsap/dist/gsap";
  import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
  import { onMount } from "svelte";
  import { currentIcon } from "../stores/global.js";

  gsap.registerPlugin(MorphSVGPlugin);

  import { page } from "$app/stores";

  $: currentSlug = $page.path.replace(/^\/([^\/]*).*$/, "$1");
  $: activePage = currentSlug == "" ? "home" : currentSlug;

  const paths = {
    blog: "M71.35,28.66a9.07,9.07,0,0,0-12.83,0l-.52.51L56.85,28a6.87,6.87,0,0,0-9.7,0l-8.56,8.57A2,2,0,0,0,40,40a2,2,0,0,0,1.42-.59L50,30.85a2.88,2.88,0,0,1,4.05,0L55.17,32,44.59,42.58h0l-16,16A2,2,0,0,0,28,59.67l-2,12a2,2,0,0,0,.56,1.74A2,2,0,0,0,28,74a1.84,1.84,0,0,0,.33,0l12-2a2,2,0,0,0,1.09-.56L71.35,41.49A9.1,9.1,0,0,0,71.35,28.66ZM39,68.13l-8.6,1.44L31.87,61,46,46.83,53.17,54ZM68.52,38.66,56,51.17,48.83,44,61.35,31.49a5.18,5.18,0,0,1,7.17,0A5.09,5.09,0,0,1,68.52,38.66Z",
    projects:
      "M28,72H64a2,2,0,0,0,1.9-1.37l8-24A2,2,0,0,0,72,44H66V38a4,4,0,0,0-4-4H49.14L45.8,28.9a2,2,0,0,0-1.67-.9H30a4,4,0,0,0-4,4V70A2,2,0,0,0,28,72ZM69.23,48,62.56,68H34.77l6.67-20ZM30,32h13l3.34,5.1a2,2,0,0,0,1.67.9H62v6H40a2,2,0,0,0-1.9,1.37L30.56,68H30Z",
    home: "M50,26A24,24,0,1,0,74,50,24,24,0,0,0,50,26ZM40,67.29V66a10,10,0,0,1,20,0v1.29a19.81,19.81,0,0,1-20,0ZM44,46a6,6,0,1,1,6,6A6,6,0,0,1,44,46ZM63.89,64.35a14,14,0,0,0-7.45-10.77A9.91,9.91,0,0,0,60,46a10,10,0,0,0-20,0,9.91,9.91,0,0,0,3.56,7.58,14,14,0,0,0-7.45,10.77,20,20,0,1,1,27.78,0Z",
    experience:
      "M66,36H60V32a6,6,0,0,0-6-6H46a6,6,0,0,0-6,6v4H34a8,8,0,0,0-8,8V66a8,8,0,0,0,8,8H66a8,8,0,0,0,8-8V44A8,8,0,0,0,66,36ZM44,32a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v4H44ZM34,40H66a4,4,0,0,1,4,4v8H60V50a2,2,0,0,0-4,0v2H44V50a2,2,0,0,0-4,0v2H30V44A4,4,0,0,1,34,40ZM66,70H34a4,4,0,0,1-4-4V56H40v2a2,2,0,0,0,4,0V56H56v2a2,2,0,0,0,4,0V56H70V66A4,4,0,0,1,66,70Z",
  };

  let container;
  onMount(() => {
    container = MorphSVGPlugin.convertToPath("#container");
  });

  const changePath = function (path) {
    gsap.to(container, {
      duration: 1,
      morphSVG: path,
    });
  };

  $: $currentIcon,
    changePath($currentIcon ? paths[$currentIcon] : paths[activePage]);
</script>

<svg
  height="60px"
  width="60px"
  fill="var(--accent-color)"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  x="0px"
  y="0px"
  ><path id="container" d={paths["home"]} />
</svg>

<style>
  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
  /* Thins out SVG. but looks bad on animation */
  /* #container {
    stroke: white; 
    stroke-width: 1px; 
  } */
</style>
