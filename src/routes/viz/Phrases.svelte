<script>
  let phrases = [
    "It's not really learning D3",
    "You should just learn a framework",
    "It's not your fault",
    "D3 is hard",
    "Svelte better + ratio",
    "Interactive data viz is hard",
    "D3 for the data",
    "Svelte for the DOM",

    "It's not really learning D3",
    "You should just learn a framework",
    "It's not your fault",
    "D3 is hard",
    "Svelte better + ratio",
    "Interactive data viz is hard",
    "D3 for the data",
    "Svelte for the DOM",

    "It's not really learning D3",
    "You should just learn a framework",
    "It's not your fault",
    "D3 is hard",
    "Svelte better + ratio",
    "Interactive data viz is hard",
    "D3 for the data",
    "Svelte for the DOM",

    "It's not really learning D3",
    "You should just learn a framework",
    "It's not your fault",
    "D3 is hard",
    "Svelte better + ratio",
    "Interactive data viz is hard",
    "D3 for the data",
    "Svelte for the DOM",
  ];
</script>

{#each phrases as phrase}
  <h1
    class="phrase-title"
    style:left={Math.random() * 100 + "%"}
    style:top={Math.random() * 100 + "%"}
  >
    {phrase}
  </h1>
{/each}

<style>
  .phrase-title {
    position: absolute;
    font-family: "Satoshi";
    font-size: 18px;
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
    z-index: 2;
    opacity: 0.15;
    width: max-content;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
  }

  .phrase-title:hover {
    opacity: 1;
  }
</style>
