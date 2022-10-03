import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
import { I as Info } from "../../../../chunks/Info.js";
import { C as Code } from "../../../../chunks/Code.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
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
const metadata = {
  "layout": "blog",
  "title": "Announcing the Nuxt Blog Starter",
  "date": "2021-02-10",
  "description": "A minimal, content-focused blog site built with NuxtJS and Bulma",
  "image": "nuxt-blog-starter/header.png",
  "featured": false,
  "tags": ["vue", "nuxt", "package"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>I\u2019m happy to share a <a href="${"https://github.com/connorrothschild/nuxt-blog-starter"}" rel="${"nofollow"}">new starter template</a> for minimal, content-focused blogs using NuxtJS and Bulma for styling. The site is a more simplified version of <a href="${"https://connorrothschild.github.io/v3/"}" rel="${"nofollow"}">my own <em>former</em> personal site</a>. </p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>This post might be slightly out of date because it is in reference to <a href="${"https://connorrothschild.github.io/v3/"}" rel="${"nofollow"}">my former site</a>, not this one.</p>`;
        }
      })}
<h2 id="${"why-nuxt"}"><a href="${"#why-nuxt"}">Why Nuxt?</a></h2>
<p>I\u2019ve went through my fair share of blogs. See <a href="${"https://connorrothschild.github.io/v1/"}" rel="${"nofollow"}">version 1</a> and <a href="${"https://connorrothschild.github.io/v2/"}" rel="${"nofollow"}">version 2</a>. I moved to a site using Nuxt for three reasons:</p>
<h4 id="${"1-speed-and-user-experience"}"><a href="${"#1-speed-and-user-experience"}">1. Speed and user experience</a></h4>
<p>Nuxt is fast by default. It uses server-side rendering, rather than client-side rendering, which means that content is rendered before users visit your site. As explained on the <a href="${"https://nuxtjs.org/post/going-full-static/"}" rel="${"nofollow"}">Nuxt Blog</a>:</p>
<blockquote><p><code>nuxt generate</code> with <code>target: &#39;static&#39;</code> will pre-render all your pages to HTML and save a payload file in order to mock <code>asyncData</code> and <code>fetch</code> on client-side navigation, this means no more HTTP calls to your API on client-side navigation. By extracting the page payload to a js file, it also reduces the HTML size served as well as preloading it for optimal performance.</p></blockquote>
<p>You can see the impact of SSR on performance by comparing my <a href="${"https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fconnorrothschild.github.io%2Fv2%2F&tab=desktop"}" rel="${"nofollow"}">last blog iteration</a> to <a href="${"https://pagespeed.web.dev/report?url=https%3A%2F%2Fconnorrothschild.github.io%2Fv3eed/insights/?url=https%3A%2F%2Fhttps://connorrothschild.github.io/v3%2F&tab=desktop"}" rel="${"nofollow"}">this one</a>.</p>
<p>The former, built using <a href="${"https://bookdown.org/yihui/blogdown/"}" rel="${"nofollow"}">R <code>blogdown</code></a> and <a href="${"https://themes.gohugo.io/academic/"}" rel="${"nofollow"}">Hugo Academic</a>, scored 72/100 on desktop performance, compared to a 100/100 on this version:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/old-site-perf.png",
          alt: "Old site performance. 72/100",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/new-site-perf.png",
          alt: "New site performance. 100/100",
          width: "48%"
        },
        {},
        {}
      )}
