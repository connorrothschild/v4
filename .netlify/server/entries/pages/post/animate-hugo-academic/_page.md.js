import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
import { C as Code } from "../../../../chunks/Code.js";
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
  "title": "Animating Your Hugo Academic Site",
  "description": "Make your Hugo Academic homepage more engaging with a few lines of code",
  "date": "2020-07-02",
  "image": "animate-hugo-academic/header.png",
  "tags": ["html", "r", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/final.gif",
          alt: "A GIF showcasing the final version of my animated homepage."
        },
        {},
        {}
      )}
<p>The R package <code>blogdown</code> is an incredibly powerful tool\u2014it allows R users with little to no familiarity in web development to build a fully functional, content-oriented, beautiful website using a language they\u2019re already familiar with. It\u2019s built on top of <a href="${"https://gohugo.io/"}" rel="${"nofollow"}">Hugo</a>, the world\u2019s (self-proclaimed) \u2018fastest framework for building websites,\u2019 which comes with a <a href="${"https://themes.gohugo.io/"}" rel="${"nofollow"}">variety of themes</a> suitable for a variety of different uses.</p>
<p>Within the R community, perhaps one of the most popular themes is <a href="${"https://themes.gohugo.io/academic/"}" rel="${"nofollow"}">Hugo Academic</a>. As the name implies, the theme is geared toward those working academia\u2014more generally, it provides a great starter kit for those interested in showcasing blog posts, projects, and other media on a minimalist site.</p>
<p>Given its popularity, the Hugo Academic landing page is far-too-familiar. Although not unattractive, no one is particularly surprised or engaged by the standard Academic homepage.</p>
<p>One way to spice up Hugo Academic is to use animations on our home pages. In this post, I outline three simple steps and a few lines of code to create a fully functional, beautifully-animated landing page. By leveraging the flexibility of Hugo\u2019s framework, and introducing a little bit of HTML and CSS, we can take our Hugo Academic home pages from zero to hero (at least, in terms of animation!).</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>This tutorial assumes you are starting a Hugo Academic site from scratch. If you already have a Hugo Academic website up and running, you should be able to <a href="${"#step-1-create-abouthtml"}">skip step 0</a> and modify the remaining steps slightly.</p>
<p>It also assumes that you have little to no knowledge about HTML and CSS (which is fine!). If that\u2019s <em>not</em> the case, you can likely go ahead and skip to <a href="${"#step-3-add-css"}">step 3</a>.</p>
<p>If you\u2019d like to skip this tutorial and just start a Hugo Academic site that\u2019s animated, feel free to <a href="${"https://github.com/connorrothschild/animate-hugo-academic"}" rel="${"nofollow"}">fork my repository</a> which includes all the code you need for an animated homepage. The repo includes my <a href="${"https://github.com/connorrothschild/animate-hugo-academic/blob/master/layouts/partials/widgets/about.html"}" rel="${"nofollow"}"><code>about.html</code> page</a> and a <a href="${"https://github.com/connorrothschild/animate-hugo-academic/blob/master/assets/scss/custom.scss"}" rel="${"nofollow"}">custom SCSS file</a>!</p>`;
        }
      })}
<h2 id="${"step-0-make-your-about-page-your-actual-homepage"}"><a href="${"#step-0-make-your-about-page-your-actual-homepage"}">Step 0) Make your \u2018about\u2019 page your actual homepage</a></h2>
<p>By default, the Hugo Academic theme\u2019s first section is a grandiose self-introduction (I guess the creators of the theme do deserve such credit). Before we incorporate any of our animations, lets go ahead and make our \u2018about\u2019 page the landing page users first see when they visit our site. This requires us to find the files <code>hero.md</code> and <code>demo.md</code>, and in each of those files, set <code>active</code> equal to <code>false</code>. That takes our home page from this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/before-demo-hero-remove.png",
          alt: "A GIF showcasing the initial version of my homepage, before any edits."
        },
        {},
        {}
      )}
<p>to this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/after-demo-hero-remove.png",
          alt: "A GIF showcasing a version of my homepage where I replace \u2018hero' with \u2018about\u2019."
        },
        {},
        {}
      )}
