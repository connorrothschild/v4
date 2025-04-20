---
layout: blog
title: "How to Add a Chart to Your D3 Tooltip"
description: A few lines of code can make your D3 tooltips significantly more informative
date: "2020-06-02"
image: "adding-a-chart-to-your-d3-tooltip/header.png"
tags: ['d3', 'html', 'tutorial']
---

<script>
  import Image from "../../../lib/Global/Image.svelte"
  import Code from "../../../lib/Global/Code.svelte"
  import HighlightFromProp from "../../../lib/Global/HighlightFromProp.svelte"
  import Info from "../../../lib/Global/Info.svelte"

  let hoveredId;
  let highlightedLines;
</script>

I think tooltips are one of the most underrated parts of a visualization. When users are initially confused by a visualization, they often hover over a data point of interest to get more information.

Unfortunately, many tooltips fail to really illuminate much about our data. They often recapitulate what is already being presented without clarifying any of the confusing parts of the data. Most frequently, I see (and even create 😦) tooltips which present the most basic information (in a map, a tooltip would present the state name and the value of interest), and nothing else!

Of course, there's nothing _wrong_ with these kinds of tooltips. But they are truly doing the bare minimum, and, as a result, they're missing out on the full potential of tooltips. **If users are actively seeking more information by hovering over data, we ought to reward them with the most helpful and interesting information we can.**

That's why I recently updated one of my tooltips from a static presentation of textual information to a line chart depicting change over time. In other words, I went from this:

<Image src="/images/post/adding-a-chart-to-your-d3-tooltip/old-tooltip.gif" alt="A GIF depicting the old tooltip, which contained static values in textual form"></Image>

to this:

<Image src="/images/post/adding-a-chart-to-your-d3-tooltip/new-tooltip.gif" alt="A GIF depicting the old tooltip, which contained dynamic, temporal data over time for a given state upon hover"></Image>

## Why did I make that change?

The former tooltip provided information which was rather uninteresting. Although it clarified the exact _rate_ of overdose deaths in a given state at a given time, it didn't do much else. It did provide the year currently in view, but this was also visible in the bottom right corner of the visualization! It also provided the state name, but most of my viewers have likely taken US geography in middle school.

