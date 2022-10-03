import { c as create_ssr_component, d as add_attribute, p as assign, q as now, r as loop, t as identity, b as subscribe, v as validate_component, f as each, e as escape } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { C as Code } from "../../../../chunks/Code.js";
import { I as Image } from "../../../../chunks/Image.js";
import { I as Info } from "../../../../chunks/Info.js";
import { w as writable } from "../../../../chunks/index2.js";
import { scaleLinear } from "d3-scale";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
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
/* empty css                                                      *//* empty css                                                     */const Scroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const TweenedExample_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-18d8x1z{height:80vh;overflow-y:scroll;background:var(--semitransparent-bg);margin-bottom:1.15rem;z-index:3;position:relative}.step.svelte-18d8x1z{height:60vh;display:flex;place-items:center;justify-content:center}.step-content.svelte-18d8x1z{background:whitesmoke;padding:0.5rem 1rem;box-shadow:1px 1px 10px rgba(0, 0, 0, 0.2);transition:background 500ms ease, color 500ms ease}.sticky.svelte-18d8x1z{position:sticky;bottom:0;left:0;margin:0;padding:1rem}.step-content .example-step-paragraph{color:#ccc;margin-bottom:0}.step.active .step-content{background:white !important}.step.active .step-content .example-step-paragraph{color:black !important}",
  map: null
};
const TweenedExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $number, $$unsubscribe_number;
  let currentStep;
  let number = tweened(0);
  $$unsubscribe_number = subscribe(number, (value) => $number = value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (currentStep == 0) {
        number.set(100);
      } else if (currentStep == 1) {
        number.set(200);
      } else if (currentStep == 2) {
        number.set(300);
      }
    }
    $$rendered = `<section class="${"svelte-18d8x1z"}">${validate_component(Scroll, "Scroll").$$render(
      $$result,
      { value: currentStep },
      {
        value: ($$value) => {
          currentStep = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each([1, 2, 3], (text, i) => {
            return `<div class="${["step svelte-18d8x1z", currentStep === i ? "active" : ""].join(" ").trim()}"><div class="${"step-content svelte-18d8x1z"}"><p class="${"example-step-paragraph"}">Step ${escape(text)}</p></div>
      </div>`;
          })}`;
        }
      }
    )}
  <h1 class="${"sticky svelte-18d8x1z"}">${escape(Math.round($number))}</h1>
</section>`;
  } while (!$$settled);
  $$unsubscribe_number();
  return $$rendered;
});
const D3ScaleExample_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-10djkb1{margin:0 0 1rem 0 !important}span.svelte-10djkb1{vertical-align:bottom;font-size:1.75rem;margin-left:0.5rem;color:var(--text-color)}.example.svelte-10djkb1{width:480px;max-width:100%;background:var(--semitransparent-bg);margin:2rem auto;z-index:3;position:relative;padding:1rem;overflow:hidden}.output-range.svelte-10djkb1{width:100%;height:50px;position:relative}.circle.svelte-10djkb1{width:20px;height:20px;border-radius:50%;background:var(--text-color)}.output.svelte-10djkb1{position:absolute;transition:left 300ms ease 0s}p.output.svelte-10djkb1{top:25px}",
  map: null
};
let width = 400;
const D3ScaleExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let input = 0;
  let xScale = scaleLinear().domain([0, 9]).range([0, width]);
  $$result.css.add(css$1);
  return `<div class="${"example svelte-10djkb1"}"><h1 class="${"svelte-10djkb1"}">Input</h1>
  <input min="${"0"}" max="${"9"}" type="${"range"}"${add_attribute("value", input, 0)}><span class="${"svelte-10djkb1"}">${escape(input)}</span>

  <h1 style="${"margin-top: 1.5rem !important;"}" class="${"svelte-10djkb1"}">Output</h1>
  <div class="${"output-range svelte-10djkb1"}"><div class="${"circle output svelte-10djkb1"}" style="${"left: " + escape(xScale(input), true) + "px"}"></div>
    <p class="${"output svelte-10djkb1"}" style="${"left: " + escape(xScale(input), true) + "px"}">${escape(Math.round(xScale(input)))}px
    </p></div>
