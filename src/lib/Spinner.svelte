<script>
  import { base } from "$app/paths";

  export let options;
  let index = 0;

  function increment() {
    let newIndex = index + 1 > options.length - 1 ? 0 : index + 1;
    return newIndex;
  }

  $: currJob = options[index];

  let color = {
    Axios: "#3b6be3",
    USSOCOM: "#BDAE50",
    "Texas Policy Lab": "#e54e4d",
  };

  let hovered = false;
</script>

<div
  style="border-bottom: 4px solid {color[currJob]}"
  on:click={() => (index = increment())}
  on:mouseover={() => (hovered = true)}
  on:focus={() => (hovered = true)}
>
  {currJob}
  <img src="{base}/images/icons/shuffle.svg" alt="Shuffle icon" />
</div>

<style>
  div {
    display: inline;
    user-select: none;
    cursor: pointer;
    transition: border-bottom 300ms linear;
  }

  img {
    vertical-align: middle;
    margin-bottom: 1px;
    width: 32px;
    height: 32px;
  }
</style>