Thus, this tooltip was rather redundant. At best, it provided the _exact_ rate, so that a viewer could compare two states, or learn more information about a given state without solely relying on color encoding ([which can be somewhat unreliable when it comes to quantitative encoding](https://courses.cs.washington.edu/courses/cse442/17au/lectures/CSE442-VisualEncoding.pdf), as is the case in a choropleth map).

The new tooltip shows a trend over time. It also shows the state name (just in case you skipped that day in US geography!), and also the most recent data on overdose deaths. Because this map is meant to show how the opioid crisis _has evolved_, showing a line chart for each state in my tooltip allows the user to explore state-by-state trends on hover! This is much easier than hovering on each state during each year and trying to keep track of the trends.

For example, hovering on West Virginia, which in 2017 seemed to have the highest opioid-involved overdose death rate (as indicated by it having the darkest shade of red), reveals that its also experienced one of the largest over-time increase in this rate since 1999:

<Image src="/images/post/adding-a-chart-to-your-d3-tooltip/west-virginia.jpg" alt="A static image focusing on West Virginia, showcasing the tooltip which shows a line chart increasing over time."></Image>

## So, how do you do it?

Great question! It's thankfully not that hard, but the payoff is huge. The shift from my old, boring tooltip to my new, sexy one took only a couple of hours, thanks to a few [Stack Overflow answers](https://stackoverflow.com/questions/43904643/add-chart-to-tooltip-in-d3) and [online examples](https://bl.ocks.org/maelafifi/ee7fecf90bb5060d5f9a7551271f4397).

### Step 1: Load `d3-tip`

The process mostly relies on `d3-tip`, which you can learn more about [here](http://labratrevenge.com/d3-tip/).

You can load `d3-tip` with the following code:

<Code language='js'>

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.7.1/d3-tip.min.js"></script>
```

</Code>

### Step 2: Create a tooltip object

Next, we initialize our tooltip.

<Code language='js' 
      showLineNumbers={true} 
      highlightedLines={hoveredId == 'init-tooltip' ? highlightedLines : null}>

```
// Define the tooltip
var tool_tip = d3.tip()
  .attr("class", "d3-tip")
  // If the mouse position is greater beyond ~ Kentucky/Missouri,
  // Offset tooltip left instead of right
  .offset(current_position[0] > 650 ? [-20, -120] : [20, 120])
  // Input the title, and include the div with an id of #tipDiv
  .html(
    "<p>Opioid-involved deaths over time in</p>
    <div id='tipDiv'></div>"
    );

// Call it as a function to our app-wide SVG
svg.call(tool_tip);
```

</Code>

<p>
<HighlightFromProp 
  hoveredIdProp={'init-tooltip'} 
  highlightedLinesProp={'2-3'} 
  bind:hoveredId 
  bind:highlightedLines
>
  Lines 2 and 3
</HighlightFromProp> 
  simply create our tooltip and give it a class (for CSS styling). 
</p>

<p>
Then, on 
<HighlightFromProp 
    hoveredIdProp={'init-tooltip'} 
    highlightedLinesProp={'6'} 
    bind:hoveredId 
    bind:highlightedLines
  >line 6</HighlightFromProp>, we provide the specified <code>offset</code>. In my example, I define my offset according to the <a href="https://stackoverflow.com/questions/28536367/in-d3-js-how-to-adjust-tooltip-up-and-down-based-on-the-screen-position" target="_blank" rel="noopener noreferrer">user's mouse position</a>. That way, if a user hovers over an eastern state, the tooltip doesn't disappear off the screen! (<code>current_position</code> is defined down below.)
</p>

<p>
In   
<HighlightFromProp 
    hoveredIdProp={'init-tooltip'} 
    highlightedLinesProp={'8-11'} 
    bind:hoveredId 
    bind:highlightedLines
  >lines 8-11</HighlightFromProp>, we define the append content to our tooltip. In our case, we 1. provide a title, "Opioid-involved deaths over time", and 2. specify the div that the tooltip should include. Right now, <code>tipDiv</code> is undefined, which is what we'll cover next.
</p>

### Step 3: Create the `tipDiv` object

Finally, we can create the `tipDiv` object we referenced in the above code. The object will be created on mouseover of the group of interest (in my case, states). Our code will look something like this (don't worry too much about it, I'll explain step by step below):

<Code language='js'>

```
states = svg.append("g")
  .attr("class", "states")
  .selectAll("path")
  .data(topojson.feature(us, us.objects.states).features)
  .enter()
  .append("path")
  .attr("d", path)
  .on('mouseout', tool_tip.hide) // On mouseout, hide the tooltip
  .on('mouseover', function(d) {
    // Define and store the mouse position;
    // This is used to define tooltip offset, seen above
    current_position = d3.mouse(this);

    // Record current state
    current_state = nameById[d.id]

    // Show the tooltip
    tool_tip.show();

    // ... Continued below
```

</Code>

After that initialization and `show` function, we can define the `tipDiv` object:

<Code language='js'>

```
/* ... Continued from above 
       Select the #tipDiv element, and append an SVG (this is the tooltip) */
var tipSVG = d3.select("#tipDiv")
     .append("svg")
     .attr("width", 220)
     .attr("height", 55);

/* Apply the same logic you would to a regular chart, 
   but append it to our tipSVG */
tipSVG.append("path")
     .datum(overdoses.filter((d) => { nameById[d.id] == current_state }))
     .style("stroke", rateById[d.id] < 10 ? "grey" : color(rateById[d.id]))
     .style("stroke-width", 1.5)
     .style("fill", "none")
     .attr("d", line)

// Same as above (this is the circle at the end of the line)
tipSVG.append("circle")
    .attr("fill", rateById[d.id] < 10 ? "grey" : color(rateById[d.id]))
    .attr("stroke", "black")
    .attr("cx", 130)
    .attr("cy", y_tooltip(rateById[d.id]))
    .attr("r", 3)

// Tooltip labelling on last value
tipSVG.append("text")
     .text(rateById[d.id] + " deaths")
     .attr("x", 140)
     .attr("y", y_tooltip(rateById[d.id]) < 15 ? 10 
              : y_tooltip(rateById[d.id]) - 7)

// Same as above
tipSVG.append("text")
     .text("per 100,000")
     .attr("x", 140)
     .attr("y", y_tooltip(rateById[d.id]) < 15 ? 24
     		      : y_tooltip(rateById[d.id]) + 7)

// State name
tipSVG.append("text")
     .text(current_state)
     .attr("x", 0)
     .attr("y", 15)
     .style("font-size", 18)
     .style("font-weight", 400)
 }) // <- This is the end of the whole .on('mouseover') function
```

</Code>

What's happening here? Let's look at one piece of our mouseover function at a time.

**First**, we define the object and name it `tipSVG`. `tipSVG` selects `#tipDiv` (defined in our d3-tip) and appends an SVG. We also define the width and height of the tooltip.

<Code language='js'>

```
var tipSVG = d3
  .select("#tipDiv")
  .append("svg")
  .attr("width", 220)
  .attr("height", 55);
```

</Code>

**Next**, we append a path to that SVG. This could be a circle, or a rectangle, or any other appendable shape. Because I am drawing a simple line, we use `path`.

<Code language='js'>

```
tipSVG
  .append("path")
  .datum(overdoses.filter((d) => { nameById[d.id] == current_state }))
  .style("stroke", rateById[d.id] < 10 ? "grey" : color(rateById[d.id]))
  .style("stroke-width", 1.5)
  .style("fill", "none")
  .attr("d", line);
```

</Code>

In defining the `d` attribute, you see I reference `line`. This is a function defined earlier in my code to return the `x` and `y` position of each data point, to create the path itself, as you can see below:

<Code language='js'>

```
var x_tooltip = d3
  .scaleLinear()
  .domain(d3.extent(overdoses, (d) => { d.year }))
  .range([0, 130]);

var y_tooltip = d3.scaleLinear().domain([0, 60]).range([50, 0]);

var line = d3
  .line()
  .x((d) => { x_tooltip(d.year) })
  .y((d) => { y_tooltip(+d.rate) })
```

</Code>

<Info>
  <p>Because the tooltip contains its own chart with a predefined with and height, we need to provide scale functions as we would in a normal chart. We name this <code>x_tooltip</code> and <code>y_tooltip</code> so as to avoid confusion with our main scaling functions.</p>
</Info>

**Lastly**, we add a circle at the end of the line to signify the final data point. We also add the text label for the year 2017.

<Code language='js'>

```
// Final point
tipSVG.append("circle")
    .attr("fill", rateById[d.id] < 10 ? "grey" : color(rateById[d.id]))
    .attr("stroke", "black")
    .attr("cx", 130)
    .attr("cy", y_tooltip(rateById[d.id]))
    .attr("r", 3)

// Text label (##### deaths)
tipSVG.append("text")
     .text(rateById[d.id] + " deaths")
     .attr("x", 140)
     .attr("y", y_tooltip(rateById[d.id]) < 15 ? 10 
              : y_tooltip(rateById[d.id]) - 7)

// Per 100,00
tipSVG.append("text")
     .text("per 100,000")
     .attr("x", 140)
     .attr("y", y_tooltip(rateById[d.id]) < 15 ? 24
     		      : y_tooltip(rateById[d.id]) + 7)

// State name
tipSVG.append("text")
     .text(current_state)
     .attr("x", 0)
     .attr("y", 15)
     .style("font-size", 18)
     .style("font-weight", 400)
 }) // End mouseover function
```

</Code>

## In sum

The process of appending a chart to your tooltip in a D3.js visualization is as simple as:

1. Load `d3-tip` via a `<script>` tag
2. Create a tooltip object using `d3-tip`, which can be done easily upon consulting their documentation
3. Add an SVG element to the tooltip we created, as we would create a chart normally using D3 syntax

Voila! You can find the code all in one place [here](https://github.com/connorrothschild/D3.js/blob/master/map-overdoses/index.html). Please note that I made this visualization early in my career, so I'm not particularly proud of the code 😅

You can play around with the visualization and checkout the tooltip for yourself below (find the fullscreen version [here](https://connorrothschild.github.io/D3.js/map-overdoses/)):

<iframe loading="lazy" title="Map of opioid-related overdoses, by state, between 1999 and 2017." src="https://connorrothschild.github.io/D3.js/map-overdoses/" width='100%' height="768px" style="background: white;"></iframe>
