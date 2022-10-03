import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
import { C as Code } from "../../../../chunks/Code.js";
import { H as HighlightFromProp } from "../../../../chunks/HighlightFromProp.js";
import { I as Info } from "../../../../chunks/Info.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      */import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prism-svelte";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
/* empty css                                                     */const metadata = {
  "layout": "blog",
  "title": "How to Add a Chart to Your D3 Tooltip",
  "description": "A few lines of code can make your D3 tooltips significantly more informative",
  "date": "2020-06-02",
  "image": "adding-a-chart-to-your-d3-tooltip/header.png",
  "tags": ["d3", "html", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hoveredId;
  let highlightedLines;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
      default: () => {
        return `<p>I think tooltips are one of the most underrated parts of a visualization. When users are initially confused by a visualization, they often hover over a data point of interest to get more information.</p>
<p>Unfortunately, many tooltips fail to really illuminate much about our data. They often recapitulate what is already being presented without clarifying any of the confusing parts of the data. Most frequently, I see (and even create \u{1F626}) tooltips which present the most basic information (in a map, a tooltip would present the state name and the value of interest), and nothing else!</p>
<p>Of course, there\u2019s nothing <em>wrong</em> with these kinds of tooltips. But they are truly doing the bare minimum, and, as a result, they\u2019re missing out on the full potential of tooltips. <strong>If users are actively seeking more information by hovering over data, we ought to reward them with the most helpful and interesting information we can.</strong></p>
<p>That\u2019s why I recently updated one of my tooltips from a static presentation of textual information to a line chart depicting change over time. In other words, I went from this:</p>
${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: "/images/post/adding-a-chart-to-your-d3-tooltip/old-tooltip.gif",
            alt: "A GIF depicting the old tooltip, which contained static values in textual form"
          },
          {},
          {}
        )}
<p>to this:</p>
${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: "/images/post/adding-a-chart-to-your-d3-tooltip/new-tooltip.gif",
            alt: "A GIF depicting the old tooltip, which contained dynamic, temporal data over time for a given state upon hover"
          },
          {},
          {}
        )}
<h2 id="${"why-did-i-make-that-change"}"><a href="${"#why-did-i-make-that-change"}">Why did I make that change?</a></h2>
<p>The former tooltip provided information which was rather uninteresting. Although it clarified the exact <em>rate</em> of overdose deaths in a given state at a given time, it didn\u2019t do much else. It did provide the year currently in view, but this was also visible in the bottom right corner of the visualization! It also provided the state name, but most of my viewers have likely taken US geography in middle school.</p>
<p>Thus, this tooltip was rather redundant. At best, it provided the <em>exact</em> rate, so that a viewer could compare two states, or learn more information about a given state without solely relying on color encoding (<a href="${"https://courses.cs.washington.edu/courses/cse442/17au/lectures/CSE442-VisualEncoding.pdf"}" rel="${"nofollow"}">which can be somewhat unreliable when it comes to quantitative encoding</a>, as is the case in a choropleth map).</p>
<p>The new tooltip shows a trend over time. It also shows the state name (just in case you skipped that day in US geography!), and also the most recent data on overdose deaths. Because this map is meant to show how the opioid crisis <em>has evolved</em>, showing a line chart for each state in my tooltip allows the user to explore state-by-state trends on hover! This is much easier than hovering on each state during each year and trying to keep track of the trends.</p>
<p>For example, hovering on West Virginia, which in 2017 seemed to have the highest opioid-involved overdose death rate (as indicated by it having the darkest shade of red), reveals that its also experienced one of the largest over-time increase in this rate since 1999:</p>
${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: "/images/post/adding-a-chart-to-your-d3-tooltip/west-virginia.jpg",
            alt: "A static image focusing on West Virginia, showcasing the tooltip which shows a line chart increasing over time."
          },
          {},
          {}
        )}
<h2 id="${"so-how-do-you-do-it"}"><a href="${"#so-how-do-you-do-it"}">So, how do you do it?</a></h2>
<p>Great question! It\u2019s thankfully not that hard, but the payoff is huge. The shift from my old, boring tooltip to my new, sexy one took only a couple of hours, thanks to a few <a href="${"https://stackoverflow.com/questions/43904643/add-chart-to-tooltip-in-d3"}" rel="${"nofollow"}">Stack Overflow answers</a> and <a href="${"https://bl.ocks.org/maelafifi/ee7fecf90bb5060d5f9a7551271f4397"}" rel="${"nofollow"}">online examples</a>.</p>
<h3 id="${"step-1-load-d3-tip"}"><a href="${"#step-1-load-d3-tip"}">Step 1: Load <code>d3-tip</code></a></h3>
<p>The process mostly relies on <code>d3-tip</code>, which you can learn more about <a href="${"http://labratrevenge.com/d3-tip/"}" rel="${"nofollow"}">here</a>.</p>
<p>You can load <code>d3-tip</code> with the following code:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.7.1/d3-tip.min.js&quot;&gt;&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<h3 id="${"step-2-create-a-tooltip-object"}"><a href="${"#step-2-create-a-tooltip-object"}">Step 2: Create a tooltip object</a></h3>
<p>Next, we initialize our tooltip.</p>
${validate_component(Code, "Code").$$render(
          $$result,
          {
            language: "js",
            showLineNumbers: true,
            highlightedLines: hoveredId == "init-tooltip" ? highlightedLines : null
          },
          {},
          {
            default: () => {
              return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Define the tooltip
var tool_tip = d3.tip()
  .attr(&quot;class&quot;, &quot;d3-tip&quot;)
  // If the mouse position is greater beyond ~ Kentucky/Missouri,
  // Offset tooltip left instead of right
  .offset(current_position[0] &gt; 650 ? [-20, -120] : [20, 120])
  // Input the title, and include the div with an id of #tipDiv
  .html(
    &quot;&lt;p&gt;Opioid-involved deaths over time in&lt;/p&gt;
    &lt;div id=&#39;tipDiv&#39;&gt;&lt;/div&gt;&quot;
    );

// Call it as a function to our app-wide SVG
svg.call(tool_tip);</code>`}<!-- HTML_TAG_END --></pre>`;
            }
          }
        )}
<p>${validate_component(HighlightFromProp, "HighlightFromProp").$$render(
          $$result,
          {
            hoveredIdProp: "init-tooltip",
            highlightedLinesProp: "2-3",
            hoveredId,
            highlightedLines
          },
          {
            hoveredId: ($$value) => {
              hoveredId = $$value;
              $$settled = false;
            },
            highlightedLines: ($$value) => {
              highlightedLines = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Lines 2 and 3
`;
            }
          }
        )} 
  simply create our tooltip and give it a class (for CSS styling). 
