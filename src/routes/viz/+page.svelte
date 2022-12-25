<script>
  import Nav from "$lib/Nav/Nav.svelte";
  import Title from "./Title.svelte";
  import SectionTitle from "./SectionTitle.svelte";

  import ToggleableFramework from "./ToggleableFramework.svelte";
  import Code from "$lib/Global/Code.svelte";
  import ScrollySection from "./ScrollySection.svelte";

  let userSelectedFramework; // = "Svelte";
</script>

<svelte:head>
  <script src="src/scripts/drawArrow.js"></script>
</svelte:head>
<Nav />
<main>
  <Title>How to &quot;learn D3&quot; in 2023</Title>
  <div class="viz-article-body">
    <p>
      This is my extended answer to a question I get asked all the time: <em
        >how do I learn D3?</em
      > After writing summarized variations of this blog post over and over again,
      I figured it best belongs in one standalone resource.
    </p>
    <blockquote>
      <p>
        This is an extended version of a previous blog post, &quot;Making
        Visualizations Literally with Svelte &amp; D3.&quot; Since that blog
        post&rsquo;s release, I&rsquo;ve dove deeper into Svelte + D3, by 1)
        publishing new projects, 2) releasing an online course, and 3) hosting
        multiple workshops. This blog post consolidates all of my thoughts into
        one place.
      </p>
    </blockquote>

    <SectionTitle number="1">Who really wants to learn D3?</SectionTitle>
    <p>
      Let&rsquo;s clarify one important concept up front. When most people say
      they &quot;want to learn D3&quot;, they actually mean they <strong
        >want to learn interactive data visualization</strong
      >, and they think D3 is the tool they need to use for that (change
      language?). No one really wants to &quot;learn D3,&quot; they just want to
      learn how to make those beautiful and complex &quot;D3&quot; projects.
    </p>
    <p>
      But I&rsquo;m fairly confident that in 2023 and beyond, learning data
      visualization on the web will, or <em>should</em>, look a bit different
      than it has in years&rsquo; past, as the rising prevalence of JavaScript
      frameworks will make for a more declarative and intuitive coding style.
      Rather than learning D3, we should be asking how to learn interactive data
      visualization, which requires us to rethink the initial question.
    </p>

    <blockquote>
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
    </blockquote>

    <SectionTitle number="2">Why is D3 hard to learn?</SectionTitle>
    <p>
      We can begin with the perennial question: why is D3 so hard to learn? I
      think people who &quot;try to learn D3&quot; usually run into problems
      because they think that D3 is the single tool they need to learn; in
      reality, &quot;learning D3&quot; is learning <strong
        >an entire toolkit</strong
      > of tools on the web, including (but not limited to) HTML, CSS, JavaScript,
      SVG, and D3. (Have fun!).
    </p>
    <p>
      When folks that are brand new to the web start &quot;learning D3,&quot;
      they rarely understand what in their curriculum is D3, what is HTML, what
      is CSS, and what is JavaScript. And it&rsquo;s not really their fault—D3
      trying to subsume each of these individual languages (creating markup from <code
        >select()</code
      >
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

    <SectionTitle number="3"
      >Would {userSelectedFramework || "a framework"} be any better?</SectionTitle
    >
    <p>
      So, would <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "Svelte, React, et al."}
      </ToggleableFramework> make things that much better? The answer
      is yes, not because <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "a framework"}
      </ToggleableFramework> makes things
      <em>easy</em>
      but because it makes things <strong>clear</strong> (direct? other word
      here?). If you were learning Svelte, for example, you would learn the
      discrete purposes of a <code>&lt;script /&gt;</code> tag, of your markup,
      and of your
      <code>&lt;style /&gt;</code> tag: JavaScript, HTML/SVG, and CSS, respectively.
      [FIXME: Add same for React, and Vue.] Yes, you are learning three new tools,
      but you&rsquo;re not trying to learn them through the lens of D3.
    </p>
    <p>Let's consider a trivial example to illustrate this point: a simple scatterplot. 
      Recall that in most "D3" data visualizations, your eventual output will be SVG.
    </p>
    
    <p>In a D3-first approach, you might write something like this:</p>
    <Code language='js'>

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

    <p>The result of that D3 code would be a chunk of SVG code that, when embedded in a document, would render five circles.</p>

        <Code language='html' includesOutput={true}>

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

    <p>Let's dive deep into the above code to understand what D3 is doing behind the scenes.</p>

    <ScrollySection />

    <p>
      In a <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "framework-first"}
      </ToggleableFramework> application, someone will be able to tell if a bug lies
      in their markup by
      <strong>directly changing their markup</strong>, whereas a developer
      working in a pure-D3 application might not know (without doing some
      intentional debugging) if their issue lies in their selection method
      chaining, in their SVG, or in their JavaScript. Of course, advanced
      practitioners will know how to solve these sorts of problems. But for
      those <strong>learning</strong> interactive data visualization, D3 confuses
      more than it elucidates.
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
      is great. D3 provides convenient functions for array manipulation, scaling
      of data, and shape and path manipulation. But when D3 isn&rsquo;t needed and
      {userSelectedFramework || "a framework"} would be better suited (for example,
      using {userSelectedFramework || "Svelte"} to write your markup directly, rather
      than using a D3 selection method), we use different tools for what they&rsquo;re
      best suited for. (Bad sentence -&gt; revise.)
    </p>
    <p>
      And so in some ways, this new framework-first approach forces us to use D3
      more intentionally. Rather than acting as a hammer searching for nails <em
        >(how can I solve this problem using D3?)</em
      >, we only reach for the hammer when we need it <em
        >(would D3 be best-suited to solve this problem, and how so?)</em
      >.
    </p>
    <h3 id="d3-for-the-data-frameworks-for-the-dom">
      D3 for the data, frameworks for the DOM
    </h3>
    <SectionTitle number="5">The actual roadmap</SectionTitle>
    <p>
      Enough about theory. If I haven&rsquo;t convinced you, [reach out]. If I
      have convinced you, here&rsquo;s how to actually get started making
      interactive data visualizations in 2023.
    </p>
    <h3 id="1-learn-the-fundamentals-of-the-web">
      1. Learn the fundamentals of the web
    </h3>
    <p>
      Learn HTML, CSS, and beginner JavaScript. The best resources for this
      include:
    </p>
    <p>...</p>
    <p>
      But don&rsquo;t commit too heavily to these tools. In step 2, you&rsquo;ll
      find a JavaScript framework which makes authoring complex applications
      more simple. It&rsquo;s important you understand the main concepts of
      HTML, CSS, and JavaScript, but you&rsquo;ll continue to learn them as you
      dive into a framework.
    </p>
    <h3 id="2-choose-a-javascript-framework-and-learn-it">
      2. Choose a JavaScript framework, and learn it
    </h3>
    <p>Learn some JavaScript framework.</p>
    <p>
      {#if userSelectedFramework}
        You&rsquo;ve chosen <ToggleableFramework bind:userSelectedFramework>
          {userSelectedFramework}
        </ToggleableFramework>.
      {:else}
        <p>
          <strong
            >The most popular and fastest-growing framework within the
            visualization community in particular is [Svelte]</strong
          >, but [React] is another great choice because it has 1) an incredibly
          large user base, 2) an existing ecosystem of packages and libraries,
          and 3) great employability prospects beyond visualization. (React is
          sort of the GOAT, and Svelte is the new kid on the block (baby goat?)
          that is growing in prominence.)
        </p>
        <p>
          Another honorable mention is [Vue], which is left out of the
          conversation lately but still very promising.
        </p>
        <p>Avoid Angular.</p>
        <hr />
        <p>
          If you do choose Svelte, I would recommend following a few key people:
        </p>
        <ul>
          <li><a href="">Connor Rothschild (lol)</a></li>
          <li><a href="">Matthias Stahl</a></li>
          <li>?</li>
          <li>?</li>
        </ul>
      {/if}
    </p>
    <h3 id="3-learn-svg">3. Learn SVG</h3>
    <p>
      In every D3 project, you're giving JavaScript instructions to write
      SVG (or whatever your output is) to the DOM. And in your framework-first
      approach, you will write the DOM directly. (The difference, in simple
      terms is as follows: where D3 would require you to write <code
        >d3.select("body").append("svg")</code
      >, <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "a framework"}
      </ToggleableFramework> enables you to write
      <code>&lt;svg /&gt;</code>; both will create the output,
      <code>&lt;svg /&gt;</code>.)
    </p>
    <p>
      So, it&rsquo;s worth getting familiar with [SVG] (scalable vector
      graphics), which is usually the main markup language used to design data
      visualizations.
    </p>
    <p>
      Syntactically, SVG is like HTML (which is another reason it&rsquo;s worth learning
      HTML first), except it produces <strong>images</strong> rather than
      <strong>text</strong>. Once you begin to understand SVG, you can write it
      directly in your framework-first application, and embed data inline as
      needed.
    </p>
    <p>
      Admittedly, fewer resources exist to &quot;learn SVG,&quot; but the
      workflow for using new SVG elements is quite simple:
    </p>
    <ol>
      <li>
        Identify the element you want to use (if you are making a scatterplot, a <code
          >&lt;circle /&gt;</code
        >)
      </li>
      <li>
        Find the documentation for that element (<a href="link">on MDN</a>)
      </li>
      <li>
        Gather the attributes you need to assign (for a circle, <code>cx</code>,
        <code>cy</code>, and <code>r</code>)
      </li>
      <li>Assign them, and then edit as needed</li>
    </ol>
    <h3 id="4-write-svg-in-a-userselectedframework-framework-first-application">
      4. Write SVG in a
      <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "framework-first"}
      </ToggleableFramework> application
    </h3>
    <p>
      Now that you understand SVG, which will be your final output, write it
      directly in
      <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "some JavaScript framework"}
      </ToggleableFramework>. Having learned the fundamentals of the web, you
      should have a good handle on debugging separate parts of your application,
      and having learned the ins and outs of your
      <ToggleableFramework bind:userSelectedFramework>
        {userSelectedFramework || "your JavaScript framework"}
      </ToggleableFramework>, you should know how to embed data inline within
      your markup. From there, it&rsquo;s easy.
    </p>
  </div>
</main>

<style>
  main {
    width: 100%;
    max-width: 1268px;
    margin: auto;
  }

  .viz-article-body {
    padding: 6rem 1rem;
    max-width: 968px;
    width: 95%;
    margin: 2rem auto;
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
      background:rgb(99 140 255 / 90%);
      color: white;
  }

  :global(.viz-article-body h1::selection) {
    background: none
  }

  p {
    line-height: 1.425;
    font-size: 1.35rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  ul,
  li {
    font-weight: 500;
    color: rgb(25, 25, 25);
    font-family: GT, Satoshi;
    letter-spacing: -.25px;
  }

  strong {
    font-weight: 600;
    color: black;
  }

  .title-container {
    position: relative;
    left: calc(-50vw + 50%);
    width: 100vw;
    padding: 2rem 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }

  p:not(:last-child),
  blockquote:not(:last-child) {
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
</style>
