<div class="noise" />

<style>
  .noise {
    width: 100vw;
    height: 100vh;
    position: fixed;
    pointer-events: none;
  }

  .noise::before {
    width: 100%;
    height: 100%;
    z-index: 9;
    content: "";
    position: absolute;
    pointer-events: none;
    background-position: 50%;
    background-image: url("/images/noise/basic.png");
    animation: shake 1s steps(1) infinite;
    -webkit-animation: shake 1s steps(1) infinite;
    opacity: var(--noise-opacity);
  }

  @keyframes shake {
    0% {
      transform: translate3d(0, 0.9rem, 0);
      -webkit-transform: translate3d(0, 0.9rem, 0);
      -moz-transform: translate3d(0, 0.9rem, 0);
      -ms-transform: translate3d(0, 0.9rem, 0);
      -o-transform: translate3d(0, 0.9rem, 0);
    }

    10% {
      transform: translate3d(-0.1rem, -0.4rem, 0);
      -webkit-transform: translate3d(-0.1rem, -0.4rem, 0);
      -moz-transform: translate3d(-0.1rem, -0.4rem, 0);
      -ms-transform: translate3d(-0.1rem, -0.4rem, 0);
      -o-transform: translate3d(-0.1rem, -0.4rem, 0);
    }

    20% {
      transform: translate3d(-0.8rem, 0.2rem, 0);
      -webkit-transform: translate3d(-0.8rem, 0.2rem, 0);
      -moz-transform: translate3d(-0.8rem, 0.2rem, 0);
      -ms-transform: translate3d(-0.8rem, 0.2rem, 0);
      -o-transform: translate3d(-0.8rem, 0.2rem, 0);
    }

    30% {
      transform: translate3d(0.9rem, -0.9rem, 0);
      -webkit-transform: translate3d(0.9rem, -0.9rem, 0);
      -moz-transform: translate3d(0.9rem, -0.9rem, 0);
      -ms-transform: translate3d(0.9rem, -0.9rem, 0);
      -o-transform: translate3d(0.9rem, -0.9rem, 0);
    }

    40% {
      transform: translate3d(-0.2rem, 0.7rem, 0);
      -webkit-transform: translate3d(-0.2rem, 0.7rem, 0);
      -moz-transform: translate3d(-0.2rem, 0.7rem, 0);
      -ms-transform: translate3d(-0.2rem, 0.7rem, 0);
      -o-transform: translate3d(-0.2rem, 0.7rem, 0);
    }

    50% {
      transform: translate3d(-0.9rem, -0.4rem, 0);
      -webkit-transform: translate3d(-0.9rem, -0.4rem, 0);
      -moz-transform: translate3d(-0.9rem, -0.4rem, 0);
      -ms-transform: translate3d(-0.9rem, -0.4rem, 0);
      -o-transform: translate3d(-0.9rem, -0.4rem, 0);
    }

    60% {
      transform: translate3d(0.2rem, 0.6rem, 0);
      -webkit-transform: translate3d(0.2rem, 0.6rem, 0);
      -moz-transform: translate3d(0.2rem, 0.6rem, 0);
      -ms-transform: translate3d(0.2rem, 0.6rem, 0);
      -o-transform: translate3d(0.2rem, 0.6rem, 0);
    }

    70% {
      transform: translate3d(0.7rem, -0.8rem, 0);
      -webkit-transform: translate3d(0.7rem, -0.8rem, 0);
      -moz-transform: translate3d(0.7rem, -0.8rem, 0);
      -ms-transform: translate3d(0.7rem, -0.8rem, 0);
      -o-transform: translate3d(0.7rem, -0.8rem, 0);
    }

    80% {
      transform: translate3d(-0.9rem, 0.1rem, 0);
      -webkit-transform: translate3d(-0.9rem, 0.1rem, 0);
      -moz-transform: translate3d(-0.9rem, 0.1rem, 0);
      -ms-transform: translate3d(-0.9rem, 0.1rem, 0);
      -o-transform: translate3d(-0.9rem, 0.1rem, 0);
    }

    90% {
      transform: translate3d(0.6rem, -0.5rem, 0);
      -webkit-transform: translate3d(0.6rem, -0.5rem, 0);
      -moz-transform: translate3d(0.6rem, -0.5rem, 0);
      -ms-transform: translate3d(0.6rem, -0.5rem, 0);
      -o-transform: translate3d(0.6rem, -0.5rem, 0);
    }

    100% {
      transform: translate3d(-0.7rem, 0, 0);
      -webkit-transform: translate3d(-0.7rem, 0, 0);
      -moz-transform: translate3d(-0.7rem, 0, 0);
      -ms-transform: translate3d(-0.7rem, 0, 0);
      -o-transform: translate3d(-0.7rem, 0, 0);
    }
  }
</style>