<p>(As you progress, you might have to make additional small changes, such as removing \u2018Demo\u2019 from the navbar menu.)</p>
<h2 id="${"step-1-create-abouthtml"}"><a href="${"#step-1-create-abouthtml"}">Step 1) Create <code>about.html</code></a></h2>
<p>The first <em>real</em> step in our process is modifying the default layout of our about page. More specifically, our animations will rely on CSS selectors which our about page currently doesn\u2019t have. In order to animate certain elements, we will need unique identifiers, such as CSS classes and IDs, to target.</p>
<p>To play around with our about page, we take advantage of Hugo\u2019s flexibility toward structural changes. As they <a href="${"https://bwaycer.github.io/hugo_tutorial.hugo/themes/customizing/"}" rel="${"nofollow"}">say</a> on their website:</p>
<blockquote><p>Hugo permits you to <strong>supplement or override</strong> any theme template or static file, with files in your working directory.</p></blockquote>
<p>In order to override Hugo Academic\u2019s about page, we need to copy their existing structure into our own folder and modify it there. To do so, navigate to <code>themes/hugo-academic/layouts/partials/widgets/</code> and copy the file titled <code>about.html</code>.</p>
<p>Now, create <em>a new file path</em> in your root directory titled <code>layouts/partials/widgets/</code>. Copy your <code>about.html</code> file here. (Look familiar? All we\u2019re doing is recreating <code>about.html</code> in a <em>personal</em> version of our project, thus overriding the <code>about.html</code> that Hugo Academic provides.)</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `Alternatively, you can copy the about.html file that I used for this project and paste it into <code>layouts/partials/widgets/</code>. <a href="${"https://github.com/connorrothschild/animate-hugo-academic/blob/master/layouts/partials/widgets/about.html"}" target="${"_blank"}" rel="${"noopener noreferrer"}">You can find my file here</a>. This will also allow you to skip step 2 and move on to <a href="${"#step-3-add-css"}">step 3</a>!
`;
        }
      })}
<h2 id="${"step-2-customize-your-file"}"><a href="${"#step-2-customize-your-file"}">Step 2) Customize your file</a></h2>
<p>With that newly created <code>about.html</code> living in <code>layouts/partials/widgets/</code>, you may notice that your homepage looks the exact same. This is correct! In this step, we\u2019ll customize that html file so that it can be animated.</p>
<p>Within <code>about.html</code>, you\u2019ll notice all of your page\u2019s elements in order of appearance, despite a lot of extra characters that don\u2019t make much sense. It should look like this (don\u2019t read into this code, just verify it looks the same):</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/about.png",
          alt: "A screenshot of complicated code that is initially used to render the homepage."
        },
        {},
        {}
      )}