</div>`;
});
const TweenedXPosition_svelte_svelte_type_style_lang = "";
const css = {
  code: ".example.svelte-1p0hueb{width:100%;margin:auto;background:var(--semitransparent-bg);margin-bottom:1.15rem;z-index:3;position:relative;padding:1rem;overflow:hidden;display:flex;place-items:center;justify-content:center;flex-direction:column}p.svelte-1p0hueb{margin-bottom:0 !important}.active.svelte-1p0hueb{background:rgba(0, 0, 0, 0.25)}.active.svelte-1p0hueb:hover::before{opacity:0}",
  map: null
};
const TweenedXPosition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tweenedX, $$unsubscribe_tweenedX;
  let data = [
    { foo: 4, bar: 1 },
    { foo: 1, bar: 3 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 5 },
    { foo: 8, bar: 6 },
    { foo: 9, bar: 5 },
    { foo: 5, bar: 3 },
    { foo: 4, bar: 8 },
    { foo: 1, bar: 6 }
  ];
  const tweenedX = tweened(data.map((d) => d.foo));
  $$unsubscribe_tweenedX = subscribe(tweenedX, (value) => $tweenedX = value);
  $$result.css.add(css);
  $$unsubscribe_tweenedX();
  return `<div class="${"example svelte-1p0hueb"}"><div class="${"buttons"}"><button class="${["button svelte-1p0hueb", "active"].join(" ").trim()}">Foo</button>
    <button class="${["button svelte-1p0hueb", ""].join(" ").trim()}">Bar</button></div>
  <p class="${"svelte-1p0hueb"}">Your values:
    ${each($tweenedX, (x) => {
    return `${escape(Math.round(x))} \u200E`;
  })}</p>
</div>`;
});
const metadata = {
  "layout": "blog",
  "title": "Build your first scrollytelling visualization with Svelte",
  "description": "(In like 100 lines of code)",
  "date": "2022-01-09",
  "image": "svelte-and-d3/header.png",
  "archived": false,
  "featured": true,
  "tags": ["svelte", "d3", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script async src="${"https://platform.twitter.com/widgets.js"}" charset="${"utf-8"}" data-svelte="svelte-lj1ja"><\/script>`, ""}
${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Scrollytelling has become a fundamental component of data visualization in most modern newsrooms. It\u2019s also one of the most apparently technically challenging techniques to master. I\u2019ve been interested in scrollytelling for a while; I\u2019ve created one of the few scrollytelling articles <a href="${"https://www.connorrothschild.com/post/automation-scrollytell"}" rel="${"nofollow"}">in R</a>, and since then I\u2019ve been relying on Javascript frameworks like <a href="${"https://www.connorrothschild.com/project/cudi-hums"}" rel="${"nofollow"}">Vue</a> and <a href="${"https://www.connorrothschild.com/project/bob-ross-art-gallery"}" rel="${"nofollow"}">Svelte</a> to make scrollytelling easier.</p>
<p>In my experience, the developer experience of creating a scrollytelling visualization has the least friction when working in Svelte. This is thanks to reusable components, built-in tweening of numbers, and easy integration with D3.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Svelte is good for data visualization in general. If you want a primer of using Svelte with D3 to create visualizations more generally, check out <a href="${"https://www.connorrothschild.com/post/svelte-and-d3"}" rel="${"nofollow"}">this post</a>.</p>`;
        }
      })}
