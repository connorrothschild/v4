---
layout: project
title: How Much Does Kid Cudi Hum?
description: An extensive analysis of music's most famous hum.
date: "2020-12-31"
audience: "The world!"
featured: true
image: cudi-hums/header.png
img_alt: 'A header image that says "how much does Kid Cudi hum?"'
techstack: "D3.js, Vue.js, Bulma, R, Scrollama, Genius API"
github: "https://github.com/connorrothschild/cudi-hums"
url: "https://connorrothschild.github.io/cudi-hums/"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

<Image href="https://connorrothschild.github.io/cudi-hums/" src="/images/project/cudi-hums/header.png" alt="Header"></Image>

# What it is

[**How Much Does Kid Cudi Hum?**](https://connorrothschild.github.io/cudi-hums/) is a visual storytelling piece centered around analyzing music's most famous hum. It was recognized as a winner of the [2020 Pudding Cup](https://pudding.cool/process/pudding-cup-2020/) out of 130+ entries.

# Tools used

I used [Vue](https://vuejs.org/) and [D3.js](https://d3js.org/) for all things visual and front-end. This was the first [scrollytelling](https://medium.com/nightingale/from-storytelling-to-scrollytelling-a-short-introduction-and-beyond-fbda32066964) project I built, and I wanted an accessible way to approach scrollytelling so that it wouldn't get in the way of other stuff (such as making cool visuals and telling an actually interesting story). I had heard good things about Russell Goldenberg's [`Scrollama`](https://github.com/russellgoldenberg/scrollama) and wanted to find an easy way to incorporate that library with Vue. I was able to do so with Vignesh Shenoy's [`vue-scrollama`](https://github.com/vgshenoy/vue-scrollama). It had a few quirks, but allowed me to quickly hit the ground running with scrollytelling capabilities.

# Project images

<Image style="box-shadow: none;" src="/images/project/cudi-hums/albums-mac.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="48%"></Image>
<Image style="box-shadow: none;" src="/images/project/cudi-hums/tracks-mac.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="48%"></Image>
<Image style="box-shadow: none;" src="/images/project/cudi-hums/lyrics-mac.png" alt="Project image for 'How Much Does Kid Cudi Hum?'"></Image>

<Image style="box-shadow: none;" src="/images/project/cudi-hums/albums-phone.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="32%"></Image>
<Image style="box-shadow: none;" src="/images/project/cudi-hums/tracks-phone.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="32%"></Image>
<Image style="box-shadow: none;" src="/images/project/cudi-hums/lyrics-phone.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="32%"></Image>

<Image style="box-shadow: none;" src="/images/project/cudi-hums/intro-phone.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="48%"></Image>
<Image style="box-shadow: none;" src="/images/project/cudi-hums/outro-phone.png" alt="Project image for 'How Much Does Kid Cudi Hum?'" width="48%"></Image>

<!-- # Overview (in my own words!)

<responsive-video url="https://www.youtube.com/embed/sNCMiWoXGaQ"></responsive-video>

To do: add code styling
https://nuxtjs.org/post/creating-blog-with-nuxt-content/#adding-a-code-block-to-your-post -->
