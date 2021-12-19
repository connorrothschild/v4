---
layout: blog
title: Creating the ultimate scatterplot in Svelte
description: Svelte + D3, in action
date: "2021-07-09"
image: svelte-and-d3/header.png
draft: true
tags: ['svelte', 'd3', 'tutorial']
---

<script>
  import Image from "../../lib/Global/Image.svelte"
  import Info from "../../lib/Global/Info.svelte"
</script>

<!-- https://svelte.dev/repl/b4c485ee69484fd8a63b8dc07c3b20a2?version=3.4.1 -->
<!-- https://observablehq.com/@d3/scatterplot -->

Earlier this year, I wrote about how I use Svelte to compose beautiful, powerful data visualizations. In that post, I documented how Svelte has gradually replaced D3 as the key tool for creating graphics. 

Here, I'll talk less *why* and more *how*. That is, I'll explain how to create **the ultimate scatterplot** using Svelte.

We'll be taking [this scatterplot](https://observablehq.com/@d3/scatterplot), from the team at Observable, and recreating it (sort of). Then, we'll make it (hopefully) better.

<iframe loading="lazy" title="An Observable chart of cars data" width="100%" height="684" frameborder="0" style="background: white"
  src="https://observablehq.com/embed/@d3/scatterplot?cells=chart"></iframe>

In specific, we'll be doing the following:

1. Decide upon and record our chart dimensions
2. Create a `<Scatterplot />` component
3. Create a `<Circle />` component
4. Create an `<XAxis />` and `<YAxis />` component
5. Add interactivity via voronoi hovering

## Chart dimensions

Our first step is to decide upon and record our chart dimensions. For the sake of our example, lets make our chart's width `100%` of its container's width, and its height `600px`. In Svelte, we can bind a variable (in our case, `containerWidth`) to the `offsetWidth` of a container.

```svelte
<script>
  let containerWidth;
  let containerHeight = 600;
</script>

<div class='chart-container' bind:offsetWidth={containerWidth}>
  <!-- Chart will go here -->
</div>
```

Above, we're binding `containerWidth` to constantly equal the [`offsetWidth`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth) of our `chart-container` div. This is generally a good decision because it binds the chart width to its *container*, rather than the *window*. This allows for the chart to be embedded in any sort of complex layout, and still remain properly sized.

More realistically, we want our *chart width* to be slightly smaller than our *container width*, so that we have room for things like axis ticks and labels. 

We can record the exact number of pixels we want "on the sides" in an object called `margin`. Then, we can set a new variable, `chartWidth` to equal the container width, minus our horizontal margins.

```svelte
<script>
  let containerWidth;
  let containerHeight = 600;
  let margin = {top: 30, right: 20, bottom: 50, left: 50};

  $: chartWidth = containerWidth - margin.left - margin.right;
  $: chartHeight = containerHeight - margin.top - margin.bottom;
</script>

<div class='chart-container' bind:offsetWidth={containerWidth}>
  <!-- Chart will go here -->
</div>
```

<Info>
  

We're using the `$` notation here because `chartWidth` is *reactive*; that is, it updates according to another variable, `containerWidth`, which updates on resize.

  
</Info>

To see our reactive chart dimensions in action, play around with the width of the playground below:

<iframe loading="lazy" src="https://svelte.dev/repl/060a2a7847bc479eb4e456c966f096e9?version=3.38.3" width="100%" height='600' title="Responsive chart container"></iframe>

## Create a `<Scatterplot />` component

Now that we have our chart dimensions, we can pass those dimensions into a component<more-info content="A component is a reusable file that includes integrated markup, styles and functionality." href="https://v2.svelte.dev/guide"></more-info> that will handle the visualization itself.

We'll want our scatterplot component to receive four properties.<more-info content="Props are values passed from one component to another." href="https://svelte.dev/tutorial/declaring-props"></more-info>

1. The data (`data`)
2. Our chart width (`chartWidth`)
3. Our chart height (`chartHeight`)
4. The margins surrounding our chart (`margin`)

In code, that looks like this:

```svelte
<div class='chart-container' bind:offsetWidth={containerWidth}>
  <Scatterplot {data} width={chartWidth} height={chartHeight} {margin} />
</div>
```

And in `Scatterplot.svelte`, we receive our props like this:

```svelte
<script>
  export let data;
  export let width;
  export let height;
  export let margin;
</script>
```

Now that we have our dimensions, we'll want to create *scales* with them.<more-info content="Scales map datapoints to positions on the canvas." href='https://www.d3indepth.com/scales/'></more-info>

Here, we will leverage the power of D3—in particular, [`d3-scale`](https://github.com/d3/d3-scale)—to map our data's values to points on our canvas.

We'll want to make our scales reactive according to our dynamic size variables we referenced earlier. Here, notice how we use `$` to denote reactivity, and notice how we reference `width`.

```svelte
<script>
// Import props...
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";

$: xScale = scaleLinear()
  .domain(extent(data, (d) => d.mpg))
  .range([margin.left, width - margin.right]);

$: yScale = scaleLinear()
  .domain(extent(data, (d) => d.hp))
  .range([height - margin.top, margin.bottom]);
</script>
```

In the above code, we're defining the domain <more-info content="A domain accepts the range of values to map data from." href='https://observablehq.com/@d3/introduction-to-d3s-scales#cell-104'></more-info> according to each cars' miles per gallon (`mpg`) and horsepower (`hp`). We set the parameters for our range <more-info content="A range converts the values from our domain into a specified 'range' of positions." href='https://observablehq.com/@d3/introduction-to-d3s-scales#cell-104'></more-info> to span the starting position (the left/bottom margin) to our chart width/height (minus our right/top margin value).

Now, when we pass a number into a scale, it will result in a point on the canvas. For example, the code `xScale(25)` would result in a value of `__`. 

We'll use these scales to define the `cx` and `cy` values for each of our circles. To do so, we'll need to iterate on each datapoint and render something. 

## Iterate with an `{#each}` block

In Svelte, an `{#each}` block<more-info content="These blocks of code function similarly to a for loop, but in our markup." href='https://svelte.dev/tutorial/each-blocks'></more-info> enables us to render listed content programatically, and include multiple attributes in the resulting markup.

For our data, we'll want to iterate over each *row* of our data, and pass each *row'*s `mpg` and `hp` (or whatever value you want to pass to the scatterplot) into a component that will eventually render some SVG.

Lets learn by doing. If we simply iterated on each row and wrote out our MPG and HP values, it would look like this:

<iframe loading="lazy" src="https://svelte.dev/repl/7e3ec27da41440e880a49f83068fd97a?version=3.42.1
" width="100%" height='600' title="Simple each block"></iframe>

But we don't want to write out our values, we want to:

1. Transform those values into points on the canvas
2. Pass them to a component that will render SVG elements

To transform ...

<!-- FIXME: Should scaling come first, or each blocks? -->

## Create a `<Circle />` component

Next, we want to create a `<Circle />` component that will take in our mapped data, and display an SVG with the appropriate attributes. We first import our props, like so:

```svelte
<script>
  export let cx;
  export let cy;
</script>
```

