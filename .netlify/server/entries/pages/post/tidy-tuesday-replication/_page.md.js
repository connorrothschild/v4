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
  "title": "Using Shiny to Replicate a Bloomberg Graphic",
  "description": "Leveraging the power of <code>shiny</code> for static graphics",
  "date": "2019-12-10",
  "image": "tidy-tuesday-replication/header.png",
  "archived": true,
  "tags": ["r", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>This weeks\u2019s installment of <a href="${"https://t.co/sElb4fcv3u?amp=1"}" rel="${"nofollow"}">Tidy
Tuesday</a> is all about replicating
professional plots in R. Inspired by Rafael Irizarry\u2019s post <a href="${"https://simplystatistics.org/2019/08/28/you-can-replicate-almost-any-plot-with-ggplot2/"}" rel="${"nofollow"}">\u201CYou can
replicate almost any plot with
R\u201D</a>,
the goal is to take otherwise professional publication-ready plots and
make them in R (usually ggplot2).</p>
<p>I was interested in this Tidy Tuesday because some of my <a href="${"https://connorrothschild.github.io/r/introducing-tpltheme/"}" rel="${"nofollow"}">past
work</a> has
been dedicated to creating publication-ready plots. Because <a href="${"https://connorrothschild.github.io/r/automation/"}" rel="${"nofollow"}">the first
visualization I ever
created</a> was inspired
by (a replication of?) <a href="${"https://www.bloomberg.com/graphics/2017-job-risk/"}" rel="${"nofollow"}">this
visualization</a> from
Bloomberg graphics, I decided to set out on a journey to make that plot
as close as possible to the real thing.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot by Bloomberg Graphics, showing automation risk compared to median income.",
          src: "/images/post/tidy-tuesday-replication/bloomberg.png"
        },
        {},
        {}
      )}
<p>The real goal of this week\u2019s Tidy Tuesday is using <strong>the data that
Rafael posted</strong> to create other cool visualizations; I took a slightly
different approach to try to recreate another visualization entirely.
What follows is an interactive recreation of the visualization above,
using <a href="${"https://shiny.rstudio.com/"}" rel="${"nofollow"}">Shiny</a> and
<a href="${"https://plot.ly/r/"}" rel="${"nofollow"}">plotly</a>.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggthemes<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>dplyr<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggrepel<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tools<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>readxl<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>knitr<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>shiny<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>plotly<span class="token punctuation">)</span>

