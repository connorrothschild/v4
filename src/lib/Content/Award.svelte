<script>
  export let award;
  export let slug;
  export let anyHovered;
  export let index;

  import { scaleLinear } from "d3-scale";
  import { onMount } from "svelte";

  import { dateFormat } from "../../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";

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

    anyHovered = false;
    hovered = false;
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

  let hovered = false;

  // Prevent double clicking messing up routing
  import { goto, prefetch } from "$app/navigation";

  let linkClicked = false;
  function navigate(slug) {
    if (linkClicked) return;
    linkClicked = true;
    setTimeout(() => {
      linkClicked = false;
    }, 500);

    goto(slug);
  }
</script>

<svelte:window
  bind:scrollY={scrollYPosition}
  bind:scrollX={scrollXPosition}
  bind:innerWidth={pageWidth}
/>
<div
  class="perspective-container"
  style="perspective: {cardWidth}px"
  on:mouseover={() => {
    anyHovered = true;
    hovered = true;
    prefetch(slug);
  }}
  on:focus={() => {
    prefetch(slug);
  }}
  on:mousemove={readyToHover ? setCoords : null}
  on:mouseleave={resetCoords}
  bind:this={card}
  bind:offsetWidth={cardWidth}
  bind:offsetHeight={cardHeight}
>
  <div
    style="transform: rotateY({rotationX}deg) rotateX({rotationY}deg) 
					 scale3d({scale3dVal}, {scale3dVal}, {scale3dVal});
					 box-shadow: {shadowX}px {shadowY}px 15px rgba(0, 0, 0, 0.1);"
    class="award-container no-underline {award.featured ? 'featured' : ''} 
           {anyHovered ? (hovered ? 'hovered' : 'unhovered') : ''}"
    on:click={navigate(slug)}
  >
    {#if award.featured}
      <div class="featured-star">
        <Star
          width="20"
          height="20"
          fill="var(--accent-color)"
          stroke="none"
          {hovered}
          {index}
        />
      </div>
    {/if}
    <div
      class="card-highlight"
      style="left: {circleXPosition}%; top: {circleYPosition}%"
    />
    <div class="award-card">
      <div>
        <h1 class="award-title">{award.award}</h1>
        <h1 class="award-place">{award.place}</h1>
      </div>
      <div class="award-description-container">
        <!-- <p class="award-description">{dateFormat(award.date)}</p> -->
        <!-- <div class="award-tags"> -->
        <p class="award-tag full-width">{dateFormat(award.date)}</p>
        <p class="award-tag">
          {award.organization}
        </p>
        <!-- </div> -->
      </div>
    </div>
  </div>
</div>

<style>
  .award-container {
    width: 100%;
    border-radius: 10px;
    background: var(--semitransparent-bg);
    padding: 20px;
    margin: 6px; /* Need this for perspective container overflow */
    overflow: hidden;
    border: 1px solid var(--secondary-color);
    transition: all 100ms linear, border 300ms ease;
    cursor: pointer;
  }

  .perspective-container {
    display: flex;
    position: relative;
    margin: -4px; /* Undoes some of the margin above while still allowing for hover events */
  }

  .card-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.01);
    /* background: rgba(var(--accent-color-rgb), 0.025); */
    filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  .award-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    pointer-events: none;
  }

  .award-title {
    font-size: 1.8rem;
    line-height: 1.2;
    padding-bottom: 0.5rem;
    /* max-width: 17ch; */
  }

  .award-place {
    font-size: 1.3rem;
    line-height: 1.1;
    padding-bottom: 1rem;
    color: var(--off-text-color);
    font-weight: 300;
    /* max-width: 17ch; */
  }

  .award-description-container {
    display: flex;
    justify-content: space-between;
  }
  /* 
  .award-tags {
    flex: 4;
    display: flex;
    justify-content: flex-end;
  } */

  .award-tag {
    font-size: 1.1rem;
    line-height: 1.25;
    text-transform: uppercase;
    font-family: var(--font-sans);
    color: var(--off-text-color);
    font-weight: 200;
    letter-spacing: 0.64px;
    text-align: center;
    display: inline-block;
    place-items: center;
    display: flex;
  }

  .full-width {
    flex-shrink: 0;
  }

  .award-tag {
    padding: 2px 5px;
    background: rgba(var(--accent-color-rgb), 0.1);
    margin: 2px;
    border-radius: 3px;
    color: rgba(var(--accent-color-rgb), 1);
    font-size: 0.85rem;
    font-weight: 100;
  }

  .hovered {
    border: 1px solid var(--accent-color);
  }

  .featured-star {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }

  .unhovered {
    filter: grayscale(1);
  }

  /* TABLET BREAKPOINT */
  @media screen and (max-width: 768px) {
    .award-container {
      padding: 20px;
    }

    .award-title {
      font-size: 1.5rem;
      max-width: 100%;
    }

    .award-place {
      font-size: 1.1rem;
    }
  }

  /* MOBILE */
  @media screen and (max-width: 420px) {
    .award-container {
      padding: 15px;
      margin: 5px 3px;
    }

    .award-title {
      font-size: 1.2rem;
      width: 85%;
    }

    .award-place {
      font-size: 1rem;
    }
  }
</style>