<p>What follows is a guided introduction to your first Svelte scrollytelling story. It leverages 1) Russell Goldenberg\u2019s reusable <code>&lt;Scrolly /&gt;</code> component to track the user\u2019s scroll position, 2) Svelte\u2019s built-in <code>tweened</code> values to cleanly transition datapoints, and 3) D3 scales to convert these raw values to points on a plot. By the end of this tutorial, you\u2019ll be able to create something that looks roughly like <a href="${"https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3"}" rel="${"nofollow"}">this</a>:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3\n"}" width="${"100%"}" height="${"700"}" title="${"A Svelte Scrollytelling example"}"></iframe>
<p>Before we create the chart, let\u2019s take a brief look at the elements at play. (If you\u2019re already familiar with these concepts, feel free to <a href="${"#step-1-build-a-chart"}">skip to the creation of our chart</a>).</p>
<h2 id="${"step-0a-understand-russells-ltscrolly-gt"}"><a href="${"#step-0a-understand-russells-ltscrolly-gt"}">Step 0a: Understand Russell\u2019s <code>&lt;Scrolly /&gt;</code></a></h2>
<p>Russell Goldenberg\u2019s <code>Scrolly</code> component is a reusable <code>.svelte</code> file which developers can easily plug into their code.</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">A <a href="${"https://twitter.com/sveltejs?ref_src=twsrc%5Etfw"}">@sveltejs</a> scrollytelling component in &lt; 100 lines. <a href="${"https://twitter.com/SvelteSociety?ref_src=twsrc%5Etfw"}">@SvelteSociety</a> <a href="${"https://t.co/l8fOJaiwkX"}">https://t.co/l8fOJaiwkX</a> <a href="${"https://t.co/VJclnWSmhT"}">pic.twitter.com/VJclnWSmhT</a></p>\u2014 Russell Goldenberg (@codenberg) <a href="${"https://twitter.com/codenberg/status/1432774653139984387?ref_src=twsrc%5Etfw"}">August 31, 2021</a></blockquote>
<p>It\u2019s not super important you understand how the component <em>is built</em>, but rather how <em>you can use it</em>. In action, you can include the <code>Scrolly</code> component in your code like so:</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "svelte",
          highlightedLines: "6,8"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
    import Scrolly from &quot;./Scrolly.svelte&quot;;
    let currentStep;
&lt;/script&gt;

&lt;Scrolly bind:value=&#123;currentStep&#125;&gt;
    &#123;#each [1,2,3] as text, i&#125;
        &lt;div class=&quot;step&quot; class:active=&#123;currentStep === i&#125;&gt;
            &lt;div class=&quot;step-content&quot;&gt;
                &lt;p&gt;Step &#123;text&#125;&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &#123;/each&#125;
&lt;/Scrolly&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
<p>This renders three bits of text, and applies a class of <code>active</code> to the current step.</p>
<p>Thanks to line 6, <strong><code>currentStep</code> will be bound to the current step index</strong>. (Russell\u2019s <code>Scrolly</code> component is handling this\u2014you don\u2019t have to worry about it.) In other words, as you scroll down and the first step comes into focus, <code>currentStep</code> will be set to 0.</p>
<p>Then, on line 8, we set an <code>active</code> class to the step content if <code>currentStep</code> is equal to the step index. Practically, this means that we can make sure that the step in focus is visually distinct from others (e.g. by changing its background or text color). </p>
<p>To showcase exactly how this works, let\u2019s add some minor styling to our <code>.step</code> and <code>.step-content</code> elements:</p>
${validate_component(Code, "Code").$$render($$result, { language: "css" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">.step &#123;
    height: 90vh;
    display: flex;
    place-items: center;
    justify-content: center;
&#125;

.step-content &#123;
    background: whitesmoke;
    color: #ccc;
    padding: .5rem 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    transition: background 500ms ease, color 500ms ease;
&#125;

.step.active .step-content &#123;
    background: white;
    color: black;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Don\u2019t worry too much about what\u2019s happening here. In simple terms, <code>.step</code> will be the container for each step, and <code>.step-content</code> will be the text content of each step. We want these two to be distinct so that <code>.step</code> can take up the full window height (e.g. there won\u2019t be multiple steps in view at the same time), and so that <code>.step-content</code> can fit nicely into a text box. (This structure is quite standard for most scrollytelling pieces.)</p>
<p>Then, in our final rule, we make our <code>.step-content</code> element (the text box) stand out if it is active.</p>
<p>This results in a simple (text-only) scrollytelling experience, where the text that is in focus also stands out visually. Notice how the steps are inactive at the top and bottom of the screen? </p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/ec07a8fd46684d2d8fbcda679d65d296?version=3.44.3\n"}" width="${"100%"}" height="${"600"}" title="${"A text-only scrollytelling experience"}"></iframe>
<p>Notice that we (on line 6) create a <code>steps</code> array that contains paragraphs that we include in each step; this makes integrating prose a bit easier.</p>
<p>Congrats! You\u2019ve completed the first step of your Svelte scrollytelling project. If all we wanted to do was toggle the visual appearance of text elements, we would be done. (But we don\u2019t. We instead want to include data, as we explain below.)</p>
<h2 id="${"step-0b-understand-tweened-values"}"><a href="${"#step-0b-understand-tweened-values"}">Step 0b: Understand <code>tweened</code> values</a></h2>
<p>Now that our app tracks the user\u2019s scroll position and which step is in focus, we <strong>want to modify the data in focus based on the active step</strong>. This is common in scrollytelling articles; the user scrolls and the chart elements (e.g. points) animate to new positions.</p>
<p>In our case, we\u2019ll achieve this by using <a href="${"https://svelte.dev/tutorial/tweened"}" rel="${"nofollow"}">Svelte\u2019s <code>tweened</code> values</a>. <strong>By creating a tweened value, we tell Svelte that changes to that value should be animated.</strong> Rather than immediately jump from our first number (e.g. 100) to the next (e.g. 200), the tweened value will smoothly transition between the two numbers (e.g. 100, 101\u2026 200).</p>
<p>Below, you can see what this looks like in action. This example includes a tweened value that changes according to the current step (watch the bottom left as you scroll).</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  import Scrolly from &quot;../Scrolly.svelte&quot;;

  import &#123; tweened &#125; from &quot;svelte/motion&quot;;
  let number = tweened(0);
  
  let currentStep;

  $: if (currentStep == 0) &#123;
    number.set(100);
  &#125; else if (currentStep == 1) &#123;
    number.set(200);
  &#125; else if (currentStep == 2) &#123;
    number.set(300);
  &#125;
&lt;/script&gt;

&lt;section&gt;
  &lt;Scrolly bind:value=&#123;currentStep&#125;&gt;
    &#123;#each [1,2,3] as text, i&#125;
      &lt;div class=&quot;step&quot; class:active=&#123;currentStep === i&#125;&gt;
        &lt;div class=&quot;step-content&quot;&gt;
          &lt;p&gt;Step &#123;text&#125;&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &#123;/each&#125;
    &lt;div class=&#39;sticky&#39;&gt;&#123;Math.round($number)&#125;&lt;/div&gt;
  &lt;/Scroll&gt;
&lt;/section&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(TweenedExample, "TweenedExample").$$render($$result, {}, {}, {})}
<p>Notice how the value begins tweening <strong>as soon as a new step becomes active</strong>. These are <em>triggers</em>, not <em>scrubbers</em>\u2014the transition occurs at the point at which a new step becomes active, and the tween is <strong>not</strong> linked to the scroll position.</p>
<p>In our scrollytelling piece, we\u2019ll leverage <code>tweened</code> values to <strong>transition the x positions of elements in a scatterplot</strong>. We\u2019ll add to our example from above by adding some <em>data</em> to our steps, and animate between those datapoints at each step. </p>
<p>In simple terms, the logic will look like this:</p>
<ol><li>Active step updates based on viewport</li>
<li>Tweened values update based on active step</li>
<li>Points animate to their new x position based on tween</li></ol>
<p>Now that we understand tweening, let\u2019s create a minimal scatterplot to animate!</p>
<h2 id="${"step-1-build-a-chart"}"><a href="${"#step-1-build-a-chart"}">Step 1: Build a chart</a></h2>
<p>Let\u2019s begin by building a simple, static scatterplot. The scatterplot will have 9 points, each with an x and y position.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>This scatterplot is intentionally minimal and therefore omits certain best practices, such as responsiveness. (We assign a fixed width and height of 400px.) I\u2019m attempting to minimize the non-scrollytelling code to make this tutorial more streamlined. </p>
<p><a href="${"https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3"}" rel="${"nofollow"}">The final version of this scatterplot</a> is responsive and follows other best practices, but is a bit more complex.</p>`;
        }
      })}
<p>In order to create our chart, we obviously need data:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js", showLanguage: false }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">  let data = [
    &#123; foo: 4, bar: 1 &#125;,
    &#123; foo: 6, bar: 7 &#125;,
    &#123; foo: 9, bar: 5 &#125;,
    &#123; foo: 2, bar: 4 &#125;,
    &#123; foo: 8, bar: 2 &#125;,
    &#123; foo: 9, bar: 9 &#125;,
    &#123; foo: 5, bar: 3 &#125;,
    &#123; foo: 3, bar: 8 &#125;,
    &#123; foo: 1, bar: 6 &#125;,
  ];</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>For this scatterplot, we will set <code>foo</code> to correspond to <em>each points\u2019 x position</em>, and <code>bar</code> to correspond to <em>their y positions</em>.</p>
<p>Here, we\u2019ll need some way to map \u201Craw values\u201D to \u201Ccomputed values\u201D\u2014that is, we want the number <em>9</em> (the highest in our dataset) to be at the upper bound of our chart.</p>
<h3 id="${"scale-the-values"}"><a href="${"#scale-the-values"}">Scale the values!</a></h3>
<p><strong><a href="${"https://www.d3indepth.com/scales/"}" rel="${"nofollow"}">D3 scales</a></strong> are the conventional way of mapping one set of values (e.g. raw numbers) to another (e.g. computed ones). Although an in-depth look at D3 scales is beyond the scope of this tutorial, our scales will look like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  import &#123; scaleLinear &#125; from &quot;d3-scale&quot;;

  let width = 400;
  let height = 400;

  let xScale = scaleLinear()
      .domain([0, 10])
      .range([0, width]);

  let yScale = scaleLinear()
      .domain([0, 10])
      .range([height, 0]);
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Essentially, for both our x and y values, we are creating a function that will take in something within the <em>domain</em> (e.g. 5, right in the middle), and spit out a value within the <em>range</em> (e.g. 200, because that is the midpoint of the specified range).</p>
<p>Still not making sense? Here\u2019s an interactive example: input a number between 1 and 9 and see the position in our range that it outputs.</p>
${validate_component(D3ScaleExample, "D3ScaleExample").$$render($$result, {}, {}, {})}
<p>We use scales like this one to map our raw values, ranging from 1 to 9, to a corresponding position on our chart, ranging from 0 to our chart width (in our case, 400px).</p>
<p>Now that we understand D3 scales, let\u2019s include them in our scatterplot to map <code>foo</code> and <code>bar</code> to x and y positions.</p>
<p>We\u2019re going to create an SVG with a width and height of 400px, and then we\u2019ll loop through our <code>data</code> array we created earlier with an <code>{#each}</code> block. For each point, we\u2019ll create a <code>circle</code> element with a <code>cx</code> and <code>cy</code> attribute that are computed via <code>xScale</code> and <code>yScale</code>. Focus on lines 28 through 40:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/02141d866af743f18546e988ca8ce721?version=3.38.3\n"}" width="${"100%"}" height="${"600"}" title="${"A simple Svelte scatterplot"}"></iframe>
<p>Nice! This (admittedly imperfect) chart will be a good starting point for our final scrollytelling visualization. Let\u2019s combine what we\u2019ve learned about tweening, scrollytelling, and this chart to finish up.</p>
<h2 id="${"step-2-tween-x-positions"}"><a href="${"#step-2-tween-x-positions"}">Step 2: Tween x positions</a></h2>
<p>In the static chart above, we have an array of objects, each with a <code>foo</code> and <code>bar</code> property. By using D3 scales, we map each of these properties to positions on our chart.</p>
<p>In a dynamic, scrollytelling visualization, we\u2019ll want these values to be dynamic and tweenable. In order to achieve this, we\u2019ll make a <code>tweened</code> array, where each value in that array is animatable just like the tweened values we looked at earlier.</p>
<p>Practically, that means we would instantiate a <code>tweened</code> array with our starting x positions, as you see on line 15 below. Then, we can set that array to contain new values with the functions between lines 17 and 22. Go ahead and try below!</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "svelte",
          highlightedLines: "15,17-22"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  let data = [
    &#123; foo: 4, bar: 1 &#125;,
    &#123; foo: 6, bar: 7 &#125;,
    &#123; foo: 9, bar: 5 &#125;,
    &#123; foo: 2, bar: 4 &#125;,
    &#123; foo: 8, bar: 2 &#125;,
    &#123; foo: 9, bar: 9 &#125;,
    &#123; foo: 5, bar: 3 &#125;,
    &#123; foo: 3, bar: 8 &#125;,
    &#123; foo: 1, bar: 6 &#125;,
  ];
  
  import &#123; tweened &#125; from &quot;svelte/motion&quot;;
  const tweenedX = tweened(data.map((d) =&gt; d.foo));

  const setFoo = function () &#123;
    tweenedX.set(data.map((d) =&gt; d.foo));
  &#125;;
  const setBar = function () &#123;
    tweenedX.set(data.map((d) =&gt; d.bar));
  &#125;;
&lt;/script&gt;

&lt;button on:click=&#123;setFoo&#125;&gt;Foo&lt;/button&gt;
&lt;button on:click=&#123;setBar&#125;&gt;Bar&lt;/button&gt;
&lt;p&gt; Your values:
    &#123;#each $tweenedX as x&#125;
        &#123;x&#125;
    &#123;/each&#125;
&lt;/p&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
${validate_component(TweenedXPosition, "TweenedXPositionExample").$$render($$result, {}, {}, {})}
<p>The takeaway here is that we can tween <em>arrays</em> the same way that we tween <em>numbers</em>. This should make it more clear how we can animate the positions of our circles!</p>
<p>Once we have a tweened array of x positions, we can reference the values in our markup in an <code>{#each}</code> loop via their index, like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;svg&gt;
    &#123;#each data as d, index&#125;
        &lt;circle
            cx=&#123;xScale($tweenedX[index])&#125;
            cy=&#123;yScale(d.bar)&#125;
            r=&#123;15&#125;
        /&gt;
    &#123;/each&#125;
&lt;/svg&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Practically, we\u2019re just passing each value in our array into the <code>xScale</code> and <code>yScale</code> that we created earlier. Not much has changed.</p>
<p>The main difference is that, now, if and when these values change, they will animate smoothly. The D3 scales will convert each <code>tweened</code> value (even the ugly decimals) to a position on the chart.</p>
<p>In the REPL below, you can see this code in action. Notice how, if you click on either of the buttons, the x positions of our circles animate smoothly:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/f84ec7ba710349bdaa4d605939b0e9ed?version=3.38.3\n"}" width="${"100%"}" height="${"600"}" title="${"An example of tweening circle positions"}"></iframe>
<p>Here, we\u2019re seeing the power of combining 1) Svelte\u2019s <code>tweened</code> values, 2) Svelte\u2019s <code>{#each}</code> loops, and 3) D3 scales.</p>
<p>By combining these three concepts, we\u2019ve built an animated chart in 55 lines of code! (And 10 of those lines are just defining the data, but who\u2019s counting?)</p>
<h2 id="${"step-3-animate-point-positions-via-scroll"}"><a href="${"#step-3-animate-point-positions-via-scroll"}">Step 3: Animate point positions via scroll</a></h2>
<p>Our final step is to trigger the animations between point positions (as we do above with buttons) via the user\u2019s scroll. Here, we\u2019re going back to Russell\u2019s <code>&lt;Scrolly /&gt;</code> component.</p>
<p>Recall in an <a href="${"#step-0b-understand-tweened-values"}">earlier example</a> we triggered an update to our tweened object in a code block like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "svelte" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
  $: if (currentStep == 0) &#123;
    // Do something here
  &#125; else if (currentStep == 1) &#123;
    // Do something else here
  &#125; else if (currentStep == 2) &#123;
    // Or do something here!
  &#125;
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>This bit of code uses Svelte\u2019s <a href="${"https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive"}" rel="${"nofollow"}">dollar label operator</a> <code>$:</code> to run code reactively. In action, this means that the above <code>if... else</code> block will run <em>every time the variable <code>currentStep</code> changes</em>. Then, depending on the value of <code>currentStep</code>, the <code>if... else</code> block will evaluate differently. </p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>For React users, this is similar to <code>useEffect</code>, and Vue users can compare it to <code>watch</code> properties.</p>`;
        }
      })}
