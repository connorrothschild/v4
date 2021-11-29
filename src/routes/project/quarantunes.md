---
layout: project
title: Quarantunes
description: Explore your listening history during COVID-19.
date: "2020-10-22"
audience: "The world (2000 users)"
featured: true
image: quarantunes/header.png
img_alt: "Quarantunes header, includes an image of a MacBook with the application open."
techstack: [D3.js, Vue.js, Bulma, R, Spotify API]
github: "https://github.com/connorrothschild/quarantunes"
url: "https://quarantune.netlify.app"
---

<script>
import Image from "$lib/global/Image.svelte"
</script>

<Image href="https://quarantune.netlify.app" src="/images/project/quarantunes/header.png" alt="Header"></Image>



[**Quarantunes**](https://quarantune.netlify.app) is an application for Spotify users to explore their listening history during the COVID-19 pandemic. It has been used by over 4,000 visitors.
There are three tabs within the application.
The first showcases 'top artists' and 'top tracks' throughout the pandemic.
The second shows some statistics about tracks according to Spotify's [audio features](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features) (e.g. which of your top songs is most danceable?).
The last tab creates two playlists for the user: one with their top tracks and another with recommendations for future listening.

# Tools used

I used [Vue](https://vuejs.org/) to design the majority of this application. Charts were built using [Chart.js](https://www.chartjs.org/). This was my first serious project working with the [Spotify API](https://developer.spotify.com/documentation/web-api/). Perhaps the greatest lessons I learned throughout this process were related to API calls, asynchronous code, and race conditions. I also learned a bit about cookies; because the application creates a 'recommended' playlist for users, I had to store whether they had visited the site before to prevent creating multiple playlists on app reloads.

I also had some fun developing the more novel contributions of this project, such as a 'recommended' artist and a whole playlist of recommended songs. For recommended artists, I scraped a users' top 50 artists, and for each of those artists, pulled 20 ['related' artists](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists) according to Spotify. Then, I appended all 1000 (50 x 20) of those artists into one array, and presented the one that appeared most frequently to the user. As for the playlist, I took the users' top 5 tracks and gathered 4 ['seed' recommendations](https://developer.spotify.com/console/get-recommendations/) based on those tracks. Voila! A playlist of 20 recommendations.

# At a glance

<Image style="box-shadow: none;" src="/images/project/quarantunes/macbook.png" alt="Project image for 'Quarantunes'"></Image>
<Image style="box-shadow: none;" src="/images/project/quarantunes/side-by-side.png" alt="Project image for 'Quarantunes'"></Image>
