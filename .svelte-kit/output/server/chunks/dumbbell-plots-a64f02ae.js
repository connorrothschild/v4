import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
import { I as Image } from "./Image-8bdf2a2d.js";
/* empty css                                             */import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./CornerTitle-1139e2b5.js";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                              */const metadata = {
  "layout": "blog",
  "title": "Create Dumbbell Plots to Visualize Group Differences in R",
  "description": "How to create dumbbell plots in R, using {ggalt}",
  "date": "2020-03-02",
  "image": "dumbbell-plots/header.png",
  "archived": true,
  "tags": ["r", "tutorial"]
};
const Dumbbell_plots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between Republicans and Democrats' worry about the Coronavirus. It shows that Republicans are less worried than Democrats. The question text survey respondents answered is 'How concerned are you that you or someone you know will be infected with the Coronavirus?'",
      src: "../images/post/dumbbell-plots/featured.jpg"
    }, {}, {})}
<p>As of this writing, nearly <a href="${"https://www.worldometers.info/coronavirus/coronavirus-death-toll/"}" rel="${"nofollow"}">6000</a> people have died of COVID-19 and another <a href="${"https://www.worldometers.info/coronavirus/coronavirus-death-toll/"}" rel="${"nofollow"}">150,000</a> have been infected. All signs seem to show that the virus is only growing.</p>
<p>But some groups are less worried about COVID-19 than others. Recent <a href="${"https://poll.qu.edu/national/release-detail?ReleaseID=3657#.XmaSrM7okEs.twitter"}" rel="${"nofollow"}">polling</a> from Quinnipiac University suggests that worries about the coronavirus are related to one\u2019s partisan identity, age, and race.</p>
<p>Let\u2019s visualize that to see just how stark the differences are. I use dumbbell dot plots because they\u2019re some of the most powerful tools for visualizing differences between two groups (e.g. Republicans and Democrats).</p>
<h2 id="${"political-affiliation"}"><a href="${"#political-affiliation"}">Political affiliation</a></h2>
<p>Republicans tend to be significantly less worried about coronavirus than Democrats. This is true in two regards. First, with respect to <em>concern for becoming infected</em>:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between Republicans and Democrats' worry about the Coronavirus. It shows that Republicans are less worried than Democrats. The question text survey respondents answered is 'How concerned are you that you or someone you know will be infected with the Coronavirus?'",
      src: "../images/post/dumbbell-plots/partisan-worry.jpg"
    }, {}, {})}
<p>It\u2019s also true when we look at concern than COVID-19 will <em>disrupt an individual\u2019s life</em>:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between Republicans and Democrats' worry about the Coronavirus. It shows that Republicans are less worried than Democrats. The question text survey respondents answered is 'How concerned are you that the coronavirus will disrupt your daily life?'",
      src: "../images/post/dumbbell-plots/partisan-disrupt.jpg"
    }, {}, {})}
<p>Looking at the first plot, we notice that Republicans are <strong>3x more likely</strong> than Democrats to say that they are \u2019not concerned at all\u2019 by the prospect of coronavirus infecting them or someone they know. By contrast, Democrats are nearly <strong>3x as likely</strong> as Republicans to say that they are \u2018very concerned\u2019 by the same risk.</p>
<p>The second plot shows us similar trends for fears of disruption: 3 in 4 Democrats are concerned (very or somewhat) that COVID-19 will disrupt their daily lives, compared to only 38% of Republicans. While 26% of Democrats are not worried about disruption, the same is true for 61% of Republicans.</p>
<h2 id="${"age"}"><a href="${"#age"}">Age</a></h2>
<p>There is also a relationship between age and fears related to the coronavirus.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between different age groups' worry about the Coronavirus. It shows that older respondents are more concerned than younger ones. The question text survey respondents answered is 'How concerned are you that you or someone you know will be infected with the Coronavirus?'",
      src: "../images/post/dumbbell-plots/age-disrupt.jpg"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between different age groups' worry about the Coronavirus. It shows that older respondents are more concerned than younger ones. The question text survey respondents answered is 'How concerned are you that you or someone you know will be infected with the Coronavirus?'",
      src: "../images/post/dumbbell-plots/age-worry.jpg"
    }, {}, {})}
