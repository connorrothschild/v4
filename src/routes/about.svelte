<script>
  import { slide } from "svelte/transition";
  import Transition from "../lib/Transition.svelte";
  let showMore = false;
</script>

<Transition />
<main>
  <h1 class="page-title transition-title overflow-hidden">About me</h1>

  <p>
    Hi! I'm Connor. <span class="else" class:showMore
      >I'll spare you the personal details about my life, unless</span
    >
    <span
      class="interested"
      on:click={() => {
        showMore = !showMore;
      }}
      >{showMore ? "You're" : "you're"} really interested{showMore
        ? "!"
        : "."}</span
    >
  </p>

  {#if showMore}
    <div class="more" transition:slide>
      <p>
        I live in Houston, Texas and work at Moksha Data. There, I lead our data
        visualization and storytelling team and make microsites, interactives,
        and visualizations for clients working in the social impact space.
      </p>
      <p>
        I'm originally from Springfield, Missouri. I moved to Houston to attend
        Rice University, where I majored in the quantitative social sciences. I
        taught myself the stuff on this site in my free time.
      </p>
      <p>
        I'm passionate about accessibility and disability advocacy; my mother is
        fully blind (<a
          href="https://en.wikipedia.org/wiki/Jennifer_Rothschild"
          target="_blank"
          rel="noopener noreferrer"
        >
          and really cool</a
        >).
      </p>
      <p>
        I enjoy meeting new people, lifting weights, and visiting coffee shops
        in Houston.
      </p>
    </div>
  {/if}
  <div class="else" class:showMore>
    <p>
      <!-- I'll spare you the details of my current whereabouts, skills, etc. -->
      Let me use your brief time on my website to say: I love learning from and teaching
      passionate people, and hope that this site can be an outlet for that.
    </p>

    <p>
      <span
        class="abbr"
        desc="I know everyone says “please reach out” on their website, but I actually want you to 🙂"
        >Please reach out</span
      > if you're interested in talking about design, business strategy, data visualization,
      or anything else you think I would be interested in. Need a conversation starter?
      👇
    </p>

    <div class="conversation-container">
      <div class="topic">
        <h1 class="topic-title">Things I'm good at</h1>
        <ul>
          <li>R</li>
          <li>Vue</li>
          <li>D3.js</li>
          <li>Svelte</li>
        </ul>
      </div>
      <div class="topic">
        <h1 class="topic-title">Things I'm learning</h1>
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
          <li>Early career advice (journalism, government)</li>
          <li>Starting your first personal website</li>
          <li>Technical book recommendations</li>
          <li>Feedback on dataviz</li>
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
</main>

<style>
  main {
    max-width: 868px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 4rem;
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

  .topic:nth-of-type(even) {
    text-align: right;
  }

  .abbr {
    position: relative;
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.5);
    cursor: help;
  }

  .abbr::after {
    position: absolute;
    bottom: 100%;
    left: 0;
    display: block;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    background: var(--pure-text-color);
    color: var(--pure-background-color);
    content: attr(desc);
    width: 320px;
    line-height: 1.25;
    font-size: 1.1rem;
    font-weight: 200;
    letter-spacing: -0.025rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
    box-shadow: 1px 1px 5px var(--box-shadow-color);
  }

  .abbr:hover::after {
    opacity: 1;
  }

  @media screen and (max-width: 375px) {
    .abbr::after {
      width: 260px;
    }
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