<p>Throughout step 3, we\u2019ll use each element\u2019s class to target it for animations. In the above screenshot (and in your <code>about.html</code> page), you\u2019ll see classes scattered throughout. Although learning everything about CSS and CSS selectors is beyond the scope of this tutorial, I would recommend reading a brief primer on classes and selectors in CSS, which can be found <a href="${"https://www.w3schools.com/cssref/sel_class.asp"}" rel="${"nofollow"}">here</a>.</p>
<p>In this step, we\u2019ll add classes to the elements we want to animate. (Again, if this seems to be overwhelming, feel free to copy <a href="${"https://github.com/connorrothschild/animate-hugo-academic/blob/master/layouts/partials/widgets/about.html"}" rel="${"nofollow"}">my HTML file.</a>) Specifically, we\u2019ll make three changes. (For each, feel free to just control-F the content and add the class right before.)</p>
<p>First, we\u2019ll add a class of <code>biography-title</code> to our h1 (header 1) element. Here, we will change</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;h1&gt;&#123;&#123; $page.Title | markdownify | emojify &#125;&#125;&lt;/h1&gt;
&#123;&#123; end &#125;&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>to</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;h1 class=&quot;biography-title&quot;&gt;&#123;&#123; $page.Title | markdownify | emojify &#125;&#125;&lt;/h1&gt;
&#123;&#123; end &#125;&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Next, we need to wrap the main content, aka the big text blocks in the middle of the page, in their own class too. Here, we take</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&#123;&#123; $person_page.Content &#125;&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>and wrap it in a <code>div</code>, so it looks like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;div class=&quot;main-content&quot;&gt;&#123;&#123; $person_page.Content &#125;&#125;&lt;/div&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Finally, we\u2019ll add a class to our interests and and education blocks. We can take this row:</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;div class=&quot;row&quot;&gt;
  &#123;&#123; with $person.interests &#125;&#125;
  &lt;div class=&quot;col-md-5&quot;&gt;
    &lt;h3&gt;&#123;&#123; i18n &quot;interests&quot; | markdownify &#125;&#125;&lt;/h3&gt;
    &lt;ul class=&quot;ul-interests&quot;&gt;
      &#123;&#123; range . &#125;&#125;
      &lt;li&gt;&#123;&#123; . | markdownify | emojify &#125;&#125;&lt;/li&gt;
      &#123;&#123; end &#125;&#125;
    &lt;/ul&gt;
  &lt;/div&gt;
  &#123;&#123; end &#125;&#125; &#123;&#123; with $person.education &#125;&#125;
  &lt;div class=&quot;col-md-7&quot;&gt;
    &lt;h3&gt;&#123;&#123; i18n &quot;education&quot; | markdownify &#125;&#125;&lt;/h3&gt;
    &lt;ul class=&quot;ul-edu fa-ul&quot;&gt;
      &#123;&#123; range .courses &#125;&#125;
      &lt;li&gt;
        &lt;i class=&quot;fa-li fas fa-graduation-cap&quot;&gt;&lt;/i&gt;
        &lt;div class=&quot;description&quot;&gt;
          &lt;p class=&quot;course&quot;&gt;&#123;&#123; .course &#125;&#125;&#123;&#123; with .year &#125;&#125;, &#123;&#123; . &#125;&#125;&#123;&#123; end &#125;&#125;&lt;/p&gt;
          &lt;p class=&quot;institution&quot;&gt;&#123;&#123; .institution &#125;&#125;&lt;/p&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &#123;&#123; end &#125;&#125;
    &lt;/ul&gt;
  &lt;/div&gt;
  &#123;&#123; end &#125;&#125;
&lt;/div&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>and replace it with this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "html", filename: "about.html" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;div class=&quot;row&quot;&gt;
  &#123;&#123; with $person.interests &#125;&#125;
  &lt;div class=&quot;interests-div col-md-5&quot;&gt;
    &lt;h3&gt;&#123;&#123; i18n &quot;interests&quot; | markdownify &#125;&#125;&lt;/h3&gt;
    &lt;ul class=&quot;ul-interests&quot;&gt;
      &#123;&#123; range . &#125;&#125;
      &lt;li&gt;&#123;&#123; . | markdownify | emojify &#125;&#125;&lt;/li&gt;
      &#123;&#123; end &#125;&#125;
    &lt;/ul&gt;
  &lt;/div&gt;
  &#123;&#123; end &#125;&#125; &#123;&#123; with $person.education &#125;&#125;
  &lt;div class=&quot;education-div col-md-7&quot;&gt;
    &lt;h3&gt;&#123;&#123; i18n &quot;education&quot; | markdownify &#125;&#125;&lt;/h3&gt;
    &lt;ul class=&quot;ul-edu fa-ul&quot;&gt;
      &#123;&#123; range .courses &#125;&#125;
      &lt;li&gt;
        &lt;i class=&quot;fa-li fas fa-graduation-cap&quot;&gt;&lt;/i&gt;
        &lt;div class=&quot;description&quot;&gt;
          &lt;p class=&quot;course&quot;&gt;&#123;&#123; .course &#125;&#125;&#123;&#123; with .year &#125;&#125;, &#123;&#123; . &#125;&#125;&#123;&#123; end &#125;&#125;&lt;/p&gt;
          &lt;p class=&quot;institution&quot;&gt;&#123;&#123; .institution &#125;&#125;&lt;/p&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &#123;&#123; end &#125;&#125;
    &lt;/ul&gt;
  &lt;/div&gt;
  &#123;&#123; end &#125;&#125;
&lt;/div&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>A quick tip to identify the classes and IDs of individual elements is to use the browser\u2019s <strong>inspect element</strong> tool. To do so, right click on the element you\u2019re interested in and click inspect element; what you\u2019ll see is a highlighted box that tells you that object\u2019s class and/or ID. For more on inspect element and your browser, <a href="${"https://blog.devmountain.com/how-to-use-inspect-element-jump-into-what-makes-a-web-page-tick/"}" rel="${"nofollow"}">see this page</a>.</p>`;
        }
      })}
