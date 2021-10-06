<script>
  export let width = 24;
  export let height = 24;
  export let fill = "black";
  export let stroke = "transparent";
  export let hovered;
  export let index;

  import { gsap } from "gsap";
  import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
  import { onMount } from "svelte";

  gsap.registerPlugin(MorphSVGPlugin);

  let star;
  onMount(() => {
    star = MorphSVGPlugin.convertToPath(`#star-${index}`);
  });

  const changePath = function () {
    if (hovered == true) {
      gsap.to(star, {
        duration: 0.3,
        morphSVG: arrowPath,
      });
    } else {
      gsap.to(star, {
        duration: 0.3,
        morphSVG: starPath,
      });
    }
  };
  const arrowPath =
    "M 2.398438 1.414062 L 2.398438 4.320312 C 2.398438 4.441406 2.496094 4.535156 2.617188 4.535156 L 17.015625 4.535156 L 1.152344 20.425781 C 1.054688 20.519531 1.054688 20.664062 1.152344 20.734375 L 3.191406 22.777344 C 3.289062 22.871094 3.433594 22.871094 3.503906 22.777344 L 19.488281 6.792969 L 19.488281 21.433594 C 19.488281 21.550781 19.585938 21.648438 19.703125 21.648438 L 22.609375 21.648438 C 22.726562 21.648438 22.824219 21.550781 22.824219 21.433594 L 22.824219 1.414062 C 22.824219 1.296875 22.726562 1.199219 22.609375 1.199219 L 2.617188 1.199219 C 2.496094 1.199219 2.398438 1.296875 2.398438 1.414062 Z M 2.398438 1.414062";

  const starPath =
    "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z";

  $: hovered, changePath(hovered);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  {fill}
  {stroke}><path id="star-{index}" d={starPath} /></svg
>

<style>
  svg {
    pointer-events: none;
  }
</style>
