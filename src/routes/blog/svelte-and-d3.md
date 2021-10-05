---
layout: blog
title: "Making visualizations literally using Svelte + D3"
description: Why Svelte has replaced (and complemented) D3 as my go-to tool for powerful visualizations
image: 'lorem'
date: "2021-07-02"
featured: true
---

<script>
  // import Counter from "$lib/Counter.svelte"
  import Code from "$lib/global/Code.svelte"
  import Image from "$lib/global/Image.svelte"
  import Info from "$lib/global/Info.svelte"
</script>

<style>
html {
    scroll-behavior: smooth;
}

svg {
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
  border-radius: 6px;
}

rect {
  width: 100%; 
  height: 100%;
  /* fill: rgb(var(--primary), .5); */
}

circle {
  cursor: crosshair;
}
</style>

When I started making data visualizations, I considered [D3](https://d3js.org/)—Data Driven Documents—to be the gold standard programming language required to create beautiful graphics on the web.

As I progress in my career, I'm realizing that D3 has a more particular (and smaller) role in the visualization lifecycle than I initially envisioned. As I design more visualizations, I'm learning that my most efficient and intuitive development comes when I **program literally**. 

What does that mean? (To be honest, I'm making up the term.) It means that I'm moving away from *pseudo-declarative* data visualization in D3, and starting to make my visualizations *literally*, by simply writing markup in [Svelte](https://svelte.dev/). 

Although D3 [claims](https://d3js.org/#selections) to be declarative, it still uses [method chaining](https://www.carlosrendon.me/unfinished_d3_book/d3_method_chaining.html) to provide instructions to render visuals. In Svelte, we don't provide instructions but instead render our SVG elements directly, using `{#each}` blocks. By writing my markup literally and appending data inline, my code makes more sense and causes fewer headaches.

#### What you'll find in this post 

In this post, I'll [1)](#what-d3-does-3%EF%B8%8F⃣) provide an overview of D3, and how it made the process of creating visualizations so much easier; [2)](#literal-programming-with-svelte-) explain why I'm moving away from D3 for DOM manipulation, and instead using Svelte "literally"; and [3)](#bringing-it-home-with-burgers-) provide a funky burger 🍔 example to explain my logic.

 <Info>

This is not a comprehensive tutorial about **how to** use D3 and Svelte together. I'll cover that in the [future](https://twitter.com/CL_Rothschild). In the meantime, check out tutorials from [Matthias Stahl](https://www.youtube.com/watch?v=bnd64ZrHC0U), examples of Svelte and D3 in action on The Pudding's [GitHub](https://github.com/the-pudding/), and an example of similar framework-driven logic on Amelia Wattenberger's [blog](https://wattenberger.com/blog/react-and-d3). 

Want an immediate example? Here's an (admittedly verbose) [Svelte component](https://github.com/connorrothschild/bob-ross-art-gallery/blob/master/src/components/ColorViz.svelte) I used in a recent project about Bob Ross.

</Info> 

## What D3 does 3️⃣ 

D3 allows for intuitive transformations of the DOM by leveraging easy-to-understand selection syntax. Sound confusing? Let's learn through an example (adapted from the [D3 homepage](https://d3js.org/#selections)). Imagine we had 5 circles and wanted to change the fill of each. 

<svg>
  <rect width="100%" height="100%"></rect>
  <circle cx="10%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="50%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="70%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="90%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
</svg>

In the traditional [HTML DOM model](https://www.w3schools.com/js/js_htmldom.asp), we would 1) select all circles, 2) loop through each one, and 3) redefine its fill. In code, that would look like this:

<Code language='js' showLineNumber={false} filename="File.js" highlightedLines="2-3, 1">

  ```
  var circles = document.getElementsByTagName("circle");
  for (var i = 0; i < circles.length; i++) {
    var circle = circles.item(i);
    circle.setAttribute("fill", "white", null);
  }
  ```

</Code>

Doing this in D3 would reduce the length of our code by a factor of 5, and allows us to write in a way that *just makes sense*. Here, we select every circle and change its fill.

<Code language='js' showLineNumbers='{true}' filename="File.js">
d3.selectAll("circle").style("fill", "white")
</Code>

<svg>
  <rect width="100%" height="100%"/>
  <circle cx="10%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="50%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="70%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="90%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
</svg>

Imagine if you also wanted to bind data to those circles. That is, you wanted to fill the circle according to some attribute, or size its radius according to some datapoint. In traditional JavaScript, that might look something like this:

```js
let data = [5, 10, 15, 20, 25];

var circles = document.getElementsByTagName("circle");
for (var i = 0; i < circles.length; i++) {
  var circle = circles.item(i);
  circle.style.setProperty("r", data[i], null);
}
```

Not too hard—but also, not too easy. D3 simplifies this logic by removing the need for a loop and iterating on your selection for you:

```js
let data = [5, 10, 15, 20, 25];

d3.selectAll("circle").data(data).attr("r", d => d)
```

<svg>
  <rect width="100%" height="100%" />
  <circle cx="10%" cy="50%" r="5"  fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="50%" cy="50%" r="15" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="70%" cy="50%" r="20" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="90%" cy="50%" r="25" fill="white"><title>Hello from the circle!</title></circle>
</svg>

Again, we reduce the length of our code nearly 5x, and the code just **makes sense**.

All that to say, D3 is great. It works, and it works wonderfully. By removing the need to write highly imperative code that is unintuitive in nature, D3 saves developers time and allows for more powerful visualizations.

But I'm hardly using it at all recently. Increasingly, I've been using the JavaScript ~~framework~~ compiler [Svelte](https://svelte.dev/) to *write SVG directly* rather than *tell JavaScript to write SVG*. How? Let's see below.

## "Literal" programming with Svelte 🗣

Going back to the above circles, imagine if we could simply bind our data to our app's markup **directly**, without any intermediate code serving as instructions.

**We can!** Svelte (and Vue, React and other frameworks) allow for seamless interactions between our app's logic, data, and markup, so that we can embed data directly into our SVG elements. In this new paradigm, we could replace the set of D3 instructions from earlier with the following Svelte code:

```svelte
<script>
  let data = [{x: 10, r: 5 }, 
              {x: 30, r: 10}, 
              {x: 50, r: 15}, 
              {x: 70, r: 20}, 
              {x: 90, r: 25}]
</script>

<p>{data.map(x => x)}</p>
```

<svg>
  <rect width="100%" height="100%"/>
  <circle cx="10%" cy="50%" r="5"  fill="white"><title>Hello from the circle with a radius of 5!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="white"><title>Hello from the circle with a radius of 10!</title></circle>
  <circle cx="50%" cy="50%" r="15" fill="white"><title>Hello from the circle with a radius of 15!</title></circle>
  <circle cx="70%" cy="50%" r="20" fill="white"><title>Hello from the circle with a radius of 20!</title></circle>
  <circle cx="90%" cy="50%" r="25" fill="white"><title>Hello from the circle with a radius of 25!</title></circle>
</svg>

In my view, there are three benefits to writing our code this way:

1. **More intuitive authoring.** It feels much more natural to write our SVG elements *directly* rather than provide D3 instructions on how to do so.
2. **Less friction in translating D3 to the DOM.** By writing SVG directly, we could copy an SVG element from the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle), paste in our values, and see immediate results. Fewer handoffs results in fewer errors.
3. **Reusability.** Creating a robust and flexible `<Circle />`, `<Bar />`, or `<Axis />` component permits consistent reuse within and across projects. D3 code is usually written as a series of blocks which lacks a natural structure and becomes difficult to reuse effectively.

The only downside (which is actually just an adjustment) is that this new approach requires you to learn how to [write SVG](https://www.w3schools.com/graphics/svg_intro.asp). But isn't it a good exercise to learn the anatomy of what we're actually creating? Having knowledge of SVG elements and attributes will benefit any developer who creates visuals, no matter how they eventually do so.

Not convinced? Let me explain the logic one more time, with a tastier example:

## Bringing it home with burgers 🍔

Imagine we want to prepare a burger. We have an array of objects, each with an ingredient and ingredient-specfic instructions. We want to 1) create each item (insert it into the DOM), and 2) carry out its instructions (execute some function).

```js
let ingredients = [
  {item: "Top Bun", instruction: "Place at top of burger."},
  {item: "Pickles", instruction: "Three pickles, please."},
  {item: "Cheese", instruction: "Cheese is optional, but it makes the burger better."},
  {item: "Patty", instruction: "Cook to your satisfaction. Optionally, add two patties."},
  {item: "Tomato", instruction: "Should be the same width as bun, and thinly sliced."},
  {item: "Lettuce", instruction: "Should be the same width as bun."},
  {item: "Bottom Bun", instruction: "Place at bottom of burger."},
]
```

There are three ways to make this burger (at least, in our fantasy world where we make burgers via code).

<Info>

Although I use the Svelte REPL to showcase these three examples, only the last one requires Svelte. The REPL is just a nice place to host (editable!) code 🙂
  
</Info>

**The first option** (old school) is to tell your app to loop through each ingredient, add it to the others, and stack the ingredients accordingly. For each ingredient in the loop, execute the burger-making according to our ingredient-specific instruction. This is how burgers would have been made, painfully, before D3.

<iframe src="https://svelte.dev/repl/4b4eee03981b4450aa08e402aa0ceeb6?version=3.38.3" width="100%" height='600' title="Old school burger building"></iframe>

**The second option** (new school) is to tell your app to read in each ingredient and instruction through D3 method chaining. We remove the need for our verbose `for` loop, and use the chain to give D3 a set of sequential instructions.

<iframe src="https://svelte.dev/repl/8198de15de314aee860932629370ed09?version=3.38.3" width="100%" height='600' title="New school burger building"></iframe>

**Our final option** (new new school), we can simply append our instructions directly to the ingredient, *literally*. Here, we skip `for` loops and we skip D3 method chaining; instead, we componentize our general "burger item" and pass each ingredient/instruction directly to that component. Only Svelte enables such burgers:

<iframe src="https://svelte.dev/repl/f64bd9dcface42a1a2d544b35638631e?version=3" width="100%" height='600' title="Literal burger building"></iframe>

Which do you prefer? It's much easier to make a burger by *just making it*, rather than giving instructions, no matter what form they come in. Frameworks allow for the construction of burgers—and visualizations—**literally**. We write our ingredients (or DOM elements) directly, and include our instructions (or data) in our markup. Now that's a tasty burger.

## The big picture 🖼

1. Svelte allows visualization developers to **write SVG directly** (and avoid telling D3 what to do), while using Svelte syntax (`{#each}`, etc.) to avoid annoying and inefficient `for` loops. 
2. Including logic directly in your markup (`{#if}`, etc.) removes the need for complex JavaScript/DOM interactions (more on that below). 
3. Svelte works to *complement* D3, not replace it, by continuing to leverage the most powerful parts of its API: `d3-scale`, `d3-array`, `d3-shape`, etc.

<hr/>

## Bonus perks 🏆

Using Svelte to create visualizations has a few other perks:

### Responsiveness

By using Svelte's [reactive declarations](https://svelte.dev/tutorial/reactive-declarations) (the dollar signs 💰), we can make certain variables  'watch' for state changes and update automatically. One huge benefit of this is that we can bind our scales to updating values such as the window width, and write minimal code to make our charts update on resize.


```svelte
import  windowWidth from "../stores/store.js";
import  scaleLinear from 'd3-scale';

$: xScale = scaleLinear
            .domain(data.map(d => d.value))
            .range([0, $windowWidth])
```       

With some other component watching and responding to resize events (such as [Window.svelte](https://github.com/the-pudding/svelte-starter/blob/master/src/components/helpers/Window.svelte)), any SVG property depending on `xScale` will automatically update when your window resizes. You can also set the chart width itself to equal `$windowWidth` for a fully resizable, responsive chart.

<Info>

Another way to achieve easy responsiveness is to <a href="https://svelte.dev/tutorial/dimensions" target="_blank">bind the SVG's parent container's div width</a> to some variable (<code>width</code>) and set the SVG's width to match.
  
</Info>

### If/else blocks

In regular D3, we often use the [ternary operator](https://en.wikipedia.org/wiki/%3F:) to define condition-specific attributes, like this:

```js
// Circles are filled green if positive, red if negative
d3.selectAll('circle')
  .style('fill', d => d.value < 0 ? 'red' : 'green')
```

This is great, but what if we want to make more significant changes based on app-wide state? For example, imagine we want to show three different types of the same visualization on different screen sizes: 

1. Desktop (over 1024px)
2. Tablet (520px to 1024px)
3. Mobile (under 520px)

In D3, we would achieve this by adding a resize event listener, providing custom breakpoints, and rendering different visuals if the updated window width were within a certain range. The complicated part would be having to render a different visual at each breakpoint.

One key difference between relying on D3 and leveraging the power of Svelte is that Svelte allows for [conditional rendering](https://svelte.dev/tutorial/if-blocks) *directly in our markup*, not just in our JavaScript logic. In other words, while vanilla JavaScript would approach our problem with the following:

```js
window.addEventListener('resize', function(event) {
    let newWidth = window.innerWidth;

    if (newWidth < 520) { 
      // Hide tablet and desktop
      document.getElementById("tablet").style.display = "none";
      document.getElementById("desktop").style.display = "none";

      // Show mobile
      document.getElementById("mobile").style.display = "block";
    } else if (newWidth < 1024) {
      // Hide mobile and desktop
      document.getElementById("mobile").style.display = "none";
      document.getElementById("desktop").style.display = "none";

      // Show tablet
      document.getElementById("tablet").style.display = "block";
    } else {
      // Hide mobile and tablet
      document.getElementById("mobile").style.display = "none";
      document.getElementById("tablet").style.display = "none";

      // Show desktop
      document.getElementById("desktop").style.display = "block";
    }
});
```

Svelte simplifies our logic to:

```svelte
{#if $windowWidth < 520}
  <Mobile />
{:else if $windowWidth < 1024}
  <Tablet />
{:else}
  <Desktop />
{/if}
```

Hey, thanks for reading. I appreciate you! In the event that you disagree with me or I got something wrong, please message me on [Twitter](https://twitter.com/CL_Rothschild).