<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";
  import Seo from "$lib/Seo.svelte";

  let showMore = false;

  import { slide } from "svelte/transition";
  import { base } from "$app/paths";
</script>

<Transition />
<Seo title={`About | Connor Rothschild`} />
<main class="main">
  <BackTo
    href={base}
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1
    class="page-title transition-title overflow-hidden"
    style="border-bottom: none; margin-bottom: 1rem; padding-bottom: 0;"
  >
    Connor Rothschild
  </h1>
  <h2
    class="content-description transition-subtitle centered overflow-hidden"
    style="padding-bottom: 2.5rem; margin-bottom: 4rem;"
  >
    is a data scientist, web developer, and designer in Houston, TX.
  </h2>
  <div class="transition-content main-content">
    <!-- <div class="subsection"> -->
    <!-- <h2 class="subsection-title">A brief bio</h2> -->
    <div>
      <p class="larger">
        I live in Houston, Texas and help run <a
          href="https://mokshadata.studio"
          target="_blank"
          rel="noopener noreferrer">Moksha Data Studio.</a
        > We build microsites, interactives, and visualizations for clients working
        in the social impact space.
      </p>
      <p>
        I also have experience working with data in newsrooms (at Axios) and the
        federal government (at USSOCOM). A more comprehensive overview of my
        work experience can be found
        <a
          href="https://read.cv/connorr"
          target="_blank"
          rel="noopener noreferrer">here.</a
        >
      </p>
      <p>
        Please reach out (via <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/follow?screen_name=CL_Rothschild"
          >Twitter</a
        >
        or
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:connor@connorrothschild.com">email</a
        >) if you’re interested in working together, or just want to chat. Need
        a conversation starter? 👇
      </p>
      <!-- </div> -->

      <div class="conversation-container">
        <div class="topic">
          <h1 class="topic-title">Things I’m good at</h1>
          <ul>
            <li>R</li>
            <li>SVG</li>
            <li>D3.js</li>
            <li>Svelte</li>
          </ul>
        </div>
        <div class="topic">
          <h1 class="topic-title">Things I’m learning</h1>
          <ul>
            <li>Three.js</li>
            <li>Canvas</li>
            <li>Figma</li>
            <li>Web3</li>
          </ul>
        </div>
        <div class="topic">
          <h1 class="topic-title">Ways I can help</h1>
          <ul>
            <li>Starting your first personal website</li>
            <li>Technical book recommendations</li>
            <li>Feedback on dataviz</li>
            <li>Early career advice</li>
          </ul>
        </div>
        <div class="topic">
          <h1 class="topic-title">Miscellaneous</h1>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/user/12127359561?si=d02b4e64af7f420d"
                >Music</a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fontshare.com/">Typography</a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.are.na/connor/">Anything here</a
              >
            </li>
            <li>Reality TV</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="subsection">
      <h2
        class="subsection-title"
        style="cursor: pointer;"
        on:click={() => {
          showMore = !showMore;
        }}
      >
        (More Personal Stuff{showMore ? "!" : "?"})
      </h2>
      {#if showMore}
        <div transition:slide>
          <p>
            I’m originally from Springfield, Missouri. I moved to Houston to
            attend Rice University, where I majored in the quantitative social
            sciences. I taught myself the stuff on this site in my free time.
          </p>
          <p>
            I’m passionate about accessibility and disability advocacy; my
            mother is fully blind (<a
              href="https://en.wikipedia.org/wiki/Jennifer_Rothschild"
              target="_blank"
              rel="noopener noreferrer"
            >
              and really cool</a
            >). I’m also interested in public policy (in particular, housing
            policy).
          </p>
          <p>
            I enjoy Super Smash Bros, lifting weights, and visiting coffee shops
            in Houston. My favorite movie is <a
              href="https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind"
              target="_blank"
              rel="noopener noreferrer">Eternal Sunshine of the Spotless Mind</a
            >
            and my favorite artist is
            <a
              href="https://www.youtube.com/watch?v=Rs_kavGKeHI"
              target="_blank"
              rel="noopener noreferrer">Ecco2K</a
            >.
          </p>
          <p>
            This personal site took <span style="text-decoration: line-through;"
              >like 100 hours</span
            > far too long to make. I hope you liked it &lt;3.
          </p>
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  p {
    margin-bottom: 1.15rem;
    line-height: 1.25;
  }

  .conversation-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(var(--accent-color-rgb), 0.2);
  }

  .topic {
    flex: 1 1 calc(50% - 1rem);
    padding: 1rem 0;
    text-align: left;
    margin: 1rem 1rem 0 0;
    border-radius: 0.2rem;
  }

  .topic:nth-child(even) {
    text-align: right;
  }

  .topic-title {
    margin-bottom: 1rem;
    font-size: 1.15rem;
    font-family: var(--font-sans);
    text-transform: uppercase;
    font-weight: 700;
  }

  li {
    list-style: none;
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 0;
    padding-left: 0;
    margin-left: 0;
  }

  .subsection {
    margin-top: 2.5rem;
  }

  .subsection-title {
    font-size: 2.5rem;
    font-family: var(--font-serif);
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
  }

  .larger {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 2rem;
    letter-spacing: -0.01rem;
    color: var(--text-color);
  }

  @media screen and (max-width: 768px) {
    .conversation-container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 568px) {
    .topic {
      max-width: 100%;
      margin: 0.5rem 0;
    }

    li {
      width: auto;
    }

    .larger {
      font-size: 1.25rem;
    }
  }
</style>