</p>
<p>Then, on 
${validate_component(HighlightFromProp, "HighlightFromProp").$$render(
          $$result,
          {
            hoveredIdProp: "init-tooltip",
            highlightedLinesProp: "6",
            hoveredId,
            highlightedLines
          },
          {
            hoveredId: ($$value) => {
              hoveredId = $$value;
              $$settled = false;
            },
            highlightedLines: ($$value) => {
              highlightedLines = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `line 6`;
            }
          }
        )}, we provide the specified <code>offset</code>. In my example, I define my offset according to the <a href="${"https://stackoverflow.com/questions/28536367/in-d3-js-how-to-adjust-tooltip-up-and-down-based-on-the-screen-position"}" target="${"_blank"}" rel="${"noopener noreferrer"}">user&#39;s mouse position</a>. That way, if a user hovers over an eastern state, the tooltip doesn&#39;t disappear off the screen! (<code>current_position</code> is defined down below.)
</p>
<p>In   
${validate_component(HighlightFromProp, "HighlightFromProp").$$render(
          $$result,
          {
            hoveredIdProp: "init-tooltip",
            highlightedLinesProp: "8-11",
            hoveredId,
            highlightedLines
          },
          {
            hoveredId: ($$value) => {
              hoveredId = $$value;
              $$settled = false;
            },
            highlightedLines: ($$value) => {
              highlightedLines = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `lines 8-11`;
            }
          }
        )}, we define the append content to our tooltip. In our case, we 1. provide a title, &quot;Opioid-involved deaths over time&quot;, and 2. specify the div that the tooltip should include. Right now, <code>tipDiv</code> is undefined, which is what we&#39;ll cover next.
