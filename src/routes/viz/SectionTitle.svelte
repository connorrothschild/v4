<script>
  import { onMount } from "svelte";


  export let number;
  
  let scrollY;
  let element;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(element);
  });
  // Make the element slightly transformed horizontally, linked to user scroll , but account for overall scroll position and element scroll top
  // $: element.style.transform = `translateX(${(scrollY - elementScrollTop) * 0.1}px)`;

</script>

<svelte:window bind:scrollY={scrollY} />
<div bind:this={element}>
  <span>0{number}.</span>
  <h1><slot /></h1>
</div>

<style>
  div {
    position: relative;
    left: calc(-50vw + 50%);
    width: 100vw;
    min-height: 300px;
    padding: 2.5rem 1rem;
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    overflow: hidden;
    /* background: linear-gradient(
      180deg,
      rgba(138, 138, 255, 1),
      white,
      rgba(138, 138, 255, 1)
    ); */
    /* background: rgba(138, 138, 255, 0.9); */
    /* background: rgb(99 140 255 / 90%); */
    background: rgb(0 0 0 / 70%);
    backdrop-filter: blur(10px);
    border: 4px solid var(--accent-color);
    border-right: none;
    border-left: none;
  }

  h1 {
    position: relative;
    font-size: 10vw;
    font-weight: 300;
    text-align: center;
    z-index: 2;
    max-width: 1068px;
    margin: auto;
    width: 90%;
    line-height: 1;
    font-style: italic;
    color: white;
    transform: translateX(-20%);
    opacity: 0;
    transition: all 700ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1rem;
    color: white;
    font-family: "input-mono";
  }

  :global(.visible h1) {
    opacity: 1;
    transform: translateX(0);
  }
</style>
