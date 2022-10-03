import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { C as Code } from "../../../../chunks/Code.js";
/* empty css                                                      */import { I as Info } from "../../../../chunks/Info.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
import "prismjs";
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
/* empty css                                                     */const _page_md_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1qkbzqf{width:100%;margin:0.5rem 0 1.5rem 0;border-radius:6px}rect.svelte-1qkbzqf{width:100%;height:100%}circle.svelte-1qkbzqf{cursor:crosshair}",
  map: null
};
const metadata = {
  "layout": "blog",
  "title": "Making visualizations literally w/ Svelte & D3",
  "description": "Why Svelte has replaced (and complemented) D3 as my go-to tool for powerful visualizations",
  "image": "svelte-and-d3/header.png",
  "date": "2021-07-02",
  "featured": true,
  "tags": ["svelte", "d3", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>When I started making data visualizations, I considered <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3</a>\u2014Data Driven Documents\u2014to be the gold standard programming language required to create beautiful graphics on the web.</p>
<p>As I progress in my career, I\u2019m realizing that D3 has a more particular (and smaller) role in the visualization lifecycle than I initially envisioned. As I design more visualizations, I\u2019m learning that my most efficient and intuitive development comes when I <strong>program literally</strong>. </p>
<p>What does that mean? (To be honest, I\u2019m making up the term.) It means that I\u2019m moving away from <em>pseudo-declarative</em> data visualization in D3, and starting to make my visualizations <em>literally</em>, by simply writing markup in <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a>. </p>
<p>Although D3 <a href="${"https://d3js.org/#selections"}" rel="${"nofollow"}">claims</a> to be declarative, it still uses <a href="${"https://www.carlosrendon.me/unfinished_d3_book/d3_method_chaining.html"}" rel="${"nofollow"}">method chaining</a> to provide instructions to render visuals. In Svelte, we don\u2019t provide instructions but instead render our SVG elements directly, using <code>{#each}</code> blocks. By writing my markup literally and appending data inline, my code makes more sense and causes fewer headaches.</p>
<h3 id="${"what-youll-find-in-this-post"}"><a href="${"#what-youll-find-in-this-post"}">What you\u2019ll find in this post</a></h3>
<p>In this post, I\u2019ll <a href="${"#what-d3-does-3%EF%B8%8F%E2%83%A3"}">1)</a> provide an overview of D3, and how it made the process of creating visualizations so much easier; <a href="${"#literal-programming-with-svelte-"}">2)</a> explain why I\u2019m moving away from D3 for DOM manipulation, and instead using Svelte \u201Cliterally\u201D; and <a href="${"#bringing-it-home-with-burgers-"}">3)</a> provide a funky burger \u{1F354} example to explain my logic.</p>
 ${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>This is not a comprehensive tutorial about <strong>how to</strong> use D3 and Svelte together. I\u2019ll cover that in the <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">future</a>. In the meantime, check out tutorials from <a href="${"https://www.youtube.com/watch?v=bnd64ZrHC0U"}" rel="${"nofollow"}">Matthias Stahl</a>, examples of Svelte and D3 in action on The Pudding\u2019s <a href="${"https://github.com/the-pudding/"}" rel="${"nofollow"}">GitHub</a>, and an example of similar framework-driven logic on Amelia Wattenberger\u2019s <a href="${"https://wattenberger.com/post/react-and-d3"}" rel="${"nofollow"}">blog</a>. </p>
<p>Want an immediate example? Here\u2019s an (admittedly verbose) <a href="${"https://github.com/connorrothschild/bob-ross-art-gallery/blob/master/src/components/ColorViz.svelte"}" rel="${"nofollow"}">Svelte component</a> I used in a recent project about Bob Ross.</p>`;
        }
      })} 
