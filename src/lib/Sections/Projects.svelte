<script>
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
  import { Mousewheel, Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css/navigation";
  import "swiper/css";
</script>

<section>
  <div class="sticky-top not-full-width-content">
    <div class="see-all-flex">
      <h1 class="page-overline">Projects</h1>
      <a class="page-overline padding-bottom" href="/project"
        >See all projects &#8599;</a
      >
    </div>
    <h1 class="page-title">
      Projects I've
      <span class="gradient-accented bolded">built</span>
    </h1>
  </div>

  <div class="projects-container">
    <Swiper
      modules={[Mousewheel, Navigation]}
      spaceBetween={0}
      slidesPerView={1.05}
      navigation={true}
      mousewheel={false}
      centeredSlides={true}
      initialSlide={2}
      loop={true}
      direction={"horizontal"}
      breakpoints={{
        "568": {
          slidesPerView: 1.2,
        },
        "768": {
          slidesPerView: 1.2,
        },
      }}
    >
      {#each filteredProjects as project, index}
        <SwiperSlide>
          <!-- <div class="project"> -->
          <a
            href={project.path.replace(/\.[^/.]+$/, "")}
            target="_blank"
            class="project-link"
            ><div class="gradient-overlay" />
            <img
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
</section>

<style>
  section {
    min-height: 70vh;
  }

  .not-full-width-content {
    padding: 1px 1rem 0 1rem;
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
    width: 50vw;
    flex-shrink: 0;
    position: relative;
    transition: transform 300ms ease;
    overflow: hidden;
  }

  .projects-container {
    height: 500px;
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

  @media screen and (max-width: 768px) {
    .project-text h1 {
      /* font-size: 2rem; */
    }
  }
</style>
