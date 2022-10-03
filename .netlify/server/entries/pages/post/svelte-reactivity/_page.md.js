import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { C as Code } from "../../../../chunks/Code.js";
/* empty css                                                      */import { I as Info } from "../../../../chunks/Info.js";
import { scaleLinear } from "d3-scale";
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
/* empty css                                                     */const Thanks_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "p.svelte-xwl97d{font-style:italic;text-align:right;font-size:1.1rem}",
  map: null
};
const Thanks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<p class="${"svelte-xwl97d"}">${slots.default ? slots.default({}) : ``}</p>`;
});
const Doubled_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".example.svelte-j5tzlt{width:480px;max-width:100%;background:var(--semitransparent-bg);margin:2rem auto;z-index:3;position:relative;padding:1rem;overflow:hidden;text-align:center}p.svelte-j5tzlt{margin:0 !important}",
  map: null
};
const Doubled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let doubled;
  let count = 0;
  $$result.css.add(css$2);
  doubled = count * 2;
  return `<div class="${"example svelte-j5tzlt"}"><button class="${"button"}">Increment
  </button>

  <p class="${"svelte-j5tzlt"}">${escape(count)} doubled is ${escape(doubled)}</p>
</div>`;
});
const DoubledMinusOne_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".example.svelte-j5tzlt{width:480px;max-width:100%;background:var(--semitransparent-bg);margin:2rem auto;z-index:3;position:relative;padding:1rem;overflow:hidden;text-align:center}p.svelte-j5tzlt{margin:0 !important}",
  map: null
};
const DoubledMinusOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  let doubled, doubledMinusOne;
  $$result.css.add(css$1);
  {
    {
      doubled = count * 2;
      doubledMinusOne = doubled - 1;
    }
  }
  return `<div class="${"example svelte-j5tzlt"}"><button class="${"button"}">Increment
  </button>

  <p class="${"svelte-j5tzlt"}"><strong>${escape(count)}</strong> doubled is <strong>${escape(doubled)}</strong>, and if you
    subtract one it is <strong>${escape(doubledMinusOne)}</strong></p>
</div>`;
});
const Scales_svelte_svelte_type_style_lang = "";
const css = {
  code: ".example.svelte-12rmiq8{width:480px;max-width:100%;background:var(--semitransparent-bg);margin:2rem auto;z-index:3;position:relative;padding:2rem 1rem;text-align:center;overflow:hidden;resize:horizontal}span.svelte-12rmiq8{position:absolute;top:3px;right:3px;color:white;padding:4px;font-family:var(--font-sans);font-weight:200;font-size:0.85rem;text-transform:uppercase}p.svelte-12rmiq8{margin:0 !important}",
  map: null
};
const Scales = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let width;
  let formerWidth = width;
  let resized = false;
  let setResized = () => {
    let diff = width - formerWidth;
    formerWidth = width;
    if (isNaN(diff))
      return;
    resized = true;
  };
  $$result.css.add(css);
  xScale = scaleLinear().domain([0, 100]).range([0, width]);
  {
    resized ? null : setResized();
  }
  return `<div class="${"example svelte-12rmiq8"}">${!resized ? `<span class="${"svelte-12rmiq8"}">Resize me!</span>` : ``}
  <p class="${"svelte-12rmiq8"}"><code>xScale(50)</code> is equal to: ${escape(Math.round(xScale(50)))}px.
  </p>
</div>`;
});
const metadata = {
  "layout": "blog",
  "title": "Reactive declarations using the dollar label in Svelte",
  "description": "The most powerful feature you're underutilizing in your Svelte applications",
  "date": "2022-05-30",
  "featured": false,
  "draft": true,
  "tags": ["svelte", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script async src="${"https://platform.twitter.com/widgets.js"}" charset="${"utf-8"}" data-svelte="svelte-1bzu0rs"><\/script>`, ""}
${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Svelte remains my framework of choice for building web applications; it is lean, intuitive, and powerful. One tool I see beginners struggle with is the <code>$:</code>, or dollar label, operator\u2014a tool that is confusing at first but ends up making reactivity a breeze.</p>
<p>In this post, I\u2019ll talk a bit about the dollar label operator <code>$:</code>, a hidden gem in the Svelte ecosystem that I bet you\u2019re underutilizing. </p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>I love using Svelte (it powers this personal site!), but I am by no means an expert on <em>how</em> tools like the dollar label operator work behind the scenes. In the event that this leads to poor advice (e.g. overuse of the dollar label operator), please <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">let me know</a>!</p>`;
        }
      })}
