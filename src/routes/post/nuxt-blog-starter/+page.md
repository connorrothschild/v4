---
layout: blog
title: "Announcing the Nuxt Blog Starter"
date: "2021-02-10"
description: A minimal, content-focused blog site built with NuxtJS and Bulma
image: nuxt-blog-starter/header.png
featured: false
tags: ['vue', 'nuxt', 'package']
---

<script>
  import Image from "../../../lib/Global/Image.svelte"
  import Info from "../../../lib/Global/Info.svelte"
  import Code from "../../../lib/Global/Code.svelte"
</script>

I'm happy to share a [new starter template](https://github.com/connorrothschild/nuxt-blog-starter) for minimal, content-focused blogs using NuxtJS and Bulma for styling. The site is a more simplified version of [my own *former* personal site](https://connorrothschild.github.io/v3/). 

<Info>


This post might be slightly out of date because it is in reference to [my former site](https://connorrothschild.github.io/v3/), not this one.


</Info>

## Why Nuxt?

I’ve went through my fair share of blogs. See [version 1](https://connorrothschild.github.io/v1/) and [version 2](https://connorrothschild.github.io/v2/). I moved to a site using Nuxt for three reasons:

#### 1. Speed and user experience

Nuxt is fast by default. It uses server-side rendering, rather than client-side rendering, which means that content is rendered before users visit your site. As explained on the [Nuxt Blog](https://nuxtjs.org/post/going-full-static/):

> `nuxt generate` with `target: 'static'` will pre-render all your pages to HTML and save a payload file in order to mock `asyncData` and `fetch` on client-side navigation, this means no more HTTP calls to your API on client-side navigation. By extracting the page payload to a js file, it also reduces the HTML size served as well as preloading it for optimal performance.

You can see the impact of SSR on performance by comparing my [last blog iteration](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fconnorrothschild.github.io%2Fv2%2F&tab=desktop) to [this one](https://pagespeed.web.dev/report?url=https%3A%2F%2Fconnorrothschild.github.io%2Fv3eed/insights/?url=https%3A%2F%2Fhttps://connorrothschild.github.io/v3%2F&tab=desktop).

The former, built using [R `blogdown`](https://bookdown.org/yihui/blogdown/) and [Hugo Academic](https://themes.gohugo.io/academic/), scored 72/100 on desktop performance, compared to a 100/100 on this version:

<Image src="/v4/images/post/nuxt-blog-starter/old-site-perf.png" alt="Old site performance. 72/100" width="48%"></Image>
<Image src="/v4/images/post/nuxt-blog-starter/new-site-perf.png" alt="New site performance. 100/100" width="48%"></Image>

#### 2. Flexibility and power

Too often, making 'fast' websites comes at the cost of flexibility and power. For example, the first version of my website was based on a [Jekyll theme](https://github.com/katmh/point-theme) that was pretty, functional, and fast, but limited in its flexibility. That is, I was locked into the default appearance of the site, unless I wanted to really get into the weeds editing CSS and writing my own HTML markup. (At that point, I might as well had started a new blog or find another theme!)

I built this template because it is as performant as my V1 site (both receive over 95/100 on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)), but with much more flexibility. In my experience, modifying the appearance of this site—whether thats through its constituent components in the `components/` folder, or globally in the `assets/scss/colors.scss` file—is seamless while also allowing greater power than modifying the defaults in other, simpler blog templates.

Moreover, this kind of flexibility scales up with your knowledge of Vue and Nuxt. If you are already familiar with the technologies, this template should be ready for total transformation through whatever modifications you find necessary. Otherwise, all you need to do is follow the simple instructions in the template's [README](https://github.com/connorrothschild/nuxt-blog-starter). To test this, I’ve helped a non-technical friend build out his [own website](https://dyllonschmehl.netlify.app/) from this theme, and seen firsthand how intuitive getting started can really be.

#### 3. Learning new tech

A final reason to make this jump is to get familiar with [JavaScript](https://www.javascript.com/), [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/), and [CSS](https://www.w3schools.com/css/). Many of my readers come from a visualization-centric background, and are most proficient in R. (Awesome!) I learned Vue (and then Nuxt) from scratch, by building a [few](https://connorrothschild.github.io/cudi-hums/) [projects](https://connorrothschild.github.io/how-many-people/) and subsequently, my personal website!

**Learning new tech never hurts.** You will almost never regret spending a few hours to have a basic handle of a new language or tool. Get started with this template, see how it feels, and see if you like it! (If not, ditch the site! I won't be offended.)

## Why this template specifically?

I didn't invent Nuxt, nor the portfolio site. There are a few other options for powerful, pretty starter templates using NuxtJS. In particular, I like [Marina Aisa's](https://github.com/marinaaisa/nuxt-markdown-blog-starter) and [Daniel Kelly's](https://templates.netlify.com/template/awake-blog-template-nuxt/).

That being said, I think my site is pretty cool. In creating the template, I’ve aimed for a mix of **out-of-the-box features that "just work"**, with the **ability to customize as necessary.** I want to allow new users, who have little to no experience with web development, to create a blog, and allow advanced users, who probably know this stuff better than me, to get started with a powerful and customizable template.

There are a few features I think make this starter template unique:

### Easy theming

The site relies on three colors: a primary (background), secondary (accent), and a primary-invert (text). These are all defined in Sass variables that live in `assets/scss/colors.scss`. To change the appearance of your site, simply modify the colors you'd like to see as your background (`$primary`), your text (`$text`), and your accent (`$secondary`). Obviously, make sure your `$primary` and `$text` colors have sufficient contrast.

#### Dark mode/light mode

An example of this can be seen below the Sass defaults that live within `assets/scss/colors.scss`. Simply uncomment those lines (preceded by the comment "LIGHT MODE") to see your site with light mode defaults.

<Image src="/v4/images/post/nuxt-blog-starter/dark.png" alt="Dark mode" width="49%"/>
<Image src="/v4/images/post/nuxt-blog-starter/light.png" alt="Light mode" width="49%"/>

### Dope transitions

Nuxt makes transitions easy. This template expands upon Nuxt's powerful page transitions by using [Greensock's GSAP](https://greensock.com/gsap/). In particular, I define elements that should fade in nicely for each page, like this:

<Code language="js">

```js
transition: {
    mode: 'out-in',
    css: false,
    enter () {
        TweenMax.fromTo(".title", 
            {x: "10%"}, {x: "0%" , duration: 0.1});
        TweenMax.fromTo(".subtitle, .card, .img",
            {x: "10%", autoAlpha: 0},
            {x: "0%", autoAlpha: 1, delay: 0.25, duration: 0.5, ease: Power3.easeOut}
        );
    },
},
```

</Code>

This creates some subtle yet attractive page transitions:

<Image src="/v4/images/post/nuxt-blog-starter/transitions.gif" alt="GIF showcasing transitions of home page, to blog post pagfe, to a single blog post."/>

You can modify these transitions by adding and removing elements in the CSS selector parameters for each page's `enter()` property.

### Meta tags/SEO

The function `getSiteMeta()`, found in the `utils/` folder, allows for different meta tags for each page and for each blog post. The function allows the Twitter Cards for my home page and for a blog post to look different, like this:

<Image src="/v4/images/post/nuxt-blog-starter/home-card.png" alt="Twitter card of homepage" width="47.2%"/>
<Image src="/v4/images/post/nuxt-blog-starter/blog-card.png" alt="Twitter card of blog post page" width="50%"/>

The site is set up so that your cards will appear this way automatically! All you will have to do is edit [`utils/getSiteMeta.js`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/utils/getSiteMeta.js) with your specific information. Page-specific meta tags are also helpful for search engine optimization; your site might attract a larger number of visitors if it covers a wider variety of keywords.

## Blog features

This site comes with all the same blog capabilities as a normal site, such as syntax highlighting, images, HTML support, and Vue components. Read [this post](https://nuxtjs.org/post/creating-blog-with-nuxt-content/) if you're curious about features.

You can also include a few custom components I’ve made:

### Info boxes

**[`InfoBox.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InfoBox.vue)** is a component that allows you to put notes/warnings/messages in your blog posts. Feel free to edit the component to adjust its styling.

<Info>


Info boxes look like this!


</Info>

### Images

**[`InlineImage.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InlineImage.vue)** optimizes and handles the messy parts of images.

In specific, it:

- Allows for fullscreen, gallery views via [`v-img`](https://github.com/crowdbotics/v-img).
- Optimizes images with [`nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images).

### Videos

**[`ResponsiveVideo.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/ResponsiveVideo.vue)** takes a YouTube url (or otherwise embeddable video link) and makes it responsive.

You can see all of these components in action in the [sample blog post](https://nuxt-blog-starter.netlify.app/post/welcome).

## Get started

Get started! [Fork the repository here](https://github.com/connorrothschild/nuxt-blog-starter) and follow instructions in the README to get started. Please reach out with any questions, either through filing an issue or via [email](mailto:connor@connorrothschild.com).
