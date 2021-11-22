import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
/* empty css                                              */import { I as Info } from "./Info-fc5ae8a4.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./CornerTitle-1139e2b5.js";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                             */const metadata = {
  "layout": "blog",
  "title": "Creating the ultimate scatterplot in Svelte",
  "description": "Svelte + D3, in action",
  "date": "2021-07-09",
  "image": "svelte-and-d3/header.png",
  "draft": true,
  "tags": ["svelte", "d3", "tutorial"]
};
const Svelte_scatter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `

<p>Earlier this year, I wrote about how I use Svelte to compose beautiful, powerful data visualizations. In that post, I documented how Svelte has gradually replaced D3 as the key tool for creating graphics. </p>
<p>Here, I\u2019ll talk less <em>why</em> and more <em>how</em>. That is, I\u2019ll explain how to create <strong>the ultimate scatterplot</strong> using Svelte.</p>
<p>We\u2019ll be taking <a href="${"https://observablehq.com/@d3/scatterplot"}" rel="${"nofollow"}">this scatterplot</a>, from the team at Observable, and recreating it (sort of). Then, we\u2019ll make it (hopefully) better.</p>
<iframe loading="${"lazy"}" title="${"An Observable chart of cars data"}" width="${"100%"}" height="${"684"}" frameborder="${"0"}" style="${"background: white"}" src="${"https://observablehq.com/embed/@d3/scatterplot?cells=chart"}"></iframe>
<p>In specific, we\u2019ll be doing the following:</p>
<ol><li>Decide upon and record our chart dimensions</li>
<li>Create a <code>&lt;Scatterplot /&gt;</code> component</li>
<li>Create a <code>&lt;Circle /&gt;</code> component</li>
<li>Create an <code>&lt;XAxis /&gt;</code> and <code>&lt;YAxis /&gt;</code> component</li>
<li>Add interactivity via voronoi hovering</li></ol>
<h2 id="${"chart-dimensions"}"><a href="${"#chart-dimensions"}">Chart dimensions</a></h2>
<p>Our first step is to decide upon and record our chart dimensions. For the sake of our example, lets make our chart\u2019s width <code>100%</code> of its container\u2019s width, and its height <code>600px</code>. In Svelte, we can bind a variable (in our case, <code>containerWidth</code>) to the <code>offsetWidth</code> of a container.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> containerWidth<span class="token punctuation">;</span>
  <span class="token keyword">let</span> containerHeight <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>chart-container<span class="token punctuation">'</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>offsetWidth=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>containerWidth<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Chart will go here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Above, we\u2019re binding <code>containerWidth</code> to constantly equal the <a href="${"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth"}" rel="${"nofollow"}"><code>offsetWidth</code></a> of our <code>chart-container</code> div. This is generally a good decision because it binds the chart width to its <em>container</em>, rather than the <em>window</em>. This allows for the chart to be embedded in any sort of complex layout, and still remain properly sized.</p>
<p>More realistically, we want our <em>chart width</em> to be slightly smaller than our <em>container width</em>, so that we have room for things like axis ticks and labels. </p>
<p>We can record the exact number of pixels we want \u201Con the sides\u201D in an object called <code>margin</code>. Then, we can set a new variable, <code>chartWidth</code> to equal the container width, minus our horizontal margins.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> containerWidth<span class="token punctuation">;</span>
  <span class="token keyword">let</span> containerHeight <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> margin <span class="token operator">=</span> <span class="token punctuation">&#123;</span>top<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> bottom<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  $<span class="token operator">:</span> chartWidth <span class="token operator">=</span> containerWidth <span class="token operator">-</span> margin<span class="token punctuation">.</span>left <span class="token operator">-</span> margin<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
  $<span class="token operator">:</span> chartHeight <span class="token operator">=</span> containerHeight <span class="token operator">-</span> margin<span class="token punctuation">.</span>top <span class="token operator">-</span> margin<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>chart-container<span class="token punctuation">'</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>offsetWidth=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>containerWidth<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Chart will go here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
      default: () => `<p>We\u2019re using the <code>$</code> notation here because <code>chartWidth</code> is <em>reactive</em>; that is, it updates according to another variable, <code>containerWidth</code>, which updates on resize.</p>`
    })}
<p>To see our reactive chart dimensions in action, play around with the width of the playground below:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/060a2a7847bc479eb4e456c966f096e9?version=3.38.3"}" width="${"100%"}" height="${"600"}" title="${"Responsive chart container"}"></iframe>
<h2 id="${"create-a-ltscatterplot-gt-component"}"><a href="${"#create-a-ltscatterplot-gt-component"}">Create a <code>&lt;Scatterplot /&gt;</code> component</a></h2>
<p>Now that we have our chart dimensions, we can pass those dimensions into a component<more-info content="${"A component is a reusable file that includes integrated markup, styles and functionality."}" href="${"https://v2.svelte.dev/guide"}"></more-info> that will handle the visualization itself.</p>
<p>We\u2019ll want our scatterplot component to receive four properties.<more-info content="${"Props are values passed from one component to another."}" href="${"https://svelte.dev/tutorial/declaring-props"}"></more-info></p>
<ol><li>The data (<code>data</code>)</li>
<li>Our chart width (<code>chartWidth</code>)</li>
<li>Our chart height (<code>chartHeight</code>)</li>
<li>The margins surrounding our chart (<code>margin</code>)</li></ol>
<p>In code, that looks like this:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>chart-container<span class="token punctuation">'</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>offsetWidth=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>containerWidth<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scatterplot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>data<span class="token punctuation">&#125;</span></span> <span class="token attr-name">width=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>chartWidth<span class="token punctuation">&#125;</span></span> <span class="token attr-name">height=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>chartHeight<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>margin<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>And in <code>Scatterplot.svelte</code>, we receive our props like this:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> data<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> width<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> height<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> margin<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now that we have our dimensions, we\u2019ll want to create <em>scales</em> with them.<more-info content="${"Scales map datapoints to positions on the canvas."}" href="${"https://www.d3indepth.com/scales/"}"></more-info></p>
<p>Here, we will leverage the power of D3\u2014in particular, <a href="${"https://github.com/d3/d3-scale"}" rel="${"nofollow"}"><code>d3-scale</code></a>\u2014to map our data\u2019s values to points on our canvas.</p>
<p>We\u2019ll want to make our scales reactive according to our dynamic size variables we referenced earlier. Here, notice how we use <code>$</code> to denote reactivity, and notice how we reference <code>width</code>.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Import props...</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> scaleLinear <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3-scale"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> extent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3-array"</span><span class="token punctuation">;</span>

$<span class="token operator">:</span> xScale <span class="token operator">=</span> <span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token function">extent</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>mpg<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span>margin<span class="token punctuation">.</span>left<span class="token punctuation">,</span> width <span class="token operator">-</span> margin<span class="token punctuation">.</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$<span class="token operator">:</span> yScale <span class="token operator">=</span> <span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token function">extent</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span>height <span class="token operator">-</span> margin<span class="token punctuation">.</span>top<span class="token punctuation">,</span> margin<span class="token punctuation">.</span>bottom<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>In the above code, we\u2019re defining the domain <more-info content="${"A domain accepts the range of values to map data from."}" href="${"https://observablehq.com/@d3/introduction-to-d3s-scales#cell-104"}"></more-info> according to each cars\u2019 miles per gallon (<code>mpg</code>) and horsepower (<code>hp</code>). We set the parameters for our range <more-info content="${"A range converts the values from our domain into a specified 'range' of positions."}" href="${"https://observablehq.com/@d3/introduction-to-d3s-scales#cell-104"}"></more-info> to span the starting position (the left/bottom margin) to our chart width/height (minus our right/top margin value).</p>
<p>Now, when we pass a number into a scale, it will result in a point on the canvas. For example, the code <code>xScale(25)</code> would result in a value of <code>__</code>. </p>
<p>We\u2019ll use these scales to define the <code>cx</code> and <code>cy</code> values for each of our circles. To do so, we\u2019ll need to iterate on each datapoint and render something. </p>
<h2 id="${"iterate-with-an-123each125-block"}"><a href="${"#iterate-with-an-123each125-block"}">Iterate with an <code>{#each}</code> block</a></h2>
<p>In Svelte, an <code>{#each}</code> block<more-info content="${"These blocks of code function similarly to a for loop, but in our markup."}" href="${"https://svelte.dev/tutorial/each-blocks"}"></more-info> enables us to render listed content programatically, and include multiple attributes in the resulting markup.</p>
<p>For our data, we\u2019ll want to iterate over each <em>row</em> of our data, and pass each <em>row\u2019</em>s <code>mpg</code> and <code>hp</code> (or whatever value you want to pass to the scatterplot) into a component that will eventually render some SVG.</p>
<p>Lets learn by doing. If we simply iterated on each row and wrote out our MPG and HP values, it would look like this:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/7e3ec27da41440e880a49f83068fd97a?version=3.42.1\n"}" width="${"100%"}" height="${"600"}" title="${"Simple each block"}"></iframe>
<p>But we don\u2019t want to write out our values, we want to:</p>
<ol><li>Transform those values into points on the canvas</li>
<li>Pass them to a component that will render SVG elements</li></ol>
<p>To transform \u2026</p>

<h2 id="${"create-a-ltcircle-gt-component"}"><a href="${"#create-a-ltcircle-gt-component"}">Create a <code>&lt;Circle /&gt;</code> component</a></h2>
<p>Next, we want to create a <code>&lt;Circle /&gt;</code> component that will take in our mapped data, and display an SVG with the appropriate attributes. We first import our props, like so:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> cx<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> cy<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>`
  })}`;
});
export { Svelte_scatter as default, metadata };
