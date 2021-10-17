<script>
  export let post;
  export let slug;
  export let anyHovered;
  export let index;

  import { scaleLinear } from "d3-scale";
  import { onMount } from "svelte";

  import { dateFormat } from "../scripts/utils.js";
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
  }}
  on:focus={null}
  on:mousemove={readyToHover ? setCoords : null}
  on:mouseleave={resetCoords}
  bind:this={card}
  bind:offsetWidth={cardWidth}
  bind:offsetHeight={cardHeight}
>
  <a
    style="transform: rotateY({rotationX}deg) rotateX({rotationY}deg) 
					 scale3d({scale3dVal}, {scale3dVal}, {scale3dVal});
					 box-shadow: {shadowX}px {shadowY}px 15px rgba(0, 0, 0, 0.1);"
    class="post-container no-underline {post.featured ? 'featured' : ''} 
           {anyHovered ? (hovered ? 'hovered' : 'unhovered') : ''}"
    sveltekit:prefetch
    href={slug}
  >
    {#if post.featured}
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
    <div class="post-card">
      <h1 class="post-title">{post.title}</h1>
      <div class="post-description-container">
        <p class="post-description">{dateFormat(post.date)}</p>
        <div class="post-tags-container">
          {#each post.tags as tag}
            <span class="post-tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </a>
</div>

<style>
  .post-container {
    width: 100%;
    border-radius: 10px;
    background: white;
    padding: 30px;
    margin: 12px; /* Need this for perspective container overflow */
    overflow: hidden;
    border: 1px solid white;
    transition: all 100ms linear, border 300ms ease;
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
    filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  .post-card {
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 100%;
    pointer-events: none;
  }

  .post-title {
    font-size: 1.8rem;
    line-height: 1.2;
    padding-bottom: 1rem;
    max-width: 17ch;
  }

  .post-description-container {
    display: flex;
    justify-content: space-between;
  }

  .post-description,
  .post-tag {
    font-size: 1.1rem;
    line-height: 1.25;
    text-transform: uppercase;
    font-family: var(--font-serif);
    color: #494949;
    font-weight: 200;
  }

  .post-description,
  .post-tags-container {
    display: inline-block;
  }

  .post-tag {
    padding: 2px 6px;
    background: rgba(var(--accent-color-rgb), 0.1);
    margin: 1px 3px;
    border-radius: 3px;
    color: rgba(var(--accent-color-rgb), 1);
    font-size: 0.9rem;
    font-weight: 100;
    letter-spacing: 0.64px;
    float: right;
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
    filter: grayscale(1) brightness(0.975);
  }

  /* TABLET BREAKPOINT */
  @media screen and (max-width: 768px) {
    .post-title {
      font-size: 1.5rem;
      max-width: 100%;
    }
  }

  /* MOBILE BREAKPOINT */
  @media screen and (max-width: 460px) {
    .post-title {
      font-size: 1.2rem;
    }

    .post-description {
      font-size: 0.8rem;
    }

    .post-tag {
      font-size: 0.7rem;
    }
  }
</style>
