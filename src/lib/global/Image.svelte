<script>
  export let src;
  export let alt;
  export let width = "100%";
  export let centered = false;
  export let style = "";
</script>

<img {src} {alt} {width} {style} class:centered />

<style>
  .centered {
    display: block;
    margin: 1rem auto;
  }
</style>