<p>Now, we can reference the existing CSS classes, and our new ones, in our pretty animation in Step 3!</p>
<h2 id="${"step-3-add-css"}"><a href="${"#step-3-add-css"}">Step 3) Add CSS</a></h2>
<p>Now that we\u2019ve created our classes, we can target them in a CSS file and tell them exactly <em>how</em> to animate.</p>
<p>But first, you\u2019ll need to create a custom CSS file in your root directly. In your <code>assets/</code> folder, create a <em>new</em> folder called <code>scss/</code> and within this folder, create a <em>new</em> file called <code>custom.scss</code>.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>An SCSS file is essentially a CSS file but extended with Sass, which describes <a href="${"https://sass-lang.com/"}" rel="${"nofollow"}">itself</a> as \u2018CSS with superpowers.\u2019 For an overview of the intricacies of Sass, like nesting selectors, visit <a href="${"https://sass-lang.com/guide"}" rel="${"nofollow"}">their guide</a>.</p>`;
        }
      })}
<p>Within <code>custom.scss</code>, we\u2019re going to target everything <em>within our about section</em>. In order to do so, we create a selector that targets everything within the ID of <code>about</code>.</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">#about &#123;
  /* Some CSS will go here soon! */
  /* This is a comment, by the way. */
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>To ensure that we\u2019ve targeted the right section, we can go ahead and add the property <code>background-color: red</code> to that element. As the name implies, this will make the section \u2728 red. \u2728</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">#about &#123;
  background-color: red;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>As we expected, our section background is now an (unbelievably ugly shade of) red.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/bg-red.png",
          alt: "An example of turning the background color of the page red."
        },
        {},
        {}
      )}
<p>(Now remove that property immediately! This is not quite the welcome we want for our visitors.) We can also target elements <em>within</em> the section by nesting new selectors inside of <code>#about</code>. For example, if we wanted to change the color of our \u2018biography\u2019 title text, we could do so with the following code. (This is because we created a class named <code>biography-title</code> in step 1):</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">#about &#123;
  .biography-title &#123;
    color: red;
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/font-red.png",
          alt: "An example of turning the font color  red."
        },
        {},
        {}
      )}
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>You may notice that <code>about</code> is targeted with a pound (#) and <code>biography-title</code> is targeted with a period (.). This is the difference between CSS <em>IDs</em> and <em>classes</em>. If you\u2019re curious about the distinction, here\u2019s a <a href="${"https://www.htmldog.com/guides/css/intermediate/classid/"}" rel="${"nofollow"}">helpful guide</a>.</p>`;
        }
      })}
<p>Now that we know how to target specific objects within our <code>about</code> section, we can animate our first element!</p>
<h3 id="${"step-3a-your-first-animation"}"><a href="${"#step-3a-your-first-animation"}">Step 3A) Your first animation!</a></h3>
<p>Creating your first animation is as simple as a few lines of code. To illustrate, we\u2019ll test out an animation which changes our text from red and invisible to black and visible. In the code, we\u2019ll have to do two things:</p>
<ol><li>Create an animation with <code>@keyframes</code></li></ol>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">@keyframes yourfirstanimation &#123;
  from &#123;
    opacity: 0;
    color: red;
  &#125;
  to &#123;
    opacity: 1;
    color: black;
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<ol start="${"2"}"><li>Bind the animation to an element</li></ol>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">.biography-title &#123;
  animation: yourfirstanimation 5s forwards;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>To break down the above code, we create an animation that has a <em>start point</em> (<code>0%</code>) and an <em>end point</em> (<code>100%</code>). At both of these points, we define CSS properties, such as color and opacity, seen above. When we bind the animation to an element, which is as simple as <code>animation: &lt;animation_name&gt; &lt;duration&gt; &lt;fill_mode&gt;</code>, CSS deals with all the inbetween and automatically creates a smooth transition! (Fill mode is the most complicated of these three properties, but for our purposes we will always be using <code>forwards</code>. For more information, visit <a href="${"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"}" rel="${"nofollow"}">this page</a>.)</p>
