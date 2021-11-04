<script>
  export let projects;
  export let isMobile;

  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;

  let filteredProjects = projects
    .filter((d) => d.metadata.archived != true)
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  // Import Swiper Svelte components
  import SwiperCore, { Mousewheel, Navigation, FreeMode, Lazy } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  SwiperCore.use([Lazy, Navigation]);

  // Import Swiper styles
  import "swiper/css/navigation";
  import "swiper/css/lazy";
  import "swiper/css";
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="projects">
    <!-- {#if intersecting} -->
    <!-- <div transition:fly={{ x: -50 }}> -->
    <!-- <div transition:fade> -->
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
      <h1 class="page-title home">
        Projects I've
        <span class="gradient-accented bolded">built</span>
      </h1>
    </div>

    <div class="projects-container">
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
        direction={"horizontal"}
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
              <!-- <img
                loading="lazy"
                src={`/images/project/${project.metadata.image}`}
                alt=""
                class="project-image"
              /> -->
              <div class="project-text">
                <h1>{project.metadata.title}</h1>
                <h2>{project.metadata.description}</h2>
              </div>
            </a>
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
    <!-- </div> -->
    <!-- {/if} -->
  </section>
</IntersectionObserver>

<style>
  /* This section handled differently because we want project gallery fullbleed */
  section {
    width: 100%;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }

  .title-max-width-container {
    width: 100%;
    margin: auto;
  }

  .see-all-flex,
  .page-title {
    width: 95%;
    max-width: 1268px;
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
