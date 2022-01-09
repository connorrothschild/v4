---
layout: blog
title: Build your first scrollytelling visualization with Svelte
description: (In like 100 lines of code)
date: "2022-01-09"
image: svelte-and-d3/header.png
archived: false
featured: true
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

<svelte:head>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</svelte:head>

Scrollytelling has become a fundamental component of data visualization in most modern newsrooms. It's also one of the most apparently technically challenging techniques to master. I've been interested in scrollytelling for a while; I've created one of the few scrollytelling articles [in R](https://www.connorrothschild.com/post/automation-scrollytell), and since then I've been relying on Javascript frameworks like [Vue](https://www.connorrothschild.com/project/cudi-hums) and [Svelte](https://www.connorrothschild.com/project/bob-ross-art-gallery) to make scrollytelling easier.

In my experience, the developer experience of creating a scrollytelling visualization has the least friction when working in Svelte. This is thanks to reusable components, built-in tweening of numbers, and easy integration with D3.

<Info>

Svelte is good for data visualization in general. If you want a primer of using Svelte with D3 to create visualizations more generally, check out [this post](https://www.connorrothschild.com/post/svelte-and-d3).

</Info>

What follows is a guided introduction to your first Svelte scrollytelling story. It leverages 1) Russell Goldenberg's reusable `<Scrolly />` component to track the user's scroll position, 2) Svelte's built-in `tweened` values to cleanly transition datapoints, and 3) D3 scales to convert these raw values to points on a plot. By the end of this tutorial, you'll be able to create something that looks roughly like [this](https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3):

<iframe loading="lazy" src="https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3
" width="100%" height='700' title="A Svelte Scrollytelling example"></iframe>

