<script>
  import { fly, fade } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;

  export let projects;

  let filteredProjects = projects
    .filter((d) => d.metadata.archived != true)
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  // Import Swiper Svelte components
  import { Mousewheel, Navigation, FreeMode } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css/navigation";
  import "swiper/css";
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element}>
    <!-- {#if intersecting} -->
    <!-- <div transition:fly={{ x: -50 }}> -->
    <!-- <div transition:fade> -->
    <div class="sticky-top not-full-width-content">
      <div class="see-all-flex">
        <h1 class="page-overline">Projects</h1>
        <a class="page-overline padding-bottom" href="/project">
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
      >
        {#each filteredProjects as project, index}
          <SwiperSlide>
            <a
              href={project.path.replace(/\.[^/.]+$/, "")}
              target="_blank"
              class="project-link"
              ><div class="gradient-overlay" />
              <img
                loading="lazy"
                src={`/images/project/${project.metadata.image}`}
                alt=""
                class="project-image"
              />
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
  section {
    width: 100%;
    margin: auto;
    max-width: 1268px;
  }

  .not-full-width-content {
    padding: 1px 1rem 0 1rem;
  }

  @media screen and (max-width: 1468px) {
    .projects-container {
      width: 100vw;
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
      height: 250px;
    }
  }
</style>
