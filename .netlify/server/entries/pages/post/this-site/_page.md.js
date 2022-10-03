import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
import { I as Info } from "../../../../chunks/Info.js";
import { C as Code } from "../../../../chunks/Code.js";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText.js";
import "../../../../chunks/BackTo.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      *//* empty css                                                     */import "prismjs";
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
const TransitionExample_svelte_svelte_type_style_lang = "";
const css = {
  code: ".example.svelte-60m7ko{width:auto;margin:1.15rem auto;background:var(--semitransparent-bg);padding:2rem;border-radius:0.2rem;display:flex;flex-direction:column;justify-content:center;place-items:center;position:relative}.button.svelte-60m7ko{text-align:center;font-size:1.25rem}h1.svelte-60m7ko{margin:2.5rem 0 0.5rem 0 !important}.code.svelte-60m7ko{position:absolute;right:0;top:unset;bottom:0;padding:0.5rem;font-size:0.75rem;text-transform:uppercase;font-family:var(--font-sans)}",
  map: null
};
const TransitionExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.registerPlugin(SplitText);
  $$result.css.add(css);
  return `<div class="${"example svelte-60m7ko"}"><div class="${"button svelte-60m7ko"}">Transition</div>
  <h1 id="${"transition-me"}" class="${"svelte-60m7ko"}">Hi, I&#39;m Connor Rothschild!</h1>
  <a class="${"code no-underline svelte-60m7ko"}" href="${"https://github.com/connorrothschild/.com/tree/master/src/lib/Global/Blog/this-site/TransitionExample.svelte"}" target="${"_blank"}" rel="${"noopener noreferrer"}">See source code</a>
</div>`;
});
const metadata = {
  "layout": "blog",
  "title": "This site is live!",
  "description": "A creative, content-focused personal website, built with SvelteKit",
  "date": "2021-12-09",
  "image": "tidy-tuesday-powerlifting/header.png",
  "archived": false,
  "featured": true,
  "tags": ["svelte", "personal"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script async src="${"https://platform.twitter.com/widgets.js"}" charset="${"utf-8"}" data-svelte="svelte-lj1ja"><\/script>`, ""}
${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>The new connorrothschild.com is live! (You\u2019re likely reading this post on connorrothschild.com, so that isn\u2019t a surprise).</p>
<p>My new site, which is my fourth personal website, is built with Sveltekit and takes inspiration from creative coders like <a href="${"https://flayks.com/"}" rel="${"nofollow"}">F\xE9lix P\xE9ault</a> and <a href="${"https://henry.codes/"}" rel="${"nofollow"}">Henry Desroches</a>. You should check out their sites if you haven\u2019t already\u2014they\u2019re pretty great.</p>
<p>I spent far too long on this iteration of my personal site (see <a href="${"https://github.com/connorrothschild/.com/commits/master"}" rel="${"nofollow"}">the commits</a>). </p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/commits.png",
          alt: "Four commits to my GitHub repository for this site. Each commit shows escalating confusion and frustration with my code."
        },
        {},
        {}
      )}
<p>In this brief post, I\u2019ll detail some of the highlights, headaches, and give some practical tips for creating a personal website.</p>
<h2 id="${"creativity--content"}"><a href="${"#creativity--content"}">Creativity &amp; content</a></h2>
<p>connorrothschild.com is meant to be a highly creative, but still content-focused personal site. Here are some examples of sites that served as inspiration on both fronts.</p>
<h3 id="${"creativity"}"><a href="${"#creativity"}">Creativity</a></h3>
<p>You can find plenty of examples of creative websites by perusing the collection of <a href="${"https://www.awwwards.com/websites/sites_of_the_day/"}" rel="${"nofollow"}">awwwards Site of the Day</a> winners. This collection is mostly comprised of \u2018creative coders\u2019 who build highly creative, design-focused sites, usually for brands of for their own portfolio. A great example of an incredibly creative personal website is <a href="${"https://niccolomiranda.com/"}" rel="${"nofollow"}">Niccolo Miranda\u2019s</a>:</p>

<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">Proud to finally release my new &quot;Paper Portfolio&quot;.<br><br>Live site \u21B3 <a href="${"https://t.co/zr4BTo31kP"}">https://t.co/zr4BTo31kP</a> <br><br>Many thanks to <a href="${"https://twitter.com/clementroche_?ref_src=twsrc%5Etfw"}">@clementroche_</a> &amp; <a href="${"https://twitter.com/michael_dlb?ref_src=twsrc%5Etfw"}">@michael_dlb</a> for the dev support. <a href="${"https://t.co/n1gDHnYkbl"}">pic.twitter.com/n1gDHnYkbl</a></p>\u2014 Niccol\xF2 Miranda (@niccolomiranda) <a href="${"https://twitter.com/niccolomiranda/status/1452636062866710531?ref_src=twsrc%5Etfw"}">October 25, 2021</a></blockquote>
<p>What makes the site great\u2014beyond its general aesthetic\u2014is its unified theme of a \u2018paper portfolio.\u2019 The site is meant to resemble a newspaper, and is chock-full of animations and design decisions that support that association. You can read more about those decisions in his thread below:</p>

<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">Big news! My new portfolio has been awarded <a href="${"https://twitter.com/hashtag/SOTD?src=hash&ref_src=twsrc%5Etfw"}">#SOTD</a> and <a href="${"https://twitter.com/hashtag/DEVAWARD?src=hash&ref_src=twsrc%5Etfw"}">#DEVAWARD</a> on <a href="${"https://twitter.com/awwwards?ref_src=twsrc%5Etfw"}">@AWWWARDS</a>. <br><br>\u2937 <a href="${"https://t.co/4DvfkZi53r"}">https://t.co/4DvfkZi53r</a><br><br>To celebrate, I thought to stack in 12 mini-threads the creative process I followed up to build it. <br><br>Read below \u{1F6A7}\u{1F447} <a href="${"https://t.co/05t9LPJJAD"}">pic.twitter.com/05t9LPJJAD</a></p>\u2014 Niccol\xF2 Miranda (@niccolomiranda) <a href="${"https://twitter.com/niccolomiranda/status/1461291594477449220?ref_src=twsrc%5Etfw"}">November 18, 2021</a></blockquote>
<h3 id="${"content"}"><a href="${"#content"}">Content</a></h3>
<p>On the other hand, many sites are designed with <em>content</em> in mind. These sites tend to reduce \u2018fluff\u2019 and focus on making sure users are able to easily find and peruse content, such as blog posts. This tends to be the default for most developers who maintain a personal portfolio or blog, but don\u2019t describe themselves as a \u2018creative coder.\u2019</p>
<p>Perhaps the most extreme example of a content-focused personal website is <a href="${"http://paulgraham.com/articles.html"}" rel="${"nofollow"}">Paul Graham\u2019s</a>:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/paul-graham.png",
          alt: "Paul Graham's personal website, featuring a collection of essays"
        },
        {},
        {}
      )}
