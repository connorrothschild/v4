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
  "title": "Trends in Refugee Acceptance, 2002 to 2019",
  "description": "Or, how a single line of code can create a beautiful small multiples US map.",
  "date": "2020-02-02",
  "image": "refugee-trends/header.png",
  "archived": true,
  "tags": ["analysis", "r"]
};
const Refugee_trends = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      alt: "A small multiples map of refugee acceptance over time, across states",
      src: "../images/post/refugee-trends/featured.png"
    }, {}, {})}
<p>In <a href="${"https://connorrothschild.github.io/map-missing-migrants/"}" rel="${"nofollow"}">previous projects</a>, I\u2019ve explored how migration has unfolded across <em>places</em>: where migrants travel, where they go missing, and where their journeys come to a fatal end.</p>
<p>Next, I wanted to see how <em>host countries</em> have approached the migrant and refugee crisis, with a particular focus on the United States. In my mind, an effective visualization of the U.S.\u2019s response to an increasing number of refugees needs to present two things: how refugee acceptance has changed <em>over time</em> and how refugee acceptance differs <em>across states.</em></p>
<p>An effective way to present both of these trends is with a map of <a href="${"https://en.wikipedia.org/wiki/Small_multiple"}" rel="${"nofollow"}">small multiple</a> line charts. For aesthetic purposes, it would also be nice to arrange these multiples in a shape that vaguely resembles the United States. (This also makes it easier for readers to find their state of interest.)</p>
<p>There are examples of these types of small multiple maps across the internet. The Washington Post\u2019s <a href="${"https://www.washingtonpost.com/graphics/politics/how-fair-is-the-electoral-college/"}" rel="${"nofollow"}">overview of the electoral college</a> was visualized in the following way:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "Washington Post small multiples map of electoral college data",
      src: "../images/post/refugee-trends/wapo.png"
    }, {}, {})}
<p>You can also find an overview of <em>why</em> they work, and some additional examples, on the <a href="${"https://policyviz.com/2016/05/19/small-multiple-tile-grid-map/"}" rel="${"nofollow"}">PolicyViz</a> blog:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "Policy Viz's small multiples of overall voting results over time",
      src: "../images/post/refugee-trends/policyviz.jpg"
    }, {}, {})}
<h2 id="${"making-it-in-r"}"><a href="${"#making-it-in-r"}">Making it in R</a></h2>
<p>The process of creating a small multiple tile grid map is relatively easy in R (like most things done in R). It is considerably more difficult in D3.js; if you\u2019re interested in that type of thing, you can take a look at <a href="${"https://bl.ocks.org/jinniluo/a95b27b1f4ea65ae94ab6ca3fcfb5934#index.html"}" rel="${"nofollow"}">this code</a> for inspiration.</p>
<h4 id="${"step-1-build-the-basic-line-chart"}"><a href="${"#step-1-build-the-basic-line-chart"}">Step 1: Build the basic line chart</a></h4>
<p>The first step (after obnoxious data <a href="${"https://raw.githubusercontent.com/connorrothschild/R/master/refugee-trends/merge.R"}" rel="${"nofollow"}">merging</a> and cleaning) is getting a feel for the basic line chart. To do so, we can visualize the macro-level trends of refugee acceptance across <em>all states</em> combined.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>region_name_3<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>textbox37 <span class="token operator">=</span> sum<span class="token punctuation">(</span>textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> region_name_3<span class="token punctuation">,</span> y <span class="token operator">=</span> textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Refugee Acceptance on the Decline"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Number of refugees accepted annually, 2002 - 2019"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>labels <span class="token operator">=</span> scales<span class="token operator">::</span>comma_format<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">2019</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A small multiples map of refugee acceptance over time, across states",
      src: "../images/post/refugee-trends/macro.jpg"
    }, {}, {})}
<p>Now we have the answer to our first question: <strong>how has refugee acceptance changed over time?</strong> The answer: pretty drastically. The US accepted nearly 100,000 refugees in 2016; 2 years later, that number was barely over 20,000.</p>
<h4 id="${"step-2-make-small-multiples"}"><a href="${"#step-2-make-small-multiples"}">Step 2: Make small multiples</a></h4>
<p>Next, we make 50 of these lines: one for each US state. We do so using Ryan Hafen\u2019s <code>geofacet</code> <a href="${"https://hafen.github.io/geofacet/rd.html"}" rel="${"nofollow"}">package</a>.</p>
<p>It\u2019s as simple as adding one line of code to our previous plot:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">facet_geo<span class="token punctuation">(</span><span class="token operator">~</span> state<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This makes a plot that looks like this:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "first try",
      src: "../images/post/refugee-trends/firsttry.jpg"
    }, {}, {})}