<p>All we need to do now is update <code>currentStep</code> via <code>&lt;Scrolly /&gt;</code>, and update our tweened data array in our <code>if... else</code> block. In combination, the process will look like this:</p>
<ol><li>Trigger updates to <code>currentStep</code> via <code>&lt;Scrolly /&gt;</code></li>
<li>Tween our array of data in our <code>$: if... else</code> block </li>
<li>Pass the tweened data into our <code>{#each}</code> loop which renders SVG circles</li></ol>
<p>Here\u2019s a complete example combining all of the insights we\u2019ve discussed so far:</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/81194f65fdc74601930df7974fb9ffff?version=3.38.3\n"}" width="${"100%"}" height="${"700"}" title="${"A Svelte Scrollytelling starter"}"></iframe>
<h2 id="${"next-steps"}"><a href="${"#next-steps"}">Next steps</a></h2>
<p>We could extend upon our chart in a few ways. The logic that we used to tween x positions is extensible across any value that can be animated. We could do the same tweening to each circles\u2019 y positions, or their radius. Now that we understand the pattern that enables scroll-driven tweening, we can use it for things like position, size, and color.</p>
<p>And in visuals other than scatterplots, we could use scroll-driven interaction to tell a more dynamic story, such as linking an interactive map\u2019s viewport to the user\u2019s scroll position, as we see in this <a href="${"https://www.ons.gov.uk/visualisations/dvc1371/#/E07000223"}" rel="${"nofollow"}">article</a> from the UK\u2019s Office of National Statistics:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/svelte-scrollytelling/map.gif",
          alt: "A map that zooms out on scroll to show new datapoints"
        },
        {},
        {}
      )}
<h2 id="${"a-final-polished-example"}"><a href="${"#a-final-polished-example"}">A final, polished example</a></h2>
<p>The scrollytelling visual we created was a starter kit, and as a result it neglected certain best practices. For completion\u2019s sake, here\u2019s a <a href="${"https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3"}" rel="${"nofollow"}">REPL</a> with a complete, polished scrollytelling visualization.</p>
<p>This example separates the charting logic into its own <code>&lt;Scatterplot /&gt;</code> component, and includes a few lines of CSS to make it more responsive. When the canvas is larger than 767 pixels, it will place the text to the left of the chart, rather than directly on top of it. It also tweens the x and y positions simultaneously.</p>
<iframe loading="${"lazy"}" src="${"https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3\n"}" width="${"100%"}" height="${"700"}" title="${"A Svelte Scrollytelling example"}"></iframe>
<p>Thanks for reading! As always, feel free to <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">ping me</a> with questions, comments, or tips.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
