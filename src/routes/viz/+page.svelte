<script>
  import { base } from "$app/paths";

  import Nav from "$lib/Nav/Nav.svelte";
  import Title from "./Title.svelte";
  import SectionTitle from "./SectionTitle.svelte";

  import ToggleableFramework from "./ToggleableFramework.svelte";
  import Code from "$lib/Global/Code.svelte";
  import Info from "$lib/Global/Info.svelte";
  import ScrollySection from "./ScrollySection.svelte";
  import InteractiveModuleOverview from "./InteractiveModuleOverview.svelte";

  let userSelectedFramework; // = "Svelte";

  // FIXME: On page load, remove .jukebox and .circle-to-top
  import { onMount } from "svelte";
  onMount(() => {
    if (!document) return;
    // setTimeout so that the fade in transitions can finish before selecting
    setTimeout(() => {
      const jukebox = document.querySelector(".jukebox");
      const circleToTop = document.querySelector(".circle-to-top");
      if (jukebox) jukebox.remove();
      if (circleToTop) circleToTop.remove();
    }, 100);
  });
</script>

<!-- <main> -->
<Title>How to &quot;learn D3&quot; in 2023</Title>
<div class="scrollover-container">
  <div class="viz-article-body">
    <p>
      This is my extended answer to a question I get asked all the time: <em
        style="margin-right: 6px;"
        >how do I learn D3?
      </em>I've written many responses, so I figured they best belong in one
      standalone resource. The answer is simple yet complicated, because most
      people are asking the wrong question.
      <!-- What we're actually interested in
        is <strong>how to learn interactive data visualization</strong>, which is
        what this blog post will cover. -->
    </p>
    <blockquote>
      <p>
        This is an extended version of a previous blog post, &ldquo;<a
          href="/post/svelte-and-d3"
          target="_blank"
          rel="noopener noreferrer"
          style="color: black;"
        >
          Making Visualizations Literally with Svelte &amp; D3.</a
        >&rdquo; Since that blog post&rsquo;s release, I&rsquo;ve dove deeper
        into Svelte + D3, by 1) publishing new projects, 2) releasing an online
        course, and 3) hosting multiple workshops. This blog post consolidates
        all of my thoughts into one place.
      </p>
    </blockquote>

    <SectionTitle number="1">Do you really want to learn D3?</SectionTitle>
    <p>
      Let&rsquo;s clarify one important concept up front. When most people say
      they &quot;want to learn D3&quot;, they actually mean they <strong
        >want to learn interactive data visualization</strong
      >, and they think D3 is the tool to do that. Few beginners actually want
      to &quot;learn D3,&quot; they just want to learn how to make those
      beautiful and complex &quot;D3&quot; projects.
    </p>
    <!-- <p>
      With that in mind, the roadmap for learning data
      visualization on the web will look a bit different
      than it has in years&rsquo; past, as the rising prevalence of JavaScript
      frameworks will make for a more declarative and intuitive coding style.
      Rather than asking "how to learn D3," we should be asking how to learn interactive data
      visualization.
    </p> -->

    <p>
      But D3 is far too expansive to be the only tool beginners use, and far too
      complex to be the first tool beginners start with. <strong
        >D3 is a collection of modules that vary widely in their purposes</strong
      >, ranging from
      <abbr data-title="Document Object Model">DOM</abbr> manipulation, to array
      manipulation, to
      <abbr data-title="Scalable Vector Graphics">SVG</abbr> path construction. In
      the future, beginners ought to think of D3 as a tool in their interactive toolkit,
      and only reach for it when it is the best tool for the job.
    </p>

    <div
      style="display: flex; flex-direction: column; place-items: center; justify-content: center; margin-bottom: 2rem;"
    >
      <img
        style:width="100%"
        src="/images/post/viz/wattenberger.png"
        alt="A circle pack diagram visualizing all D3 modules, by Amelia Wattenberger"
      />
      <a
        href="https://wattenberger.com/blog/d3"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: .5rem; font-family: var(--font-mono); font-size: .8rem; text-align: right; margin-left: auto; display: block; color: black;"
      >
        A circle pack diagram visualizing all D3 modules, by Amelia Wattenberger
      </a>
    </div>

    <p>
      This new approach will reframe D3 from an all-expansive data visualization
      library to a toolkit that best handles specific components of a project,
      like scaling data and manipulating arrays. Meanwhile, a JavaScript
      framework can take on the heavy work of DOM manipulation. I call this the <strong
        >framework-first approach to data visualization</strong
      >.
    </p>

    <Info color="rgb(45, 45, 45)">
      <p
        style="color: var(--text-color); font-family: Satoshi; font-weight: 300; font-size: 1.3rem; line-height: 1.3;"
      >
        Some JavaScript frameworks you might have heard of inlude React, Vue,
        Angular, or Svelte.
      </p>
    </Info>
    <!-- <blockquote>
      <p>
        What do I mean by a framework? And what is a &quot;framework-first&quot;
        approach to data visualization? Are we just using more big words for the
        sake of using big words? When I say &quot;framework,&quot; I mean one of
        the popular JavaScript frameworks that simplify web applications.
        {#if userSelectedFramework}
          You&rsquo;ve already selected one:
          <ToggleableFramework bind:userSelectedFramework>
            {userSelectedFramework}
          </ToggleableFramework>.
        {:else}
          You&rsquo;ve probably heard of some: React, Vue, Angular, or Svelte.
        {/if}
      </p>

      <p>
        And a &quot;framework-first&quot; approach means we stop thinking of
        projects as &quot;D3 projects&quot; (where D3 is our all-encompassing
        tool), and start thinking of them as projects that &quot;produce
        SVG&quot; in whatever medium works best (in our case,

        <ToggleableFramework bind:userSelectedFramework>
          {userSelectedFramework || "a JavaScript framework"}
        </ToggleableFramework>).
      </p>
    </blockquote> -->

    <p>
      This conversation isn't new; it started in 2018 with Elijah Meeks' <a
        href="https://medium.com/@Elijah_Meeks/d3-is-not-a-data-visualization-library-67ba549e8520"
        target="_blank"
        rel="noopener noreferrer">D3 is not a Data Visualization Library</a
      >:
    </p>

    <blockquote>
      <p>
        D3.js is an incredibly successful library yet there’s a disconnect
        between what people think D3 does and what it actually does. As a
        result, learning D3 is intimidating and confusing. By better
        understanding its structure and separating it into more manageable
        pieces, it can be easier to choose which parts of the library to learn
        and which parts to avoid — key lessons not only for D3 novices but for
        expert users like myself that might want to reexamine how they use D3.
      </p>
    </blockquote>

    <p>
      Despite his prescience, it wasn't until a few years later that the
      conversation hit the mainstream, as folks like
      <a
        href="https://wattenberger.com/blog/react-and-d3"
        target="_blank"
        rel="noopener noreferrer">Amelia Wattenberger</a
      >
      and
      <a
        href="https://www.youtube.com/watch?v=bnd64ZrHC0U"
        target="_blank"
        rel="noopener noreferrer">Matthias Stahl</a
      >
      published impressive graphics using JavaScript frameworks like React and Svelte.
      And behind the scenes, this framework-first approach has taken the visualization
      world by storm—most recently evinced by
      <a
        href="https://twitter.com/dummdidumm_/status/1590367862920994816"
        target="_blank"
        rel="noopener noreferrer"
        >the near-universal usage of Svelte in election graphics in 2022</a
      >
      and its
      <a
        href="https://twitter.com/h_i_g_s_c_h/status/1645876154828742657"
        target="_blank"
        rel="noopener noreferrer">use in newsrooms more broadly</a
      >.
    </p>

    <p>
      And despite the framework-first approach becoming increasingly prevalent,
      there aren't a lot of resources to learn about what it exactly is, and how
      to get started. This post hopes to add to and reframe the conversation
      around learning interactive data visualization.
    </p>

    <SectionTitle number="2">Why is D3 hard to learn?</SectionTitle>
    <p>
      We can begin with the perennial question: why is D3 so hard to learn? I
      think people who &quot;try to learn D3&quot; usually run into problems
      because they think that D3 is the single tool they need to master; in
      reality, &quot;learning D3&quot; is learning <strong
        >an entire toolkit</strong
      > of tools on the web, including (but not limited to) HTML, CSS, JavaScript,
      SVG, and D3. (Have fun!).
    </p>
    <p>
      When folks that are brand new to the web start &quot;learning D3,&quot;
      they rarely understand what in their curriculum is <abbr
        data-title="Data-Driven Documents">D3</abbr
      >, what is <abbr data-title="HyperText Markup Language">HTML</abbr>, what
      is <abbr data-title="Cascading Stylesheets">CSS</abbr>, what is
      <abbr data-title="Scalable Vector Graphics">SVG</abbr>, and what is
      <abbr data-title="JavaScript">JS</abbr>. And it&rsquo;s not really their
      fault—D3 trying to subsume each of these individual languages (creating
      markup from <code>select()</code>
      method chaining and styling in <code>.attr()</code> or
      <code>.style()</code>
      tags) muddies the water of understanding for all of them. And so interactive
      data visualization will require you to learn the tools of the web, but when
      D3 tries to &quot;hijack&quot; parts of the web, it conceals each web tool&rsquo;s
      individual purpose.
    </p>
    <p>
      For people who already understand the web, D3 is great: it provides
      convenient functions to manipulate all parts of your web application in
      one place. But &quot;learning D3&quot; before you&rsquo;ve learned the
      fundamentals of the web is like trying to start a one-person band without
      having touched any of the instruments you&rsquo;re going to be using. (Or
      something like that. Please help with a better analogy.)
    </p>
    <!-- Introducing a framework-first approach. -->
    <!-- Maybe add a para here, this could be like "a framework-first approach makes things better..." Do code examples live here? -->

    <!-- <SectionTitle number="3"
      >Would {userSelectedFramework || "a framework"} be any better?</SectionTitle
    > -->
    <SectionTitle number="3">The framework-first approach</SectionTitle>
    <p>
      Instead of overusing D3, we should adopt a framework-first approach.
      Rather than using D3 for all parts of visualization on the web, we use it
      for what it's best suited for (data manipulation, scaling data, SVG path
      construction, etc.) and use the web's native tools for everything else
      (authoring and manipulating the document).
    </p>

    <p>
      When I say &quot;framework-first,&quot; I mean that we should use
      JavaScript frameworks like React, Svelte, Vue, and others to build our
      interactive data visualizations. These frameworks are designed to make
      building web applications easier, and they offer the same benefits for
      data visualization.
    </p>
    <p>
      So, would <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "Svelte, React, et al."}
      </ToggleableFramework> make interactive dataviz easier to learn? The answer
      is yes, not because <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "a framework"}
      </ToggleableFramework> makes things
      <em>easy</em>
      but because it makes things <strong>clear</strong>. If you were learning
      Svelte, for example, you would learn the discrete purposes of a
      <code>&lt;script /&gt;</code>
      tag, of your markup, and of your
      <code>&lt;style /&gt;</code> tag: JavaScript, HTML/SVG, and CSS, respectively.
      Yes, you are learning three new tools, but you&rsquo;re not trying to learn
      them through the lens of D3.
    </p>
    <p>
      Let's consider a trivial example to illustrate this point: a simple
      scatterplot. We'll compare the code needed to produce this scatterplot, in
      <span class="label d3">D3</span> and in
      <span class="label svelte">Svelte</span>. (Feel free to just glance for
      now, as we'll dive in more deeply in a moment.)
    </p>

    <div class="examples baadsfhjsdbfdhs">
      <div class="example d3">
        <div class="filename-container d3-file">
          <span class="filename">D3 input</span>
        </div>
        <Code language="js" showLanguage={false}>
          {`
  import * as d3 from "d3";

// 1. Create data
const data = [
  { x: 50, y: 50, r: 25 },
  { x: 100, y: 100, r: 25 },
  { x: 150, y: 150, r: 25 },
  { x: 200, y: 200, r: 25 },
  { x: 250, y: 250, r: 25 }
];

// 2. Instantiate dimensions
const width = 300;
const height = 300;

// 3. Create scaling functions
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.x)])
  .range([0, width - 30]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.y)])
  .range([height, 30]);

// 4. Create SVG element, append dimensions
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// 5. Create a circle for each datapoint
svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("cx", (d) => xScale(d.x))
  .attr("cy", (d) => yScale(d.y))
  .attr("r", (d) => d.r)
  .attr("fill", "plum")
  .attr("stroke", "black");
    `}
        </Code>
        <div class="scrim" />
      </div>
      <div class="example svelte">
        <div class="filename-container svelte-file">
          <span class="filename">Svelte input</span>
        </div>
        <Code language="svelte" showLanguage={false}>
          {`
<script>
  import * as d3 from "d3";

  // 1. Create data
  const data = [
    { x: 50, y: 50, r: 25 },
    { x: 100, y: 100, r: 25 },
    { x: 150, y: 150, r: 25 },
    { x: 200, y: 200, r: 25 },
    { x: 250, y: 250, r: 25 }
  ];

  // 2. Instantiate dimensions
  const width = 300;
  const height = 300;

  // 3. Create scaling functions
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)])
    .range([0, width - 30]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([height, 30]);
</script>

<!-- 4. Create SVG element, append dimensions -->
<svg {width} {height}>
  <!-- 5. Create a circle for each datapoint -->
    {#each data as d}
        <circle
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={d.r}
            fill='plum'
            stroke='black'
         />
    {/each}
</svg>
      `}
        </Code>
      </div>
      <div class="scrim" />
    </div>

    <p>
      The <strong>output</strong> of that code, in either context, would be a chunk
      of SVG code that, when embedded in a document, would render five circles.
    </p>

    <div
      style="max-width: 610px;
    margin: auto;"
    >
      <Code language="html" includesOutput={true}>
        {`
<svg width="300" height="300">
  <circle cx="54" cy="246" r="25" fill="plum" stroke="black"/>
  <circle cx="108" cy="192" r="25" fill="plum" stroke="black"/>
  <circle cx="162" cy="138" r="25" fill="plum" stroke="black"/>
  <circle cx="216" cy="84" r="25" fill="plum" stroke="black"/>
  <circle cx="270" cy="30" r="25" fill="plum" stroke="black"/>
</svg>
      `}
      </Code>
    </div>

    <Info color="rgb(45, 45, 45)">
      <p
        style="color: var(--text-color); font-family: Satoshi; font-weight: 300; font-size: 1.3rem; line-height: 1.3;"
      >
        This an important lesson many beginners forget: whether you're using D3
        or some framework, your output will just be SVG. (Unless you're using <code
          >canvas</code
        > or something else.) The question is just how you get there.
      </p>
    </Info>

    <p>
      You might notice that, in both examples, steps 1 through 3 are identical.
      That's because the basic setup is the same: we create some data, get the
      dimensions of our chart, and then use D3 (in particular, <code
        >d3-scale</code
      >) to map raw data to our dimensions.
    </p>
    <p>
      The examples diverge in steps 4 and 5, which are our DOM manipulation
      steps. Let's dive deeper into those steps to understand what D3 is doing
      behind the scenes, and why a framework-first approach is much more
      intuitive.
    </p>

    <ScrollySection />

    <p>
      The Svelte code above is &ldquo;declarative programming&rdquo;:
      <strong
        >you're declaratively authoring the DOM, rather than imperatively giving
        commands as you would in D3.</strong
      >
      Rather than writing code that says, &ldquo;select this element, and then append
      this other element to it,&rdquo; You're writing those elements directly.
      <!-- And rather than writing code that says, &ldquo;select this element, and then
        set this attribute on it,&rdquo; you're setting those attributes directly. -->
    </p>

    <p>
      In a <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "framework-first"}
      </ToggleableFramework> application, beginners will be able to tell if a bug
      lies in their markup by
      <strong>directly changing their markup</strong>, whereas a developer
      working in a pure-D3 application might not know (without doing some
      intentional debugging) if their issue lies in their selection method
      chaining, in their SVG syntax, or in some JavaScript function. Of course,
      advanced practitioners will know how to solve these sorts of problems. But
      for those <strong>learning</strong> interactive data visualization, D3 confuses
      more than it clears up.
    </p>
    <p>
      If interactive data visualizations live on the web, they should leverage
      the tools of the web. A framework-first approach ensures the student
      understands the fundamentals of the web by separating concerns more
      intentionally.
    </p>
    <!-- I think code goes here, where we juxtapose how a "D3" and a framework-first project would differ. Highlight the differences in DOM manipulation, and how frameworks are *direct* in their inputs. -->
    <SectionTitle number="4">Use D3 when it makes sense</SectionTitle>
    <p>
      In this new <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework
          ? `${userSelectedFramework}-first`
          : "framework-first"}
      </ToggleableFramework> approach, we still make great use of D3, because D3
      is great! D3 provides convenient functions for array manipulation, scaling
      of data, and shape and path manipulation. But when D3 isn&rsquo;t needed and
      {userSelectedFramework || "a framework"} would be better suited (for example,
      using {userSelectedFramework || "Svelte"} to write your markup directly, rather
      than using a D3 selection method), select the right tool for the job.
    </p>

    <h3 id="d3-for-the-data-frameworks-for-the-dom">
      D3 for the data, frameworks for the DOM
    </h3>
    <p>
      The greatest relief a framework-first approach offers is its ability to
      manage the DOM in a more intuitive way. (When I say, &ldquo;manage the
      DOM&rdquo;, I mean, &ldquo;control what exactly appears, disappears, and
      moves on the screen.&rdquo;) Rather than using long chains of D3 selection
      methods, we can write our markup directly.
    </p>
    <p>
      But there are obviously other steps in the data visualization process,
      that occur before we even get to the DOM. For example, we need to 1)
      <em>transform</em>
      our data and 2) <em>scale</em> that data to positions on the chart. These steps
      are still best suited for D3, because D3 is great at array manipulation and
      scaling.
    </p>
    <p>
      A common workflow for a modern interactive visualization might follow this
      pattern:
    </p>
    <ol style="margin-bottom: 1rem;">
      <li>
        Import and transform data. (
        <code>d3-array</code> from
        <pre
          class="label d3"
          style="display: inline; border: none; font-size: 100% !important;">D3</pre>
        )
      </li>
      <li>
        Scale data to positions on the chart. (<code>d3-scale</code> from
        <pre
          class="label d3"
          style="display: inline; border: none; font-size: 100% !important;">D3</pre>
        )
      </li>
      <li>
        Write markup directly. (A framework like
        <pre
          class="label svelte"
          style="display: inline; border: none; font-size: 100% !important;">Svelte</pre>
        )
      </li>
      <li>
        Bind data to DOM elements. (A framework like
        <pre
          class="label svelte"
          style="display: inline; border: none; font-size: 100% !important;">Svelte</pre>
        )
      </li>
      <li>
        Add interactivity. (A framework like
        <pre
          class="label svelte"
          style="display: inline; border: none; font-size: 100% !important;">Svelte</pre>
        )
      </li>
    </ol>
    <p>
      Occasionally, your project also might require other specialized D3 modules
      to help generate SVG paths. For example, you would reach for
      <code>d3-geo</code> or <code>d3-shape</code> to generate paths for a map or
      an area chart, respectively. But the more cleanly you can separate concerns
      in your workflow—using D3 for data and a framework for the DOM—the smoother
      your workflow will be.
    </p>

    <p>
      And so in this new approach, not all D3 modules are created equal. Here's
      an overview of each of the modules currently present in D3, organized by
      their function and usefulness in a framework-first workflow (in my
      opinion):
    </p>

    <InteractiveModuleOverview />

    <p
      class="note"
      style="font-size: 1rem; font-style:italic; font-family: 'GT'; text-align: right; line-height: 1.4; max-width: 738px; margin-left: auto; margin-right: 0; margin-bottom: 2rem;"
    >
      The categorization of functions is borrowed, with permission, from Amelia
      Wattenberger's great
      <a
        href="https://wattenberger.com/blog/d3"
        target="_blank"
        rel="noopener noreferrer"
      >
        blog post.
      </a>
      You can contribute to our collective understanding of D3 by filling out
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSd6CW443ipTltqEKSZflZwtbQdnmu5YK2Guh00W7_ruMSdC0Q/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        this survey from Sebastian Lammers.</a
      >
    </p>

    <p>
      One simple phrase that encapsulates the above, from Matthias Stahl:
      <strong
        >use D3 for the math and the paths. And a framework for the rest.
      </strong>
    </p>

    <p>
      This new framework-first approach forces us to use D3 more intentionally.
      Rather than acting as a hammer searching for nails <em
        >(how can I solve this problem using D3?)</em
      >, we only reach for the hammer when we need it
      <em>(would D3 be best-suited to solve this problem, and how so?)</em>.
    </p>

    <!-- FIXME: Add interactive section showcasing all D3 modules and 1) their purpose, 2) how often to use in a dataviz project -->

    <SectionTitle number="5">The actual roadmap</SectionTitle>
    <p>
      Enough about theory. If I haven&rsquo;t convinced you, <a
        href="https://twitter.com/CL_Rothschild"
        target="_blank"
        rel="noopener noreferrer"
      >
        reach out</a
      >. Otherwise, here&rsquo;s how to actually get started
      <s>learning D3</s>
      making interactive data visualizations in 2023.
    </p>
    <h3 id="1-learn-the-fundamentals-of-the-web">
      1. Learn the fundamentals of the web
    </h3>
    <p>
      Learn HTML, CSS, and beginner JavaScript. There are plenty of resources
      online, but here are some good starting points:
    </p>
    <ul style="margin-bottom: 2rem;">
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
          target="_blank"
          rel="noopener noreferrer">Getting Started with the Web</a
        >
      </li>
      <li>
        <a
          href="http://www.dontfeartheinternet.com/"
          target="_blank"
          rel="noopener noreferrer">Basic HTML & CSS for Non-Web Designers</a
        >
      </li>
      <li>
        <a
          href="https://javascript30.com/"
          target="_blank"
          rel="noopener noreferrer">30 Days of JavaScript</a
        >
      </li>
      <li>
        <a
          href="https://www.learn-js.org/"
          target="_blank"
          rel="noopener noreferrer">Learn JavaScript</a
        >
      </li>
    </ul>
    <p>
      But don&rsquo;t commit too heavily to these tutorials or mastering these
      tools. In step 2, you&rsquo;ll find a JavaScript framework which makes
      authoring complex applications more simple. It&rsquo;s important you
      understand the main concepts of HTML, CSS, and JavaScript, but
      you&rsquo;ll continue to learn them as you dive into a framework.
    </p>
    <h3 id="2-choose-a-javascript-framework-and-learn-it">
      2. Choose a JavaScript framework, and learn it
    </h3>
    <p>Learn some JavaScript framework.</p>
    <!-- <p>
        {#if userSelectedFramework}
          You&rsquo;ve chosen <ToggleableFramework bind:userSelectedFramework>
            {userSelectedFramework}
          </ToggleableFramework>.
        {:else} -->
    <p>
      <strong
        >The most popular and fastest-growing framework within the visualization
        community in particular is <a
          href="https://svelte.dev/"
          target="_blank"
          rel="noopener noreferrer">Svelte</a
        ></strong
      >, but
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"
        >React</a
      > is another great choice because it has 1) an incredibly large user base,
      2) an existing ecosystem of packages and libraries, and 3) great employability
      prospects beyond visualization. (React is sort of the GOAT, and Svelte is the
      new kid on the block (baby goat?) that is growing in prominence.)
    </p>
    <p>
      Another honorable mention is <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer">Vue</a
      >, which is left out of the conversation lately but still very promising.
    </p>
    <!-- <p>Avoid Angular.</p> -->
    <hr style="margin: 1.5rem auto;" />
    <p>
      If you do choose Svelte, I have a few existing resources, including
      <a
        href="https://www.youtube.com/live/-THp2YVYEFc"
        target="_blank"
        rel="noopener noreferrer"
      >
        this workshop
      </a>
      and
      <a
        href="https://www.connorrothschild.com/post/svelte-and-d3"
        target="_blank"
        rel="noopener noreferrer"
      >
        this blog post</a
      >. You can also access my online course with Newline
      <a
        href="https://www.newline.co/courses/better-data-visualizations-with-svelte"
        target="_blank"
        rel="noopener noreferrer"
      >
        here.
      </a>
      Matthias Stahl has also put together some great resources for learning Svelte,
      including
      <a
        href="https://youtu.be/5focjEPJUJs"
        target="_blank"
        rel="noopener noreferrer"
      >
        this conference talk.</a
      >
    </p>
    <h3 id="3-learn-svg">3. Learn SVG</h3>
    <p>
      In every &ldquo;D3&rdquo; project, you're giving JavaScript instructions
      to write SVG (or whatever your output is) to the DOM. And in your
      framework-first approach, you will write to the DOM directly. (The
      difference, as we've already went over: where D3 would require you to
      write <code>d3.select("body").append("svg")</code>, <ToggleableFramework
        bind:userSelectedFramework
      >
        {userSelectedFramework || "a framework"}
      </ToggleableFramework> enables you to write
      <code>&lt;svg /&gt;</code>; both will create the output,
      <code>&lt;svg /&gt;</code>.)
    </p>
    <p>
      So, it&rsquo;s worth getting familiar with SVG (scalable vector graphics),
      which is usually the main markup language used to design data
      visualizations.
    </p>
    <p>
      Syntactically, SVG is like HTML (which is another reason it&rsquo;s worth
      learning HTML first), except it produces <strong>images</strong>
      rather than
      <strong>text</strong>. Once you begin to understand SVG, you can write it
      directly in your framework-first application, and embed data inline as
      needed.
    </p>
    <p>
      Admittedly, fewer resources exist to &quot;learn SVG,&quot; but the
      workflow for using new SVG elements is quite simple:
    </p>
    <ol style="margin-bottom: 2rem;">
      <li>
        Identify the element you want to use (if you are making a scatterplot, a <code
          >&lt;circle /&gt;</code
        >)
      </li>
      <li>
        Find the documentation for that element (<a
          href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element"
          target="_blank"
          rel="noopener noreferrer">on MDN</a
        >)
      </li>
      <li>
        Gather the attributes you need to assign (for a circle, <code>cx</code>,
        <code>cy</code>, and <code>r</code>)
      </li>
      <li>Assign them, and then edit as needed</li>
    </ol>
    <p>
      One great resource for learning SVG <em>paths</em> in particular is
      <a
        href="https://www.nan.fyi/svg-paths"
        target="_blank"
        rel="noopener noreferrer">this interactive guide</a
      > from Nanda Syahrasyad.
    </p>
    <h3 id="4-write-svg-in-a-userselectedframework-framework-first-application">
      4. Write SVG in a
      <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "framework-first"}
      </ToggleableFramework> application
    </h3>
    <p>
      Now that you understand SVG, which will be your final output, write it
      directly in
      <ToggleableFramework bind:userSelectedFramework
        >{userSelectedFramework ||
          "some JavaScript framework"}</ToggleableFramework
      >. Having learned the fundamentals of the web, you should have a good
      handle on debugging separate parts of your application, and having learned
      the ins and outs of
      <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "your JavaScript framework"}
      </ToggleableFramework>, you should know how to embed data inline within
      your markup.
    </p>
    <h3 id="5-learn-d3-in-a-limited-capacity">5. Learn D3 when you need to</h3>
    <p>
      In your journey, you'll notice there are a few problems that can't be
      solved by your framework of choice. This may be the case if you are
      creating a complex and specific type of visualization, like a force
      diagram, chord diagram, or sankey diagram (all of which have D3 plugins).
      Or, you may need to use D3 for routine tasks, like scaling data or
      manipulating arrays. We've already reviewed above which modules would be
      best to learn first.
    </p>

    <p>
      And so in this new paradigm, we reverse the order of our learning roadmap:
      rather than learning D3 and then tackling a complex project, we become
      familiar with the web, then our output language (SVG), and when needed, we
      reach into our toolbox for D3.
    </p>
    <div>
      <p
        class="note"
        style="font-size: 1rem; margin-top: 3rem; font-style:italic; font-family: 'GT'; text-align: right; line-height: 1.4; max-width: 518px; margin-left: auto; margin-right: 0;"
      >
        Thanks to Javier García Fernández, Amit Grinson, Matthias Stahl, and
        Sebastian Lammers for reviewing and giving feedback on this article.
      </p>
    </div>
  </div>
