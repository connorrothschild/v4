<script>
  export let award;
  export let slug;
  export let anyHovered = false;

  import TransitionInView from "$lib/TransitionInView.svelte";

  let active = false;
</script>

<TransitionInView>
  <a
    class="container no-underline {anyHovered && !active
      ? 'inactive'
      : active
      ? 'active'
      : ''}"
    sveltekit:prefetch
    href={slug}
    on:mouseover={() => {
      active = true;
      anyHovered = true;
    }}
    on:focus={() => {
      active = true;
      anyHovered = true;
    }}
    on:mouseleave={() => {
      active = false;
      anyHovered = false;
    }}
  >
    <h2 class="title">{award.title}</h2>
    <p class="organization hidden-mobile">
      {award.organization}
    </p>
    <time datetime={award.date} class="hidden-mobile"
      >{award.date.slice(0, 4)}</time
    >
    <div class="flex-mobile">
      <p class="organization">
        {award.organization}
      </p>
      <time datetime={award.date}>{award.date.slice(0, 4)}</time>
    </div>
  </a>
</TransitionInView>

<style>
  .flex-mobile {
    display: none;
    visibility: hidden;
  }

  .container {
    display: flex;
    padding: 1.25rem 0;
    filter: none;
    justify-content: space-between;
    position: relative;
    border-bottom-color: rgba(var(--text-color-rgb), 0.05);
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }

  .container::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -1px;
    left: 0;
    background-color: var(--accent-color);
    transform-origin: bottom left;
    transition: transform 500ms ease;
  }

  .container:hover::after {
    transform: scaleX(1);
  }

  .container > * {
    transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
  }

  .title {
    flex: 1;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.15;
    font-family: var(--font-sans);
    letter-spacing: -0.4px;
    color: var(--text-color);
  }

  .organization {
    font-size: 1.25rem;
    padding: 0 1rem;
    line-height: 1.15;
    font-family: var(--font-serif);
    display: flex;
    place-items: center;
    justify-content: center;
    text-align: center;
    color: var(--accent-color);
    font-weight: 200;
    letter-spacing: 0.025rem;
  }

  time {
    color: var(--text-color);
    padding: 0 1rem;
    font-family: var(--font-serif);
    font-weight: 200;
    text-align: right;
    display: flex;
    place-items: center;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  .inactive > * {
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px rgba(var(--text-color-rgb), 0.8);
  }

  .inactive {
    border-bottom-color: rgba(var(--text-color-rgb), 0.05);
  }

  /* SMALL SCREENS */
  @media screen and (max-width: 700px) {
    .container {
      flex-direction: column;
      padding: 1rem 0;
      align-items: flex-start;
    }

    .title {
      margin-bottom: 0.35rem;
    }

    .organization {
      padding: 0;
      font-size: 1.1rem;
      font-weight: 200;
    }

    time {
      padding: 0;
    }

    .hidden-mobile {
      display: none;
      visibility: hidden;
    }

    .flex-mobile {
      width: 100%;
      display: flex;
      justify-content: space-between;
      visibility: visible;
    }
  }
</style>