<h4 id="${"2-flexibility-and-power"}"><a href="${"#2-flexibility-and-power"}">2. Flexibility and power</a></h4>
<p>Too often, making \u2018fast\u2019 websites comes at the cost of flexibility and power. For example, the first version of my website was based on a <a href="${"https://github.com/katmh/point-theme"}" rel="${"nofollow"}">Jekyll theme</a> that was pretty, functional, and fast, but limited in its flexibility. That is, I was locked into the default appearance of the site, unless I wanted to really get into the weeds editing CSS and writing my own HTML markup. (At that point, I might as well had started a new blog or find another theme!)</p>
<p>I built this template because it is as performant as my V1 site (both receive over 95/100 on <a href="${"https://developers.google.com/speed/pagespeed/insights/"}" rel="${"nofollow"}">PageSpeed Insights</a>), but with much more flexibility. In my experience, modifying the appearance of this site\u2014whether thats through its constituent components in the <code>components/</code> folder, or globally in the <code>assets/scss/colors.scss</code> file\u2014is seamless while also allowing greater power than modifying the defaults in other, simpler blog templates.</p>
<p>Moreover, this kind of flexibility scales up with your knowledge of Vue and Nuxt. If you are already familiar with the technologies, this template should be ready for total transformation through whatever modifications you find necessary. Otherwise, all you need to do is follow the simple instructions in the template\u2019s <a href="${"https://github.com/connorrothschild/nuxt-blog-starter"}" rel="${"nofollow"}">README</a>. To test this, I\u2019ve helped a non-technical friend build out his <a href="${"https://dyllonschmehl.netlify.app/"}" rel="${"nofollow"}">own website</a> from this theme, and seen firsthand how intuitive getting started can really be.</p>
<h4 id="${"3-learning-new-tech"}"><a href="${"#3-learning-new-tech"}">3. Learning new tech</a></h4>
<p>A final reason to make this jump is to get familiar with <a href="${"https://www.javascript.com/"}" rel="${"nofollow"}">JavaScript</a>, <a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a>, <a href="${"https://nuxtjs.org/"}" rel="${"nofollow"}">Nuxt</a>, and <a href="${"https://www.w3schools.com/css/"}" rel="${"nofollow"}">CSS</a>. Many of my readers come from a visualization-centric background, and are most proficient in R. (Awesome!) I learned Vue (and then Nuxt) from scratch, by building a <a href="${"https://connorrothschild.github.io/cudi-hums/"}" rel="${"nofollow"}">few</a> <a href="${"https://connorrothschild.github.io/how-many-people/"}" rel="${"nofollow"}">projects</a> and subsequently, my personal website!</p>
<p><strong>Learning new tech never hurts.</strong> You will almost never regret spending a few hours to have a basic handle of a new language or tool. Get started with this template, see how it feels, and see if you like it! (If not, ditch the site! I won\u2019t be offended.)</p>
<h2 id="${"why-this-template-specifically"}"><a href="${"#why-this-template-specifically"}">Why this template specifically?</a></h2>
<p>I didn\u2019t invent Nuxt, nor the portfolio site. There are a few other options for powerful, pretty starter templates using NuxtJS. In particular, I like <a href="${"https://github.com/marinaaisa/nuxt-markdown-blog-starter"}" rel="${"nofollow"}">Marina Aisa\u2019s</a> and <a href="${"https://templates.netlify.com/template/awake-blog-template-nuxt/"}" rel="${"nofollow"}">Daniel Kelly\u2019s</a>.</p>
<p>That being said, I think my site is pretty cool. In creating the template, I\u2019ve aimed for a mix of <strong>out-of-the-box features that \u201Cjust work\u201D</strong>, with the <strong>ability to customize as necessary.</strong> I want to allow new users, who have little to no experience with web development, to create a blog, and allow advanced users, who probably know this stuff better than me, to get started with a powerful and customizable template.</p>
<p>There are a few features I think make this starter template unique:</p>
<h3 id="${"easy-theming"}"><a href="${"#easy-theming"}">Easy theming</a></h3>
<p>The site relies on three colors: a primary (background), secondary (accent), and a primary-invert (text). These are all defined in Sass variables that live in <code>assets/scss/colors.scss</code>. To change the appearance of your site, simply modify the colors you\u2019d like to see as your background (<code>$primary</code>), your text (<code>$text</code>), and your accent (<code>$secondary</code>). Obviously, make sure your <code>$primary</code> and <code>$text</code> colors have sufficient contrast.</p>
<h4 id="${"dark-modelight-mode"}"><a href="${"#dark-modelight-mode"}">Dark mode/light mode</a></h4>
<p>An example of this can be seen below the Sass defaults that live within <code>assets/scss/colors.scss</code>. Simply uncomment those lines (preceded by the comment \u201CLIGHT MODE\u201D) to see your site with light mode defaults.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/dark.png",
          alt: "Dark mode",
          width: "49%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/light.png",
          alt: "Light mode",
          width: "49%"
        },
        {},
        {}
      )}