<h2 id="${"what-d3-does"}"><a href="${"#what-d3-does"}">What D3 does</a></h2>
<p>D3 allows for intuitive transformations of the DOM by leveraging easy-to-understand selection syntax. Sound confusing? Let\u2019s learn through an example (adapted from the <a href="${"https://d3js.org/#selections"}" rel="${"nofollow"}">D3 homepage</a>). Imagine we had 5 circles and wanted to change the fill of each. </p>
<svg class="${"svelte-1qkbzqf"}"><rect width="${"100%"}" height="${"100%"}" class="${"svelte-1qkbzqf"}"></rect><circle cx="${"10%"}" cy="${"50%"}" r="${"10"}" fill="${"steelblue"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"30%"}" cy="${"50%"}" r="${"10"}" fill="${"steelblue"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"50%"}" cy="${"50%"}" r="${"10"}" fill="${"steelblue"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"70%"}" cy="${"50%"}" r="${"10"}" fill="${"steelblue"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"90%"}" cy="${"50%"}" r="${"10"}" fill="${"steelblue"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle></svg>
<p>In the traditional <a href="${"https://www.w3schools.com/js/js_htmldom.asp"}" rel="${"nofollow"}">HTML DOM model</a>, we would 1) select all circles, 2) loop through each one, and 3) redefine its fill. In code, that would look like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">var circles = document.getElementsByTagName(&quot;circle&quot;);
for (var i = 0; i &lt; circles.length; i++) &#123;
  var circle = circles.item(i);
  circle.setAttribute(&quot;fill&quot;, &quot;white&quot;, null);
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Doing this in D3 would reduce the length of our code by a factor of 5, and allows us to write in a way that <em>just makes sense</em>. Here, we select every circle and change its fill.</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `d3.selectAll(&quot;circle&quot;).style(&quot;fill&quot;, &quot;white&quot;)
`;
        }
      })}
<svg class="${"svelte-1qkbzqf"}"><rect width="${"100%"}" height="${"100%"}" class="${"svelte-1qkbzqf"}"></rect><circle cx="${"10%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"30%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"50%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"70%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"90%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle></svg>
<p>Imagine if you also wanted to bind data to those circles. That is, you wanted to fill the circle according to some attribute, or size its radius according to some datapoint. In traditional JavaScript, that might look something like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">let data = [5, 10, 15, 20, 25];

var circles = document.getElementsByTagName(&quot;circle&quot;);
for (var i = 0; i &lt; circles.length; i++) &#123;
  var circle = circles.item(i);
  circle.style.setProperty(&quot;r&quot;, data[i], null);
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Not too hard\u2014but also, not too easy. D3 simplifies this logic by removing the need for a loop and iterating on your selection for you:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

