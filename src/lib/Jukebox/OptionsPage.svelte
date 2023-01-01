<script>
  export let currentVideo;
  export let currentVideoTitle;
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
    closedViaX = false;

  $: expanded, menuExpanded.set(expanded);

  import { fly, fade } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

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

  let options = [
    {
      title: "The Kiss of Venus",
      artist: "Dominic Fike",
      id: "L2IJzVAOvaU",
    },
    {
      title: "Dreams Tonite",
      artist: "Alvvays",
      id: "ZXu6q-6JKjA",
    },
    {
      title: "That I Miss You",
      artist: "Vansire",
      id: "CG-Qco4zs_s",
    },
    {
      title: "Show Me How",
      artist: "Men I Trust",
      id: "OZRYzH0Q0pU",
    },
    {
      title: "WUSYANAME",
      artist: "Tyler, The Creator",
      id: "NJea386275c",
    },
    {
      title: "Freelance",
      artist: "Toro y Moi",
      id: "Jm6hDWBZXc4",
    },
    {
      title: "グッドバイ",
      artist: "toe",
      id: "e1pZIfretEs",
    },
    {
      title: "Bad Habit",
      artist: "Steve Lacy",
      id: "VF-FGf_ZZiI",
    },
    {
      title: "Peroxide",
      artist: "Ecco2k",
      id: "Rs_kavGKeHI",
    },
    {
      title: "Danielle",
      artist: "Fred again..",
      id: "gVBcX1Sd228",
    },
    {
      title: "Always",
      artist: "Babygirl",
      id: "xzksOwHDkUQ",
    },
    {
      title: "Victim",
      artist: "Drain Gang",
      id: "HDajKZ3ytdY",
    },
    {
      title: "Kyoto",
      artist: "Phoebe Bridgers",
      id: "Tw0zYd0eIlk",
    },
    {
      title: "Jackie",
      artist: "Yves Tumor",
      id: "bQpaWvPFx8A",
    },
    {
      title: "Bags",
      artist: "Clairo",
      id: "Da3FBTjOwVM",
    },
  ];

  $: currentVideoTitle = currentVideo ? options.find((video) => video.id === currentVideo).title : null;

  let youTubePlayer;
    // throttle = true,
    // isInitialLoad = true,
    // isPreview = true,
    // loadedTime;

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

  let playerIsReady = false;
  const onReady = () => {
    playerIsReady = true;
  };

  const updateId = (id) => {
    youTubePlayer.loadVideoById({ videoId: id });
  };

  // When user changes selected video, update the player
  $: currentVideo && youTubePlayer
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
    // event.data === 1 means video is playing
    // event.data === 0 means video has ended
    // event.data === 2 means video is paused
    // event.data === 3 means video is buffering
    // event.data === -1 means video errored
    console.log(event.data);
    if (event.data === 0) {
    //   if (throttle) {
    //     if (isPreview) {
    //       loadedTime = new Date();
    //       youTubePlayer.seekTo(0);
    //     }

    //     throttle = false;

    //     setTimeout(function () {
    //       throttle = true;
    //     }, 100);
    //   }
      // Go to next video
      const thisVideo = options.find((video) => video.id === currentVideo);
      const thisVideoIndex = options.indexOf(thisVideo);
      const nextVideo = options[thisVideoIndex]; // + 1 here would skip two, not sure why
      if (nextVideo) {
        currentVideo = nextVideo.id;
      } else {
        currentVideo = options[0].id;
      }
    }

    // if (event.data === 1 && isInitialLoad) {
    //   loadedTime = new Date();
    //   isInitialLoad = false;
    // }

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
  class="fullpage {isOpen ? '' : 'hidden'}"
  in:fly={inParams}
  out:fly={outParams}
  style={styles}
>
  <div class="video" class:playing={playerIsReady && currentVideo && !paused}>
    <div id="player" />
  </div>
  <ul
    class="nav-items"
    on:mouseleave={() => {
      hovered = null;
      anyHovered = false;
    }}
  >
    {#each options as option}
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
      />
    {/each}
  </ul>

  {#if progress}
    <span style="width: {progress * 100}%" />
  {/if}
</div>

<style>
  /* FULLPAGE NAV */
  .fullpage {
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

    height: 100vh;
    overflow-y: auto;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    padding: 10vh 0;
    /* height: 100vh;
    overflow-y: auto; */
  }

  @media screen and (max-width: 768px) {
    .fullpage {
      padding-left: 0;
    }
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  #player {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    height: calc(100% + 340px);
    width: 177.77777778vh;
    min-width: 100%;
    min-height: 56.25vw;
  }

  .video {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    pointer-events: none;
    background-color: #000;
    transition: opacity 0.5s linear;
  }

  .video:not(.playing) {
    opacity: 0;
  }

  .video.playing {
    opacity: 0.5;
  }

  :global(#movie_player > div.html5-video-container > video) {
    width: 100% !important;
  }

  span {
    display: block;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(var(--primary-color-rgb), 0.5);
    backdrop-filter: blur(3px);
    width: 0;
    transition: width 0.3s;
    z-index: 3;
    border-right: 5px solid var(--primary-color);
    pointer-events: none;
  }
</style>