<p>The site is not meant to be pretty, but it gets you the content you need <em>immediately</em>. </p>
<p>Beyond its easy navigability, the benefit of a site like this is <strong>your visitors know what to expect</strong>. When you click on a blog post, you get a blog post, with nothing distracting you from the main content. No page transitions, no whimsy, just content. Visitors know that they are visiting your website to learn about your thoughts, not to be impressed by your ability to put a website together.</p>
<h3 id="${"why-not-both"}"><a href="${"#why-not-both"}">Why not both?</a></h3>
<p>In designing connorrothschild.com, I aimed to make a site that had just enough whimsy to be interesting without it being distracting. </p>

<p>Practically, that meant introducing creativity whenever possible while ensuring that visitors had a consistent experience across content-specific pages. For example, each of my project, blog, and award pages have a consistent \u2018blog-post\u2019 style layout:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/project-example.png",
          alt: "An example of my personal website's project page",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/blog-example.png",
          alt: "An example of my personal website's blog page",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/award-example.png",
          alt: "An example of my personal website's award page",
          width: "70%",
          centered: "true"
        },
        {},
        {}
      )}
<p>When a user visits any of these content-based pages, they see a title, subtitle, and the main content with a <code>max-width: 768px</code> applied. There is consistency <em>within</em> categories (awards, blog, projects), and <em>across</em> them.</p>
<p>Alternatively, I could have designed each of these sections with their own quirks, (e.g. full width images and grid based layouts introducing constituent parts of the content), as you see in sites like F\xE9lix P\xE9ault\u2019s:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/this-site/flayks-project.png",
          alt: "An example of Flayks personal website's project page"
        },
        {},
        {}
      )}
<p>I chose not to do that, for two reasons.</p>
<p>First, to build a consistent user experience across different types of content, so that users spent less time getting \u2018onboarded\u2019 to my site, and more time spent engaging with the content. For certain developers (e.g., self-described creative coders), the creativity within project pages is something to showcase\u2014for others, its not as important.</p>
<p>Second, because I\u2019m not as good at design as F\xE9lix. \u{1F606}</p>
<p>Skills aside, there is value in impressing your users on a homepage, and rewarding them with simpler content once they request it (e.g., by clicking a blog post). If you ever feel limited on time and are worried about not being able to include whimsy and creativity throughout your site, this could be a good approach.</p>
<h1 id="${"parts-of-the-site-i-hope-you-enjoy"}"><a href="${"#parts-of-the-site-i-hope-you-enjoy"}">Parts of the site I hope you enjoy</a></h1>
<p>Here are some parts of the website I hope you enjoy and maybe pull inspiration from.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `This part of the post gets somewhat technical.
`;
        }
      })}
