<script>
  export let job;
  export let slug;

  let hovered = false;

  // Prevent double clicking messing up routing
  import { goto } from "$app/navigation";

  let linkClicked = false;
  function navigate(slug) {
    if (linkClicked) return;
    linkClicked = true;
    setTimeout(() => {
      linkClicked = false;
    }, 500);

    goto(slug);
  }
</script>

<div
  class="job-container {hovered ? 'hovered' : ''}"
  on:mouseover={() => (hovered = true)}
  on:focus={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
  sveltekit:prefetch
  on:click={navigate(slug)}
>
  <div style="display: flex; place-items: center;">
    <h2>{job.name}</h2>
    <img
      src="/images/jobs/{job.imageUrl}.svg"
      class="job-image {hovered ? 'hovered' : ''}"
      alt="logo"
    />
  </div>
  <h3>&#8594;</h3>
</div>

<style>
  .job-container {
    padding: 2rem 0;
    border-bottom: 1px dashed var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  h2 {
    font-size: 44px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 0.64px;
    transition: all 300ms linear;
  }

  h3 {
    font-size: 34px;
    margin-bottom: 6px;
    transition: all 300ms ease;
  }

  .job-image {
    margin-left: 16px;
    width: 40px;
    transition: width 300ms ease;
    /* filter: grayscale(1); */
  }

  .job-container.hovered {
    cursor: pointer;
    border-bottom: 1px solid var(--accent-color);
  }

  .job-container.hovered h2 {
    color: var(--accent-color);
    text-decoration: none !important;
    letter-spacing: 1px;
  }

  .job-container.hovered h3 {
    color: var(--accent-color);
    /* animation: right 1s ease infinite; */
    text-decoration: none;
    transform: translateX(5px);
  }

  /* .job-container.hovered img {
    filter: grayscale(0);
  } */

  @keyframes right {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  /* TABLET */
  @media (max-width: 768px) {
    h2 {
      font-size: 1.75rem !important;
    }
    .job-container {
      padding: 1.5rem 0;
    }
    .job-image {
      width: 28px;
      margin-left: 10px;
    }
  }

  /* MOBILE */
  /* TINY */
  @media (max-width: 400px) {
    h2 {
      font-size: 1.5rem !important;
    }
    .job-image {
      width: 22px;
    }
  }
</style>