Before we create the chart, let's take a brief look at the elements at play. (If you're already familiar with these concepts, feel free to [skip to the creation of our chart](#step-1-build-a-chart)).

## Step 0a: Understand Russell's `<Scrolly />`

Russell Goldenberg's `Scrolly` component is a reusable `.svelte` file which developers can easily plug into their code.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A <a href="https://twitter.com/sveltejs?ref_src=twsrc%5Etfw">@sveltejs</a> scrollytelling component in &lt; 100 lines. <a href="https://twitter.com/SvelteSociety?ref_src=twsrc%5Etfw">@SvelteSociety</a> <a href="https://t.co/l8fOJaiwkX">https://t.co/l8fOJaiwkX</a> <a href="https://t.co/VJclnWSmhT">pic.twitter.com/VJclnWSmhT</a></p>&mdash; Russell Goldenberg (@codenberg) <a href="https://twitter.com/codenberg/status/1432774653139984387?ref_src=twsrc%5Etfw">August 31, 2021</a></blockquote>

It's not super important you understand how the component *is built*, but rather how *you can use it*. In action, you can include the `Scrolly` component in your code like so:

<Code language='svelte' highlightedLines={"6,8"}>

```
<script>
    import Scrolly from "./Scrolly.svelte";
    let currentStep;
</script>

<Scrolly bind:value={currentStep}>
    {#each [1,2,3] as text, i}
        <div class="step" class:active={currentStep === i}>
            <div class="step-content">
                <p>Step {text}</p>
            </div>
        </div>
    {/each}
</Scrolly>
```

</Code>

This renders three bits of text, and applies a class of `active` to the current step.

Thanks to line 6, **`currentStep` will be bound to the current step index**. (Russell's `Scrolly` component is handling this—you don't have to worry about it.) In other words, as you scroll down and the first step comes into focus, `currentStep` will be set to 0.

Then, on line 8, we set an `active` class to the step content if `currentStep` is equal to the step index. Practically, this means that we can make sure that the step in focus is visually distinct from others (e.g. by changing its background or text color). 

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

Don't worry too much about what's happening here. In simple terms, `.step` will be the container for each step, and `.step-content` will be the text content of each step. We want these two to be distinct so that `.step` can take up the full window height (e.g. there won't be multiple steps in view at the same time), and so that `.step-content` can fit nicely into a text box. (This structure is quite standard for most scrollytelling pieces.)

Then, in our final rule, we make our `.step-content` element (the text box) stand out if it is active.

This results in a simple (text-only) scrollytelling experience, where the text that is in focus also stands out visually. Notice how the steps are inactive at the top and bottom of the screen? 

<iframe loading="lazy" src="https://svelte.dev/repl/ec07a8fd46684d2d8fbcda679d65d296?version=3.44.3
" width="100%" height='600' title="A text-only scrollytelling experience"></iframe>

Notice that we (on line 6) create a `steps` array that contains paragraphs that we include in each step; this makes integrating prose a bit easier.

Congrats! You've completed the first step of your Svelte scrollytelling project. If all we wanted to do was toggle the visual appearance of text elements, we would be done. (But we don't. We instead want to include data, as we explain below.)

## Step 0b: Understand `tweened` values

Now that our app tracks the user's scroll position and which step is in focus, we **want to modify the data in focus based on the active step**. This is common in scrollytelling articles; the user scrolls and the chart elements (e.g. points) animate to new positions.

In our case, we'll achieve this by using [Svelte's `tweened` values](https://svelte.dev/tutorial/tweened). **By creating a tweened value, we tell Svelte that changes to that value should be animated.** Rather than immediately jump from our first number (e.g. 100) to the next (e.g. 200), the tweened value will smoothly transition between the two numbers (e.g. 100, 101... 200).

Below, you can see what this looks like in action. This example includes a tweened value that changes according to the current step (watch the bottom left as you scroll).

<Code language="svelte">

```
<script>
  import Scrolly from "./Scrolly.svelte";

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
  <Scrolly bind:value={currentStep}>
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

Notice how the value begins tweening **as soon as a new step becomes active**. These are *triggers*, not *scrubbers*—the transition occurs at the point at which a new step becomes active, and the tween is **not** linked to the scroll position.

In our scrollytelling piece, we'll leverage `tweened` values to **transition the x positions of elements in a scatterplot**. We'll add to our example from above by adding some *data* to our steps, and animate between those datapoints at each step. 

In simple terms, the logic will look like this:

1. Active step updates based on viewport
2. Tweened values update based on active step
3. Points animate to their new x position based on tween

Now that we understand tweening, let's create a minimal scatterplot to animate!

## Step 1: Build a chart

Let's begin by building a simple, static scatterplot. The scatterplot will have 9 points, each with an x and y position.

<Info>

This scatterplot is intentionally minimal and therefore omits certain best practices, such as responsiveness. (We assign a fixed width and height of 400px.) I'm attempting to minimize the non-scrollytelling code to make this tutorial more streamlined. 

[The final version of this scatterplot](https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3) is responsive and follows other best practices, but is a bit more complex.

</Info>

In order to create our chart, we obviously need data:

<Code language="js" showLanguage={false}>

```
  let data = [
    { foo: 4, bar: 1 },
    { foo: 6, bar: 7 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 4 },
    { foo: 8, bar: 2 },
    { foo: 9, bar: 9 },
    { foo: 5, bar: 3 },
    { foo: 3, bar: 8 },
    { foo: 1, bar: 6 },
  ];
```

</Code>

For this scatterplot, we will set `foo` to correspond to *each points' x position*, and `bar` to correspond to *their y positions*.

Here, we'll need some way to map "raw values" to "computed values"—that is, we want the number *9* (the highest in our dataset) to be at the upper bound of our chart.

### Scale the values!

**[D3 scales](https://www.d3indepth.com/scales/)** are the conventional way of mapping one set of values (e.g. raw numbers) to another (e.g. computed ones). Although an in-depth look at D3 scales is beyond the scope of this tutorial, our scales will look like this:

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

Essentially, for both our x and y values, we are creating a function that will take in something within the *domain* (e.g. 5, right in the middle), and spit out a value within the *range* (e.g. 200, because that is the midpoint of the specified range).

Still not making sense? Here's an interactive example: input a number between 1 and 9 and see the position in our range that it outputs.

<D3ScaleExample />

We use scales like this one to map our raw values, ranging from 1 to 9, to a corresponding position on our chart, ranging from 0 to our chart width (in our case, 400px).

Now that we understand D3 scales, let's include them in our scatterplot to map `foo` and `bar` to x and y positions.

We're going to create an SVG with a width and height of 400px, and then we'll loop through our `data` array we created earlier with an `{#each}` block. For each point, we'll create a `circle` element with a `cx` and `cy` attribute that are computed via `xScale` and `yScale`. Focus on lines 28 through 40:

<iframe loading="lazy" src="https://svelte.dev/repl/02141d866af743f18546e988ca8ce721?version=3.38.3
" width="100%" height='600' title="A simple Svelte scatterplot"></iframe>

Nice! This (admittedly imperfect) chart will be a good starting point for our final scrollytelling visualization. Let's combine what we've learned about tweening, scrollytelling, and this chart to finish up.

## Step 2: Tween x positions

In the static chart above, we have an array of objects, each with a `foo` and `bar` property. By using D3 scales, we map each of these properties to positions on our chart.

In a dynamic, scrollytelling visualization, we'll want these values to be dynamic and tweenable. In order to achieve this, we'll make a `tweened` array, where each value in that array is animatable just like the tweened values we looked at earlier.

Practically, that means we would instantiate a `tweened` array with our starting x positions, as you see on line 15 below. Then, we can set that array to contain new values with the functions between lines 17 and 22. Go ahead and try below!

<Code language="svelte" highlightedLines={"15,17-22"}>

```
<script>
  let data = [
    { foo: 4, bar: 1 },
    { foo: 6, bar: 7 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 4 },
    { foo: 8, bar: 2 },
    { foo: 9, bar: 9 },
    { foo: 5, bar: 3 },
    { foo: 3, bar: 8 },
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

The takeaway here is that we can tween *arrays* the same way that we tween *numbers*. This should make it more clear how we can animate the positions of our circles!

Once we have a tweened array of x positions, we can reference the values in our markup in an `{#each}` loop via their index, like this:

<Code language="svelte">

```
<svg>
    {#each data as d, index}
        <circle
            cx={xScale($tweenedX[index])}
            cy={yScale(d.bar)}
            r={15}
        />
    {/each}
</svg>
```

</Code>

Practically, we're just passing each value in our array into the `xScale` and `yScale` that we created earlier. Not much has changed.

The main difference is that, now, if and when these values change, they will animate smoothly. The D3 scales will convert each `tweened` value (even the ugly decimals) to a position on the chart.

In the REPL below, you can see this code in action. Notice how, if you click on either of the buttons, the x positions of our circles animate smoothly:

<iframe loading="lazy" src="https://svelte.dev/repl/f84ec7ba710349bdaa4d605939b0e9ed?version=3.38.3
" width="100%" height='600' title="An example of tweening circle positions"></iframe>

Here, we're seeing the power of combining 1) Svelte's `tweened` values, 2) Svelte's `{#each}` loops, and 3) D3 scales.

By combining these three concepts, we've built an animated chart in 55 lines of code! (And 10 of those lines are just defining the data, but who's counting?)

## Step 3: Animate point positions via scroll

Our final step is to trigger the animations between point positions (as we do above with buttons) via the user's scroll. Here, we're going back to Russell's `<Scrolly />` component.

Recall in an [earlier example](#step-0b-understand-tweened-values) we triggered an update to our tweened object in a code block like this:

<Code language="svelte">

```
<script>
  $: if (currentStep == 0) {
    // Do something here
  } else if (currentStep == 1) {
    // Do something else here
  } else if (currentStep == 2) {
    // Or do something here!
  }
</script>
```

</Code>

This bit of code uses Svelte's [dollar label operator](https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive) `$:` to run code reactively. In action, this means that the above `if... else` block will run *every time the variable `currentStep` changes*. Then, depending on the value of `currentStep`, the `if... else` block will evaluate differently. 

<Info>

For React users, this is similar to `useEffect`, and Vue users can compare it to `watch` properties.

</Info>

All we need to do now is update `currentStep` via `<Scrolly />`, and update our tweened data array in our `if... else` block. In combination, the process will look like this:

1. Trigger updates to `currentStep` via `<Scrolly />`
2. Tween our array of data in our `$: if... else` block 
3. Pass the tweened data into our `{#each}` loop which renders SVG circles

Here's a complete example combining all of the insights we've discussed so far:

<iframe loading="lazy" src="https://svelte.dev/repl/81194f65fdc74601930df7974fb9ffff?version=3.38.3
" width="100%" height='700' title="A Svelte Scrollytelling starter"></iframe>

## Next steps

We could extend upon our chart in a few ways. The logic that we used to tween x positions is extensible across any value that can be animated. We could do the same tweening to each circles' y positions, or their radius. Now that we understand the pattern that enables scroll-driven tweening, we can use it for things like position, size, and color.

And in visuals other than scatterplots, we could use scroll-driven interaction to tell a more dynamic story, such as linking an interactive map's viewport to the user's scroll position, as we see in this [article](https://www.ons.gov.uk/visualisations/dvc1371/#/E07000223) from the UK's Office of National Statistics:

<Image src="/images/post/svelte-scrollytelling/map.gif" alt="A map that zooms out on scroll to show new datapoints" />

## A final, polished example

The scrollytelling visual we created was a starter kit, and as a result it neglected certain best practices. For completion's sake, here's a [REPL](https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3) with a complete, polished scrollytelling visualization.

This example separates the charting logic into its own `<Scatterplot />` component, and includes a few lines of CSS to make it more responsive. When the canvas is larger than 767 pixels, it will place the text to the left of the chart, rather than directly on top of it. It also tweens the x and y positions simultaneously.

<iframe loading="lazy" src="https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3
" width="100%" height='700' title="A Svelte Scrollytelling example"></iframe>

Thanks for reading! As always, feel free to [ping me](https://twitter.com/CL_Rothschild) with questions, comments, or tips.