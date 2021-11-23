<script>
  import { slide } from "svelte/transition";

  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  let showMore = false;
</script>

<Transition />
<main>
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-subtitle centered"
  />
  <h1
    class="page-title transition-title overflow-hidden"
    style="border-bottom: none; margin-bottom: 1rem;"
  >
    Connor Rothschild
  </h1>
  <h2
    class="content-description transition-subtitle centered"
    style="padding-bottom: 2.5rem; margin-bottom: 4rem;"
  >
    is a data scientist, web developer, and designer in Houston, TX.
  </h2>
  <div class="transition-content main-content">
    <div>
      <p>
        I live in Houston, Texas and work at Moksha Data. There, I lead our data
        visualization and storytelling team and make microsites, interactives,
        and visualizations for clients working in the social impact space.
      </p>
      <p>
        I’m originally from Springfield, Missouri. I moved to Houston to attend
        Rice University, where I majored in the quantitative social sciences. I
        taught myself the stuff on this site in my free time.
      </p>
      <p>
        I’m passionate about accessibility and disability advocacy; my mother is
        fully blind (<a
          href="https://en.wikipedia.org/wiki/Jennifer_Rothschild"
          target="_blank"
          rel="noopener noreferrer"
        >
          and really cool</a
        >). I’m also interested in public policy (in particular, housing
        policy).
      </p>
      <p>
        I enjoy meeting new people, lifting weights, and visiting coffee shops
        in Houston.
      </p>
      <div class="else" class:showMore>
        <div class="subsection">
          <h2 class="subsection-title">Get in touch</h2>
          <p>
            I love learning from and teaching passionate people, and hope that
            this site can be an outlet for that.
          </p>
          <p>
            Please reach out if you’re interested in talking about design,
            business strategy, data visualization, or anything else you think I
            would be interested in. Need a conversation starter? 👇
          </p>
        </div>

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
                  href="https://www.are.na/connor-rothschild">Anything here</a
                >
              </li>
              <li>Married at First Sight</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    max-width: 868px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 4rem;
    margin-top: var(--nav-height);
  }

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
    background: var(--semitransparent-bg);
    box-shadow: 1px 1px 6px var(--box-shadow-color);
    margin: 1rem 1rem 0 0;
    padding: 1rem;
    border-radius: 0.2rem;
    text-align: center;
  }

  .topic-title {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 300;
    letter-spacing: 0.025rem;
  }

  li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
    /* border-bottom: 1px solid rgba(var(--accent-color-rgb), 0.2); */
    /* padding: 0.25rem 0.5rem; */
    width: max-content;
    margin: auto;
  }

  .more {
    border-left: 5px solid var(--accent-color);
    padding-left: 1rem;
  }

  .more p {
    line-height: 1.35;
  }

  .else {
    transition: opacity 300ms ease;
  }

  .else.showMore {
    opacity: 0.2;
  }

  .interested {
    cursor: pointer;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 2px;
    user-select: none;
  }

  /* .topic:nth-of-type(even) {
    text-align: right;
  } */

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
</style>
