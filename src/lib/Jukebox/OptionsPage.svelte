<script>
  export let currentVideo;
  export let styles = "";
  export let isOpen;

  import AudioOption from "./AudioOption.svelte";

  import {
    menuExpanded,
    windowHeight,
    windowWidth,
  } from "../../stores/global.js";

  import Transition from "../Transition.svelte";

  let anyHovered,
    hovered = null,
    expanded = false,
    closedViaX = false,
    mounted = false;

  $: expanded, menuExpanded.set(expanded);

  import { fly, fade } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  //   import { onMount } from "svelte";
  //   onMount(() => {
  //     mounted = true;
  //   });

  // Transition params (responsive)
  $: inParams = {
    duration: 1000,
    opacity: 1,
    y: $windowWidth > 768 ? -$windowHeight : 0,
    x: $windowWidth > 768 ? 0 : $windowWidth,
    easing: expoInOut,
  };
  $: outParams = {
    duration: closedViaX ? 400 : 800,
    opacity: closedViaX ? 1 : 0,
    y: closedViaX ? ($windowWidth > 768 ? -$windowHeight : 0) : 0,
    x: $windowWidth > 768 ? 0 : -$windowWidth,
    delay: closedViaX ? 0 : 200,
    easing: expoInOut,
  };

  import { page } from "$app/stores";
  import { isTouchscreen } from "../../stores/device.js";

  let options = [
    {
      title: "Always",
      artist: "Babygirl",
      id: "babygirl",
    },
    {
      title: "Danielle",
      artist: "Fred again..",
      id: "gVBcX1Sd228",
    },
    {
      title: "Victim",
      artist: "Drain Gang",
      id: "HDajKZ3ytdY",
    },
    {
      title: "Peroxide",
      artist: "Ecco2k",
      id: "Rs_kavGKeHI",
    },
    {
      title: "That I Miss You",
      artist: "Vansire",
      id: "CG-Qco4zs_s",
    },
    {
      title: "Bad Habit",
      artist: "Steve Lacy",
      id: "VF-FGf_ZZiI",
    },
    {
      title: "Jackie",
      artist: "Yves Tumor",
      id: "bQpaWvPFx8A",
    },
    {
      title: "Freelance",
      artist: "Toro y Moi",
      id: "Jm6hDWBZXc4",
    },
  ];

  let youTubePlayer,
    throttle = true,
    isInitialLoad = true,
    isPreview = true,
    isFirst = true,
    loadedTime;

  import { onMount } from "svelte";

  const createPlayer = () => {
    youTubePlayer = new YT.Player("player", {
      playerVars: {
        controls: 0,
        modestbranding: 1,
        playsinline: 1,
        disablekb: 1,
        iv_load_policy: 3,
      },
      events: {
        onReady: onReady,
        onStateChange: onStateChange,
        onError: onError,
      },
    });
  };

  const createYouTubeAPI = () => {
    window.onYouTubePlayerAPIReady = () => {
      createPlayer();
    };
  };

  let playerIsReady = false
  const onReady = () => {
    playerIsReady = true;
  };

  const updateId = (id) => {
    youTubePlayer.loadVideoById({ videoId: id });
  };

  // When user changes selected video, update the player
  $: currentVideo && youTubePlayer && currentVideo
    ? updateId(currentVideo)
    : null;

  let paused;
  const playOrPause = (paused) => {
    if (!youTubePlayer) return;
    if (paused) {
      youTubePlayer.pauseVideo();
    } else {
      youTubePlayer.playVideo();
    }
  };

  $: paused, playOrPause(paused);

  const onStateChange = (event) => {
    if (event.data === 0) {
      if (throttle) {
        if (isPreview) {
          loadedTime = new Date();
          youTubePlayer.seekTo(0);
        }

        throttle = false;

        setTimeout(function () {
          throttle = true;
        }, 100);
      }
    }

    if (event.data === 1 && isInitialLoad) {
      loadedTime = new Date();
      isInitialLoad = false;
    }

    if (event.data === 1) {
      updateProgress();
    }
  };

  const onError = () => {};

  let progress;

  const updateProgress = () => {
    if (youTubePlayer.getPlayerState() === 1) {
      const currentTime = youTubePlayer.getCurrentTime();
      const duration = youTubePlayer.getDuration();
      const percentage = currentTime / duration;
      progress = percentage;

      setTimeout(updateProgress, 100);
    }
  };

  onMount(() => {
    createYouTubeAPI();
  });
</script>

<svelte:head>
  <script
    type="text/javascript"
    id="www-widgetapi-script"
    src="https://www.youtube.com/s/player/21149d65/www-widgetapi.vflset/www-widgetapi.js"
    async=""
  ></script>
  <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<Transition split={"chars"} stagger={0.05} startingOpacity={0} />

<div
  class="fullpage-nav {isOpen ? '' : 'hidden'}"
  in:fly={inParams}
  out:fly={outParams}
  style={styles}
>
  <div class="video" class:playing={playerIsReady && currentVideo && !paused}>
    <div id="player" />
  </div>

  {#if !$isTouchscreen}
    {#key hovered}
      <h1
        in:fade={{ delay: 100, duration: 300 }}
        out:fade={{ duration: 300 }}
        class="massive-word"
      >
        {hovered != null ? `by ${hovered}` : ""}
      </h1>
    {/key}
  {/if}
  <ul
    class="nav-items"
    on:mouseleave={() => {
      hovered = null;
      anyHovered = false;
    }}
  >
    {#each options as option, index}
      <AudioOption
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        bind:currentVideo
        bind:paused
        id={option.id}
        title={option.title}
        artist={option.artist}
        index={index + 1}
      />
    {/each}
  </ul>

  <span style="width: {progress * 100}%" />
</div>

<style>
  .massive-word {
    position: absolute;
    font-size: 9vw;
    right: 1vw;
    bottom: 0;
    opacity: 0.15;
    user-select: none;
    pointer-events: none;
  }

  /* FULLPAGE NAV */
  .fullpage-nav {
    position: fixed;
    z-index: 101;
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    justify-content: center;
    padding-left: 2.5vw;
    background: var(--primary-color);
    margin: 0 auto;
    width: 100vw;
    height: 100%;
    transition: opacity 500ms ease-in-out;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .fullpage-nav {
      padding-left: 0;
    }

    .massive-word {
      font-size: 13vw;
    }
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  #player {
    pointer-events: none;
    position: absolute;
    /* left: -9999px;
    right: -9999px;
    top: -9999px;
    bottom: -9999px; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    height: calc(100% + 340px);
    width: 177.77777778vh;
    min-width: 100%;
    min-height: 56.25vw;
    opacity: 0.3;
    transition: opacity 1s linear, filter 0.5s linear, transform 0.5s linear;
    transition-delay: 0.5s;
  }

  .video {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    /* background-color: #000; */
    transition: opacity 0.5s linear;
}

.video:not(.playing) {
    opacity: 0;
}

.video.playing {
    opacity: 1;
}

  :global(#movie_player > div.html5-video-container > video) {
    width: 100% !important;
  }

  span {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(var(--primary-color-rgb), 0.8);
    backdrop-filter: blur(5px);
    width: 0;
    transition: width 0.3s;
    z-index: 1;
    border-right: 4px solid rgba(var(--accent-color-rgb), 0.8);
    pointer-events: none;
  }
</style>
