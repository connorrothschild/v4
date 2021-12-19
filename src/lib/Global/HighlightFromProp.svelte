<script>
  // FROM PARENT
  export let hoveredIdProp;
  export let highlightedLinesProp;

  //   BACK TO PARENT
  export let hoveredId;
  export let highlightedLines;
</script>

<span
  on:mouseover={() => {
    hoveredId = hoveredIdProp;
    highlightedLines = highlightedLinesProp;
  }}
  on:focus={() => {
    hoveredId = hoveredIdProp;
    highlightedLines = highlightedLinesProp;
  }}
  on:mouseleave={() => {
    hoveredId = null;
    highlightedLines = null;
  }}><slot /></span
>

<style>
  span {
    background: rgba(var(--accent-color-rgb), 0.2);
    padding: 1px 4px;
    /* font-style: italic; */
  }
</style>
