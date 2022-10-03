import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { I as Image } from "../../../../chunks/Image.js";
/* empty css                                                     */import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      */const metadata = {
  "layout": "blog",
  "title": "How to Combine Animated Plots in R",
  "description": "Leveraging the power of <code>gganimate</code> and <code>magick</code> to combine animated plots for your viewers.",
  "date": "2019-10-09",
  "image": "tidy-tuesday-powerlifting/header.png",
  "archived": true,
  "tags": ["r", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>In this tutorial, I\u2019m going to outline the steps necessary to create an animated, faceted plot in R. Although rare, combining animated plots can be a powerful way to showcase different elements of the same data (as you\u2019ll see below).</p>
<p>In this example, I\u2019m using weightlifting data from the International Powerlifting Federation. For the purposes of this tutorial, we\u2019ll look at <em>differences in top lifts by sex</em>. A faceted, animated plot is a great option because we\u2019d like to observe <strong>the magnitude of these differences</strong> and <strong>how these differences have evolved over time</strong>.</p>
<p>We\u2019ll be creating this GIF:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/tidy-tuesday-powerlifting/unnamed-chunk-11-1.gif",
          alt: "A combination of the two aforementioned plots. The top plot is the animated dumbbell plot, and the bottom is a line chart. In combination, they allow the user to see the magnitude of differences between men and women, as well as how these differences have evolved over time."
        },
        {},
        {}
      )}
<h2 id="${"environment-setup"}"><a href="${"#environment-setup"}">Environment setup</a></h2>
<p>These are the packages we\u2019ll need to get started. In my case, I use a <a href="${"https://github.com/connorrothschild/cr"}" rel="${"nofollow"}">custom theme</a> I\u2019ve developed for stylistic purposes. Feel free to instead run <code>theme_set(theme_minimal())</code> rather than use my theme!</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggtext<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>gifski<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>gganimate<span class="token punctuation">)</span>