<p>These plots show that there are significant differences in worry by age, but that fears of disruption are felt more universally than fears of infection. The first plot shows that <em>every age group</em> fears that COVID-19 will disrupt their daily lives; although younger people express this sentiment less frequently. The second plot <strong>the majority of people under age 50 are unconcerned by the prospect of COVID-19 infection</strong>. The opposite is true for older respondents; those aged 65 years and old are <strong>significantly</strong> more likely to be concerned by the risk of infection (62% vs 37%).</p>
<h2 id="${"why-dumbbell-plots"}"><a href="${"#why-dumbbell-plots"}">Why dumbbell plots?</a></h2>
<p>Dumbbell plots are an alternative to grouped barcharts. Like barcharts, they show differences between populations and they more powerfully represent the <em>distances between two groups</em>. They are frequently used by survey research firms such as the Pew Research Center, as seen in this <a href="${"https://twitter.com/pewresearch/status/1238345807348334593/photo/1"}" rel="${"nofollow"}">example</a>:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot from the Pew Research Center, showcasing perceived importance of US military bases by the age of the respondent; older folks think overseas bases are more important.",
      src: "../images/post/dumbbell-plots/pew.jpg"
    }, {}, {})}
<p>While a barchart would require eight bars to visualize each datapoint above, a dumbbell dot plot shows eight dots <em>on four lines</em>, reducing clutter and emphasizing the differences <em>between groups</em>.</p>
<p>Here\u2019s another example, this time from <a href="${"https://www.axios.com/trumps-disapproval-rate-is-up-in-every-state-2495232720.html?utm_source=twitter&utm_medium=social&utm_campaign=organic&utm_content=infographic&utm_term=politics"}" rel="${"nofollow"}">Axios</a> (visualizing changes in presidential disapproval between January and October 2017):</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot from Axios, which showcases changes in approval ratings between January and October 2017, by state. Most states have become more disapproving of the President.",
      src: "../images/post/dumbbell-plots/axios.jpg"
    }, {}, {})}
<p>This pseudo-dumbbell plot (dumbbells with weird endpoints; don\u2019t pick up that side!) has 50 \u2018groups\u2019 (US states), but only two <em>outcomes</em> (January and October). A dumbbell plot is <em>far</em> superior to a grouped bar chart in this case because it emphasizes the difference is between two periods of time, and it does so with fewer objects (50 lines rather than 100 bars) than a barchart would use.</p>
<p>One key lesson from the examples above: If the <em>comparison</em> of interest is between two groups (e.g. Republicans and Democrats), or if the <em>outcome</em> of interest is two-fold (e.g. \u2018concerned\u2019 and \u2018not concerned\u2019), dot plots are a superior way to visualize your data.</p>
<h2 id="${"lets-make-it-in-r"}"><a href="${"#lets-make-it-in-r"}">Let\u2019s make it in R!</a></h2>
<p>Now it\u2019s time to make your own dumbbell dot plot. We\u2019ll be creating this viz:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between Republicans and Democrats' worry about the Coronavirus. It shows that Republicans are less worried than Democrats. The question text survey respondents answered is 'How concerned are you that you or someone you know will be infected with the Coronavirus?'",
      src: "../images/post/dumbbell-plots/partisan-worry.jpg"
    }, {}, {})}
<p>For reference, the data I\u2019m using looks like this:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell plot depicting in-group differences between Republicans and Democrats' worry about the Coronavirus. It shows that Republicans are less worried than Democrats. The question text survey respondents answered is 'How concerned are you that the coronavirus will disrupt your daily life?'",
      src: "../images/post/dumbbell-plots/partisan-disrupt.jpg"
    }, {}, {})}
