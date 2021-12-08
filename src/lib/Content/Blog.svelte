<script>
  export let post;
  export let slug;
  export let anyHovered;
  export let index;

  import { scaleLinear } from "d3-scale";
  import { onMount } from "svelte";

  import { dateFormat } from "../../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";

  import { windowWidth } from "../../stores/global.js";

  /* Initialize variables which will bind to our DOM elements */
  let card,
    cardWidth,
    cardHeight,
    cardLeft,
    cardTop,
    xPos,
    yPos,
    scrollXPosition = 0,
    scrollYPosition = 0,
    readyToHover = false;

  /* Once we have our `card` element, get the leftmost position and top position
		 This will later enable the x- and y-position of our mouse relative to the card dimensions */
  $: getCardDimensions = function (card) {
    cardLeft = card ? card.getBoundingClientRect().left : 0;
    cardTop = card ? card.getBoundingClientRect().top + scrollYPosition : 0;
  };

  // On page resize, rerun get card dimensions
  $: $windowWidth, getCardDimensions(card);
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

  import TransitionInView from "$lib/TransitionInView.svelte";
</script>

<svelte:window bind:scrollX={scrollXPosition} bind:scrollY={scrollYPosition} />

<TransitionInView>
  <a
    class="perspective-container no-underline"
    style="perspective: {cardWidth}px"
    on:mouseover={() => {
      anyHovered = true;
      hovered = true;
    }}
    on:focus={() => {
      anyHovered = true;
      hovered = true;
    }}
    on:mousemove={readyToHover ? setCoords : null}
    on:mouseleave={resetCoords}
    bind:this={card}
    bind:offsetWidth={cardWidth}
    bind:offsetHeight={cardHeight}
    href={slug}
    rel="external"
    sveltekit:prefetch
  >
    <div
      style="transform: rotateY({rotationX}deg) rotateX({rotationY}deg) 
					 scale3d({scale3dVal}, {scale3dVal}, {scale3dVal});
					 box-shadow: {shadowX}px {shadowY}px 15px rgba(0, 0, 0, 0.1);"
      class="post-container no-underline {post.featured ? 'featured' : ''} 
           {anyHovered ? (hovered ? 'hovered' : 'unhovered') : ''}"
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
        <div class="post-info">
          <h2 class="post-date">{dateFormat(post.date)}</h2>
          <h1 class="post-title">{@html post.title}</h1>
          <h2 class="post-description">{@html post.description}</h2>
        </div>
        <div class="post-tags">
          {#each post.tags as tag}
            <span class="post-tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </a>
</TransitionInView>

<style>
  .post-container {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: var(--semitransparent-bg);
    padding: 20px;
    margin: 6px; /* Need this for perspective container overflow */
    overflow: hidden;
    border: 1px solid transparent;
    transition: all 100ms linear, border 300ms ease;
    cursor: pointer;
  }

  .perspective-container {
    display: block;
    height: 100%;
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

  .post-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    pointer-events: none;
  }

  .post-date {
    text-transform: uppercase;
    letter-spacing: 0.34px;
    font-size: 1rem;
    font-family: var(--font-serif);
    color: var(--off-text-color);
    font-weight: 200;
    margin-bottom: 0.75rem;
  }

  .post-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1.2;
  }

  .post-description {
    font-size: 1.2rem;
    font-family: var(--font-sans);
    font-weight: 200;
    line-height: 1.15;
  }

  .post-tags {
    margin-top: 1rem;
    text-align: right;
  }

  .post-tag {
    font-family: var(--font-sans);
    padding: 3px 8px;
    background: rgba(var(--accent-color-rgb), 0.1);
    margin: 2px;
    margin-right: 2px;
    border-radius: 3px;
    color: rgba(var(--accent-color-rgb), 1);
    font-size: 0.85rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-right: 0.25rem;
    letter-spacing: 1px;
    /* border: 0.5px solid rgba(var(--accent-color-rgb), 0.5); */
  }

  .featured-star {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }

  .hovered {
    border: 1px solid var(--accent-color);
  }

  .unhovered {
    filter: grayscale(1);
  }

  .unhovered .post-date,
  .unhovered .post-title,
  .unhovered .post-description,
  .unhovered .post-tag,
  .unhovered .featured-star {
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px var(--text-color);
  }

  .post-date,
  .post-title,
  .post-description,
  .post-tag,
  .featured-star {
    transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
  }

  @media screen and (max-width: 400px) {
    .post-date {
      font-size: 0.85rem;
    }

    .post-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .post-description {
      font-size: 1rem;
    }

    .post-tag {
      font-size: 0.75rem;
    }
  }
</style>
