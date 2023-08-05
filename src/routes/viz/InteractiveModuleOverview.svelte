<script>
  import data from "./modules.json";
  const functions = [...new Set(data.map((d) => d.function))];
  const uses = [...new Set(data.map((d) => d.use))];

  import { scaleOrdinal } from "d3-scale";

  const colorScale = scaleOrdinal()
    // .domain(data.map((d) => d.use))
    .domain(["Never", "Rarely", "Sometimes", "Often"])
    .range(["#E76F51", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"]);

  let hoveredUse = null;
  let view = "byFunction";

  import { fly } from "svelte/transition";
</script>

<section>
  <h1 class="title">
    The D3 Tools to Use in a Framework-First Data Visualization
  </h1>
  <div class="top">
    <div>
      <p class="legend-title">Frequency of use</p>
      <div class="legend">
        {#each colorScale.domain() as color}
          <div
            class="legend-item"
            on:mouseover={() => {
              hoveredUse = color;
            }}
            on:mouseleave={() => {
              hoveredUse = null;
            }}
          >
            <span class="swatch" style:background={colorScale(color)} />{color}
          </div>
        {/each}
      </div>
    </div>

    <div class="view-buttons">
      <button
        class="view-button"
        class:active={view === "byFunction"}
        on:click={() => {
          view = "byFunction";
        }}
      >
        By Function
      </button>
      <button
        class="view-button"
        class:active={view === "byUse"}
        on:click={() => {
          view = "byUse";
        }}
      >
        By Use
      </button>
    </div>
  </div>

  {#if view === "byFunction"}
    <div class="columns byFunction" in:fly={{ x: 10 }}>
      {#each functions as fn}
        <div id={fn} class="card">
          <h2>{fn}</h2>

          <div class="modules">
            {#each data
              .filter((d) => d.function === fn)
              .sort((a, b) => colorScale.domain().indexOf(a.use) - colorScale
                    .domain()
                    .indexOf(b.use)) as module}
              <a
                href="https://github.com/d3/d3-{module.name}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code
                  style:background={colorScale(module.use)}
                  style:opacity={hoveredUse && hoveredUse !== module.use
                    ? ".2"
                    : "1"}
                >
                  <!-- <span style:opacity=".5">d3-</span>{module.name} -->
                  {module.name}
                </code>
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else if view === "byUse"}
    <div class="columns byUse" in:fly={{ x: 10 }}>
      {#each uses.sort((a, b) => colorScale.domain().indexOf(a) - colorScale
            .domain()
            .indexOf(b)) as use}
        <div
          id={use}
          class="card"
          style:opacity={hoveredUse && hoveredUse !== use ? ".5" : "1"}
        >
          <h2>{use} used</h2>

          <div class="modules">
            {#each data
              .filter((d) => d.use === use)
              .sort((a, b) => colorScale.domain().indexOf(a.use) - colorScale
                    .domain()
                    .indexOf(b.use)) as module}
              <a
                href="https://github.com/d3/d3-{module.name}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code
                  style:background={colorScale(module.use)}
                  style:opacity={hoveredUse && hoveredUse !== module.use
                    ? ".2"
                    : "1"}
                >
                  <!-- <span style:opacity=".5">d3-</span> -->
                  {module.name}</code
                >
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style>
  section {
    position: relative;
    width: min(98vw, 1268px);
    left: calc(50% - min(49vw, 634px));
    max-width: none;
    margin: 2rem 0;
    background: whitesmoke;
    padding: 2rem 1rem;
    border-radius: 10px;
    border: 1px solid lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .columns {
    display: grid;
    gap: 0.5rem;
  }

  .columns.byFunction {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .columns.byUse {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .card {
    padding: 1rem;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    transition: opacity 300ms ease;
    border: 1px solid rgba(0, 0, 0, 0.075);
  }

  .modules {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 4px;
    row-gap: 10px;
  }

  code {
    color: white;
    padding: 0.3rem 0.5rem 0.2rem 0.5rem;
    transition: opacity 300ms ease;
  }

  h2 {
    font-size: 1.2rem;
    color: black;
    font-family: var(--font-sans);
    margin-bottom: 0.5rem;
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: var(--font-sans);
    cursor: pointer;
    font-size: 0.9rem;
  }

  .swatch {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }

  .legend-title {
    font-family: var(--font-sans);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: black;
    font-weight: 400;
  }

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    .top {
      flex-direction: column;
    }

    .view-buttons {
      align-self: flex-end;
    }
  }

  button {
    font-family: var(--font-sans);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    /* background: var(--text-color); */
    opacity: 0.3;
    color: black;
    cursor: pointer;
    transition: background 300ms ease;
  }

  button.active {
    background: var(--primary-color);
    color: white;
    opacity: 1;
  }

  a {
    /* External link arrow */
    cursor: alias;
  }

  .title {
    font-family: var(--font-sans);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: black;
    font-weight: 700;
  }
</style>
