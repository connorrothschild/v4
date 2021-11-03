<script>
  export let award;
  export let slug;
  export let anyHovered = false;

  let active = false;

  import { dateFormat } from "../../scripts/utils.js";
</script>

<a
  class="container no-underline {anyHovered && !active
    ? 'inactive'
    : active
    ? 'active'
    : ''}"
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
  <h3 class="title">{award.title}</h3>
  <p class="organization">
    {award.organization}
  </p>
  <!-- <time datetime={award.date}>{dateFormat(award.date)}</time> -->
  <time datetime={award.date}>{award.date.slice(0, 4)}</time>
</a>

<style>
  .container {
    display: flex;
    padding: 1.5rem 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(var(--accent-color-rgb), 0.25);
    filter: none;
    justify-content: space-between;
    transition: border-bottom-color 500ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
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
    text-shadow: 0 0 2px var(--text-color);
  }

  .active {
    border-bottom-color: var(--accent-color);
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
    }

    time {
      visibility: hidden;
      display: none;
    }
  }
</style>
