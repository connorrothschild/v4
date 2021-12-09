<div class="background">
  <span class="axis x" />
  <span class="axis y" />
  <p class="label x">Creativity &rarr;</p>
  <p class="label y">&uarr; Content</p>
  <div class="point felix">
    <div class="circle" />
    <p>Felix</p>
  </div>
  <div class="point me">
    <div class="circle" />
    <p>Me!</p>
  </div>
  <div class="point paul">
    <div class="circle" />
    <p>Paul</p>
  </div>
</div>

<style>
  .background {
    width: 100%;
    height: 350px;
    background: steelblue;
    border-radius: 1rem;
    margin: 3rem auto;
    position: relative;
  }

  .axis {
    position: absolute;
    background: white;
  }

  .axis.y {
    height: 100%;
    width: 2.5px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .axis.x {
    width: 100%;
    height: 2.5px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .label {
    position: absolute;
    color: white;
  }

  .label.x {
    top: 50%;
    right: 0;
    padding-right: 1rem;
  }

  .label.y {
    top: 0;
    left: 50%;
    padding-left: 1rem;
  }

  .point {
    position: absolute;
    display: flex;
    place-items: center;
  }

  .point p {
    color: white;
    margin-left: 6px;
  }

  .circle {
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    border: 1px solid black;
  }

  .felix {
    top: 15%;
    right: 5%;
  }

  .paul {
    top: 5%;
    left: 5%;
  }

  .me {
    top: 25%;
    left: 50%;
  }
</style>
