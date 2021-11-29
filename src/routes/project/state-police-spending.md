---
layout: project
title: How Much Does Your State Spend on Police?
description: Contextualizing police spending in your state.
date: "2020-06-02"
audience: "The world!"
featured: false
image: state-police-spending/header.png
img_alt: "State police spending header, includes an image of a MacBook with the application open."
techstack: "D3.js"
github: "https://github.com/connorrothschild/state-police-spending"
url: "https://connorrothschild.github.io/state-police-spending/"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

<Image href="https://connorrothschild.github.io/state-police-spending/" src="/images/project/state-police-spending/header.png" alt="Header"></Image>



[**How Much Does Your State Spend on Police?**](https://connorrothschild.github.io/state-police-spending/) allows users to compare their state's police spending to a variety of equivalent costing programs, such as residential drug treatment programs or additional SNAP recipients. The goal is to contextualize police spending in numbers that everyone can understand, in particular by comparing it to other known programs.

# Tools used

I used [D3.js](https://d3js.org/) for the minor visualization that accompanies these numbers. The rest of the computation is done by simply dividing the state's police spending by a specified denominator, one for each metric. This was a technically simple project. The goal is not to amaze, but to provide simple, easy comparisons that better inform the user about their state's police spending.

# At a glance

<Image style="box-shadow: none;" src="/images/project/state-police-spending/mac.png" alt="Project image for 'How Much Does Your State Spend on Police?'" width="74%"></Image>
<Image style="box-shadow: none;" src="/images/project/state-police-spending/phone.png" alt="Project image for 'How Much Does Your State Spend on Police?'" width="22%"></Image>