d3<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">"circle"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"r"</span><span class="token punctuation">,</span> <span class="token parameter">d</span> <span class="token operator">=></span> d<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<svg class="${"svelte-1qkbzqf"}"><rect width="${"100%"}" height="${"100%"}" class="${"svelte-1qkbzqf"}"></rect><circle cx="${"10%"}" cy="${"50%"}" r="${"5"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"30%"}" cy="${"50%"}" r="${"10"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"50%"}" cy="${"50%"}" r="${"15"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"70%"}" cy="${"50%"}" r="${"20"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle><circle cx="${"90%"}" cy="${"50%"}" r="${"25"}" fill="${"white"}" class="${"svelte-1qkbzqf"}"><title>Hello from the circle!</title></circle></svg>
<p>Again, we reduce the length of our code nearly 5x, and the code just <strong>makes sense</strong>.</p>
<p>All that to say, D3 is great. It works, and it works wonderfully. By removing the need to write highly imperative code that is unintuitive in nature, D3 saves developers time and allows for more powerful visualizations.</p>
<p>But I\u2019m hardly using it at all recently. Increasingly, I\u2019ve been using the JavaScript <del>framework</del> compiler <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a> to <em>write SVG directly</em> rather than <em>tell JavaScript to write SVG</em>. How? Let\u2019s see below.</p>
<h2 id="${"literal-programming-with-svelte-"}"><a href="${"#literal-programming-with-svelte-"}">\u201CLiteral\u201D programming with Svelte \u{1F5E3}</a></h2>
<p>Going back to the above circles, imagine if we could simply bind our data to our app\u2019s markup <strong>directly</strong>, without any intermediate code serving as instructions.</p>
<p><strong>We can!</strong> Svelte (and Vue, React and other frameworks) allow for seamless interactions between our app\u2019s logic, data, and markup, so that we can embed data directly into our SVG elements. In this new paradigm, we could replace the set of D3 instructions from earlier with the following Svelte code:</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  let data = [&#123;x: 10, r: 5 &#125;, 
              &#123;x: 30, r: 10&#125;, 
              &#123;x: 50, r: 15&#125;, 
              &#123;x: 70, r: 20&#125;, 
              &#123;x: 90, r: 25&#125;]
&lt;/script&gt;

&lt;svg&gt;
  &#123;#each data as d&#125;
    &lt;circle cx=&#123;d.x + &quot;%&quot;&#125; cy=&quot;50%&quot; r=&#123;d.r&#125; fill=&quot;white&quot; /&gt;
  &#123;/each&#125;
&lt;/svg&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}

<p>In my view, there are three benefits to writing our code this way:</p>
<ol><li><strong>More intuitive authoring.</strong> It feels much more natural to write our SVG elements <em>directly</em> rather than provide D3 instructions on how to do so.</li>
<li><strong>Less friction in translating D3 to the DOM.</strong> By writing SVG directly, we could copy an SVG element from the <a href="${"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle"}" rel="${"nofollow"}">MDN docs</a>, paste in our values, and see immediate results. Fewer handoffs results in fewer errors.</li>
<li><strong>Reusability.</strong> Creating a robust and flexible <code>&lt;Circle /&gt;</code>, <code>&lt;Bar /&gt;</code>, or <code>&lt;Axis /&gt;</code> component permits consistent reuse within and across projects. D3 code is usually written as a series of blocks which lacks a natural structure and becomes difficult to reuse effectively.</li></ol>
<p>The only downside (which is actually just an adjustment) is that this new approach requires you to learn how to <a href="${"https://www.w3schools.com/graphics/svg_intro.asp"}" rel="${"nofollow"}">write SVG</a>. But isn\u2019t it a good exercise to learn the anatomy of what we\u2019re actually creating? Having knowledge of SVG elements and attributes will benefit any developer who creates visuals, no matter how they eventually do so.</p>
<p>Not convinced? Let me explain the logic one more time, with a tastier example:</p>
<h2 id="${"bringing-it-home-with-burgers-"}"><a href="${"#bringing-it-home-with-burgers-"}">Bringing it home with burgers \u{1F354}</a></h2>
<p>Imagine we want to prepare a burger. We have an array of objects, each with an ingredient and ingredient-specfic instructions. We want to 1) create each item (insert it into the DOM), and 2) carry out its instructions (execute some function).</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">let ingredients = [
  &#123;item: &quot;Top Bun&quot;, instruction: &quot;Place at top of burger.&quot;&#125;,
  &#123;item: &quot;Pickles&quot;, instruction: &quot;Three pickles, please.&quot;&#125;,
  &#123;item: &quot;Cheese&quot;, instruction: &quot;Cheese is optional, but it makes the burger better.&quot;&#125;,
  &#123;item: &quot;Patty&quot;, instruction: &quot;Cook to your satisfaction. Optionally, add two patties.&quot;&#125;,
  &#123;item: &quot;Tomato&quot;, instruction: &quot;Should be the same width as bun, and thinly sliced.&quot;&#125;,
  &#123;item: &quot;Lettuce&quot;, instruction: &quot;Should be the same width as bun.&quot;&#125;,
  &#123;item: &quot;Bottom Bun&quot;, instruction: &quot;Place at bottom of burger.&quot;&#125;,
]</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>There are three ways to make this burger (at least, in our fantasy world where we make burgers via code).</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Although I use the Svelte REPL to showcase these three examples, only the last one requires Svelte. The REPL is just a nice place to host (editable!) code \u{1F642}</p>`;
        }
      })}
<p><strong>The first option</strong> (old school) is to tell your app to loop through each ingredient, add it to the others, and stack the ingredients accordingly. For each ingredient in the loop, execute the burger-making according to our ingredient-specific instruction. This is how burgers would have been made, painfully, before D3.</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/4b4eee03981b4450aa08e402aa0ceeb6?version=3.38.3"}" width="${"100%"}" height="${"600"}" title="${"Old school burger building"}"></iframe>
<p><strong>The second option</strong> (new school) is to tell your app to read in each ingredient and instruction through D3 method chaining. We remove the need for our verbose <code>for</code> loop, and use the chain to give D3 a set of sequential instructions.</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/8198de15de314aee860932629370ed09?version=3.38.3"}" width="${"100%"}" height="${"600"}" title="${"New school burger building"}"></iframe>
<p>In <strong>our final option</strong> (new new school), we can simply append our instructions directly to the ingredient, <em>literally</em>. Here, we skip <code>for</code> loops and we skip D3 method chaining; instead, we componentize our general \u201Cburger item\u201D and pass each ingredient/instruction directly to that component. Only Svelte enables such burgers:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/f64bd9dcface42a1a2d544b35638631e?version=3"}" width="${"100%"}" height="${"600"}" title="${"Literal burger building"}"></iframe>
<p>Which do you prefer? It\u2019s much easier to make a burger by <em>just making it</em>, rather than giving instructions, no matter what form they come in. Frameworks allow for the construction of burgers\u2014and visualizations\u2014<strong>literally</strong>. We write our ingredients (or DOM elements) directly, and include our instructions (or data) in our markup. Now that\u2019s a tasty burger.</p>
<h2 id="${"the-big-picture-"}"><a href="${"#the-big-picture-"}">The big picture \u{1F5BC}</a></h2>
<ol><li>Svelte allows visualization developers to <strong>write SVG directly</strong> (and avoid telling D3 what to do), while using Svelte syntax (<code>{#each}</code>, etc.) to avoid annoying and inefficient <code>for</code> loops. </li>
<li>Including logic directly in your markup (<code>{#if}</code>, etc.) removes the need for complex JavaScript/DOM interactions (more on that below). </li>
<li>Svelte works to <em>complement</em> D3, not replace it, by continuing to leverage the most powerful parts of its API: <code>d3-scale</code>, <code>d3-array</code>, <code>d3-shape</code>, etc.</li></ol>
<hr>
<h2 id="${"bonus-perks-"}"><a href="${"#bonus-perks-"}">Bonus perks \u{1F3C6}</a></h2>
<p>Using Svelte to create visualizations has a few other perks:</p>
<h3 id="${"responsiveness"}"><a href="${"#responsiveness"}">Responsiveness</a></h3>
<p>By using Svelte\u2019s <a href="${"https://svelte.dev/tutorial/reactive-declarations"}" rel="${"nofollow"}">reactive declarations</a> (the dollar signs \u{1F4B0}), we can make certain variables  \u2018watch\u2019 for state changes and update automatically. One huge benefit of this is that we can bind our scales to updating values such as the window width, and write minimal code to make our charts update on resize.</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
import  windowWidth from &quot;../../stores/store.js&quot;;
import  scaleLinear from &#39;d3-scale&#39;;

$: xScale = scaleLinear
            .domain(data.map(d =&gt; d.value))
            .range([0, $windowWidth])
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>With some other component watching and responding to resize events (such as <a href="${"https://github.com/the-pudding/svelte-starter/blob/master/src/components/helpers/Window.svelte"}" rel="${"nofollow"}">Window.svelte</a>), any SVG property depending on <code>xScale</code> will automatically update when your window resizes. You can also set the chart width itself to equal <code>$windowWidth</code> for a fully resizable, responsive chart.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Another way to achieve easy responsiveness is to <a href="${"https://svelte.dev/tutorial/dimensions"}" target="${"_blank"}" rel="${"noopener noreferrer"}">bind the SVG\u2019s parent container\u2019s div width</a> to some variable (<code>width</code>) and set the SVG\u2019s width to match.</p>`;
        }
      })}
