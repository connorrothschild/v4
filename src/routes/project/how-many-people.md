---
layout: project
title: How Many People Have Had COVID-19?
description: A novel way to visualize COVID-19 case counts.
date: "2020-11-06"
audience: "The world!"
featured: false
image: how-many-people/header.png
img_alt: "An example screen of the 'How Many People' application"
techstack: "D3.js, Vue.js, Bulma"
github: "https://github.com/connorrothschild/how-many-people"
url: "https://connorrothschild.github.io/how-many-people"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

<Image href="https://connorrothschild.github.io/how-many-people" src="/images/project/how-many-people/header.png" alt="Header"></Image>



[How Many People Have Had COVID-19?](https://connorrothschild.github.io/how-many-people) is a small web application that visualizes COVID-19 case counts in a novel way: via state populations. The application's user can see cases either in the US or globally. The goal is to capture case counts with some comparison that everyone can understand.

# Tools used

This application was built with [Vue](https://vuejs.org/). The minimal styling was thanks to [Bulma](https://bulma.io/), my framework of choice recently. The application was simpler than some others I have built (there were only [three components](https://github.com/connorrothschild/how-many-people/tree/master/src/components)). It was mostly a fun exercise to play around with SVGs and Vue, and also an exercise to better handle user interactions. The tool needed to be robust to many changes, including 1) the adding of state populations together, 2) a 'ceiling' (the case counts) that state populations could not exceed, 3) resets on toggle of US/global views.

# Project images

<Image style="box-shadow: none;" src="/images/project/how-many-people/mac-1.png" alt="Project image for 'How Many People Have COVID-19??'"></Image>
<Image style="box-shadow: none;" src="/images/project/how-many-people/mac-2.png" alt="Project image for 'How Many People Have COVID-19??'"></Image>

<Image style="box-shadow: none;" src="/images/project/how-many-people/phone-1.png" alt="Project image for 'How Many People Have COVID-19??'" width="48%"></Image>
<Image style="box-shadow: none;" src="/images/project/how-many-people/phone-2.png" alt="Project image for 'How Many People Have COVID-19??'" width="48%"></Image>