</p>
<h3 id="${"step-3-create-the-tipdiv-object"}"><a href="${"#step-3-create-the-tipdiv-object"}">Step 3: Create the <code>tipDiv</code> object</a></h3>
<p>Finally, we can create the <code>tipDiv</code> object we referenced in the above code. The object will be created on mouseover of the group of interest (in my case, states). Our code will look something like this (don\u2019t worry too much about it, I\u2019ll explain step by step below):</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">states = svg.append(&quot;g&quot;)
  .attr(&quot;class&quot;, &quot;states&quot;)
  .selectAll(&quot;path&quot;)
  .data(topojson.feature(us, us.objects.states).features)
  .enter()
  .append(&quot;path&quot;)
  .attr(&quot;d&quot;, path)
  .on(&#39;mouseout&#39;, tool_tip.hide) // On mouseout, hide the tooltip
  .on(&#39;mouseover&#39;, function(d) &#123;
    // Define and store the mouse position;
    // This is used to define tooltip offset, seen above
    current_position = d3.mouse(this);

    // Record current state
    current_state = nameById[d.id]

    // Show the tooltip
    tool_tip.show();

    // ... Continued below</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<p>After that initialization and <code>show</code> function, we can define the <code>tipDiv</code> object:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">/* ... Continued from above 
       Select the #tipDiv element, and append an SVG (this is the tooltip) */
var tipSVG = d3.select(&quot;#tipDiv&quot;)
     .append(&quot;svg&quot;)
     .attr(&quot;width&quot;, 220)
     .attr(&quot;height&quot;, 55);

/* Apply the same logic you would to a regular chart, 
   but append it to our tipSVG */
tipSVG.append(&quot;path&quot;)
     .datum(overdoses.filter((d) =&gt; &#123; nameById[d.id] == current_state &#125;))
     .style(&quot;stroke&quot;, rateById[d.id] &lt; 10 ? &quot;grey&quot; : color(rateById[d.id]))
     .style(&quot;stroke-width&quot;, 1.5)
     .style(&quot;fill&quot;, &quot;none&quot;)
     .attr(&quot;d&quot;, line)

// Same as above (this is the circle at the end of the line)
tipSVG.append(&quot;circle&quot;)
    .attr(&quot;fill&quot;, rateById[d.id] &lt; 10 ? &quot;grey&quot; : color(rateById[d.id]))
    .attr(&quot;stroke&quot;, &quot;black&quot;)
    .attr(&quot;cx&quot;, 130)
    .attr(&quot;cy&quot;, y_tooltip(rateById[d.id]))
    .attr(&quot;r&quot;, 3)

// Tooltip labelling on last value
tipSVG.append(&quot;text&quot;)
     .text(rateById[d.id] + &quot; deaths&quot;)
     .attr(&quot;x&quot;, 140)
     .attr(&quot;y&quot;, y_tooltip(rateById[d.id]) &lt; 15 ? 10 
              : y_tooltip(rateById[d.id]) - 7)

// Same as above
tipSVG.append(&quot;text&quot;)
     .text(&quot;per 100,000&quot;)
     .attr(&quot;x&quot;, 140)
     .attr(&quot;y&quot;, y_tooltip(rateById[d.id]) &lt; 15 ? 24
     		      : y_tooltip(rateById[d.id]) + 7)

// State name
tipSVG.append(&quot;text&quot;)
     .text(current_state)
     .attr(&quot;x&quot;, 0)
     .attr(&quot;y&quot;, 15)
     .style(&quot;font-size&quot;, 18)
     .style(&quot;font-weight&quot;, 400)
 &#125;) // &lt;- This is the end of the whole .on(&#39;mouseover&#39;) function</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<p>What\u2019s happening here? Let\u2019s look at one piece of our mouseover function at a time.</p>
<p><strong>First</strong>, we define the object and name it <code>tipSVG</code>. <code>tipSVG</code> selects <code>#tipDiv</code> (defined in our d3-tip) and appends an SVG. We also define the width and height of the tooltip.</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">var tipSVG = d3
  .select(&quot;#tipDiv&quot;)
  .append(&quot;svg&quot;)
  .attr(&quot;width&quot;, 220)
  .attr(&quot;height&quot;, 55);</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<p><strong>Next</strong>, we append a path to that SVG. This could be a circle, or a rectangle, or any other appendable shape. Because I am drawing a simple line, we use <code>path</code>.</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">tipSVG
  .append(&quot;path&quot;)
  .datum(overdoses.filter((d) =&gt; &#123; nameById[d.id] == current_state &#125;))
  .style(&quot;stroke&quot;, rateById[d.id] &lt; 10 ? &quot;grey&quot; : color(rateById[d.id]))
  .style(&quot;stroke-width&quot;, 1.5)
  .style(&quot;fill&quot;, &quot;none&quot;)
  .attr(&quot;d&quot;, line);</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<p>In defining the <code>d</code> attribute, you see I reference <code>line</code>. This is a function defined earlier in my code to return the <code>x</code> and <code>y</code> position of each data point, to create the path itself, as you can see below:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">var x_tooltip = d3
  .scaleLinear()
  .domain(d3.extent(overdoses, (d) =&gt; &#123; d.year &#125;))
  .range([0, 130]);

var y_tooltip = d3.scaleLinear().domain([0, 60]).range([50, 0]);

var line = d3
  .line()
  .x((d) =&gt; &#123; x_tooltip(d.year) &#125;)
  .y((d) =&gt; &#123; y_tooltip(+d.rate) &#125;)</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
${validate_component(Info, "Info").$$render($$result, {}, {}, {
          default: () => {
            return `<p>Because the tooltip contains its own chart with a predefined with and height, we need to provide scale functions as we would in a normal chart. We name this <code>x_tooltip</code> and <code>y_tooltip</code> so as to avoid confusion with our main scaling functions.</p>`;
          }
        })}
<p><strong>Lastly</strong>, we add a circle at the end of the line to signify the final data point. We also add the text label for the year 2017.</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Final point
tipSVG.append(&quot;circle&quot;)
    .attr(&quot;fill&quot;, rateById[d.id] &lt; 10 ? &quot;grey&quot; : color(rateById[d.id]))
    .attr(&quot;stroke&quot;, &quot;black&quot;)
    .attr(&quot;cx&quot;, 130)
    .attr(&quot;cy&quot;, y_tooltip(rateById[d.id]))
    .attr(&quot;r&quot;, 3)

// Text label (##### deaths)
tipSVG.append(&quot;text&quot;)
     .text(rateById[d.id] + &quot; deaths&quot;)
     .attr(&quot;x&quot;, 140)
     .attr(&quot;y&quot;, y_tooltip(rateById[d.id]) &lt; 15 ? 10 
              : y_tooltip(rateById[d.id]) - 7)

// Per 100,00
tipSVG.append(&quot;text&quot;)
     .text(&quot;per 100,000&quot;)
     .attr(&quot;x&quot;, 140)
     .attr(&quot;y&quot;, y_tooltip(rateById[d.id]) &lt; 15 ? 24
     		      : y_tooltip(rateById[d.id]) + 7)

// State name
tipSVG.append(&quot;text&quot;)
     .text(current_state)
     .attr(&quot;x&quot;, 0)
     .attr(&quot;y&quot;, 15)
     .style(&quot;font-size&quot;, 18)
     .style(&quot;font-weight&quot;, 400)
 &#125;) // End mouseover function</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        })}
<h2 id="${"in-sum"}"><a href="${"#in-sum"}">In sum</a></h2>
<p>The process of appending a chart to your tooltip in a D3.js visualization is as simple as:</p>
<ol><li>Load <code>d3-tip</code> via a <code>&lt;script&gt;</code> tag</li>
<li>Create a tooltip object using <code>d3-tip</code>, which can be done easily upon consulting their documentation</li>
<li>Add an SVG element to the tooltip we created, as we would create a chart normally using D3 syntax</li></ol>
<p>Voila! You can find the code all in one place <a href="${"https://github.com/connorrothschild/D3.js/blob/master/map-overdoses/index.html"}" rel="${"nofollow"}">here</a>. Please note that I made this visualization early in my career, so I\u2019m not particularly proud of the code \u{1F605}</p>
<p>You can play around with the visualization and checkout the tooltip for yourself below (find the fullscreen version <a href="${"https://connorrothschild.github.io/D3.js/map-overdoses/"}" rel="${"nofollow"}">here</a>):</p>
<iframe loading="${"lazy"}" title="${"Map of opioid-related overdoses, by state, between 1999 and 2017."}" src="${"https://connorrothschild.github.io/D3.js/map-overdoses/"}" width="${"100%"}" height="${"768px"}" style="${"background: white;"}"></iframe>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default,
  metadata
};