<h3 id="${"ifelse-blocks"}"><a href="${"#ifelse-blocks"}">If/else blocks</a></h3>
<p>In regular D3, we often use the <a href="${"https://en.wikipedia.org/wiki/%3F:"}" rel="${"nofollow"}">ternary operator</a> to define condition-specific attributes, like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Circles are filled green if positive, red if negative</span>
d3<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">'circle'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token string">'fill'</span><span class="token punctuation">,</span> <span class="token parameter">d</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">'red'</span> <span class="token operator">:</span> <span class="token string">'green'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>This is great, but what if we want to make more significant changes based on app-wide state? For example, imagine we want to show three different types of the same visualization on different screen sizes: </p>
<ol><li>Desktop (over 1024px)</li>
<li>Tablet (520px to 1024px)</li>
<li>Mobile (under 520px)</li></ol>
<p>In D3, we would achieve this by adding a resize event listener, providing custom breakpoints, and rendering different visuals if the updated window width were within a certain range. The complicated part would be having to render a different visual at each breakpoint.</p>
<p>One key difference between relying on D3 and leveraging the power of Svelte is that Svelte allows for <a href="${"https://svelte.dev/tutorial/if-blocks"}" rel="${"nofollow"}">conditional rendering</a> <em>directly in our markup</em>, not just in our JavaScript logic. In other words, while vanilla JavaScript would approach our problem with the following:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> newWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>newWidth <span class="token operator">&lt;</span> <span class="token number">520</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
      <span class="token comment">// Hide tablet and desktop</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tablet"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"desktop"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>

      <span class="token comment">// Show mobile</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"mobile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newWidth <span class="token operator">&lt;</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// Hide mobile and desktop</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"mobile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"desktop"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>

      <span class="token comment">// Show tablet</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tablet"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// Hide mobile and tablet</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"mobile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tablet"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>

      <span class="token comment">// Show desktop</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"desktop"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Svelte simplifies our logic to:</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> $windowWidth <span class="token operator">&lt;</span> <span class="token number">520</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mobile</span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span> <span class="token keyword">if</span> $windowWidth <span class="token operator">&lt;</span> <span class="token number">1024</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tablet</span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Desktop</span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Hey, thanks for reading. I appreciate you! In the event that you disagree with me or I got something wrong, please message me on <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">Twitter</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