<p>Altogether, this code creates this output:</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">#about &#123;
  @keyframes yourfirstanimation &#123;
    0% &#123;
      opacity: 0;
      color: red;
    &#125;
    100% &#123;
      opacity: 1;
      color: black;
    &#125;
  &#125;

  .biography-title &#123;
    animation: yourfirstanimation 5s forwards;
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/red.gif",
          alt: "An example transition, turning the font color to red over a 5 second duration."
        },
        {},
        {}
      )}
<p>Of course, we don\u2019t want a 5 second animation, nor do we want our text to start off as red. A cleaner animation might leverage the power of CSS to modify an element\u2019s <em>position</em>. In our case, we want an element to <strong>slide in from the right side of the screen</strong>, and so we make a few tweaks to the code above. Let\u2019s make a new animation called <code>slide-from-right</code> which starts (at keyframe 0%) with our element 150% to the right of its original position (therefore off the screen) and ends (at keyframe 100%) with it at its original position. This involves the use of <code>translateX</code>, which you can read about <a href="${"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX"}" rel="${"nofollow"}">here</a>.</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">@keyframes slide-from-right &#123;
  0% &#123;
    transform: translateX(150%);
  &#125;
  100% &#123;
    transform: translateX(0%);
  &#125;
&#125;

.biography-title &#123;
  animation: slide-from-right 1s forwards;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/slide-from-right.gif",
          alt: "A gif of the content sliding in from the right side of the page"
        },
        {},
        {}
      )}
<p>There is one slight improvement we can make on the above transition. Specifically, we can call an <em>easing function</em> on our animation. <a href="${"https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"}" rel="${"nofollow"}">Easing functions</a> give a more natural feel to a transition\u2019s flow\u2014rather than our object flying in at a perfectly linear rate, we can add some personality by specifying its speed at different points in the transition. To find an easing function, visit <a href="${"https://easings.net/en#"}" rel="${"nofollow"}">easings.net</a>, which allows you to visualize all of the different ways to modify your transition\u2019s ease. (For this tutorial, I chose a clean-looking \u201C<em>easeInOutQuint</em>\u201C function, which looks like this: <code>cubic-bezier(0.83, 0, 0.17, 1)</code>.)</p>
<hr>
<h3 id="${"step-3b-dont-wait-to-delay"}"><a href="${"#step-3b-dont-wait-to-delay"}">Step 3B) Don\u2019t Wait to Delay</a></h3>
<p>We want our homepage to have more than just one title animation. We might also want to <strong>animate the paragraphs below it</strong>, with the same \u2019slide from right\u2019 transition we defined earlier. While doing this, we can add one property to our element to make the overall transition seem more fluid: <code>animation-delay</code>. As the name suggests, this property defines how long the browser should wait before it <em>begins</em> the transition you\u2019ve specified. Animating our <code>main-content</code> div is as simple as copying the above code and adding a 100 millisecond animation delay.</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">.main-content &#123;
  animation: slide-from-right 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  animation-delay: 100ms;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>In combination with above, this creates a transition that looks like this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/double-slide.gif",
          alt: "A gif of two pieces of content sliding in, one after another (with a 100ms delay)"
        },
        {},
        {}
      )}
<p>Nice! That looks clean. It looks like those two text blocks are racing to greet your new site visitor :)</p>
<hr>
<h3 id="${"step-3c-to-the-left"}"><a href="${"#step-3c-to-the-left"}">Step 3C) To the Left!</a></h3>
<p>Let\u2019s go ahead and replicate that \u2019slide in\u2019 transition for our profile on the left side of our webpage. As you could probably gather, this is as simple as copying the above code and changing the value in <code>translateX</code> from 150% to -150% (from just outside the right side of our webpage <a href="${"https://www.youtube.com/watch?v=2EwViQxSJJQ&feature=youtu.be&t=25"}" rel="${"nofollow"}">to the left!</a>). As above, we\u2019ll define this transition in a <code>@keyframes</code> rule and apply it to our CSS transition afterward.</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">@keyframes slide-from-left &#123;
  0% &#123;
    transform: translateX(-150%);
  &#125;
  100% &#123;
    transform: translateX(0%);
  &#125;
&#125;

#profile &#123;
  animation: slide-from-left 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/left-and-right.gif",
          alt: "Two paragraphs of content sliding in from opposite directions."
        },
        {},
        {}
      )}
