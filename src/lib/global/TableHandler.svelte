<script>
  export let src;
  export let alt;
  export let link;
  export let width = "100%";
</script>

<div style="width: {width};">
  <img loading="lazy" {src} {alt} width="100%" />
  <a href={link} target="_blank" rel="noopener noreferrer" class="no-underline"
    >The original, interactive table can be found here</a
  >
</div>

<style>
  div {
    margin: 1.35rem auto;
  }

  img {
    margin-bottom: 0.5rem;
  }

  a {
    font-weight: 300;
    font-family: var(--font-sans);
    text-align: right;
    letter-spacing: 0.64px;
    width: 100%;
    margin-left: auto;
    display: block;
  }

  @media screen and (max-width: 768px) {
    div {
      width: 100% !important;
    }
  }
</style>