theme_set<span class="token punctuation">(</span>theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"load-and-clean-data"}"><a href="${"#load-and-clean-data"}">Load and clean data</a></h2>
<p>I\u2019ve already done a lot of the data cleaning for you. If you\u2019d like to follow along, here\u2019s the process (or, skip ahead!).</p>
<p>Here, we\u2019ll do some minor cleaning and then reshape the three lifts into one column:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ipf_lifts <span class="token operator">&lt;-</span> readr<span class="token operator">::</span>read_csv<span class="token punctuation">(</span><span class="token string">"data/ipf_lifts.csv"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>year <span class="token operator">=</span> lubridate<span class="token operator">::</span>year<span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span>

ipf_lifts_reshape <span class="token operator">&lt;-</span> ipf_lifts <span class="token percent-operator operator">%>%</span>
  tidyr<span class="token operator">::</span>pivot_longer<span class="token punctuation">(</span>cols <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"best3squat_kg"</span><span class="token punctuation">,</span> <span class="token string">"best3bench_kg"</span><span class="token punctuation">,</span> <span class="token string">"best3deadlift_kg"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> names_to <span class="token operator">=</span> <span class="token string">"lift"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  select<span class="token punctuation">(</span>name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> year<span class="token punctuation">,</span> lift<span class="token punctuation">,</span> value<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>For my visualization, I\u2019m only concerned with the <em>heaviest</em> lifts from
each year:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ipf_lifts_maxes <span class="token operator">&lt;-</span> ipf_lifts_reshape <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> lift<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  top_n<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ungroup <span class="token percent-operator operator">%>%</span>
  distinct<span class="token punctuation">(</span>year<span class="token punctuation">,</span> lift<span class="token punctuation">,</span> value<span class="token punctuation">,</span> .keep_all <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The first visualization we\u2019ll create for the final output is a <strong>dumbbell plot</strong>. Curious what that is, or how to make it in R? <a href="${"https://www.connorrothschild.com/post/dumbbell-plots/"}" rel="${"nofollow"}">Check out my other post on the topic</a>.</p>
<p>In order to construct a dumbbell plot, we need both male and female
observations in the same row. For this, we use the <code>spread</code> function.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">max_pivot <span class="token operator">&lt;-</span> ipf_lifts_maxes <span class="token percent-operator operator">%>%</span>
  spread<span class="token punctuation">(</span>sex<span class="token punctuation">,</span> value<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now, let\u2019s construct a dataframe for each sex:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">male_lifts <span class="token operator">&lt;-</span> max_pivot <span class="token percent-operator operator">%>%</span>
  select<span class="token punctuation">(</span><span class="token operator">-</span>name<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span><span class="token operator">!</span>is.na<span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">,</span> lift<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>male <span class="token operator">=</span> mean<span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">)</span>

female_lifts <span class="token operator">&lt;-</span> max_pivot <span class="token percent-operator operator">%>%</span>
  select<span class="token punctuation">(</span><span class="token operator">-</span>name<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span><span class="token operator">!</span>is.na<span class="token punctuation">(</span>F<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">,</span> lift<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>female <span class="token operator">=</span> mean<span class="token punctuation">(</span>F<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And join them:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">max_lifts <span class="token operator">&lt;-</span> merge<span class="token punctuation">(</span>male_lifts<span class="token punctuation">,</span> female_lifts<span class="token punctuation">)</span>

max_lifts_final <span class="token operator">&lt;-</span> max_lifts <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">,</span> lift<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>diff <span class="token operator">=</span> male <span class="token operator">-</span> female<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Not following along, or want to check your progress? Here\u2019s what our data looks like in its final form:</p>
<div class="${"table-container"}"><table><thead><tr><th align="${"left"}">year</th>
<th align="${"left"}">lift</th>
<th align="${"left"}">male</th>
<th align="${"left"}">female</th>
<th align="${"left"}">diff</th></tr></thead>
<tbody><tr><td align="${"left"}">1980</td>
<td align="${"left"}">best3bench_kg</td>
<td align="${"left"}">262.5</td>
<td align="${"left"}">120</td>
<td align="${"left"}">142.5</td></tr>
<tr><td align="${"left"}">1980</td>
<td align="${"left"}">best3deadlift_kg</td>
<td align="${"left"}">395</td>
<td align="${"left"}">205</td>
<td align="${"left"}">190</td></tr>
<tr><td align="${"left"}">1980</td>
<td align="${"left"}">best3squat_kg</td>
<td align="${"left"}">417.5</td>
<td align="${"left"}">230</td>
<td align="${"left"}">187.5</td></tr>
<tr><td align="${"left"}">1981</td>
<td align="${"left"}">best3bench_kg</td>
<td align="${"left"}">245</td>
<td align="${"left"}">150</td>
<td align="${"left"}">95</td></tr>
<tr><td align="${"left"}">1981</td>
<td align="${"left"}">best3deadlift_kg</td>
<td align="${"left"}">367.5</td>
<td align="${"left"}">230</td>
<td align="${"left"}">137.5</td></tr>
<tr><td align="${"left"}">1981</td>
<td align="${"left"}">best3squat_kg</td>
<td align="${"left"}">427.5</td>
<td align="${"left"}">215</td>
<td align="${"left"}">212.5</td></tr></tbody></table></div>
<h2 id="${"visualize"}"><a href="${"#visualize"}">Visualize!</a></h2>
<p>Finally, we can construct the visualization.</p>
<p>First, we can create a static visualization using <code>ggalt</code> (again, my <a href="${"https://www.connorrothschild.com/post/dumbbell-plots/"}" rel="${"nofollow"}">blog post</a> covers the details of this step).</p>
<p>You can fast forward the creation of individual plots if you\u2019re only interested in the <strong>combination</strong> of the two. You\u2019ll find that at the end of this post!</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">max_lifts_final <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span>year <span class="token operator">==</span> <span class="token number">2019</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  ggalt<span class="token operator">::</span>geom_dumbbell<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>y <span class="token operator">=</span> lift<span class="token punctuation">,</span>
                    x <span class="token operator">=</span> female<span class="token punctuation">,</span> xend <span class="token operator">=</span> male<span class="token punctuation">)</span><span class="token punctuation">,</span>
                colour <span class="token operator">=</span> <span class="token string">"grey"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
                colour_x <span class="token operator">=</span> <span class="token string">"#D6604C"</span><span class="token punctuation">,</span> colour_xend <span class="token operator">=</span> <span class="token string">"#395B74"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> <span class="token string">"Top Lift Recorded (kg)"</span><span class="token punctuation">,</span>
       title <span class="token operator">=</span>  <span class="token string">"How &lt;span style='color:#D6604C'>Women&lt;/span> and &lt;span style='color:#395B74'>Men&lt;/span> Differ in Top Lifts"</span><span class="token punctuation">,</span>
                       subtitle <span class="token operator">=</span> <span class="token string">"In 2019"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>plot.title <span class="token operator">=</span> element_markdown<span class="token punctuation">(</span>lineheight <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        plot.subtitle <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_discrete<span class="token punctuation">(</span>labels <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"Bench"</span><span class="token punctuation">,</span> <span class="token string">"Deadlift"</span><span class="token punctuation">,</span> <span class="token string">"Squat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> female<span class="token punctuation">,</span> y <span class="token operator">=</span> lift<span class="token punctuation">,</span> label <span class="token operator">=</span> paste<span class="token punctuation">(</span>female<span class="token punctuation">,</span> <span class="token string">"kg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color <span class="token operator">=</span> <span class="token string">"#D6604C"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> vjust <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> male<span class="token punctuation">,</span> y <span class="token operator">=</span> lift<span class="token punctuation">,</span> label <span class="token operator">=</span> paste<span class="token punctuation">(</span>male<span class="token punctuation">,</span> <span class="token string">"kg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color <span class="token operator">=</span> <span class="token string">"#395B74"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> vjust <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">430</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">470</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token operator">-</span><span class="token number">Inf</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">Inf</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">"grey80"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>label<span class="token operator">=</span>diff<span class="token punctuation">,</span> y<span class="token operator">=</span>lift<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">450</span><span class="token punctuation">)</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">450</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">"Difference"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color<span class="token operator">=</span><span class="token string">"grey20"</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> vjust<span class="token operator">=</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/tidy-tuesday-powerlifting/unnamed-chunk-8-1.png",
          alt: "A static dumbbell plot which represents male and female \u2018top lifts' in 2019."
        },
        {},
        {}
      )}
<p>Finally, we animate, using Thomas Pedersen\u2019s wonderful <a href="${"https://github.com/thomasp85/gganimate"}" rel="${"nofollow"}">gganimate
package</a>. This is a relatively easy step, because <code>gganimate</code> only requires two extra lines of code: <code>transition_states</code> and <code>ease_aes</code>. Then, we pass it into the <code>animate</code> function!</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">animation <span class="token operator">&lt;-</span> max_lifts_final <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  ggalt<span class="token operator">::</span>geom_dumbbell<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>y <span class="token operator">=</span> lift<span class="token punctuation">,</span>
                    x <span class="token operator">=</span> female<span class="token punctuation">,</span> xend <span class="token operator">=</span> male<span class="token punctuation">)</span><span class="token punctuation">,</span>
                colour <span class="token operator">=</span> <span class="token string">"grey"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
                colour_x <span class="token operator">=</span> <span class="token string">"#D6604C"</span><span class="token punctuation">,</span> colour_xend <span class="token operator">=</span> <span class="token string">"#395B74"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> <span class="token string">"Top Lift Recorded (kg)"</span><span class="token punctuation">,</span>
       title <span class="token operator">=</span>  <span class="token string">"How &lt;span style='color:#D6604C'>Women&lt;/span> and &lt;span style='color:#395B74'>Men&lt;/span> Differ in Top Lifts"</span><span class="token punctuation">,</span>
  subtitle<span class="token operator">=</span><span class="token string">'&#92;nThis plot depicts the difference between the heaviest lifts for each sex at International Powerlifting Federation&#92;nevents over time. &#92;n &#92;n&#123;closest_state&#125;'</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>plot.title <span class="token operator">=</span> element_markdown<span class="token punctuation">(</span>lineheight <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span> margin<span class="token operator">=</span>margin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        plot.subtitle <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span> margin<span class="token operator">=</span>margin<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_discrete<span class="token punctuation">(</span>labels <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"Bench"</span><span class="token punctuation">,</span> <span class="token string">"Deadlift"</span><span class="token punctuation">,</span> <span class="token string">"Squat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> female<span class="token punctuation">,</span> y <span class="token operator">=</span> lift<span class="token punctuation">,</span> label <span class="token operator">=</span> paste<span class="token punctuation">(</span>female<span class="token punctuation">,</span> <span class="token string">"kg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color <span class="token operator">=</span> <span class="token string">"#D6604C"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> vjust <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> male<span class="token punctuation">,</span> y <span class="token operator">=</span> lift<span class="token punctuation">,</span> label <span class="token operator">=</span> paste<span class="token punctuation">(</span>male<span class="token punctuation">,</span> <span class="token string">"kg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color <span class="token operator">=</span> <span class="token string">"#395B74"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> vjust <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  transition_states<span class="token punctuation">(</span>year<span class="token punctuation">,</span> transition_length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> state_length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  ease_aes<span class="token punctuation">(</span><span class="token string">'cubic-in-out'</span><span class="token punctuation">)</span>

a_gif <span class="token operator">&lt;-</span> animate<span class="token punctuation">(</span>animation<span class="token punctuation">,</span>
                 fps <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
                 duration <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span>
                 width <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">,</span>
                 renderer <span class="token operator">=</span> gifski_renderer<span class="token punctuation">(</span><span class="token string">"outputs/animation.gif"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

a_gif</code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/tidy-tuesday-powerlifting/unnamed-chunk-9-1.gif",
          alt: "An animated dumbbell plot which represents male and female \u2018top lifts' over time. Each tick of the animation represents a new year."
        },
        {},
        {}
      )}
<p>But in our case, we\u2019d like to include another GIF: a line chart of differences over time.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">animation2 <span class="token operator">&lt;-</span> max_lifts_final <span class="token percent-operator operator">%>%</span>
  ungroup <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>lift <span class="token operator">=</span> case_when<span class="token punctuation">(</span>lift <span class="token operator">==</span> <span class="token string">"best3bench_kg"</span> <span class="token operator">~</span> <span class="token string">"Bench"</span><span class="token punctuation">,</span>
                          lift <span class="token operator">==</span> <span class="token string">"best3squat_kg"</span> <span class="token operator">~</span> <span class="token string">"Squat"</span><span class="token punctuation">,</span>
                          lift <span class="token operator">==</span> <span class="token string">"best3deadlift_kg"</span> <span class="token operator">~</span> <span class="token string">"Deadlift"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>year<span class="token punctuation">,</span> diff<span class="token punctuation">,</span> group <span class="token operator">=</span> lift<span class="token punctuation">,</span> color <span class="token operator">=</span> lift<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span>show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>xend <span class="token operator">=</span> <span class="token number">2019.1</span><span class="token punctuation">,</span> yend <span class="token operator">=</span> diff<span class="token punctuation">)</span><span class="token punctuation">,</span> linetype <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> colour <span class="token operator">=</span> <span class="token string">'grey'</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_point<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">2019.1</span><span class="token punctuation">,</span> label <span class="token operator">=</span> lift<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hjust <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  transition_reveal<span class="token punctuation">(</span>year<span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_cartesian<span class="token punctuation">(</span>clip <span class="token operator">=</span> <span class="token string">'off'</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>plot.title <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">'Difference over time'</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> <span class="token string">'Difference (kg)'</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>plot.margin <span class="token operator">=</span> margin<span class="token punctuation">(</span><span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

b_gif <span class="token operator">&lt;-</span> animate<span class="token punctuation">(</span>animation2<span class="token punctuation">,</span>
                 fps <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
                 duration <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span>
        width <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span>
        renderer <span class="token operator">=</span> gifski_renderer<span class="token punctuation">(</span><span class="token string">"outputs/animation2.gif"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

b_gif</code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/tidy-tuesday-powerlifting/unnamed-chunk-10-1.gif",
          alt: "An animated line chart that shows, year by year, the difference in male and female top lifts on the Y axis. Each tick of the chart shows a new year."
        },
        {},
        {}
      )}
<p>Finally, we\u2019ll combine them using <code>magick</code> (thanks to <a href="${"https://github.com/thomasp85/gganimate/wiki/Animation-Composition"}" rel="${"nofollow"}">this
post</a>):</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>magick<span class="token punctuation">)</span>
a_mgif <span class="token operator">&lt;-</span> image_read<span class="token punctuation">(</span>a_gif<span class="token punctuation">)</span>
b_mgif <span class="token operator">&lt;-</span> image_read<span class="token punctuation">(</span>b_gif<span class="token punctuation">)</span>

new_gif <span class="token operator">&lt;-</span> image_append<span class="token punctuation">(</span>c<span class="token punctuation">(</span>a_mgif<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b_mgif<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stack <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  combined <span class="token operator">&lt;-</span> image_append<span class="token punctuation">(</span>c<span class="token punctuation">(</span>a_mgif<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> b_mgif<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stack <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
  new_gif <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>new_gif<span class="token punctuation">,</span> combined<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>What\u2019s happening here? Essentially, we\u2019re using the power of <code>magick</code> to:</p>
<ol><li>Read in all of the <em>individual images</em> (<code>image_read</code>) from each GIF (after all, a GIF is just a series of images!).</li>
<li>For the first frame, stack the two images on top of each other (<code>image_append</code>), so plot 1 is above plot 2.</li>
<li>For the rest of the frames (in my case, the next 249, because my GIF had 250 frames), replicate this and combine it with the first frame (this is the <code>for</code> loop).</li></ol>
<p>Here, we specify <code>stack = TRUE</code> so that one plot is <strong>above</strong> the other. If you\u2019d like to place them side-by-side, specify <code>stack = FALSE</code>.</p>
<p>In combination, the process results in our final output:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/tidy-tuesday-powerlifting/unnamed-chunk-11-1.gif",
          alt: "A combination of the two aforementioned plots. The top plot is the animated dumbbell plot, and the bottom is a line chart. In combination, they allow the user to see the magnitude of differences between men and women, as well as how these differences have evolved over time."
        },
        {},
        {}
      )}
<p>In this view, we can see the magnitude of the differences both relatively and absolutely (top chart), <em>and</em> we can see how these differences change over time (bottom chart). The power of an animated, combined chart!</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