</div>

<!-- </main> -->

<style>
  /* main {
    width: 100%;
    margin: auto;
    z-index: 10;
  } */

  .scrollover-container {
    background: var(--primary-color);
    z-index: 104;
    position: relative;
    border-radius: 1rem;
    box-shadow: -1px -1px 20px rgba(0, 0, 0, 0.5);
    /* pointer-events: auto; */
  }

  .viz-article-body {
    padding: 6rem 1rem;
    max-width: 968px;
    width: 95%;
    margin: 0 auto;
    background-color: whitesmoke;
    color: black;
  }

  .viz-article-body > * {
    max-width: 668px;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.viz-article-body *::selection) {
    text-shadow: none;
    background: rgb(99 140 255 / 90%);
    color: white;
  }

  :global(.viz-article-body h1::selection) {
    background: none;
  }

  p {
    line-height: 1.425;
    font-size: 1.35rem;
  }

  h3,
  p,
  blockquote,
  ul,
  li {
    font-weight: 500;
    color: rgb(25, 25, 25);
    font-family: GT, Satoshi;
    letter-spacing: -0.25px;
  }

  strong {
    font-weight: 600;
    color: black;
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }

  blockquote {
    margin-top: 3rem;
  }

  h3 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .label {
    padding: 1px 4px;
    font-weight: 400;
    color: white;
    border-radius: 3px;
  }

  .label.d3 {
    background: #004e82;
  }

  .label.svelte {
    background: #ff3e00;
  }

  .examples {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2rem;
    position: relative;
    left: calc(-50vw + 50%);
    width: 100vw;
    max-width: none;
  }

  .baadsfhjsdbfdhs .example {
    width: 49%;
    position: relative;

    padding-top: 30px;
  }

  :global(.baadsfhjsdbfdhs pre) {
    margin-top: 0 !important;
  }

  :global(.viz-article-body .info) {
    background: var(--primary-color) !important;
    border: 2px solid whitesmoke;
    padding: 2rem 1rem;
    position: relative;
    width: min(90vw, 1168px);
    left: calc(50% - min(45vw, 584px));
    justify-content: center;
  }

  :global(.viz-article-body .info p) {
    font-size: 1.5rem !important;
  }

  .filename-container {
    text-align: left;
    width: 100%;
    height: 30px;
    border-radius: 3px 3px 0 0;
    background: black;
    display: flex;
    justify-content: flex-start;
    place-items: center;

    position: absolute;
    top: 0;
    left: 0;
  }

  .filename-container.d3-file {
    background: #004e82;
  }

  .filename-container.svelte-file {
    background: #ff3e00;
  }

  .filename {
    color: white;
    padding: 0.5rem;
    font-weight: 400;
  }

  abbr:hover {
    text-decoration: none;
  }

  abbr {
    position: relative;
    border-bottom: 1px dotted black;
  }

  abbr::after {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    content: attr(data-title);
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0.5rem;
    font-size: 1rem;
    width: max-content;
    max-width: 300px;
    background: rgba(0, 0, 0, 0.785);
    backdrop-filter: blur(6px);
    color: white;
    z-index: 104;
  }

  abbr:hover::after {
    opacity: 1;
  }

  blockquote {
    margin: 2rem 0;
  }

  blockquote p {
    font-family: Satoshi;
    font-weight: 300;
  }

  :global(.baadsfhjsdbfdhs pre) {
    border-radius: 0 0 6px 6px !important;
    border-top: none !important;
  }

  :global(.baadsfhjsdbfdhs pre.language-js) {
    border: 1px solid #004e82;
  }

  :global(.baadsfhjsdbfdhs pre.language-svelte) {
    border: 1px solid #ff3e00;
  }

  @media screen and (max-width: 868px) {
    :global(.baadsfhjsdbfdhs .example) {
      width: 100% !important;
      max-height: 45vh;
      overflow: auto;
    }

    .examples {
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .scrim {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-top: -30px;
      height: 30px;
    }

    :global(.baadsfhjsdbfdhs pre) {
      margin: 0 !important;
    }
  }
</style>