<h3 id="${"step-3d-finally-the-fade"}"><a href="${"#step-3d-finally-the-fade"}">Step 3D) Finally, the Fade</a></h3>
<p>The only thing not yet animated on our page are the \u2018interests\u2019 and \u2018education\u2019 content blocks. Of course, you might not want these on your homepage (my educational journey isn\u2019t yet formidable enough to warrant its own section on my homepage!). But for the sake of animating the homepage <em>as its configured by default</em>, let\u2019s go ahead and have those content blocks fade in <em>once the sliding transitions complete</em>.</p>
<p>If you\u2019ve been paying attention to the prior <code>@keyframes</code> rules, you might have guessed that the code would look like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">@keyframes fade-in &#123;
  0% &#123;
    opacity: 0;
  &#125;
  100% &#123;
    opacity: 1;
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>\u2026 and you would be correct!</p>
<p>Now, we apply this <code>fade-in</code> rule to both our <code>interests-div</code> and our <code>education-div</code>, which we created in step 1. But notably, we want to wait to fade in each of these divs until <em>after our content has slid in from either side of the webpage.</em> And so, we\u2019ll once again use the <code>animation-delay</code> property. Because our slide-in animations take one second to complete, we can begin our fade-in animations after a one-second delay. To make the transition a little more visually appealling, we can also stagger them, so the <code>education-div</code> fades in half a second <em>after</em> <code>interests-div</code>.</p>
${validate_component(Code, "Code").$$render($$result, { language: "css", filename: "custom.scss" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">.interests-div &#123;
  opacity: 0;
  animation: fade-in 1s forwards;
  animation-delay: 1s;
&#125;

.education-div &#123;
  opacity: 0;
  animation: fade-in 1s forwards;
  animation-delay: 1.5s;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Now, we have a final homepage that looks like this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/animate-hugo-academic/final.gif",
          alt: "A GIF showing the final iteration of a homepage, with animations."
        },
        {},
        {}
      )}
<p>To make our SCSS file more robust across different browsers, we can take our completed file and put it into the <a href="${"https://autoprefixer.github.io/"}" rel="${"nofollow"}">CSS Autoprefixer</a>. This adds additional lines of code to our CSS file so that all browsers render the same animations upon page load. Your completed SCSS file should look like <a href="${"https://github.com/connorrothschild/animate-hugo-academic/blob/master/assets/scss/custom.scss"}" rel="${"nofollow"}">this</a>.</p>
<h2 id="${"extending-animations"}"><a href="${"#extending-animations"}">Extending Animations</a></h2>
<p>This tutorial is meant to teach you the essentials of <em>how</em> to animate your homepage (for any Hugo site, not just Academic). Specifically, you should be able to 1) create and identify CSS elements via their classes and IDs, 2) target them using CSS, and 3) animate them using <code>@keyframes</code> rules. Although easier said then done, applying these three rules will go a long way in making your homepage much more appealling to new visitors.</p>
<p>The complete power of CSS animations is not covered in this tutorial. Further applications of animations could do <strong>much</strong> more than just animate an object\u2019s position. I leave that to you!</p>
<p>For those that are interested, <a href="${"https://connorrothschild.github.io/v2/"}" rel="${"nofollow"}">my old homepage</a> is chock-full of CSS properties which make it unique from most; some visitors are surprised to hear that my site is Hugo Academic at all!</p>
<p>For those interested, the code for my Hugo Academic personal site (now archived) can be found <a href="${"https://github.com/connorrothschild/v2"}" rel="${"nofollow"}">here</a>. I look forward to seeing your animated homepages!</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
