---
layout: project
title: The Bob Ross Virtual Art Gallery
description: A visual, virtual tour of every piece in The Joy of Painting.
date: "2021-03-22"
audience: "The world!"
featured: true
image: bob-ross-art-gallery/header.png
img_alt: 'A header image that says "The Bob Ross (virtual) Art Gallery"'
techstack: "D3.js, Svelte, R, Scrollama"
github: "https://github.com/connorrothschild/bob-ross-art-gallery/"
url: "https://connorrothschild.github.io/bob-ross-art-gallery/"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

<Image href="https://connorrothschild.github.io/bob-ross-art-gallery/"  src="/images/project/bob-ross-art-gallery/header.png" alt="Header"></Image>

# What it is

[**The Bob Ross Virtual Art Gallery**](https://connorrothschild.github.io/bob-ross-art-gallery/) is a visual storytelling piece analyzing Bob Ross' series _The Joy of Painting_. 

<!-- It allows the user to explore each painting from the series in an interactive, digital art gallery. -->

It has since been retired due to a cease and desist from Bob Ross, Inc. Before that, it attracted media attention from [Yahoo](https://www.yahoo.com/now/bob-ross-virtual-gallery-offers-195835693.html), [Nerdist](https://nerdist.com/article/bob-ross-virtual-gallery-art/), [OpenCulture](https://www.openculture.com/2021/06/the-bob-ross-virtual-art-gallery.html), [Fatherly](https://www.fatherly.com/play/bob-ross-virtual-art-gallery-perfect-relax/), [DesignTaxi](https://designtaxi.com/news/414284/Bob-Ross-Virtual-Art-Gallery-Lets-You-Take-A-Happy-Little-Break-To-See-His-Art/), [FlowingData](https://flowingdata.com/2021/06/01/colors-of-bob-ross-explored/) and others. It also won first place in the Standalone Multimedia category at the Society for News Design's [2021 Student Design Contest](https://msusnd.org/2021-college-design-contest/).

# Tools used

I used [Svelte](https://svelte.dev/) and [D3.js](https://d3js.org/) for all things visual and front-end. I used The Pudding's [Svelte Starter template](https://github.com/the-pudding/svelte-starter) which made configuration much easier, and made a lot of the visual aspects of the project less difficult to create (e.g. their `Window` component simplified resize events a ton).

For the scroll-based interactions, I used Russell Goldenberg's [Scrollama](https://github.com/russellgoldenberg/scrollama). As of the creation of this project, there is no formal or official Svelte-based scrollytelling library. I therefore used Scrollama in its vanilla form, and plugged it into the Svelte component as if I were writing normal JavaScript.

# Project images

<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/mac-1.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="74%"></Image>
<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/iphone-1.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="22%"></Image>

<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/iphone-2.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="22%"></Image>
<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/mac-2.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="74%"></Image>

<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/iphone-3.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="18%"></Image>
<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/mac-3.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="58%"></Image>
<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/iphone-4.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="18%"></Image>

<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/mac-4.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="48%"></Image>
<Image style="box-shadow: none;" src="/images/project/bob-ross-art-gallery/mac-5.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="48%"></Image>

<!-- # Overview (in my own words!)

<responsive-video url="https://www.youtube.com/embed/sNCMiWoXGaQ"></responsive-video>

To do: add code styling
https://nuxtjs.org/post/creating-blog-with-nuxt-content/#adding-a-code-block-to-your-post -->