<h2 id="${"gsap-splittext-transitions"}"><a href="${"#gsap-splittext-transitions"}"><code>GSAP SplitText</code> transitions</a></h2>
<p>The site\u2019s main text elements (e.g. section titles) are animated using a combination of <code>IntersectionObserver</code> and <code>GSAP</code>\u2019s <code>SplitText</code> plugin. This enables cool transitions like this one when an element scrolls into view:</p>
${validate_component(TransitionExample, "TransitionExample").$$render($$result, {}, {}, {})}
<h2 id="${"the-projects-section"}"><a href="${"#the-projects-section"}">The projects section</a></h2>
<p>The projects section on my site\u2019s homepage is one of its more creative elements. As you can see in the video below, it layers transparent videos with overlaying text elements, to give the appearance of the videos \u2018popping out\u2019 in an almost-3D fashion.</p>
<video controls muted preload="${"metadata"}" src="${"/images/post/this-site/projects.mp4"}" alt="${"A video showcasing my projects section. Each time you hover over a different project, a new mockup video of that project appears."}"></video>
<p>Here\u2019s how it\u2019s done. (Continue reading to nerd out, or <a href="${"#noise"}">skip to the next section</a>) The first step was to create mockup videos for each project, which I was able to do via <a href="${"https://www.rotato.app/"}" rel="${"nofollow"}">Rotato</a>. </p>
<p>Once the videos were created, I had to convert them to transparent videos, which was made harder by the fact that different browsers encode transparency with different formats. (Chrome uses <code>webm</code>, Safari uses <code>mov</code> with <code>HEVC</code>.) I downloaded videos from Rotato and used the application <a href="${"https://www.shutterencoder.com/en/"}" rel="${"nofollow"}">Shutter Encoder</a> to output videos compatible with all browsers.</p>
<p>Finally, after creating 8 transparent videos (4 <code>.mov</code> and 4 <code>.webm</code>), I was ready to include them in the projects section. The question then was <strong>how to render</strong> the videos. The obvious option was having 4 different <code>&lt;video&gt;</code> tags, each with two <code>&lt;source&gt;</code> elements, and toggle the transparency of each on hover. I found that this led to some lagginess on video <code>load()</code> and <code>play()</code>, so I needed to find a different solution.</p>
<p>Instead, I ended up preloading each of the four videos as <code>Blob()</code> objects and then dynamically updated the <code>video</code> source to match the active video. The <code>Blob()</code> method enabled caching of the videos on all browsers and devices (<a href="${"https://stackoverflow.com/questions/52220696/how-to-cache-mp4-video-for-the-html-video-tag/55982659#55982659"}" rel="${"nofollow"}">to my understanding, iOS refuses to cache large videos if they were passed in as a regular source</a>). </p>
<p>Technically, this meant I had to detect whether the user\u2019s browser supported HEVC alpha, and then pass in the video source dynamically to the <code>Blob</code> construction. This function detects if the user\u2019s browser supported HEVC alpha (adapted from <a href="${"https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/"}" rel="${"nofollow"}">this snippet</a>):</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">import Bowser from &quot;bowser&quot;;

function supportsHEVCAlpha() &#123;
  if (!browser) return false;
  const navigator = window.navigator;

  const thisBrowser = Bowser.getParser(window.navigator.userAgent).getBrowser();
  const os = Bowser.getParser(window.navigator.userAgent).getOS();

  const hasMediaCapabilities = !!(navigator.mediaCapabilities &amp;&amp; navigator.mediaCapabilities.decodingInfo)

  const isSafari = thisBrowser.name === &quot;Safari&quot;;
  const isMac = os.name === &quot;macOS&quot;;
  const isIOS = os.name === &quot;iOS&quot;;
  const version = &#123;major: os.version.split(&#39;.&#39;)[0], minor: os.version.split(&#39;.&#39;)[1]&#125;;
  const isPast1015 = version.major &gt; 10 || (version.major &gt;= 10 &amp;&amp; version.minor &gt;= 15);
  
  if (isMac &amp;&amp; isSafari &amp;&amp; isPast1015) return true;
  if (isSafari &amp;&amp; hasMediaCapabilities) return true;
  if (isIOS) return true;

  return false;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>I then used that function to determine whether to update the <code>video</code> source to be our <code>.webm</code> or <code>.mov</code> file.</p>
<p>Whew! Here\u2019s the code for <a href="${"https://github.com/connorrothschild/.com/blob/bff18c45d90540c865fab11c7e2da23d6856a62f/src/lib/Sections/Projects.svelte"}" rel="${"nofollow"}">preloading videos</a>, and <a href="${"https://github.com/connorrothschild/.com/blob/bff18c45d90540c865fab11c7e2da23d6856a62f/src/lib/VideoSection/HoverVideo.svelte"}" rel="${"nofollow"}">here\u2019s how we update <code>src</code> dynamically</a>.</p>
<h2 id="${"noise"}"><a href="${"#noise"}">Noise</a></h2>
<p>Having a background noise applied to the <code>body</code> of your personal website is kinda in right now. It\u2019s also very easy to carry out technically. (Zoom into my site\u2019s background to see the effect.)</p>
<p><a href="${"https://github.com/connorrothschild/.com/blob/master/src/lib/Noise.svelte"}" rel="${"nofollow"}">Here\u2019s a simple <code>&lt;Noise /&gt;</code> component</a> (which is really just entirely CSS) that we put in our <code>__layout.svelte</code> so that it is present on every page of the site. We (optionally) apply a <code>shake</code> animation so that it jitters a bit as well. </p>
<p>You can create your own noise texture on a site <a href="${"https://www.noisetexturegenerator.com/"}" rel="${"nofollow"}">like this one</a>, and use the <code>&lt;Noise /&gt;</code> component above to add a bit of flare to your site.</p>
<h2 id="${"preference-respecting-animations"}"><a href="${"#preference-respecting-animations"}">Preference-respecting animations</a></h2>
<p>I had a blast integrating a mixture of subtle and not-so-subtle animations into my site. For example, when you first visit the site, you\u2019re greeted with my name flying into view (<a href="${"https://github.com/connorrothschild/.com/blob/master/src/scripts/transitions/rotate.js"}" rel="${"nofollow"}">code</a>):</p>
<video controls muted preload="${"metadata"}" src="${"/images/post/this-site/hero.mp4"}" alt="${"A video showcasing my 'hero' section, where the words 'Connor Rothschild' fly into view."}"></video>
<p>When you scroll throughout the site, content more subtly fades into view (<a href="${"https://github.com/connorrothschild/.com/blob/master/src/lib/TransitionInView.svelte"}" rel="${"nofollow"}">code</a>):</p>
<video controls muted preload="${"metadata"}" src="${"/images/post/this-site/inview.mp4"}" alt="${"A video showcasing awards progressively showing as the user scrolls down."}"></video>
<p>Both of these animations (and all others on the site) respect the <a href="${"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}" rel="${"nofollow"}">user\u2019s <code>prefers-reduced-motion</code> setting</a>. Practically, this looks like applying animation functions and transitions <strong>only when the user has no motion preference</strong>. In CSS, that looks like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "css" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">@media (prefers-reduced-motion: no-preference) &#123;
  .transitioning-container &#123;
    transition: opacity 1000ms ease 200ms, transform 1000ms ease;
    opacity: 0;
    transform: translateX(-5%);
  &#125;
  .intersecting &#123;
    opacity: 1;
    transform: none;
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>And in Svelte/JavaScript, that means building an app-wide store that corresponds to the user\u2019s motion preference, and then applying whatever <code>transition()</code> function you\u2019ve defined <strong>only if that store is false</strong>.</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "javascript",
          filename: "store.js"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">import &#123; readable &#125; from &#39;svelte/store&#39;;
import &#123; browser &#125; from &#39;$app/env&#39;;

const reducedMotionQuery = &#39;(prefers-reduced-motion: reduce)&#39;;

const getInitialMotionPreference = () =&gt; &#123;
  if (!browser) return false;
  return window.matchMedia(reducedMotionQuery).matches;
&#125;;

export const prefersReducedMotion = readable(getInitialMotionPreference());</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "svelte",
          filename: "App.svelte"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script&gt;
import &#123; prefersReducedMotion &#125; from &quot;./store.js&quot;;

onMount(() =&gt; &#123;
  if ($prefersReducedMotion) return;
  transition(); /* Defined elsewhere */
&#125;);
&lt;/script&gt;</code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
<h2 id="${"what-are-your-thoughts"}"><a href="${"#what-are-your-thoughts"}">What are your thoughts?</a></h2>
<p>Do you like this site? (Hopefully!) Hate it? (Hopefully not!) <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">Reach out</a> and let me know what you think, or if anything is broken for you! </p>
<p>This site was built with <a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a>; although the framework is powerful, it hasn\u2019t yet reached 1.0, so there are definitely issues that should arise along the way. I made the intentional choice to use a growing framework, rather than an established one, so that I could be an early adopter of this framework I have a lot of confidence in.</p>
<p>Thanks for reading, and thanks for visiting this site! I hope you enjoyed it.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
