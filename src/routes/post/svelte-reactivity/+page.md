---
layout: blog
title: "Reactive declarations using the dollar label in Svelte"
description: The most powerful feature you're underutilizing in your Svelte applications
# image: svelte-and-d3/header.png
date: "2022-05-30"
featured: false
draft: true
tags: ['svelte', 'tutorial']
---

<script>
  import Code from "$lib/Global/Code.svelte"
  import Image from "$lib/Global/Image.svelte";
  import Info from "$lib/Global/Info.svelte";
  import Thanks from "$lib/Global/Thanks.svelte";
  
  import Doubled from "$lib/Global/Blog/svelte-dollar-label/Doubled.svelte"
  import DoubledMinusOne from "$lib/Global/Blog/svelte-dollar-label/DoubledMinusOne.svelte"
  import Scales from "$lib/Global/Blog/svelte-dollar-label/Scales.svelte"
</script>

<svelte:head>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</svelte:head>

Svelte remains my framework of choice for building web applications; it is lean, intuitive, and powerful. One tool I see beginners struggle with is the `$:`, or dollar label, operator—a tool that is confusing at first but ends up making reactivity a breeze.

In this post, I'll talk a bit about the dollar label operator `$:`, a hidden gem in the Svelte ecosystem that I bet you're underutilizing. 