theme_set<span class="token punctuation">(</span>theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h1 id="${"load-and-clean-data"}"><a href="${"#load-and-clean-data"}">Load and clean data</a></h1>
<p>First, we read in the data. This process was a bit complicated as I kind
of had to guess where Bloomberg pulled their data from.</p>
<p>I relied on three datasets:</p>
<ol><li>Educational attainment broke down by occupation, provided by BLS
<a href="${"https://www.bls.gov/emp/ep_education_training_system.htm"}" rel="${"nofollow"}">here</a></li>
<li>Salaries, median hourly/annual wages broke down by occupation,
provided by BLS
<a href="${"https://www.bls.gov/oes/current/oes_nat.htm#11-0000"}" rel="${"nofollow"}">here</a></li>
<li>Risk of automation broken down by occupation, provided by Carl
Benedikt Frey and Michael A. Osborne (but compiled
<a href="${"https://data.world/wnedds/occupations-by-state-and-likelihood-of-automation"}" rel="${"nofollow"}">here</a>)</li></ol>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">education <span class="token operator">&lt;-</span> read_excel<span class="token punctuation">(</span><span class="token string">"data/education.xlsx"</span><span class="token punctuation">,</span> skip<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
salary <span class="token operator">&lt;-</span> read_excel<span class="token punctuation">(</span><span class="token string">"data/national_M2017_dl.xlsx"</span><span class="token punctuation">)</span>
automation <span class="token operator">&lt;-</span> read_excel<span class="token punctuation">(</span><span class="token string">"data/raw_state_automation_data.xlsx"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In <a href="${"https://connorrothschild.github.io/r/automation/"}" rel="${"nofollow"}">another post</a>, I
detail the data cleaning process. I\u2019ll spare you the details here.</p>
<h1 id="${"create-the-ui"}"><a href="${"#create-the-ui"}">Create the UI</a></h1>
<p>Now we create the UI, as is the case for any Shiny app. This is pretty
simple: first, we add the title panel and beautify it with some CSS.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ui <span class="token operator">&lt;-</span> fluidPage<span class="token punctuation">(</span>

    titlePanel<span class="token punctuation">(</span>
      h1<span class="token punctuation">(</span><span class="token string">"A College Degree Lowers Job Automation Risk"</span><span class="token punctuation">,</span>
        style <span class="token operator">=</span> "font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span> font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span> line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">;</span>"<span class="token punctuation">)</span><span class="token punctuation">,</span>
      windowTitle <span class="token operator">=</span> <span class="token string">"Find Out If Your Job Will Be Automated"</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Next, we add the main panel, which includes a) the plot object, b) the
footnote, and c) some CSS.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">mainPanel<span class="token punctuation">(</span>
      fluidRow<span class="token punctuation">(</span>
        div<span class="token punctuation">(</span>
           plotlyOutput<span class="token punctuation">(</span><span class="token string">"plot"</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token string">'600px'</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token string">'850px'</span><span class="token punctuation">)</span>
           <span class="token punctuation">)</span><span class="token punctuation">,</span>align<span class="token operator">=</span><span class="token string">"left"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
           p<span class="token punctuation">(</span><span class="token string">"DATA: FREY &amp; OSBORNE, BUREAU OF LABOR STATISTICS"</span><span class="token punctuation">,</span>
           style <span class="token operator">=</span> "font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span> font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span> line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">;</span>"<span class="token punctuation">)</span>
           <span class="token punctuation">)</span>

<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That\u2019s it!</p>
<h1 id="${"server"}"><a href="${"#server"}">Server</a></h1>
<p>Now we can define the <code>server()</code> function, where the real magic of this
visualization happens.</p>
<p>All of the following takes place in the
<code>server &lt;- function(input, output, session) {}</code> function.</p>
<h2 id="${"create-a-ggplot-object"}"><a href="${"#create-a-ggplot-object"}">Create a <code>ggplot</code> object</a></h2>
<p>We know we\u2019re going to need a ggplot object. In my case, we\u2019ll need a
plot object which relies on <em>probability, median income,</em> and <em>risk of
automation</em>.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x<span class="token operator">=</span>probability<span class="token punctuation">,</span> y<span class="token operator">=</span>A_MEDIAN<span class="token punctuation">,</span> size<span class="token operator">=</span>TOT_EMP<span class="token punctuation">,</span> fill<span class="token operator">=</span>typicaled<span class="token punctuation">,</span> text <span class="token operator">=</span> text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_point<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">.97</span><span class="token punctuation">,</span> stroke <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    scale_size<span class="token punctuation">(</span>range <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> guide <span class="token operator">=</span> <span class="token string">'legend'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This creates the base of the object.</p>
<h3 id="${"add-a-tooltip"}"><a href="${"#add-a-tooltip"}">Add a tooltip</a></h3>
<p>We also know that, like the Bloomberg visualization we\u2019re replicating,
we\u2019re going to want a tooltip.</p>
<p>That\u2019s why we included <code>text</code> in the above code, which we define here:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
    mutate<span class="token punctuation">(</span>text <span class="token operator">=</span> glue<span class="token operator">::</span>glue<span class="token punctuation">(</span><span class="token string">'&lt;span style="font-size:16px;font-weight:bold">&#123;data$occupation&#125;&lt;/span>'</span><span class="token punctuation">,</span>
                             <span class="token string">'&#92;n&lt;b>Number employed:&lt;/b> &#123;scales::comma(data$TOT_EMP)&#125;'</span><span class="token punctuation">,</span>
                             <span class="token string">'&#92;n&lt;b>Computerization prob:&lt;/b> &#123;data$probability&#125;%'</span><span class="token punctuation">,</span>
                             <span class="token string">'&#92;n&lt;b>Education:&lt;/b> &#123;data$typicaled&#125;'</span><span class="token punctuation">,</span>
                             sep <span class="token operator">=</span> <span class="token string">"&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This tooltip takes in some CSS, some HTML, and creates a pretty tooltip!
The <code>glue</code> function is lovely.</p>
<h3 id="${"axes-and-labels"}"><a href="${"#axes-and-labels"}">Axes and labels</a></h3>
<p>The Bloomberg visualization is unique in that it has no axis lines. We
can replicate that in <code>ggplot2</code> via the following code:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">theme<span class="token punctuation">(</span>axis.line.x <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      axis.line.y <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      axis.text <span class="token operator">=</span> element_text<span class="token punctuation">(</span>colour <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>But that\u2019s not all!</p>
<p>The Bloomberg visualization is also unique in that it doesn\u2019t have axis
titles. Moreover, the axis labels are a bit unique; the x axis increases
sequentially by 10 until 90 where it transitions into \u201890%\u2019 (the % is
not present in the earlier numbers).</p>
<p>We can mimic that kind of styling with this code:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">xlab<span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">+</span>
ylab<span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">+</span>
labs<span class="token punctuation">(</span>size<span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">+</span>
scale_y_continuous<span class="token punctuation">(</span>limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">240000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">40000</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token number">80000</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">,</span> <span class="token number">120000</span><span class="token punctuation">,</span> <span class="token number">140000</span><span class="token punctuation">,</span> <span class="token number">160000</span><span class="token punctuation">,</span> <span class="token number">180000</span><span class="token punctuation">,</span> <span class="token number">200000</span><span class="token punctuation">,</span> <span class="token number">220000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   labels <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"20K"</span><span class="token punctuation">,</span> <span class="token string">"40K"</span><span class="token punctuation">,</span> <span class="token string">"60K"</span><span class="token punctuation">,</span> <span class="token string">"80K"</span><span class="token punctuation">,</span> <span class="token string">"100K"</span><span class="token punctuation">,</span> <span class="token string">"120K"</span><span class="token punctuation">,</span> <span class="token string">"140K"</span><span class="token punctuation">,</span> <span class="token string">"160K"</span><span class="token punctuation">,</span> <span class="token string">"180K"</span><span class="token punctuation">,</span> <span class="token string">"200K"</span><span class="token punctuation">,</span> <span class="token string">"220K"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
scale_x_continuous<span class="token punctuation">(</span>limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   labels <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token string">"90%"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>We create a bit of a buffer on the <code>limits</code> argument so that we can add
annotations. We\u2019ll get to that later!</p>
<h3 id="${"colors"}"><a href="${"#colors"}">Colors</a></h3>
<p>To get as close as possible to Bloomberg\u2019s plot, I\u2019d also like to mimic
their color scheme. I pulled the colors from their dotplot with this
awesome <a href="${"https://chrome.google.com/webstore/detail/color-picker/ohcpnigalekghcmgcdcenkpelffpdolg"}" rel="${"nofollow"}">Chrome
plugin</a>;
then, I added them to R with the following:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">colors <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token string">'No formal educational credential'</span> <span class="token operator">=</span> <span class="token string">'#FA1A48'</span><span class="token punctuation">,</span>
            <span class="token string">'High school diploma or equivalent'</span> <span class="token operator">=</span> <span class="token string">'#F79734'</span><span class="token punctuation">,</span>
            <span class="token string">'Postsecondary nondegree award'</span> <span class="token operator">=</span> <span class="token string">'#FDFF1C'</span><span class="token punctuation">,</span> 
            <span class="token string">"Associate's degree"</span> <span class="token operator">=</span> <span class="token string">'#1DDF50'</span><span class="token punctuation">,</span>
            <span class="token string">"Bachelor's degree"</span> <span class="token operator">=</span> <span class="token string">'#34D19D'</span><span class="token punctuation">,</span> 
            <span class="token string">"Master's degree"</span> <span class="token operator">=</span> <span class="token string">'#1BC0E9'</span><span class="token punctuation">,</span>
            <span class="token string">"Doctoral or professional degree"</span> <span class="token operator">=</span> <span class="token string">'#1B91FF'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In the plot object, we reference this with the following:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">scale_fill_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> colors<span class="token punctuation">,</span> labels <span class="token operator">=</span> 
  c<span class="token punctuation">(</span><span class="token string">'No formal educational credential'</span><span class="token punctuation">,</span> 
    <span class="token string">'High school diploma or equivalent'</span><span class="token punctuation">,</span> 
    <span class="token string">"Some college, no degree"</span><span class="token punctuation">,</span>
    <span class="token string">"Associate's degree"</span><span class="token punctuation">,</span> 
    <span class="token string">"Postsecondary nondegree award"</span><span class="token punctuation">,</span>
    <span class="token string">"Bachelor's degree"</span><span class="token punctuation">,</span>
    <span class="token string">"Master's degree"</span><span class="token punctuation">,</span>
    <span class="token string">"Doctoral or professional degree"</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This essentially creates a fill scale (manually) with specified hex
codes for colors. I also tried to manipulate the order of the legend but
that didn\u2019t translate to plotly (a documented problem, I believe).</p>
<h3 id="${"final-touches-for-the-ggplot"}"><a href="${"#final-touches-for-the-ggplot"}">Final touches for the <code>ggplot</code></a></h3>
<p>Finally, we do something really hacky: add a regression line with
<code>geom_segment</code>. (I\u2019m so sorry)</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">54000</span><span class="token punctuation">,</span> xend <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> yend <span class="token operator">=</span> <span class="token number">58000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>We now have the ggplot object created; let\u2019s convert it to a plotly
object.</p>
<h2 id="${"create-a-plotly-object"}"><a href="${"#create-a-plotly-object"}">Create a <code>plotly</code> object</a></h2>
<p>This process relies on the <code>ggplotly</code> function, which reads in a
previously defined <code>ggplot</code> object and converts into an interactive
plotly one.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">introPlot <span class="token operator">&lt;-</span> ggplotly<span class="token punctuation">(</span>introggPlot<span class="token punctuation">,</span> tooltip <span class="token operator">=</span> <span class="token string">'text'</span><span class="token punctuation">,</span> sort <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>After creating the base plotly object, we move to some more complicated
steps:</p>
<h3 id="${"legend-orientation"}"><a href="${"#legend-orientation"}">Legend orientation</a></h3>
<p>We\u2019d like the legend to orient horizontally, right above the plot. We do
that with the following (inside the <code>layout</code> function):</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">introPlot <span class="token operator">&lt;-</span> ggplotly<span class="token punctuation">(</span>introggPlot<span class="token punctuation">,</span> tooltip <span class="token operator">=</span> <span class="token string">'text'</span><span class="token punctuation">,</span> sort <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
layout<span class="token punctuation">(</span>
  legend <span class="token operator">=</span> list<span class="token punctuation">(</span>orientation <span class="token operator">=</span> <span class="token string">"h"</span><span class="token punctuation">,</span>
              xanchor <span class="token operator">=</span> <span class="token string">"left"</span><span class="token punctuation">,</span>
              x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
              traceorder <span class="token operator">=</span> <span class="token string">"normal"</span><span class="token punctuation">,</span>
              itemsizing <span class="token operator">=</span> <span class="token string">"constant"</span><span class="token punctuation">,</span>
              tracegroupgap <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
              font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
              <span class="token comment"># ...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This does a few things. First, it orients the legend horizontally.
Second, it anchors the legend to the left. Third, it defines the
location (using x-y pairs) of the legend. <code>traceorder</code> is meant to
maintain the previous order from <code>ggplot</code>, but that didn\u2019t work in my
version. <code>itemsizing</code> is meant to keep the legend items with a constant
size, as opposed to dynamic relative to the plot objects themselves.
This also didn\u2019t work. The last two arguments define the spacing between
points and the font size of the legend text!</p>
<h3 id="${"axes-revisited"}"><a href="${"#axes-revisited"}">Axes Revisited</a></h3>
<p>We also see the Bloomberg viz has a right-aligned Y-axis. We can add
that to plotly via the following code:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r"> <span class="token comment"># ... Layout continued</span>
yaxis <span class="token operator">=</span> list<span class="token punctuation">(</span>
          tickfont <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          overlaying <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
          side <span class="token operator">=</span> <span class="token string">"right"</span><span class="token punctuation">,</span>
          title <span class="token operator">=</span> <span class="token string">""</span>
        <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"some-aesthetic-changes"}"><a href="${"#some-aesthetic-changes"}">Some aesthetic changes</a></h3>
<p>Finally, we add three commands to the <code>layout</code> function.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r"> <span class="token comment"># ... Layout continued</span>
  font <span class="token operator">=</span> list<span class="token punctuation">(</span>family <span class="token operator">=</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  margin <span class="token operator">=</span> list<span class="token punctuation">(</span>r<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> l<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>pad <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  hoverlabel <span class="token operator">=</span> list<span class="token punctuation">(</span>bgcolor <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This a) changes the font of the plot, b) adds a small margin, and c)
stylizes the tooltip on hover.</p>
<h3 id="${"annotations"}"><a href="${"#annotations"}">Annotations</a></h3>
<p>The last step is to mimic Bloomberg\u2019s annotations. This is a little
tough, specifically because it requires pretty specific x- and y-values.</p>
<p>First, we\u2019ll add their guiding annotations (that replace axis labels)
that you can find in each corner:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r"><span class="token percent-operator operator">%>%</span> <span class="token comment"># After layout() closes</span>
add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">7500</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"&lt;b>Low paid,&#92;nleast vulnerable&lt;/b>"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">7500</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"&lt;b>Low paid,&#92;nmost vulnerable&lt;/b>"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">230000</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"&lt;b>Best paid,&#92;nleast vulnerable&lt;/b>"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">230000</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"&lt;b>Best paid,&#92;nmost vulnerable&lt;/b>"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Next, we add annotations for \u2018most and least likely to be automated\u2019, as
well as the y axis label.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5000</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> glue<span class="token operator">::</span>glue<span class="token punctuation">(</span>sprintf<span class="token punctuation">(</span><span class="token string">'\u2190'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"Least likely to be automated"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">105</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5000</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> glue<span class="token operator">::</span>glue<span class="token punctuation">(</span><span class="token string">"Most likely to be automated"</span><span class="token punctuation">,</span> sprintf<span class="token punctuation">(</span><span class="token string">'\u2192'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">243000</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"Average annual wage"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> F
    <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And finally, add a couple of plot annotations which label specific
points. (We are not labelling a hundred occupations like Bloomberg did.)</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> subset<span class="token punctuation">(</span>data<span class="token operator">$</span>probability<span class="token punctuation">,</span> data<span class="token operator">$</span>occupation <span class="token operator">==</span> <span class="token string">"Chief Executives"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> subset<span class="token punctuation">(</span>data<span class="token operator">$</span>A_MEDIAN<span class="token punctuation">,</span> data<span class="token operator">$</span>occupation <span class="token operator">==</span> <span class="token string">"Chief Executives"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"Chief Executives"</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span>
      arrowhead <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      ax <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">,</span>
      ay <span class="token operator">=</span> <span class="token number">25</span>
    <span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    add_annotations<span class="token punctuation">(</span>
      x <span class="token operator">=</span> subset<span class="token punctuation">(</span>data<span class="token operator">$</span>probability<span class="token punctuation">,</span> data<span class="token operator">$</span>occupation <span class="token operator">==</span> <span class="token string">"Cashiers"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> subset<span class="token punctuation">(</span>data<span class="token operator">$</span>A_MEDIAN<span class="token punctuation">,</span> data<span class="token operator">$</span>occupation <span class="token operator">==</span> <span class="token string">"Cashiers"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      text <span class="token operator">=</span> <span class="token string">"Cashiers"</span><span class="token punctuation">,</span>
      xref <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">,</span>
      yref <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">,</span>
      xanchor <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      align <span class="token operator">=</span> <span class="token string">'right'</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      showarrow <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span>
      arrowhead <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      ax <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">,</span>
      ay <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">50</span>
    <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Finalize the plotly object with</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">config<span class="token punctuation">(</span>displaylogo <span class="token operator">=</span> F<span class="token punctuation">,</span> showSendToCloud <span class="token operator">=</span> F<span class="token punctuation">,</span> displayModeBar <span class="token operator">=</span> F<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>We\u2019re done! Run the application with the following code:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">shinyApp<span class="token punctuation">(</span>ui <span class="token operator">=</span> ui<span class="token punctuation">,</span> server <span class="token operator">=</span> server<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And we\u2019re done! Find my interactive visualization
<a href="${"https://connorrothschild.shinyapps.io/2019-12-10/"}" rel="${"nofollow"}">here</a>. Find the
code, uninterrupted and (hopefully) reproducible,
<em><a href="${"https://github.com/connorrothschild/tidytuesday/blob/master/2019-12-10/app.R"}" rel="${"nofollow"}">here</a></em>.</p>
<p>Here\u2019s the Bloomberg visualization:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot by Bloomberg Graphics, showing automation risk compared to median income.",
          src: "/images/post/tidy-tuesday-replication/bloomberg.png"
        },
        {},
        {}
      )}
<p>And here\u2019s mine:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot recreation, showing automation risk compared to median income.",
          src: "/images/post/tidy-tuesday-replication/replication.png"
        },
        {},
        {}
      )}
`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
