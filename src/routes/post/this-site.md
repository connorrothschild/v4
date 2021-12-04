---
layout: blog
title: "The new connorrothschild.com is live"
description: A creative but content-focused personal site, built with Sveltekit
date: "2021-12-09"
image: tidy-tuesday-powerlifting/header.png
archived: false
featured: true
draft: true
tags: ['svelte', 'personal']
---

<script>
  import Image from "../../lib/global/Image.svelte"
  import Info from "../../lib/global/Info.svelte"
  import TransitionExample from "../../lib/global/BlogComponents/TransitionExample.svelte"
</script>

<svelte:head>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

The new connorrothschild.com is live! (You're likely reading this post on connorrothschild.com, so that isn't a surprise).

My new site, which is my fourth personal website, is built with Sveltekit and takes inspiration from creative coders like [Félix Péault](https://flayks.com/) and [Henry Desroches](https://henry.codes/). You should check out their sites if you haven't already—they're pretty great.

I spent far too long on this iteration of my personal site (see [the commits](https://github.com/connorrothschild/svelte-personal-site/commits/master)). In this brief post, I'll detail some of the highlights, headaches, and give some practical tips for creating a personal website.

## Creativity & content

connorrothschild.com is meant to be a highly creative, but still content-focused personal site. I think you can imagine all personal websites falling somewhere on this matrix:

[tk matrix of X axis being creativity and Y axis being content]

### Creativity

You can find plenty of examples of creative websites by perusing the collection of [awwwards Site of the Day](https://www.awwwards.com/websites/sites_of_the_day/) winners. This collection is mostly comprised of 'creative coders' who build highly creative, design-focused sites, usually for brands of for their own portfolio. A great example of an incredibly creative personal website is Niccolo Miranda's [personal site](https://niccolomiranda.com/):

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Proud to finally release my new &quot;Paper Portfolio&quot;.<br><br>Live site ↳ <a href="https://t.co/zr4BTo31kP">https://t.co/zr4BTo31kP</a> <br><br>Many thanks to <a href="https://twitter.com/clementroche_?ref_src=twsrc%5Etfw">@clementroche_</a> &amp; <a href="https://twitter.com/michael_dlb?ref_src=twsrc%5Etfw">@michael_dlb</a> for the dev support. <a href="https://t.co/n1gDHnYkbl">pic.twitter.com/n1gDHnYkbl</a></p>&mdash; Niccolò Miranda (@niccolomiranda) <a href="https://twitter.com/niccolomiranda/status/1452636062866710531?ref_src=twsrc%5Etfw">October 25, 2021</a></blockquote>

What makes the site great—beyond its general aesthetic—is its unified theme of a 'paper portfolio.' The site is meant to resemble a newspaper, and is chock-full of animations and design decisions that support that association. You can read more about those decisions in his thread below:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Big news! My new portfolio has been awarded <a href="https://twitter.com/hashtag/SOTD?src=hash&amp;ref_src=twsrc%5Etfw">#SOTD</a> and <a href="https://twitter.com/hashtag/DEVAWARD?src=hash&amp;ref_src=twsrc%5Etfw">#DEVAWARD</a> on <a href="https://twitter.com/AWWWARDS?ref_src=twsrc%5Etfw">@AWWWARDS</a>. <br><br>⤷ <a href="https://t.co/4DvfkZi53r">https://t.co/4DvfkZi53r</a><br><br>To celebrate, I thought to stack in 12 mini-threads the creative process I followed up to build it. <br><br>Read below 🚧👇 <a href="https://t.co/05t9LPJJAD">pic.twitter.com/05t9LPJJAD</a></p>&mdash; Niccolò Miranda (@niccolomiranda) <a href="https://twitter.com/niccolomiranda/status/1461291594477449220?ref_src=twsrc%5Etfw">November 18, 2021</a></blockquote> 

### Content

On the other hand, many sites are designed with *content* in mind. These sites tend to reduce 'fluff' and focus on making sure users are able to easily find and peruse content, such as blog posts. This tends to be the default for most developers who maintain a personal portfolio or blog, but don't describe themselves as a 'creative coder.'

Perhaps the most extreme example of a content-focused personal website is [Paul Graham's](http://paulgraham.com/articles.html).

[tk image of paulgraham.com]

The site is by no means pretty, but it gets you the content you need *immediately*. 

Beyond its easy navigability, the benefit of a site like this is **your visitors know what to expect**. When you click on a blog post, you get a blog post, with nothing distracting you from the main content. No page transitions, no whimsy, just content. Visitors know that they are visiting your website to learn about your thoughts, not to be impressed by your ability to put a website together.

### Why not both?

In designing connorrothschild.com, I aimed to make a site that had just enough whimsy to be interesting without it being distracting. 

Practically, that meant introducing creativity whenever possible while ensuring that visitors had a consistent experience across content-specific pages. For example, each of my project, blog, and award pages have a consistent 'blog-post' style layout:

<Image src="../images/post/this-site/project-example.png" alt="An example of my personal website's project page" width="48%"/>
<Image src="../images/post/this-site/blog-example.png" alt="An example of my personal website's blog page" width="48%"/>
<Image src="../images/post/this-site/award-example.png" alt="An example of my personal website's award page" width="70%" centered="true" />

When a user visits any of these content-based pages, they see a title, subtitle, and the main content with a `max-width: 768px` applied. There is consistency *within* categories (awards, blog, projects), and *across* them.

Alternatively, I could have designed each of these sections with their own quirks, (e.g. full width images and grid based layouts introducing constituent parts of the content), as you see in sites like Félix Péault's:

<Image src="../images/post/this-site/flayks-project.png" alt="An example of Flayks personal website's project page" />

I chose not to do that, for two reasons.

First, to build a consistent user experience across different types of content, so that users spent less time getting 'onboarded' to my site, and more time spent engaging with the content.

Second, because I'm not as good at design as Félix. 😆

Skills aside, there is value in impressing your users on a homepage, and rewarding them with simpler content once they request it (e.g., by clicking a blog post). If you ever feel limited on time and are worried about not being able to include whimsy and creativity throughout your site, this could be a good approach.

## Parts of the site I hope you enjoy

Here are some parts of the website I hope you enjoy and maybe pull inspiration from.

### GSAP SplitText transitions

The site's main text elements (e.g. section titles) are animated using a combination of `IntersectionObserver` and `GSAP`'s `SplitText` plugin. This enables cool transitions like this one when an element scrolls into view:

<TransitionExample />