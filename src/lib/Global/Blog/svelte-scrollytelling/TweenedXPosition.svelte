<script>
  import { tweened } from "svelte/motion";

  let data = [
    { foo: 4, bar: 1 },
    { foo: 1, bar: 3 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 5 },
    { foo: 8, bar: 6 },
    { foo: 9, bar: 5 },
    { foo: 5, bar: 3 },
    { foo: 4, bar: 8 },
    { foo: 1, bar: 6 },
  ];

  const tweenedX = tweened(data.map((d) => d.foo));

  let current = "foo";
  const setFoo = function () {
    current = "foo";
    tweenedX.set(data.map((d) => d.foo));
  };
  const setBar = function () {
    current = "bar";
    tweenedX.set(data.map((d) => d.bar));
  };
</script>

<div class="example">
  <div class="buttons">
    <button class="button" class:active={current == "foo"} on:click={setFoo}
      >Foo</button
    >
    <button class="button" class:active={current == "bar"} on:click={setBar}
      >Bar</button
    >
  </div>
  <p>
    Your values:
    {#each $tweenedX as x}
      {Math.round(x)} ‎
    {/each}
  </p>
</div>

<style>
  .example {
    width: 480px;
    max-width: 100%;
    margin: auto;
    background: var(--semitransparent-bg);
    margin-bottom: 1.15rem;
    z-index: 3;
    position: relative;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p {
    margin-bottom: 0 !important;
  }

  .active {
    background: rgba(var(--primary-color-rgb), 0.7);
  }

  .active:hover::before {
    opacity: 0;
  }
</style>
