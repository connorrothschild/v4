<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";
</script>

<Transition />
<main class="main">
  <BackTo
    href="/"
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
      <p>
        I live in Houston, Texas and work at Moksha Data. There, I lead our data
        visualization and storytelling team and make microsites, interactives,
        and visualizations for clients working in the social impact space.
      </p>
      <!-- <p>
          I’m originally from Springfield, Missouri. I moved to Houston to
          attend Rice University, where I majored in the quantitative social
          sciences. I taught myself the stuff on this site in my free time.
        </p>
        <p>
          I’m passionate about accessibility and disability advocacy; my mother
          is fully blind (<a
            href="https://en.wikipedia.org/wiki/Jennifer_Rothschild"
            target="_blank"
            rel="noopener noreferrer"
          >
            and really cool</a
          >). I’m also interested in public policy (in particular, housing
          policy).
        </p>
        <p>
          I enjoy <abbr title="Pac-Man main 😅">Super Smash Bros</abbr>,
          <abbr title="Current bench PR: 260lbs 😎">lifting weights</abbr>, and
          visiting
          <abbr title="Brass Tacks is the best 💯">coffee shops</abbr> in Houston.
        </p> -->
      <!-- </div>
      <div class="subsection">
        <h2 class="subsection-title">Get in touch</h2>
        <p>
          I love learning from and teaching passionate people, and hope that
          this site can be an outlet for that.
        </p> -->
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
            <li>Vue</li>
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
                href="https://www.are.na/connor-rothschild">Anything here</a
              >
            </li>
            <li>Married at First Sight</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  p {
    margin-bottom: 1.15rem;
    line-height: 1.5;
  }

  .conversation-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
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
    margin-top: 5rem;
  }

  .subsection-title {
    font-size: 2.5rem;
    font-family: var(--font-serif);
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    .conversation-container {
      flex-direction: column;
    }

    .topic-title {
      font-weight: 400;
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
  }

  abbr {
    text-decoration: none;
  }
</style>
