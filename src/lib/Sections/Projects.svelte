<script>
  export let projects;
  export let isMobile;

  import { currentColorMode } from "../../stores/global.js";

  import SectionTitle from "$lib/Text/SectionTitle.svelte";
  import Scroll from "$lib/Scroll.svelte";

  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;

  let value = 0;

  // let filteredProjects = projects
  //   .filter((d) => d.metadata.archived != true)
  //   .sort((a, b) => {
  //     if (b.metadata.featured && !a.metadata.featured) return 1;
  //     if (!b.metadata.featured && a.metadata.featured) return -1;
  //     if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
  //     if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  //   });

  let filteredProjects = projects.filter((d) => d.metadata.featured == true);

  $: currentProject = value ? filteredProjects[value] : filteredProjects[0];

  // Import Swiper Svelte components
  import SwiperCore, { Mousewheel, Navigation, FreeMode, Lazy } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  SwiperCore.use([Lazy, Navigation]);

  // Import Swiper styles
  import "swiper/css/navigation";
  import "swiper/css/lazy";
  import "swiper/css";
  import { onMount } from "svelte";

  let video, source;

  const updateVideo = function (url) {
    if (video && source) {
      source.src = url;
      video.load();
    }
  };

  $: value || $currentColorMode,
    value
      ? updateVideo(`./videos/${$currentColorMode}/${value}.mp4`)
      : updateVideo(`./videos/${$currentColorMode}/0.mp4`);
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="projects">
    <div class="sticky-top title-max-width-container">
      <div class="see-all-flex">
        <h1 class="page-overline">
          {isMobile ? "Selected projects" : "Projects"}
        </h1>
        <a
          class="page-overline padding-bottom see-all"
          sveltekit:prefetch
          href="/project"
        >
          See all projects &#8599;
        </a>
      </div>
      <SectionTitle {intersecting} element="#projects-title">
        <h1 id="projects-title" class="page-title home overflow-hidden">
          Projects I've
          <span class="gradient-accented bolded">built</span>
        </h1>
      </SectionTitle>
    </div>
    <div class="section-container">
      <div class="steps-container">
        <Scroll bind:value>
          {#each filteredProjects as project, i}
            <div class="step" class:active={value === i}>
              <div class="step-content">
                <h1>{project.metadata.title}</h1>
              </div>
            </div>
          {/each}
        </Scroll>
      </div>
      <div class="sticky">
        <video autoplay loop muted playsinline id="video" bind:this={video}>
          <source bind:this={source} src="" type="video/mp4" />
        </video>
      </div>
      <!-- <lottie-player
          src="./videos/cudi.json"
          background="transparent"
          renderer="canvas"
          speed="1"
          style="width: 100%; height: auto;"
          loop
          autoplay
        /> -->
      <!-- <div class="projects-container">
      <Swiper
        modules={[Mousewheel, Navigation, FreeMode]}
        freeMode={{ enabled: false, sticky: true }}
        speed={800}
        spaceBetween={-1}
        slidesPerView={"auto"}
        navigation={true}
        mousewheel={{ forceToAxis: true }}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        direction={"vertical"}
        observer={true}
        observeParents={true}
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          checkInView: true, // Make this true if really need performance optimization
        }}
        watchSlidesProgress={true}
      >
        {#each filteredProjects as project, index}
          <SwiperSlide>
            <a
              href={project.path.replace(/\.[^/.]+$/, "")}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
              ><div class="gradient-overlay" />
              <img
                data-src={`./images/project/${project.metadata.image}`}
                class="swiper-lazy project-image"
                alt=""
              />
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
              <div class="project-text">
                <h1>{project.metadata.title}</h1>
                <h2>{project.metadata.description}</h2>
              </div>
            </a>
          </SwiperSlide>
        {/each}
      </Swiper>
    </div> -->
      <!-- </div> -->
      <!-- {/if} -->
    </div>
  </section>
</IntersectionObserver>

<style>
  .hidden {
    opacity: 0;
  }
  .sticky {
    position: sticky;
    /* This depends on the element. Here, top is the nav height because the map is full window height */
    top: calc(var(--nav-height) + 3rem);
  }

  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
  }

  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  /* .step-content {
    font-size: 1rem;
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 6px #cecece;
    border-left: 5px solid transparent;
    text-align: left;
    width: 75%;
    margin: auto;
    max-width: 500px;
  }

  .step.active .step-content {
    border-left: 5px solid var(--accent-color);
    background: white;
    color: black;
  } */

  .steps-container,
  .sticky {
    height: 100%;
    margin-right: 1rem;
  }

  .steps-container {
    flex: 1 1 40%;
    z-index: 10;
  }

  /* MAKE THIS MOBILE ONLY BY UNCOMMENTING */
  /* @media screen and (max-width: 768px) { */
  .section-container {
    flex-direction: column-reverse;
  }

  video {
    width: 100vw;
    height: 100%;
  }

  /* FIXME */
  /* @media screen and (max-width: 768px) {
    video {
      width: auto;
      height: 90vh;
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      transform: translateX(calc((100% - 100vw) / 2));
    }
  } */

  /* This section handled differently because we want project gallery fullbleed */
  section {
    width: 100%;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }

  /* OLD STUFF */

  .title-max-width-container {
    width: 100%;
    margin: auto;
  }

  .see-all-flex,
  .page-title {
    width: 95%;
    max-width: 1168px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1468px) {
    .projects-container {
      width: 99vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }
  }

  :global(.swiper-wrapper) {
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  :global(.swiper-button-prev::after, .swiper-button-next::after) {
    font-size: 24px !important;
    color: rgba(255, 255, 255, 0.8) !important;
  }

  :global(.swiper) {
    width: 100%;
    height: 100%;
  }

  :global(.swiper-slide) {
    /* width: 50vw; */
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    transition: filter 500ms ease;
  }
  :global(.swiper-slide-active) {
    filter: none;
  }

  :global(.swiper-slide:not(.swiper-slide-active)) {
    filter: grayscale(1);
  }

  .project-link {
    position: unset;
  }

  .gradient-overlay {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 100%;
    width: 100%;
  }

  .project-image {
    position: absolute;
    top: 0;
    left: 50%;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
  }

  .project-text {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
  }

  .project-text h1,
  .project-text h2 {
    color: white;
  }

  .project-text h1 {
    margin-bottom: 0.75rem;
    line-height: 1.1;
    font-weight: 600;
  }

  .project-text h2 {
    font-family: var(--font-sans);
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    letter-spacing: 0.025rem;
    font-weight: 200;
  }

  .projects-container {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    .projects-container {
      height: 400px;
    }
  }

  @media screen and (max-width: 568px) {
    .projects-container {
      height: 275px;
    }

    .project-text h1 {
      font-size: 1.5rem;
    }

    .project-text h2 {
      font-size: 1rem;
    }
  }
</style>