<h3 id="${"dope-transitions"}"><a href="${"#dope-transitions"}">Dope transitions</a></h3>
<p>Nuxt makes transitions easy. This template expands upon Nuxt\u2019s powerful page transitions by using <a href="${"https://greensock.com/gsap/"}" rel="${"nofollow"}">Greensock\u2019s GSAP</a>. In particular, I define elements that should fade in nicely for each page, like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "js" }, {}, {
        default: () => {
          return `<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'out-in'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token function">enter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        TweenMax<span class="token punctuation">.</span><span class="token function">fromTo</span><span class="token punctuation">(</span><span class="token string">".title"</span><span class="token punctuation">,</span> 
            <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">"10%"</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">"0%"</span> <span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        TweenMax<span class="token punctuation">.</span><span class="token function">fromTo</span><span class="token punctuation">(</span><span class="token string">".subtitle, .card, .img"</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">"10%"</span><span class="token punctuation">,</span> <span class="token literal-property property">autoAlpha</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span> <span class="token literal-property property">autoAlpha</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> Power3<span class="token punctuation">.</span>easeOut<span class="token punctuation">&#125;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>This creates some subtle yet attractive page transitions:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/transitions.gif",
          alt: "GIF showcasing transitions of home page, to blog post pagfe, to a single blog post."
        },
        {},
        {}
      )}
<p>You can modify these transitions by adding and removing elements in the CSS selector parameters for each page\u2019s <code>enter()</code> property.</p>
<h3 id="${"meta-tagsseo"}"><a href="${"#meta-tagsseo"}">Meta tags/SEO</a></h3>
<p>The function <code>getSiteMeta()</code>, found in the <code>utils/</code> folder, allows for different meta tags for each page and for each blog post. The function allows the Twitter Cards for my home page and for a blog post to look different, like this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/home-card.png",
          alt: "Twitter card of homepage",
          width: "47.2%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/nuxt-blog-starter/blog-card.png",
          alt: "Twitter card of blog post page",
          width: "50%"
        },
        {},
        {}
      )}
<p>The site is set up so that your cards will appear this way automatically! All you will have to do is edit <a href="${"https://github.com/connorrothschild/nuxt-blog-starter/blob/master/utils/getSiteMeta.js"}" rel="${"nofollow"}"><code>utils/getSiteMeta.js</code></a> with your specific information. Page-specific meta tags are also helpful for search engine optimization; your site might attract a larger number of visitors if it covers a wider variety of keywords.</p>
<h2 id="${"blog-features"}"><a href="${"#blog-features"}">Blog features</a></h2>
<p>This site comes with all the same blog capabilities as a normal site, such as syntax highlighting, images, HTML support, and Vue components. Read <a href="${"https://nuxtjs.org/post/creating-blog-with-nuxt-content/"}" rel="${"nofollow"}">this post</a> if you\u2019re curious about features.</p>
<p>You can also include a few custom components I\u2019ve made:</p>
<h3 id="${"info-boxes"}"><a href="${"#info-boxes"}">Info boxes</a></h3>
<p><strong><a href="${"https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InfoBox.vue"}" rel="${"nofollow"}"><code>InfoBox.vue</code></a></strong> is a component that allows you to put notes/warnings/messages in your blog posts. Feel free to edit the component to adjust its styling.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Info boxes look like this!</p>`;
        }
      })}
<h3 id="${"images"}"><a href="${"#images"}">Images</a></h3>
<p><strong><a href="${"https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InlineImage.vue"}" rel="${"nofollow"}"><code>InlineImage.vue</code></a></strong> optimizes and handles the messy parts of images.</p>
<p>In specific, it:</p>
<ul><li>Allows for fullscreen, gallery views via <a href="${"https://github.com/crowdbotics/v-img"}" rel="${"nofollow"}"><code>v-img</code></a>.</li>
<li>Optimizes images with <a href="${"https://github.com/juliomrqz/nuxt-optimized-images"}" rel="${"nofollow"}"><code>nuxt-optimized-images</code></a>.</li></ul>
<h3 id="${"videos"}"><a href="${"#videos"}">Videos</a></h3>
<p><strong><a href="${"https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/ResponsiveVideo.vue"}" rel="${"nofollow"}"><code>ResponsiveVideo.vue</code></a></strong> takes a YouTube url (or otherwise embeddable video link) and makes it responsive.</p>
<p>You can see all of these components in action in the <a href="${"https://nuxt-blog-starter.netlify.app/post/welcome"}" rel="${"nofollow"}">sample blog post</a>.</p>
<h2 id="${"get-started"}"><a href="${"#get-started"}">Get started</a></h2>
<p>Get started! <a href="${"https://github.com/connorrothschild/nuxt-blog-starter"}" rel="${"nofollow"}">Fork the repository here</a> and follow instructions in the README to get started. Please reach out with any questions, either through filing an issue or via <a href="${"mailto:connor@connorrothschild.com"}">email</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