<p>It\u2019s alright, but not perfect! There are a few improvements we can definitely make.</p>
<p>For one, the axis labels overlap. We already know the range of years is between 2002 and 2019 (its in our subtitle!). So we can remove our x axis labels.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">theme<span class="token punctuation">(</span>
  axis.text.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  axis.ticks.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Second, The axis lines (on both axes) seem unnecessary and (the x-axis specifically) can sometimes conceal trends for those states with lower values. Let\u2019s remove those too!</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">theme<span class="token punctuation">(</span>
  axis.line.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  axis.line.y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Finally, I don\u2019t like huge gray boxes around my axis labels. Could we make those transparent?</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">theme(
    strip.background = element_rect(color = &quot;white&quot;)
)</code>`}<!-- HTML_TAG_END --></pre>
<p>Add it all together (and tweak the font size), and we get this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>region_name_3<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>textbox37 <span class="token operator">=</span> sum<span class="token punctuation">(</span>textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> region_name_3<span class="token punctuation">,</span> y <span class="token operator">=</span> textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">2002</span><span class="token punctuation">,</span><span class="token number">2019</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  facet_geo<span class="token punctuation">(</span><span class="token operator">~</span> state<span class="token punctuation">,</span> grid <span class="token operator">=</span> <span class="token string">"us_state_grid1"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Refugee Acceptance on the Decline"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Number of refugees accepted annually, 2002 - 2019"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    axis.text.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.ticks.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.line.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.line.y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.title <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.subtitle <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    strip.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "secondtry",
      src: "../images/post/refugee-trends/secondtry.jpg"
    }, {}, {})}
<p>Pretty good! Much better. But we can add some elements to take our visualization to the next level.</p>
<p>Because our data spans nearly 20 years (2002 to 2019), we can overlay our small multiples with other variables of interest, such as who was President during a given period.</p>
<p>We do so using <code>geom_rect</code>:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_rect<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">2009</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">2017</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"#ADD8E6"</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">.05</span><span class="token punctuation">)</span> <span class="token operator">+</span>
geom_rect<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">2017</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">2019</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"#FF9999"</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">.05</span><span class="token punctuation">)</span> <span class="token operator">+</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The first line of code creates a blue box which spans 2009 to 2017 (Obama\u2019s tenure). The second line creates a red box for Trump\u2019s presidency (so far).</p>
<p>Bringing it all together, the code and output look like this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>region_name_3<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>textbox37 <span class="token operator">=</span> sum<span class="token punctuation">(</span>textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> region_name_3<span class="token punctuation">,</span> y <span class="token operator">=</span> textbox37<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">2009</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">2017</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"#ADD8E6"</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">.05</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>xmin<span class="token operator">=</span><span class="token number">2017</span><span class="token punctuation">,</span> xmax<span class="token operator">=</span><span class="token number">2019</span><span class="token punctuation">,</span> ymin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> ymax<span class="token operator">=</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"#FF9999"</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">.05</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">2002</span><span class="token punctuation">,</span><span class="token number">2019</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  facet_geo<span class="token punctuation">(</span><span class="token operator">~</span> state<span class="token punctuation">,</span> grid <span class="token operator">=</span> <span class="token string">"us_state_grid1"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Refugee Acceptance on the Decline"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Number of refugees accepted annually, 2002 - 2019"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    axis.text.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.ticks.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.line.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axis.line.y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.title <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.subtitle <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    strip.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "r version",
      src: "../images/post/refugee-trends/ref.png"
    }, {}, {})}
<p>I brought that plot to Illustrator and made it a lot prettier. Here\u2019s the final version:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A small multiples map of refugee acceptance over time, across states",
      src: "../images/post/refugee-trends/featured.png"
    }, {}, {})}
<p>What do we notice? A few key states (Texas, California, Florida, and Michigan) make up the vast majority of refugee acceptance, while other accept almost <em>no</em> <em>refugees</em>. Nearly every state has reduced their refugee acceptance since 2017, but the bulk of this decline has come from these larger states.</p>
<p>While you\u2019re here, take a look at my project <a href="${"https://connorrothschild.github.io/map-missing-migrants/"}" rel="${"nofollow"}"><em>Mapping Missing Migrants.</em></a></p>`
  })}`;
});
export { Refugee_trends as default, metadata };