<Info>

 I love using Svelte (it powers this personal site!), but I am by no means an expert on *how* tools like the dollar label operator work behind the scenes. In the event that this leads to poor advice (e.g. overuse of the dollar label operator), please [let me know](https://twitter.com/CL_Rothschild)!

</Info>


## Side note: A label with multiple meanings

One quirk of the dollar sign in Svelte is that it can mean totally different things in different contexts. In particular, `$` could be used to:

1. Access a store value (e.g. `$myStore`)
2. Insert a variable into a template literal string (e.g. 
<code>&grave;This is a $&#123;variable&#125;&grave;</code>) (although this is not Svelte-specific)
3. Create a reactive declaration (e.g. `$: doubled = count * 2`)

I won't cover all three meanings; this post is intended to be a **guide to \#3, reactive declarations.** If you're interested in reading more about other use-cases, read Geoff Rich's great post: [The many meanings of $ in Svelte](https://geoffrich.net/posts/svelte-$-meanings/).


---

My goal in this post is to show you three levels of depth at which you can use the `$:` operator:

1. [Same-line reactivity](#01-same-line-reactivity)
2. [Block-level reactivity](#02-block-level-reactivity)
3. [Separate-context reactivity](#03-separate-context-reactivity)

*Please note I am making up these terms.*

---

## 01. Same-line reactivity

This is the most common use-case for `$:` reactivity in Svelte. It is also the example given in the [Svelte tutorial](https://svelte.dev/tutorial/reactive-declarations):

<Code language='svelte' highlightedLines={"2-3"}>

```
<script>
	let count = 0;
	$: doubled = count * 2;
</script>

<button on:click={() => {count += 1}}>
	Increment
</button>

<p>{count} doubled is {doubled}</p>
```

</Code>

<Doubled />

Here, the declaration on line 3 assigns `doubled` to **always** be equal to `count * 2`. Using the `$:` operator tells Svelte that `doubled` should be updated whenever `count` changes.

### A use-case: Constructing responsive D3 scales

A common use-case for `$:` is to construct a responsive [D3 scale](https://www.d3indepth.com/scales/); we want to keep track of the window width and/or height so that we can scale datapoints to fit the screen. The dollar label operator allows us to update our existing scales automatically whenever the window size changes.

For example, here's a scale that updates when its range changes, in particular tracking changes in `width`.

<Code language="Svelte">

```
<script>
  let width;

  import { scaleLinear } from "d3-scale";
  $: xScale = scaleLinear().domain([0, 100]).range([0, width]);
</script>

<div bind:clientWidth={width}>
  <p><code>xScale(50)</code> is equal to: {xScale(50)}px.</p>
</div>
```

</Code>

<Scales />

Notice how `xScale(50)` will always return **half the width** of the corresponding `div`, because it is linked reactively.

Practically, this makes for some awesome, responsive data visualizations, as this [REPL](https://svelte.dev/repl/a5f22cf3df8040b29fc128d969059125?version=3.38.3) demonstrates (resize the window to see the effect!):


<iframe loading="lazy" src="https://svelte.dev/repl/a5f22cf3df8040b29fc128d969059125?version=3.38.3" width="100%" height='700' title="A responsive Svelte scatterplot"></iframe>



---

## 02. Block-level reactivity

Because the dollar label operator forces an update *every time* something on the right side of the declaration changes, we can make entire blocks of code reactive; in other words, we can group characteristically similar lines of code into one `{}` block and execute the entire block whenever one reference changes.

<!-- This is also helpful when debugging... FIXME  -->

This could be useful in removing needless repetition. Consider the following example, where we both *double* a number and then (for some reason) want to *decrement it* in a separate variable:

<Code language="Svelte">

```
<script>
    let count = 0;
    $: doubled = count * 2;
    $: doubledMinusOne = doubled - 1;
    $: console.log(doubledMinusOne);
</script>
```

</Code>

Because each of the above declarations are related to one another (each dependent on the line above it), it would make sense to put all of these into the same block, which also happens to be more readable:

<Code language="Svelte">

```
<script>
    let count = 0;
    let doubled, doubledMinusOne; // We initialize these outside of the block
    
    $: {
        doubled = count * 2;
        doubledMinusOne = doubled - 1;
        console.log(doubledMinusOne);
    }
</script>

<p>
  {count} doubled is {doubled}, and if you subtract one it is {doubledMinusOne}
</p>
```

</Code>

<DoubledMinusOne />

### A use-case: Triggering scrollytelling steps with an `if` block

A more complex and powerful use case would be executing `if... else` blocks after a dollar label. This enables us to listen for *specific* changes and evaluate code accordingly.

For example, if you were building a scrollytelling visualization in Svelte (see [this post](https://www.connorrothschild.com/post/svelte-scrollytelling)), you would want to trigger different events based on the user's current position on the page (captured in a variable called `step`). Rather than having three different `$:` declarations, one for each step, we can collapse those into one block:

<Code language="Svelte">

```
<script>
  $: if (step == 0) {
    // Do something here
  } else if (step == 1) {
    // Do something else here
  } else if (step == 2) {
    // Or do something here!
  }
</script>
```

</Code>

Here's a [REPL](https://svelte.dev/repl/f18a0492d1af4961af839dd32e67952e?version=3.38.3) showing that in action. You don't need to understand exactly what is happening here, but look at lines 9-16 and then scroll within the pane:

<iframe loading="lazy" src="https://svelte.dev/repl/f18a0492d1af4961af839dd32e67952e?version=3.38.3" width="100%" height='700' title="A Svelte Scrollytelling example"></iframe>

---

## 03. Separate-context reactivity

The above examples make it clear that the dollar label operator can "watch" for changes in one value, and update a linked value accordingly. But what if we wanted to trigger some change via an unrelated variable? In other words, when `x` changes, run `console.log("Hello!")`?

Enter the [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (all the operators!). From MDN:

> The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. 

By combining these two operators, we're able to make statements and variables reactive to changes in unrelated parts of our code. 
<!-- For example, you could trigger an unrelated function whenever data from an API changes. -->

<Code language='Svelte'>

```
<script>
    let x = 0;
    $: x, console.log("Hello!");
</script>
```

</Code>

Now, anytime `x` changes, the console will log "Hello!". As far as I can tell, this is not covered in official Svelte documentation; but Rich Harris has mentioned it as a tool:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The most common way to handle that situation is <br><br>$: c, console.log(&#39;yes&#39;);<br><br>It does feel a bit weird, I know :)</p>&mdash; Rich Harris (@Rich_Harris) <a href="https://twitter.com/Rich_Harris/status/1149265270495727617?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> 

<!-- FIXME THIS SHOULD BE A BETTER EXAMPLE? -->
<!-- ### A use-case: Displaying a modal based on window width

 A more complex use-case might be watching window size, and, beyond a certain breakpoint, triggering some function. Imagine we want to show a modal ... 

Assuming we are listening to our window width and window height in a global store (like [this one](https://github.com/the-pudding/svelte-starter/blob/svelte/src/components/helpers/Window.svelte)), we could write the following to show a modal if and when the screen is too tiny:

<Code language="svelte">

```
<script>
import { window } from "../store.js"
const checkForModal = function() {
    if ($window.width < 768) {
        alert('WHOA!')
    }
}
$: $window.width, checkForModal();
</script>
```

</Code>

There are other ways to achieve the above result, for example, we could pass the width *into* the function (and then not actually use the reference): `$: checkForModal($window.width)`. Or, we could just pass a block with a reference to the width: `$: { $window.width, checkForModal() }`.

Although in my view, the first approach is more intuitive and idiomatic. It literally reads, "whenever the `$window.width` changes, run the function `checkForModal()`." -->

<!-- In Russell Goldenberg's `<Scrolly />` component, he uses the following line of code to trigger a function called `update` anytime the unrelated variables `top` or `bottom` update:

<Code language='Svelte'>

```
<script>
    $: top, bottom, update();
</script>
```

</Code> -->


<!-- FIXME There should be a better example here. Something that couldn't be triggered in another function e.g. triggered onUserLogin -->

### A use-case: Tracking an endpoint based on frontend user interactions

Imagine you run a very simple eCommerce site that has one purpose: to sell shirts. Your entire website is straight to the point: the user can select any number of shirts to buy, **but you need to make sure they don't exceed the current supply in your warehouse**. In order to solve this problem, we need to ping *an endpoint* that returns the number of shirts remaining. 

And so in this case, we will keep track of two elements that are characteristically related to one another but have no connection in our code: the state of the **user's cart** (frontend) and the **available remaining supply** (backend). When the user adds or removes a shirt from their cart, we want to ping the backend to check the remaining supply (accounting for all those other purchases that are coming in, since you run such a successful shop).

Here's a minimal example:

<Code language="Svelte" highlightedLines={'7-9, 14'}>

```
<script>
  let inCart = 1;
  let remainingSupply;

  // A function which returns a number between 1-10 for "remaining shirts" available for sale
  // In reality, this would be a sort of API call
  let getRemainingSupply = function () {
    remainingSupply = Math.ceil(Math.random() * 9);
  };

  getRemainingSupply(); // Run this instantly to get remaining shirts

  // Whenever inCart changes, we run getRemainingSupply()
  $: inCart, getRemainingSupply();
</script>

<button on:click={() => {inCart += 1}}>Another!</button>
```

</Code>

Lines 7 through 9 create the `getRemainingSupply` function which, in reality, would [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) some data from an API to return the number of shirts available for sale. (Our fake function simply returns a number between 1 and 10, suggesting that the supply is rather low and fluctuates a lot—sorry, shirt buyer!)

Then, on line 14, our code functions exactly like it reads: "whenever `inCart` changes, rerun `getRemainingSupply()`."

Thinking further, separate-context reactivity also allows us to trigger **the same function** based on any number of state changes. For example, say we also want to rerun `getRemainingSupply` when the user logs in or out.

We could add the following lines to our above code to achieve this quite easily (within the existing script tag):

<Code language="Svelte">

```
<script>
  $: inCart, getRemainingSupply();
  $: userLoggedIn, getRemainingSupply();
</script>
```

</Code>

But here's a quick bonus tip: you can actually combine each of these conditions into one line because the [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) evaluates **each** of its operands and returns the value of the last.

<Code language="Svelte">

```
<script>
  $: inCart, userLoggedIn, getRemainingSupply();
</script>
```

</Code>

The above example reads: "whenever `inCart` changes, or `userLoggedIn` changes, rerun `getRemainingSupply()`."

Here's a more complete [REPL](https://svelte.dev/repl/c30c5e28c4c8471bb515bd65a61595b3?version=3.38.3) showing our code in action (I hope your eCommerce site has a better designer):

<!-- FIXME: Style better -->

<iframe loading="lazy" src="https://svelte.dev/repl/c30c5e28c4c8471bb515bd65a61595b3?version=3.38.3" width="100%" height='700' title="Separate-context reactivity in Svelte"></iframe>

<Info>

<!-- FIXME Verify this is accurate -->
Obviously, this is not how eCommerce sites really work. This is just one example of connecting otherwise-unrelated bits of state, sort of akin to triggering [side effects in React](https://reactjs.org/docs/hooks-effect.html). 

[Here's another example](https://svelte.dev/repl/83dfbc08c2fd4e20868c858ec5cddd4e?version=3.6.7) provided by [@opensas](https://twitter.com/opensas/status/1152119549053100032).

</Info>

---

## Wrapping up

The dollar label operator makes it easy to keep track of and update variables in our Svelte applications. It can be confusing at first, but once you learn to use it effectively, it makes for leaner, simpler, and more powerful applications.

Feel free to reach out on [Twitter](https://twitter.com/CL_Rothschild) with your thoughts, questions, or anything you think I got wrong 🙂. 

<Thanks>Thanks to ... and ... for reviewing this post.</Thanks>