<p>Pretty simple, right? <a href="${"https://poll.qu.edu/national/release-detail?ReleaseID=3657#.XmaSrM7okEs.twitter"}" rel="${"nofollow"}">It comes from here, by the way.</a></p>
<p>The process relies on Bob Rudis\u2019s <code>ggalt</code> package and the <code>geom_dumbbell</code> function, which does most of the heavy lifting. This tutorial is mostly a step-by-step recreation of Rudis\u2019s code <a href="${"https://rud.is/b/2016/04/17/ggplot2-exercising-with-ggalt-dumbbells/"}" rel="${"nofollow"}">found here</a>.</p>
<p>For convenience, let\u2019s define a few things before we get started:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">blue <span class="token operator">&lt;-</span> <span class="token string">"#0171CE"</span>
red <span class="token operator">&lt;-</span> <span class="token string">"#DE4433"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In addition to the colors, we create a hack-y function which allows us to selectively label points (thanks to Bob Rudis for <a href="${"https://rud.is/b/2016/04/17/ggplot2-exercising-with-ggalt-dumbbells/"}" rel="${"nofollow"}">this</a>, again):</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">percent_first <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  x <span class="token operator">&lt;-</span> sprintf<span class="token punctuation">(</span><span class="token string">"%d%%"</span><span class="token punctuation">,</span> round<span class="token punctuation">(</span>x<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  x<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">:</span>length<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> sub<span class="token punctuation">(</span><span class="token string">"%$"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">:</span>length<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  x
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"step-1-barebones"}"><a href="${"#step-1-barebones"}">Step 1: Barebones</a></h3>
<p>We begin with a basic <code>ggplot</code> object. In <code>geom_segment</code>, we define the pseudo-grid lines (one for each \u2018level\u2019 of concern).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggalt<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_segment<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> yend<span class="token operator">=</span>concerned<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> xend<span class="token operator">=</span><span class="token number">.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               color<span class="token operator">=</span><span class="token string">"#b2b2b2"</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">0.15</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here, <code>geom_segment</code> creates grey lines with a size of 0.15. The lines span from 0 to 0.5. This changes according to your data; because the largest number we are dealing with is .43 (representing 43% of Democrats), our bound on the right side can be 0.5; this also leaves room for the difference column which we create later.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A blank canvas with only plot bounds.",
      src: "../images/post/dumbbell-plots/process-0.jpg"
    }, {}, {})}
<p>Then, <code>geom_dumbbell</code> reads in our data and creates the dumbbells: we specify the <em>beginning</em> (<code>x</code>) of each dumbbell to represent Republicans and the <em>end</em> (<code>xend</code>) to correspond to Democrats. Other specifications affect the accompanying line and points.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_dumbbell<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> x<span class="token operator">=</span>rep<span class="token punctuation">,</span> xend<span class="token operator">=</span>dem<span class="token punctuation">)</span><span class="token punctuation">,</span>
                           size<span class="token operator">=</span><span class="token number">1.5</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">"#b2b2b2"</span><span class="token punctuation">,</span> size_x<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> size_xend <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
                           colour_x <span class="token operator">=</span> red<span class="token punctuation">,</span> colour_xend <span class="token operator">=</span> blue<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That code creates the following plot:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "Four lines appear, each corresponding to the level of concern. The end of each line (signified with a blue or red dot) represents Democrats' and Republicans' level of concern. The x axis is percentage of respondents.",
      src: "../images/post/dumbbell-plots/process-1.jpg"
    }, {}, {})}