<h2 id="${"side-note-a-label-with-multiple-meanings"}"><a href="${"#side-note-a-label-with-multiple-meanings"}">Side note: A label with multiple meanings</a></h2>
<p>One quirk of the dollar sign in Svelte is that it can mean totally different things in different contexts. In particular, <code>$</code> could be used to:</p>
<ol><li>Access a store value (e.g. <code>$myStore</code>)</li>
<li>Insert a variable into a template literal string (e.g. <code>\`This is a \${variable}\`</code>) (although this is not Svelte-specific)</li>
<li>Create a reactive declaration (e.g. <code>$: doubled = count * 2</code>)</li></ol>
<p>I won\u2019t cover all three meanings; this post is intended to be a <strong>guide to #3, reactive declarations.</strong> If you\u2019re interested in reading more about other use-cases, read Geoff Rich\u2019s great post: <a href="${"https://geoffrich.net/posts/svelte-$-meanings/"}" rel="${"nofollow"}">The many meanings of $ in Svelte</a>.</p>
<hr>
<p>My goal in this post is to show you three levels of depth at which you can use the <code>$:</code> operator:</p>
<ol><li><a href="${"#01-same-line-reactivity"}">Same-line reactivity</a></li>
<li><a href="${"#02-block-level-reactivity"}">Block-level reactivity</a></li>
<li><a href="${"#03-separate-context-reactivity"}">Separate-context reactivity</a></li></ol>
<p><em>Please note I am making up these terms.</em></p>
<hr>
<h2 id="${"01-same-line-reactivity"}"><a href="${"#01-same-line-reactivity"}">01. Same-line reactivity</a></h2>
<p>This is the most common use-case for <code>$:</code> reactivity in Svelte. It is also the example given in the <a href="${"https://svelte.dev/tutorial/reactive-declarations"}" rel="${"nofollow"}">Svelte tutorial</a>:</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "svelte",
          highlightedLines: "2-3"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
	let count = 0;
	$: doubled = count * 2;
&lt;/script&gt;

&lt;button on:click=&#123;() =&gt; &#123;count += 1&#125;&#125;&gt;
	Increment
&lt;/button&gt;

&lt;p&gt;&#123;count&#125; doubled is &#123;doubled&#125;&lt;/p&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
${validate_component(Doubled, "Doubled").$$render($$result, {}, {}, {})}
<p>Here, the declaration on line 3 assigns <code>doubled</code> to <strong>always</strong> be equal to <code>count * 2</code>. Using the <code>$:</code> operator tells Svelte that <code>doubled</code> should be updated whenever <code>count</code> changes.</p>
<h3 id="${"a-use-case-constructing-responsive-d3-scales"}"><a href="${"#a-use-case-constructing-responsive-d3-scales"}">A use-case: Constructing responsive D3 scales</a></h3>
<p>A common use-case for <code>$:</code> is to construct a responsive <a href="${"https://www.d3indepth.com/scales/"}" rel="${"nofollow"}">D3 scale</a>; we want to keep track of the window width and/or height so that we can scale datapoints to fit the screen. The dollar label operator allows us to update our existing scales automatically whenever the window size changes.</p>
<p>For example, here\u2019s a scale that updates when its range changes, in particular tracking changes in <code>width</code>.</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  let width;

  import &#123; scaleLinear &#125; from &quot;d3-scale&quot;;
  $: xScale = scaleLinear().domain([0, 100]).range([0, width]);
&lt;/script&gt;

&lt;div bind:clientWidth=&#123;width&#125;&gt;
  &lt;p&gt;&lt;code&gt;xScale(50)&lt;/code&gt; is equal to: &#123;xScale(50)&#125;px.&lt;/p&gt;
&lt;/div&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Scales, "Scales").$$render($$result, {}, {}, {})}
<p>Notice how <code>xScale(50)</code> will always return <strong>half the width</strong> of the corresponding <code>div</code>, because it is linked reactively.</p>
<p>Practically, this makes for some awesome, responsive data visualizations, as this <a href="${"https://svelte.dev/repl/a5f22cf3df8040b29fc128d969059125?version=3.38.3"}" rel="${"nofollow"}">REPL</a> demonstrates (resize the window to see the effect!):</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/a5f22cf3df8040b29fc128d969059125?version=3.38.3"}" width="${"100%"}" height="${"700"}" title="${"A responsive Svelte scatterplot"}"></iframe>
<hr>
<h2 id="${"02-block-level-reactivity"}"><a href="${"#02-block-level-reactivity"}">02. Block-level reactivity</a></h2>
<p>Because the dollar label operator forces an update <em>every time</em> something on the right side of the declaration changes, we can make entire blocks of code reactive; in other words, we can group characteristically similar lines of code into one <code>{}</code> block and execute the entire block whenever one reference changes.</p>

<p>This could be useful in removing needless repetition. Consider the following example, where we both <em>double</em> a number and then (for some reason) want to <em>decrement it</em> in a separate variable:</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
    let count = 0;
    $: doubled = count * 2;
    $: doubledMinusOne = doubled - 1;
    $: console.log(doubledMinusOne);
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Because each of the above declarations are related to one another (each dependent on the line above it), it would make sense to put all of these into the same block, which also happens to be more readable:</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
    let count = 0;
    let doubled, doubledMinusOne; // We initialize these outside of the block
    
    $: &#123;
        doubled = count * 2;
        doubledMinusOne = doubled - 1;
        console.log(doubledMinusOne);
    &#125;
&lt;/script&gt;

&lt;p&gt;
  &#123;count&#125; doubled is &#123;doubled&#125;, and if you subtract one it is &#123;doubledMinusOne&#125;
&lt;/p&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(DoubledMinusOne, "DoubledMinusOne").$$render($$result, {}, {}, {})}
<h3 id="${"a-use-case-triggering-scrollytelling-steps-with-an-if-block"}"><a href="${"#a-use-case-triggering-scrollytelling-steps-with-an-if-block"}">A use-case: Triggering scrollytelling steps with an <code>if</code> block</a></h3>
<p>A more complex and powerful use case would be executing <code>if... else</code> blocks after a dollar label. This enables us to listen for <em>specific</em> changes and evaluate code accordingly.</p>
<p>For example, if you were building a scrollytelling visualization in Svelte (see <a href="${"https://www.connorrothschild.com/post/svelte-scrollytelling"}" rel="${"nofollow"}">this post</a>), you would want to trigger different events based on the user\u2019s current position on the page (captured in a variable called <code>step</code>). Rather than having three different <code>$:</code> declarations, one for each step, we can collapse those into one block:</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  $: if (step == 0) &#123;
    // Do something here
  &#125; else if (step == 1) &#123;
    // Do something else here
  &#125; else if (step == 2) &#123;
    // Or do something here!
  &#125;
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Here\u2019s a <a href="${"https://svelte.dev/repl/f18a0492d1af4961af839dd32e67952e?version=3.38.3"}" rel="${"nofollow"}">REPL</a> showing that in action. You don\u2019t need to understand exactly what is happening here, but look at lines 9-16 and then scroll within the pane:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/f18a0492d1af4961af839dd32e67952e?version=3.38.3"}" width="${"100%"}" height="${"700"}" title="${"A Svelte Scrollytelling example"}"></iframe>
<hr>
<h2 id="${"03-separate-context-reactivity"}"><a href="${"#03-separate-context-reactivity"}">03. Separate-context reactivity</a></h2>
<p>The above examples make it clear that the dollar label operator can \u201Cwatch\u201D for changes in one value, and update a linked value accordingly. But what if we wanted to trigger some change via an unrelated variable? In other words, when <code>x</code> changes, run <code>console.log(&quot;Hello!&quot;)</code>?</p>
<p>Enter the <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator"}" rel="${"nofollow"}">comma operator</a> (all the operators!). From MDN:</p>
<blockquote><p>The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. </p></blockquote>
<p>By combining these two operators, we\u2019re able to make statements and variables reactive to changes in unrelated parts of our code. </p>

${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
    let x = 0;
    $: x, console.log(&quot;Hello!&quot;);
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Now, anytime <code>x</code> changes, the console will log \u201CHello!\u201C. As far as I can tell, this is not covered in official Svelte documentation; but Rich Harris has mentioned it as a tool:</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">The most common way to handle that situation is <br><br>$: c, console.log(&#39;yes&#39;);<br><br>It does feel a bit weird, I know :)</p>\u2014 Rich Harris (@Rich_Harris) <a href="${"https://twitter.com/Rich_Harris/status/1149265270495727617?ref_src=twsrc%5Etfw"}">July 11, 2019</a></blockquote>




<h3 id="${"a-use-case-tracking-an-endpoint-based-on-frontend-user-interactions"}"><a href="${"#a-use-case-tracking-an-endpoint-based-on-frontend-user-interactions"}">A use-case: Tracking an endpoint based on frontend user interactions</a></h3>
<p>Imagine you run a very simple eCommerce site that has one purpose: to sell shirts. Your entire website is straight to the point: the user can select any number of shirts to buy, <strong>but you need to make sure they don\u2019t exceed the current supply in your warehouse</strong>. In order to solve this problem, we need to ping <em>an endpoint</em> that returns the number of shirts remaining. </p>
<p>And so in this case, we will keep track of two elements that are characteristically related to one another but have no connection in our code: the state of the <strong>user\u2019s cart</strong> (frontend) and the <strong>available remaining supply</strong> (backend). When the user adds or removes a shirt from their cart, we want to ping the backend to check the remaining supply (accounting for all those other purchases that are coming in, since you run such a successful shop).</p>
<p>Here\u2019s a minimal example:</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "Svelte",
          highlightedLines: "7-9, 14"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  let inCart = 1;
  let remainingSupply;

  // A function which returns a number between 1-10 for &quot;remaining shirts&quot; available for sale
  // In reality, this would be a sort of API call
  let getRemainingSupply = function () &#123;
    remainingSupply = Math.ceil(Math.random() * 9);
  &#125;;

  getRemainingSupply(); // Run this instantly to get remaining shirts

  // Whenever inCart changes, we run getRemainingSupply()
  $: inCart, getRemainingSupply();
&lt;/script&gt;

&lt;button on:click=&#123;() =&gt; &#123;inCart += 1&#125;&#125;&gt;Another!&lt;/button&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
<p>Lines 7 through 9 create the <code>getRemainingSupply</code> function which, in reality, would <a href="${"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}" rel="${"nofollow"}"><code>fetch()</code></a> some data from an API to return the number of shirts available for sale. (Our fake function simply returns a number between 1 and 10, suggesting that the supply is rather low and fluctuates a lot\u2014sorry, shirt buyer!)</p>
<p>Then, on line 14, our code functions exactly like it reads: \u201Cwhenever <code>inCart</code> changes, rerun <code>getRemainingSupply()</code>.\u201D</p>
<p>Thinking further, separate-context reactivity also allows us to trigger <strong>the same function</strong> based on any number of state changes. For example, say we also want to rerun <code>getRemainingSupply</code> when the user logs in or out.</p>
<p>We could add the following lines to our above code to achieve this quite easily (within the existing script tag):</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  $: inCart, getRemainingSupply();
  $: userLoggedIn, getRemainingSupply();
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>But here\u2019s a quick bonus tip: you can actually combine each of these conditions into one line because the <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator"}" rel="${"nofollow"}">comma operator</a> evaluates <strong>each</strong> of its operands and returns the value of the last.</p>
${validate_component(Code, "Code").$$render($$result, { language: "Svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  $: inCart, userLoggedIn, getRemainingSupply();
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>The above example reads: \u201Cwhenever <code>inCart</code> changes, or <code>userLoggedIn</code> changes, rerun <code>getRemainingSupply()</code>.\u201D</p>
<p>Here\u2019s a more complete <a href="${"https://svelte.dev/repl/c30c5e28c4c8471bb515bd65a61595b3?version=3.38.3"}" rel="${"nofollow"}">REPL</a> showing our code in action (I hope your eCommerce site has a better designer):</p>

<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/c30c5e28c4c8471bb515bd65a61595b3?version=3.38.3"}" width="${"100%"}" height="${"700"}" title="${"Separate-context reactivity in Svelte"}"></iframe>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `
<p>Obviously, this is not how eCommerce sites really work. This is just one example of connecting otherwise-unrelated bits of state, sort of akin to triggering <a href="${"https://reactjs.org/docs/hooks-effect.html"}" rel="${"nofollow"}">side effects in React</a>. </p>
<p><a href="${"https://svelte.dev/repl/83dfbc08c2fd4e20868c858ec5cddd4e?version=3.6.7"}" rel="${"nofollow"}">Here\u2019s another example</a> provided by <a href="${"https://twitter.com/opensas/status/1152119549053100032"}" rel="${"nofollow"}">@opensas</a>.</p>`;
        }
      })}
<hr>
<h2 id="${"wrapping-up"}"><a href="${"#wrapping-up"}">Wrapping up</a></h2>
<p>The dollar label operator makes it easy to keep track of and update variables in our Svelte applications. It can be confusing at first, but once you learn to use it effectively, it makes for leaner, simpler, and more powerful applications.</p>
<p>Feel free to reach out on <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">Twitter</a> with your thoughts, questions, or anything you think I got wrong \u{1F642}. </p>
${validate_component(Thanks, "Thanks").$$render($$result, {}, {}, {
        default: () => {
          return `Thanks to ... and ... for reviewing this post.`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
