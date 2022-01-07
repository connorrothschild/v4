<script>
  let people = [
    {
      name: "Amelia Wattenberger",
      twitter: "https://twitter.com/Wattenberger",
    },
    { name: "Will Chase", twitter: "https://twitter.com/W_R_Chase" },
    {
      name: "Danielle Alberti",
      twitter: "https://twitter.com/DanielleAlberti",
    },
    { name: "Nathan Yau", twitter: "https://twitter.com/flowingdata" },
    { name: "Simran Parwani", twitter: "https://twitter.com/simranparwani" },
    { name: "Jon Schwabish", twitter: "https://twitter.com/jschwabish" },
    { name: "Alli Torban", twitter: "https://twitter.com/AlliTorban" },
    { name: "Russell Goldenberg", twitter: "https://twitter.com/codenberg" },
    { name: "Alberto Cairo", twitter: "https://twitter.com/AlbertoCairo" },
    { name: "Michelle McGhee", twitter: "https://twitter.com/mich_mcghee" },
    { name: "Gabrielle Merite", twitter: "https://twitter.com/Data_Soul" },
    { name: "Shirley Wu", twitter: "https://twitter.com/sxywu" },
    { name: "Nadieh Bremer", twitter: "https://twitter.com/NadiehBremer" },
  ];
</script>

<div style="margin-bottom: 1.15rem;">
  {#each people as person}
    <li>
      <a target="_blank" rel="noopener noreferrer" href={person.twitter}
        >{person.name}</a
      >
    </li>
  {/each}
</div>

<style>
  a {
    font-weight: 400;
  }
</style>