<p>Already, we can begin to see the barebones for the finished version: each dumbbell represents a level of concern, and visualizes Republicans and Democrats\u2019 proportions for that level.</p>
<h3 id="${"step-2-labels"}"><a href="${"#step-2-labels"}">Step 2: Labels</a></h3>
<p>The next step is creating the \u201CRepublican\u201D and \u201CDemocrat\u201D labels (in case colors aren\u2019t enough, or the image is seen in black and white!).</p>
<p>We can create labels with the following code:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>filter<span class="token punctuation">(</span>infected<span class="token punctuation">,</span> concerned<span class="token operator">==</span><span class="token string">"Very concerned"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          aes<span class="token punctuation">(</span>x<span class="token operator">=</span>dem<span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">"Democrats"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          color<span class="token operator">=</span>blue<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> fontface<span class="token operator">=</span><span class="token string">"bold"</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>filter<span class="token punctuation">(</span>infected<span class="token punctuation">,</span> concerned<span class="token operator">==</span><span class="token string">"Very concerned"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          aes<span class="token punctuation">(</span>x<span class="token operator">=</span>rep<span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">"Republicans"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          color<span class="token operator">=</span>red<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> fontface<span class="token operator">=</span><span class="token string">"bold"</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This code is hopefully quite intuitive. Since we are only showing the labels once, we specify a filter in the <code>data</code> argument of <code>geom_text</code>. If we instead wanted to show the labels for only the bottom level of concern, we would specify <code>data=filter(infected, concerned==&quot;Not concerned at all\u201D)</code>.</p>
<p>We label each point at its respective political affiliation, and we specify color according to the point color. The rest is just minor beautification for the text.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "In addition to the prior plot, there are now labels appended for each party.",
      src: "../images/post/dumbbell-plots/process-2.jpg"
    }, {}, {})}
<p>We also have to add direct labels for values, so that the exact percentages for each group are clear:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>rep<span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> label<span class="token operator">=</span>percent_first<span class="token punctuation">(</span>rep<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          color<span class="token operator">=</span>red<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">2.75</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> color<span class="token operator">=</span>blue<span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">2.75</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">,</span>
          aes<span class="token punctuation">(</span>x<span class="token operator">=</span>dem<span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> label<span class="token operator">=</span>percent_first<span class="token punctuation">(</span>dem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here, we utilize the function <code>percent_first</code> we defined earlier, because we only want percentages to appear on the first numbers (to reduce clutter). The rest of the labels are just numbers which represent percentages. The syntax here is simple syntax that should be familiar to <code>ggplot</code> users. It creates this output:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "In addition to the prior plot, there are now direct labels for the percent of respondents represented by each point.",
      src: "../images/post/dumbbell-plots/process-3.jpg"
    }, {}, {})}
<h3 id="${"step-3-a-differences-column"}"><a href="${"#step-3-a-differences-column"}">Step 3: A differences column</a></h3>
<p>Finally, we want to help our viewers see <em>how stark</em> the differences between Democrats and Republicans really is. We do so with a differences column.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_rect<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">.5</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">.6</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token operator">-</span><span class="token number">Inf</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">Inf</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">"grey"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>infected<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>label<span class="token operator">=</span>paste0<span class="token punctuation">(</span>diff<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">"%"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">.55</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fontface<span class="token operator">=</span><span class="token string">"bold"</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
geom_text<span class="token punctuation">(</span>data<span class="token operator">=</span>filter<span class="token punctuation">(</span>infected<span class="token punctuation">,</span> concerned<span class="token operator">==</span><span class="token string">"Very concerned"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            aes<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">.55</span><span class="token punctuation">,</span> y<span class="token operator">=</span>concerned<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">"Difference"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color<span class="token operator">=</span><span class="token string">"black"</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">3.1</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> fontface<span class="token operator">=</span><span class="token string">"bold"</span><span class="token punctuation">,</span> family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
scale_x_continuous<span class="token punctuation">(</span>expand<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limits<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.625</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
scale_y_discrete<span class="token punctuation">(</span>expand<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here, we first create a grey rectangle with <code>geom_rect</code>. It spans the entire chart vertically, hence why <code>ymin</code> and <code>ymax</code> range from negative to positive infinity. Next, we create labels according to the differences column. We position each of them according to the degree of concern (our y-axis). Finally, we expand the bounds of the chart so its a bit prettier:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "In addition to the prior plot, there is now a 'differences' column which has the difference between Republican and Democrat proportions added as a percent.",
      src: "../images/post/dumbbell-plots/process-4.jpg"
    }, {}, {})}
<h3 id="${"step-4-titles-labels--captions"}"><a href="${"#step-4-titles-labels--captions"}">Step 4: Titles, labels &amp; captions</a></h3>
<p>Finally, let\u2019s add our title, subtitle, caption, and axis labels:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token keyword">NULL</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token keyword">NULL</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Republicans are less worried about COVID-19"</span><span class="token punctuation">,</span>
       subtitle<span class="token operator">=</span>"How concerned are you that you or someone
								 you know will be infected with the coronavirus?"<span class="token punctuation">,</span>
       caption<span class="token operator">=</span>"Source<span class="token operator">:</span> Quinnipiac University Poll<span class="token punctuation">,</span> March <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2020.</span> Q27
								&#92;n&#92;nDesign<span class="token operator">:</span> Connor Rothschild"<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "In addition to the prior plot, there are now axis labels and a title.",
      src: "../images/post/dumbbell-plots/process-5.jpg"
    }, {}, {})}
