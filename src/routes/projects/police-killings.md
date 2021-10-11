---
layout: project
title: Mapping Police Killings
description: Visualizing officer-involved deaths since 2013.
date: "2020-12-22"
audience: "Mapping Police Violence"
featured: false
image: police-killings/header.png
img_alt: "Police killings header, includes an image of a MacBook with the application open."
techstack: "D3.js, Vue.js, Bulma, R"
github: "https://github.com/connorrothschild/police-killings"
url: "https://mappingpoliceviolence.org/"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

[<Image style="box-shadow: none" :clickable=false src="/images/projects/police-killings/header.png" alt="Header"></Image>](https://connorrothschild.github.io/police-killings/)

# What it is

[**Mapping Police Killings**](https://connorrothschild.github.io/police-killings/) is an application that allows for user exploration of officer-involved deaths across any US city or state. It leverages data from [Mapping Police Violence](https://mappingpoliceviolence.org/) and visualizes shootings in a geographic area using a [force-directed graph](https://observablehq.com/@d3/force-directed-graph) built in D3. Users are able to filter by city or state, and upon initail selection, they are able to group by a variety of victim characteristics, such as age, race, armed status, or cause of death.

The application is featured on the [Mapping Police Violence homepage](https://mappingpoliceviolence.org/). It is seen by thousands of visitors on a daily basis.

# Tools used

I used [Vue](https://vuejs.org/) to design the application and handle user interaction. I used [D3.js](https://d3js.org/) for visualization and for its force-directed diagram capabilities. Additional styling was done with [Bulma](https://bulma.io/).

This was actually the second iteration of this visualization. [Version 1 can be found here](https://connorrothschild.github.io/police-killings-v1/). Although that version was [built](https://github.com/connorrothschild/police-killings-v1) with vanilla JavaScript and no CSS library (everything was built from scratch!). Upon deploying this to a more serious and more visited site (Mapping Police Violence's homepage), I decided an upgrade would be worth the investment.

# Project images

<Image style="box-shadow: none" src="/images/projects/police-killings/mac-1.png" alt="Project image for 'Mapping Police Killings'" width="74%"></Image>
<Image style="box-shadow: none" src="/images/projects/police-killings/phone-1.png" alt="Project image for 'Mapping Police Killings'" width="22%"></Image>

<Image style="box-shadow: none" src="/images/projects/police-killings/phone-2.png" alt="Project image for 'Mapping Police Killings'" width="22%"></Image>
<Image style="box-shadow: none" src="/images/projects/police-killings/mac-2.png" alt="Project image for 'Mapping Police Killings'" width="74%"></Image>
