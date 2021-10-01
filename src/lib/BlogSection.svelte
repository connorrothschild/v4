<script>
  export let post;
  export let slug;

  import { scaleLinear } from "d3-scale";

  let hovered = false;
  let card;

  $: cardLeft = card ? card.getBoundingClientRect().left : 0;
  $: cardTop = card ? card.getBoundingClientRect().top : 0;

  let cardWidth, cardHeight, xPos, yPos;

  $: xScale = scaleLinear().domain([0, cardWidth]).range([-4, 4]);
  $: yScale = scaleLinear().domain([cardHeight, 0]).range([-4, 4]);

  const setCoords = function (event) {
    xPos = event.clientX - cardLeft;
    yPos = event.clientY - cardTop;
  };

  const resetCoords = function () {
    rotationX = 0;
    rotationY = 0;
  };

  $: rotationX = xScale(xPos);
  $: rotationY = yScale(yPos);

  // HIGHLIGHTED CIRCLE
  $: circleXScale = scaleLinear().domain([0, cardWidth]).range([-50, 50]);
  $: circleYScale = scaleLinear().domain([cardHeight, 0]).range([-50, 50]);

  $: circleXPosition = -circleXScale(xPos);
  $: circleYPosition = circleYScale(yPos);
</script>

<div class="perspective-container" style="perspective: {cardWidth}px">
  <div
    class="card-highlight"
    style="left: {circleXPosition}%; top: {circleYPosition}%"
  />
  <a
    bind:this={card}
    bind:clientWidth={cardWidth}
    bind:clientHeight={cardHeight}
    on:mousemove={setCoords}
    on:mouseout={resetCoords}
    style="transform: rotateY({rotationX}deg) rotateX({rotationY}deg)"
    sveltekit:prefetch
    href={slug}
    class="post-container {hovered ? 'hovered' : ''} no-underline"
    on:mouseover={() => {
      hovered = true;
    }}
    on:mouseout={() => {
      hovered = false;
    }}
  >
    <div class="post-card">
      <h1 class="post-title">{post.title}</h1>
      <p class="post-description">{post.description}</p>
    </div>
  </a>
</div>

<style>
  .post-container {
    border-radius: 10px;
    background: white;
    padding: 30px 20px;
    box-shadow: 2px 2px 6px #cecece;
    transition: all 500ms ease;
  }

  .hovered {
    /* transform: translateY(-5px); */
    box-shadow: 1px 1px 1px #cecece80;
  }

  .perspective-container {
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .card-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
    /* transform: translate(
      50%,
      10%
    ); */
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.03);
    filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  .post-card {
    display: flex;
    flex-direction: column;
    place-content: space-around;
    height: 100%;
    pointer-events: none;
  }

  .post-title {
    font-size: 1.5rem;
    line-height: 1.1;
    margin-bottom: 0.75rem;
  }

  .post-description {
    font-size: 1.1rem;
    line-height: 1.25;
  }
</style>
