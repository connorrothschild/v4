<script>
  export let post;
  export let slug;

  import { scaleLinear } from "d3-scale";
  import { onMount } from "svelte";

  /* Initialize variables which will bind to our DOM elements */
  let card,
    cardWidth,
    cardHeight,
    cardLeft,
    cardTop,
    xPos,
    yPos,
    scrollXPosition,
    scrollYPosition,
    pageWidth,
    readyToHover = false;

  /* Once we have our `card` element, get the leftmost position and top position
		 This will later enable the x- and y-position of our mouse relative to the card dimensions */
  $: getCardDimensions = function (card) {
    console.log({ scrollYPosition, pageWidth });
    cardLeft = card ? card.getBoundingClientRect().left : 0;
    cardTop = card ? card.getBoundingClientRect().top + scrollYPosition : 0;
  };

  // On page resize, rerun get card dimensions
  $: pageWidth, getCardDimensions(card);
  $: scrollYPosition, getCardDimensions(card);

  /* ! IMPORTANT !
    Wait for some time (at least duration of page transition) to get bounding client rect 
    There is currently a conflict with reading getBoudingClientRect().top when page transitions 
  */
  onMount(() => {
    setTimeout(() => {
      getCardDimensions(card);
      readyToHover = true;
    }, 1000);
  });

  /* Called on hover, this sets our x- and y-position to equal the cursor position *within* the card */
  const setCoords = function (event) {
    xPos = event.clientX - cardLeft;
    yPos = event.pageY - cardTop;
  };

  /* Resets */
  const resetCoords = function () {
    xPos = null;
    yPos = null;
  };

  /* Rotation amount */
  $: xScale = scaleLinear().domain([0, cardWidth]).range([-4, 4]);
  $: yScale = scaleLinear().domain([cardHeight, 0]).range([-4, 4]);

  $: rotationX = xPos ? xScale(xPos) : 0;
  $: rotationY = yPos ? yScale(yPos) : 0;

  /* Highlighted circle */
  $: circleXScale = scaleLinear().domain([0, cardWidth]).range([-50, 50]);
  $: circleYScale = scaleLinear().domain([0, cardHeight]).range([-50, 50]);

  $: circleXPosition = xPos ? circleXScale(xPos) : 0;
  $: circleYPosition = yPos ? circleYScale(yPos) : 0;

  /* Box shadow */
  $: shadowX = xPos ? circleXScale(xPos) / 5 : 0;
  $: shadowY = yPos ? circleYScale(yPos) / 5 : 0;

  /* 3d scaling */
  $: scale3dVal = xPos && yPos ? 1.02 : 1;
</script>

<svelte:window
  bind:scrollY={scrollYPosition}
  bind:scrollX={scrollXPosition}
  bind:innerWidth={pageWidth}
/>
<div
  class="perspective-container"
  style="perspective: {cardWidth}px"
  on:mousemove={readyToHover ? setCoords : null}
  on:focus={null}
  on:mouseout={resetCoords}
  on:blur={resetCoords}
  bind:this={card}
  bind:offsetWidth={cardWidth}
  bind:offsetHeight={cardHeight}
>
  <a
    style="transform: rotateY({rotationX}deg) rotateX({rotationY}deg) 
					 scale3d({scale3dVal}, {scale3dVal}, {scale3dVal});
					 box-shadow: {shadowX}px {shadowY}px 15px rgba(0, 0, 0, 0.1);"
    class="post-container no-underline"
    sveltekit:prefetch
    href={slug}
  >
    <div
      class="card-highlight"
      style="left: {circleXPosition}%; top: {circleYPosition}%"
    />
    <div class="post-card">
      <h1 class="post-title">{post.title}</h1>
      <p class="post-description">{post.description}</p>
    </div>
  </a>
</div>

<style>
  .post-container {
    width: 100%;
    border-radius: 10px;
    background: white;
    padding: 30px 25px;
    margin: 12px;
    overflow: hidden;
    transition: all 100ms linear;
  }

  .perspective-container {
    display: flex;
    position: relative;
  }

  .card-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.01);
    filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  .post-card {
    display: flex;
    flex-direction: column;
    place-content: center; /* space-around; */
    height: 100%;
    pointer-events: none;
  }

  .post-title {
    font-size: 1.5rem;
    line-height: 1.1;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid var(--secondary-color);
    transition: border-bottom 300ms ease;
  }

  .post-description {
    font-size: 1.1rem;
    line-height: 1.25;
  }

  .post-container:hover .post-card .post-title {
    border-bottom: 1px solid var(--accent-color);
  }
</style>
