---
layout: blog
title: Build your first scrollytelling article with Svelte
description: (It's easy)
date: "2021-12-17"
image: svelte-and-d3/header.png
draft: true
tags: ['svelte', 'd3', 'tutorial']
---

<script>
  import Code from "$lib/Global/Code.svelte"
  import Image from "$lib/Global/Image.svelte"
  import Info from "$lib/Global/Info.svelte"

  import TweenedExample from "$lib/Global/Blog/svelte-scrollytelling/TweenedExample.svelte"
  import D3ScaleExample from "$lib/Global/Blog/svelte-scrollytelling/D3ScaleExample.svelte"
  import TweenedXPositionExample from "$lib/Global/Blog/svelte-scrollytelling/TweenedXPosition.svelte"
</script>

Tk intro

What follows is a guided introduction to your first Svelte scrollytelling story. It leverages Russell Goldenberg's reusable `<Scrolly />` component to track the user's scroll position, and Svelte's built-in `tweened` values to animate DOM elements' positions.

To best understand how these two elements complement one another, let's take a brief look at both.

### Step 0: Understand Russell's `<Scrolly />`

Russell Goldenberg's `Scrolly` component is a reusable `.svelte` file which developers can easily plug into their code. Here, he explains it briefly in a Tweet:

tk tweet embed

In action, you can include the `Scrolly` component in your code like so:

<Code language='svelte' highlightedLines={"5,7"}>

```
<script>
    let currentStep;
</script>

<Scrolly bind:value={currentStep}>
    {#each [1,2,3] as text, i}
        <div class="step" class:active={currentStep === i}>
            <div class="step-content">
                <p>{text}</p>
            </div>
        </div>
    {/each}
</Scrolly>
```

</Code>

This renders three bits of text, and applies a class of `active` to the current step.

Thanks to line 5, **`currentStep` will be bound to the current step index**. (Russell's `Scrolly` component is handling this—you don't have to worry about it.) In other words, as you scroll down and the first step comes into focus, `currentStep` will be set to 0.

Then, on line 7, we set an `active` class to the step content if `currentStep` is equal to the step index. Practically, this means that we can make sure that the step in focus is visually distinct from others. 

To showcase exactly how this works, let's add some minor styling to our `.step` and `.step-content` elements:

<Code language="css">

```
.step {
    height: 90vh;
    display: flex;
    place-items: center;
    justify-content: center;
}

.step-content {
    background: whitesmoke;
    color: #ccc;
    padding: .5rem 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    transition: background 500ms ease, color 500ms ease;
}

.step.active .step-content {
    background: white;
    color: black;
}
```

</Code>

In simple terms, `.step` will be the container for each step, and `.step-content` will be the text content of each step. We want these two to be distinct so that `.step` can take up the full window height (e.g. there won't be multiple steps stacked on top of one another), and so that `.step-content` can fit nicely into a text box. (This is quite standard for most scrollytelling pieces.)

Then, in our final rule, we make our `.step-content` element (the text box) stand out if it is active.


This results in a simple (text-only) scrollytelling experience, where the text that is in focus also stands out visually (notice how the steps are inactive at the top and bottom of the screen?): 

<iframe loading="lazy" src="https://svelte.dev/repl/ec07a8fd46684d2d8fbcda679d65d296?version=3.44.3
" width="100%" height='600' title="A text-only scrollytelling experience"></iframe>

Notice that we create a `steps` array that includes paragraphs that we include in each step; this makes including prose a bit easier.

Congrats! You've completed the first step of your Svelte scrollytelling project.

## Step 0b: Understand `tweened` values

Now that our app tracks the user's scroll position and which step is in focus, we **want to modify the data in focus based on the active step**. This is common in scrollytelling articles; the user scrolls and the chart elements (e.g. points) animate to new positions.

Tk example here

In our case, we'll achieve this by using Svelte's `tweened` values. By creating a tweened value, we tell Svelte that changes to that value should be tweened, or animated. Rather than immediately jump from number 1(e.g. 100) to number 2 (e.g. 200), the tweened value will smoothly transition between the two numbers (e.g. 100, 101, 102...).

Below, you can see what this looks like in action. This example includes a tweened value that changes according to the current step (watch the bottom left as you scroll).

<Code language="svelte">

```
<script>
  import Scroll from "./Scroll.svelte";

  import { tweened } from "svelte/motion";
  let number = tweened(0);
  
  let currentStep;

  $: if (currentStep == 0) {
    number.set(100);
  } else if (currentStep == 1) {
    number.set(200);
  } else if (currentStep == 2) {
    number.set(300);
  }
</script>

<section>
  <Scroll bind:value={currentStep}>
    {#each [1,2,3] as text, i}
      <div class="step" class:active={currentStep === i}>
        <div class="step-content">
          <p>Step {text}</p>
        </div>
      </div>
    {/each}
    <div class='sticky'>{Math.round($number)}</div>
  </Scroll>
</section>
```

</Code>

<TweenedExample />

Notice how the value begins tweening whenever a new step becomes active. 

In our scrollytelling piece, we'll leverage `tweened` values to **transition the x and y positions of elements in a scatterplot**. We'll add to our example from above by adding some *data* to our steps, and animate between those datapoints at each step. 

In simple terms, the logic looks like this:

1. Active step updates based on viewport
2. `tweened` value updates based on active step
3. Points will animate to their new x and y position based on tween

Now that we understand tweening, let's create a minimal scatterplot to animate!

## Step 1: Build a chart

Let's begin by building a simple, static scatterplot. The scatterplot will have 9 points, each with an x and y position.

<Info>

This scatterplot is intentionally minimal and therefore omits certain best practices, such as responsiveness. I'm attempting to minimize the non-scrollytelling code to make this tutorial more streamlined. 

[The final version of this scatterplot](LINK LINK TK TK) is responsive and follows other best practices.

</Info>

In order to create our chart, we obviously need data:

<Code language="svelte">

```
  let data = [
    { foo: 4, bar: 1 },
    { foo: 1, bar: 3 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 5 },
    { foo: 8, bar: 6 },
    { foo: 9, bar: 5 },
    { foo: 5, bar: 3 },
    { foo: 4, bar: 8 },
    { foo: 1, bar: 6 },
  ];
```

</Code>

For this scatterplot, lets set `foo` to correspond to each points' x position, and `bar` to correspond to their y positions.

Here, we'll need some way to map 'raw values' to 'computed values'—that is, we want the value *9* (the highest in our dataset) to be at the upper bound of the chart.

### Scale the values!

**D3 scales** are the conventional way of mapping one set of values (e.g. raw numbers) to another (e.g. computed ones). Although beyond the scope of this tutorial, our scales will look like this:

<Code language="svelte">

```
<script>
import { scaleLinear } from "d3-scale";

let width = 400;
let height = 400;

let xScale = scaleLinear()
    .domain([0, 10])
    .range([0, width]);

let yScale = scaleLinear()
    .domain([0, 10])
    .range([height, 0]);
</script>
```

</Code>

Essentially, for both our X and Y values, we are creating a function that will take in something within the *domain* (e.g. 5, right in the middle), and spit out a value within the *range* (e.g. 200, because that is midpoint of the specified range).

Still not making sense? Here's an interactive take: input a number between 1 and 9 and see the position in our range that it outputs.

<D3ScaleExample />

We use scales like this one to map our raw values, from 1 to 9, to a corresponding position on our chart, from 0 to the chart width (in our case, 400px).

Now that we understand D3 scales, lets include them in our scatterplot to map `foo` and `bar` to x and y positions.

We're going to create an SVG with a width and height of 400px, and then we'll loop through our `data` array we created earlier with an `{#each}` block. For each point, we'll create a `circle` element with a `cx` and `cy` attribute that are computed via `xScale` and `yScale`.

<iframe loading="lazy" src="https://svelte.dev/repl/02141d866af743f18546e988ca8ce721?version=3.38.3
" width="100%" height='600' title="A simple Svelte scatterplot"></iframe>

Now that we have a chart, we can begin introducing what we've learned about scrollytelling and tween to build our first scrollytelling visualization!

## Step 2: Tween x and y positions

In the static chart above, we have an array of objects, each with a `foo` and `bar` property. By using D3 scales, we map each of these properties to positions on our chart.

In a dynamic, scrollytelling visualization, we'll want these values to be dynamic and tweenable. In order to achieve this, we'll make a `tweened` array, where each value in that array is animatable just like the tweened values we looked at earlier.

Practically, that means we would instantiate a `tweened` array with our starting x positions, as you see on line 15. Then, we can set that array to equal new values with the functions between lines 17 and 22. Go ahead and try below!

<Code language="svelte" highlightedLines={"15,17-22"}>

```
<script>
  let data = [
    { foo: 4, bar: 1 },
    { foo: 1, bar: 3 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 5 },
    { foo: 8, bar: 6 },
    { foo: 9, bar: 5 },
    { foo: 5, bar: 3 },
    { foo: 4, bar: 8 },
    { foo: 1, bar: 6 },
  ];
  
  import { tweened } from "svelte/motion";
  const tweenedX = tweened(data.map((d) => d.foo));

  const setFoo = function () {
    tweenedX.set(data.map((d) => d.foo));
  };
  const setBar = function () {
    tweenedX.set(data.map((d) => d.bar));
  };
</script>

<button on:click={setFoo}>Foo</button>
<button on:click={setBar}>Bar</button>
<p> Your values:
    {#each $tweenedX as x}
        {x}
    {/each}
</p>
```

</Code>

<TweenedXPositionExample />

Now we know how to tween an array of numbers, and hopefully now it becomes clear how we can animate the positions of our circles!

We'll mimic what we just did for our x positions for our y positions.

Once we have a tweened X array and a tweened Y array, we can reference the values in our markup in an `{#each}` loop via their index, like this:

<Code language="svelte">

```
<svg>
    {#each data as d, index}
        <circle
            cx={xScale($tweenedX[index])}
            cy={yScale($tweenedY[index])}
            r={15}
        />
    {/each}
</svg>
```

</Code>

Practically, we're just passing each value in our array into the `xScale` and `yScale` that we created earlier. Not much has changed.

The main difference is that, now, if and when these values change, they will animate smoothly. The D3 scales will convert each `tweened` value (even the ugly decimals) to a positon on the chart.