<p>That\u2019s our plot! Too bad its kinda ugly. Let\u2019s fix that in our final step.</p>
<h3 id="${"step-5-beautification"}"><a href="${"#step-5-beautification"}">Step 5: Beautification</a></h3>
<p>Beautification occurs using the <code>theme</code> argument.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">theme_bw<span class="token punctuation">(</span>base_family<span class="token operator">=</span><span class="token string">"Lato"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
theme<span class="token punctuation">(</span>
  panel.grid.major<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  panel.grid.minor<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  panel.border<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  axis.ticks<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  axis.text.x<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  plot.title<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">,</span> face<span class="token operator">=</span><span class="token string">"bold"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  plot.title.position <span class="token operator">=</span> <span class="token string">"plot"</span><span class="token punctuation">,</span>
  plot.subtitle<span class="token operator">=</span>element_text<span class="token punctuation">(</span>face<span class="token operator">=</span><span class="token string">"italic"</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">,</span> margin<span class="token operator">=</span>margin<span class="token punctuation">(</span>b<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  plot.caption<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span> margin<span class="token operator">=</span>margin<span class="token punctuation">(</span>t<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">"#7a7d7e"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>After specifying our base <code>ggplot</code> theme, <code>theme_bw</code>, we use <code>theme()</code> to specify a whole host of arguments.</p>
<p>To simplify, the above code:</p>
<ul><li>Removes grid lines (<code>panel.grid.major</code>, <code>panel.grid.minor</code>)</li>
<li>Removes the panel border (<code>panel.border</code>)</li>
<li>Removes axis ticks and axis text (<code>axis.ticks</code>, <code>axis.text.x</code>)</li>
<li>Positions the axis plot, subtitle, and caption, and styles them as well (<code>plot.title</code>, <code>plot.title.position</code>,<code>plot.subtitle</code>,<code>plot.caption</code>).</li></ul>
<p>Our final output:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "Stylization is added to the chart. There is now a white background, Lato font, and better typography rules are followed.",
      src: "../images/post/dumbbell-plots/process-6.jpg"
    }, {}, {})}
<h2 id="${"to-summarize"}"><a href="${"#to-summarize"}">To summarize</a></h2>
<p>Our process looked like this:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A GIF showcasing the prior six steps outlined in this blog post; the GIF shows the chart going from a blank canvas to a full visual.",
      src: "../images/post/dumbbell-plots/process-gif.gif"
    }, {}, {})}
<p>The code for the above visualizations, as well as the underlying datasets and outputs, can be found <a href="${"https://github.com/connorrothschild/R/tree/master/covid"}" rel="${"nofollow"}">here</a>.</p>
<p>Thanks for reading!</p>`
  })}`;
});
export { Dumbbell_plots as default, metadata };
