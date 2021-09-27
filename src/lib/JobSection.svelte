<script>
  export let job;
  export let slug;

  let hovered = false;
</script>

<a
  class="job-container {hovered ? 'hovered' : ''}"
  on:mouseover={() => (hovered = true)}
  on:mouseout={() => (hovered = false)}
  sveltekit:prefetch
  href={slug}
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
</a>

<style>
  .job-container {
    padding: 2rem 0;
    border-bottom: 1px dashed var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }

  .job-image {
    margin-left: 12px;
    width: 40px;
    transition: width 300ms ease;
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
    animation: right 1s ease infinite;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

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
  @media (max-width: 860px) {
    h2 {
      font-size: 2rem !important;
    }
    .job-container {
      padding: 0.5em 0;
      height: 100px;
    }
    .job-image {
      width: 32.5px;
      margin-left: 8px;
    }
  }

  /* MOBILE */
  @media (max-width: 560px) {
    .job-container {
      padding: 0.5em 0;
      height: 100px;
    }
  }

  /* TINY */
  @media (max-width: 400px) {
    h2 {
      font-size: 1.5rem !important;
    }
    .job-image {
      width: 25px;
    }
  }
  /* .logos {
    display: flex;
    flex-direction: row;
    place-items: center;
  }

  .job-image {
    margin-left: 1em;
  }
  .job-image {
    filter: blur(2px) grayscale(0.8);
    transition: filter 400ms ease;
    cursor: pointer;
  }

  .job-image.hovered {
    filter: blur(0) grayscale(0.8);
  } */

  /* .job-image {
    transition: transform 0.3s ease-in-out;
  }

  .job-image.hovered {
    transform: rotate(360deg);
  } */
</style>
