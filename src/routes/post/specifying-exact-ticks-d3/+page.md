---
layout: blog
title: "Specifying an exact number of ticks for your D3 scale"
description: A convenient utility function, which allows you to specify an exact number of ticks for your D3 scale.
# image: svelte-and-d3/header.png
date: "2023-02-03"
featured: true
tags: ["d3", "tutorial"]
---

<script>
  import Code from "$lib/Global/Code.svelte"
  import Image from "$lib/Global/Image.svelte";
  import Info from "$lib/Global/Info.svelte";

  import TicksExample from "$lib/Global/Blog/d3-ticks/TicksExample.svelte";
</script>

The year is 2023, and you're trying to do something you think should be simple: specify an exact number of ticks for your D3 scale.

You do some research online and encounter the [`scale.ticks` method](https://observablehq.com/@d3/scale-ticks), which is supposed to do exactly that:

> scale.ticks returns an array of values sampled from the scale’s domain.

The method takes a single (optional) argument, which is the number of ticks you want to generate. So you pass a number, say `5`, and expect to get an array of five ticks.

But when you try it out, you get a different result:

<TicksExample />

What's happening here? It's not a bug. The documentation for this method explains:

> The number of ticks returned, however, is not necessarily equal to the requested count. Ticks are restricted to nicely-rounded values (multiples of 1, 2, 5 and powers of 10), and the scale’s domain can not always be subdivided in exactly count (*sic*) such intervals.

That's nice, except when its not. Sometimes you want to specify an exact number of ticks, and you don't want D3 to round them. Perhaps you have a series of small multiple charts, and you want each to have a consistent number of ticks.

As far as I know, there's no built-in way to do this. So we can write our own utility function to handle the task.

## The utility function

The function is pretty simple. It takes a D3 scale and a number of ticks, and returns an array of ticks. Optionally, we can pass a third argument, which is a boolean indicating whether we want the ticks to be rounded or not.

```js
import { range } from "d3-array";

const exactTicks = function (scale, numTicks, round = false) {
  const maxVal = scale.domain()[1];
  const minVal = scale.domain()[0];
  const stepValue = (maxVal - minVal) / (numTicks - 1);
  const output = range(minVal, maxVal + stepValue, stepValue);
  if (round) {
    return output.map((d) => Math.round(d));
  }
  return output;
};
```

<div class='note'>💡 The function is adapted from <a href="https://stackoverflow.com/a/51497981" target="_blank" rel="noopener noreferrer">this StackOverflow answer</a>.</div>

Go ahead and see how `exactTicks` works in action, compared to the default `scale.ticks` method:

<TicksExample includesExact={true} />

Obviously, the tradeoff here is that we're not getting nicely-rounded values. And so this isn't a replacement for `scale.ticks`. But it's a useful utility function to have in your toolbox. Optionally, you could also format the returned values using some other method, like `d3.format`.

You can play around with the code for yourself in this [Svelte REPL](https://svelte.dev/repl/8c96f0bd743449b08b0d2fe15e97854e?version=3.55.1). Have fun!

<div class='note' style="margin-top: 3rem; font-style:italic;">
Psst: thanks for reading. In 2023, I'm trying to blog more often with quickly-useful tutorials like this one. I hope you found it helpful!</div>

<style>
    .note {
        margin-bottom: 3rem;
        color: var(--text-color);
        font-size: .8rem;
        opacity: .8;
        font-family: var(--font-sans);
        text-align: right;
        width: 100%;
    }
</style>
