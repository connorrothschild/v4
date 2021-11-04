<script>
  import { onMount } from "svelte";
  import { currentIcon } from "../stores/global.js";

  import { page } from "$app/stores";

  $: currentSlug = $page.path.replace(/^\/([^\/]*).*$/, "$1");
  $: activePage = currentSlug == "" ? "home" : currentSlug;

  const paths = {
    post: "M71.35,28.66a9.07,9.07,0,0,0-12.83,0l-.52.51L56.85,28a6.87,6.87,0,0,0-9.7,0l-8.56,8.57A2,2,0,0,0,40,40a2,2,0,0,0,1.42-.59L50,30.85a2.88,2.88,0,0,1,4.05,0L55.17,32,44.59,42.58h0l-16,16A2,2,0,0,0,28,59.67l-2,12a2,2,0,0,0,.56,1.74A2,2,0,0,0,28,74a1.84,1.84,0,0,0,.33,0l12-2a2,2,0,0,0,1.09-.56L71.35,41.49A9.1,9.1,0,0,0,71.35,28.66ZM39,68.13l-8.6,1.44L31.87,61,46,46.83,53.17,54ZM68.52,38.66,56,51.17,48.83,44,61.35,31.49a5.18,5.18,0,0,1,7.17,0A5.09,5.09,0,0,1,68.52,38.66Z",
    project:
      "M28,72H64a2,2,0,0,0,1.9-1.37l8-24A2,2,0,0,0,72,44H66V38a4,4,0,0,0-4-4H49.14L45.8,28.9a2,2,0,0,0-1.67-.9H30a4,4,0,0,0-4,4V70A2,2,0,0,0,28,72ZM69.23,48,62.56,68H34.77l6.67-20ZM30,32h13l3.34,5.1a2,2,0,0,0,1.67.9H62v6H40a2,2,0,0,0-1.9,1.37L30.56,68H30Z",
    home: "M50,26A24,24,0,1,0,74,50,24,24,0,0,0,50,26ZM40,67.29V66a10,10,0,0,1,20,0v1.29a19.81,19.81,0,0,1-20,0ZM44,46a6,6,0,1,1,6,6A6,6,0,0,1,44,46ZM63.89,64.35a14,14,0,0,0-7.45-10.77A9.91,9.91,0,0,0,60,46a10,10,0,0,0-20,0,9.91,9.91,0,0,0,3.56,7.58,14,14,0,0,0-7.45,10.77,20,20,0,1,1,27.78,0Z",
    award:
      "M63.7,55.06l10-16a2,2,0,0,0,.16-1.8l-4-10A2,2,0,0,0,68.16,26c-.1,0-.2,0-.3,0l-.12,0H31.94a.34.34,0,0,0-.1,0,2,2,0,0,0-.59.14l-.11.06a2.17,2.17,0,0,0-.47.32.8.8,0,0,0-.13.13,2,2,0,0,0-.35.51.43.43,0,0,0,0,.07,0,0,0,0,1,0,0l-4,10a2,2,0,0,0,.16,1.8l10,16a2.25,2.25,0,0,0,.44.48,14,14,0,1,0,26.52,0A2.25,2.25,0,0,0,63.7,55.06ZM50,46a13.81,13.81,0,0,0-4.43.73L40.33,38H59.67l-5.24,8.73A13.81,13.81,0,0,0,50,46ZM62.06,34H37.94l-2.41-4H64.47ZM30.23,37.8l2.13-5.31,9.63,16a14.19,14.19,0,0,0-3.15,3ZM50,70A10,10,0,1,1,60,60,10,10,0,0,1,50,70Zm8-21.46,9.63-16,2.13,5.31L61.16,51.58A14.19,14.19,0,0,0,58,48.54Z",
    experience:
      "M66,36H60V32a6,6,0,0,0-6-6H46a6,6,0,0,0-6,6v4H34a8,8,0,0,0-8,8V66a8,8,0,0,0,8,8H66a8,8,0,0,0,8-8V44A8,8,0,0,0,66,36ZM44,32a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v4H44ZM34,40H66a4,4,0,0,1,4,4v8H60V50a2,2,0,0,0-4,0v2H44V50a2,2,0,0,0-4,0v2H30V44A4,4,0,0,1,34,40ZM66,70H34a4,4,0,0,1-4-4V56H40v2a2,2,0,0,0,4,0V56H56v2a2,2,0,0,0,4,0V56H70V66A4,4,0,0,1,66,70Z",
    arrow:
      "M58,72V48H68a2,2,0,0,0,1.85-1.23,2,2,0,0,0-.44-2.18l-18-18a2,2,0,0,0-2.82,0l-18,18a2,2,0,0,0-.44,2.18A2,2,0,0,0,32,48H42V72a2,2,0,0,0,2,2H56A2,2,0,0,0,58,72ZM54,46V70H46V46a2,2,0,0,0-2-2H36.83L50,30.83,63.17,44H56A2,2,0,0,0,54,46Z",
  };

  let container;

  onMount(() => {
    container = MorphSVGPlugin.convertToPath("#container");
    changePath(paths[activePage]);
  });

  const changePath = function (path) {
    gsap.to(container, {
      duration: 0.3,
      morphSVG: path,
      delay: 0.05,
    });
  };

  $: changePath($currentIcon ? paths[$currentIcon] : paths[activePage]);
</script>

<!-- href to home doesn't exist anymore, but if we want it, add to top of nav in separate div -->
<a
  href="#home"
  class="no-underline"
  on:mouseover={() => {
    currentIcon.set("arrow");
  }}
  on:focus={() => {
    currentIcon.set("arrow");
  }}
  on:mouseleave={() => {
    currentIcon.set(activePage);
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" x="0px" y="0px"
    ><path id="container" d={paths[activePage]} />
  </svg>
</a>

<style>
  svg {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 50px;
    width: 50px;
    fill: rgba(var(--accent-color-rgb), 0.9);
    z-index: 100;
  }

  @media screen and (max-width: 560px) {
    /* svg {
      visibility: hidden;
    } */
    svg {
      height: 40px;
      width: 40px;
    }
  }
</style>
