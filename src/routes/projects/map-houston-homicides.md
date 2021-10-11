---
layout: project
title: Mapping Houston Homicides
description: An exploration of homicides in Houston.
date: "2020-02-04"
audience: "Rice Datathon"
featured: false
image: map-houston-homicides/header.png
img_alt: "An example screen of the 'Mapping Houston Homicides' article"
techstack: "Mapbox, R"
github: "https://github.com/connorrothschild/datathon-2020/"
url: "https://connorrothschild.github.io/datathon-2020/source"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

[<Image style="box-shadow: none" :clickable=false src="/images/projects/map-houston-homicides/header.png" alt="Header"></Image>](https://connorrothschild.github.io/datathon-2020/source/)

# What it is

[**Mapping Houston Homicides**](https://connorrothschild.github.io/datathon-2020/source/) is a visual storytelling piece focused on homicides in Houston. It was recognized as the winner of the Houston/Trends track at the [2020 Rice Datathon](http://news.rice.edu/2020/02/10/rice-students-sweep-second-datathon/).

# Tools used

This project was an example of a low-code but high-impact story. Rather than reinventing the wheel and implementing my own scrollytelling capabilities, my team used two tools from Mapbox: their [interactive storytelling template](https://www.mapbox.com/solutions/interactive-storytelling) and [Mapbox Studio](https://www.mapbox.com/mapbox-studio). In combination, we were able to write very little code but provide a highly tailored, powerful user experience for the reader.

We used Mapbox Studio to create each of the bubbles that is present on the map. As a corollary, we used Studio to define the size, fill, and location of each bubble. we created many different layers that toggled visibility on scroll.

To trigger scroll events, We used the Mapbox storytelling template. This was a simple JSON where, for each 'view', I defined three elements: the _text_, the _layer_, and the _location_.

# Project images

<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/mac-1.png" alt="Project image for 'Mapping Houston Homicides'" width="48%"></Image>
<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/mac-2.png" alt="Project image for 'Mapping Houston Homicides'" width="48%"></Image>

<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/mac-3.png" alt="Project image for 'Mapping Houston Homicides'" width="48%"></Image>
<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/mac-4.png" alt="Project image for 'Mapping Houston Homicides'" width="48%"></Image>

<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/phone-1.png" alt="Project image for 'Mapping Houston Homicides'" width="32%"></Image>
<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/phone-2.png" alt="Project image for 'Mapping Houston Homicides'" width="32%"></Image>
<Image style="box-shadow: none" src="/images/projects/map-houston-homicides/phone-3.png" alt="Project image for 'Mapping Houston Homicides'" width="32%"></Image>
