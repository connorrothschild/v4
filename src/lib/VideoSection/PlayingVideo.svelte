<script>
  export let value;
  export let i;
  export let active;

  import { isHEVC } from "../../stores/device.js";
  let element;

  const playVideo = function () {
    if (element) {
      element.pause();
      element.currentTime = 0;
      element.load();
      element.play();
    }
  };
  //   $: value, playVideo();
  $: active == true, playVideo();

  import { windowHeight } from "../../stores/global.js";
</script>

<video
  preload="auto"
  muted
  playsinline
  bind:this={element}
  style="height: {$windowHeight * 0.8}px; opacity: {value == i ? 1 : 0}"
>
  <source src="./videos/{i}.mov" type="video/mp4; codecs="hvc1"" />
  <source src="./videos/{i}.webm" type="video/webm" />
</video>

<style>
  video {
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    /* transition: opacity 200ms linear; */
  }

  @media screen and (max-width: 1268px) {
    video {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
