<script>
  export let userSelectedFramework;
  let options = ["Svelte", "React", "Vue"];

  let showMenu = false;

  import { slide } from "svelte/transition";
</script>

<span style="display: inline-block;"><slot /></span>

<!-- <div>
  <span
    class={`${userSelectedFramework} ${
      userSelectedFramework ? "selected" : "not-selected"
    }`}
    on:click={() => {
      // showMenu = !showMenu;
    }}
  >
    <slot />
    {#if showMenu}
      <ul transition:slide>
        {#each options as option}
          <li
            class={option}
            on:click={() => {
              userSelectedFramework = option;
              showMenu = !showMenu;
            }}
          >
            {option}
          </li>
        {/each}
      </ul>
    {/if}
  </span>
</div> -->

<style>
  div {
    position: relative;
    display: inline;
    cursor: pointer;
  }

  /* span {
    padding: 0.15rem 0.35rem;
    border-radius: 0.25rem;
    display: inline-block;
    user-select: none;
    z-index: 2;
    position: relative;
  }

  span.not-selected {
    background: #cecece;
  }

  .Svelte {
    background: rgb(235, 80, 39);
    color: white;
  }
  
  .React {
    background: rgb(0, 162, 207);
    color: white;
  }
  
  .Vue {
    background: rgb(52, 199, 89);
    color: white;
  }

  ul {
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    background: white;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    padding: 0;
    margin: 0;
    z-index: 1;
    list-style: none;
    width: 100px;
    text-align: center;
  }

  li {
    color: rgb(45, 45, 45);
    font-weight: 400;
    list-style-type: none;
    padding: 0;
    margin: 0;
  } */
</style>
