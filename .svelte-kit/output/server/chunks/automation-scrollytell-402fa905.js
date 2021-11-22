import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
/* empty css                                              *//* empty css                                             */import { C as Code } from "./Code-7aa212db.js";
import { H as HighlightFromProp } from "./HighlightFromProp-72d47e9a.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./CornerTitle-1139e2b5.js";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
const metadata = {
  "layout": "blog",
  "title": "How to Scrollytell in R",
  "description": "Because its easier than doing it in D3",
  "image": "automation-scrollytell/header.png",
  "date": "2019-10-02",
  "tags": ["r", "tutorial"]
};
const Automation_scrollytell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hoveredId;
  let highlightedLines;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
      default: () => `<p>I\u2019ve always been interested in data visualization, and my most recent
sub-passion has been <em>scrollytelling</em>. I\u2019ve seen numerous examples of
amazing scrolling articles, from sites such as <a href="${"https://pudding.cool/"}" rel="${"nofollow"}">The
Pudding</a>, the <a href="${"https://www.nytimes.com/"}" rel="${"nofollow"}">New York
Times</a>, and
<a href="${"https://fivethirtyeight.com/"}" rel="${"nofollow"}">FiveThirtyEight</a>.</p>
<p>Although most of these sites rely on the same high-powered visualization
tools (such as <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3.js</a>) to create their stories, the
learning curve for those are a bit steep! Thankfully, I came across some examples of scrollytelling in my language
of choice, R.</p>
<p>Today, I\u2019ll walk you through a tutorial of scrollytelling in R. It\u2019s a bit complicated, and the output isn\u2019t as powerful as a full-fledged D3 project, but its a rough sketch, and it works. Here\u2019s the output:</p>
<iframe loading="${"lazy"}" title="${"Automation and Its Impact on Jobs"}" src="${"https://connorrothschild.shinyapps.io/automation/"}" width="${"100%"}" height="${"800px"}"></iframe>
<h3 id="${"load-libraries"}"><a href="${"#load-libraries"}">Load libraries</a></h3>
<p>We begin by loading the libraries required for our project:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>shiny<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>scrollytell<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>shinyjs<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggvis<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>plotly<span class="token punctuation">)</span>

theme_set<span class="token punctuation">(</span>theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"construct-an-updating-plot-object"}"><a href="${"#construct-an-updating-plot-object"}">Construct an updating plot object</a></h2>
<p>Once the data (<a href="${"https://github.com/connorrothschild/shiny-scrollytell/tree/master/data"}" rel="${"nofollow"}">which can be found
here</a>)
is already <a href="${"https://github.com/connorrothschild/shiny-scrollytell/blob/master/scripts/merge_data.R"}" rel="${"nofollow"}">loaded and
cleaned</a>,
we construct a plot object that will update as the user scrolls. (<a href="${"https://github.com/scottyd22/dream_team"}" rel="${"nofollow"}">Other
R users</a> make multiple plots;
either way is fine.)</p>
${validate_component(Code, "Code").$$render($$result, {
        language: "r",
        showLineNumbers: true,
        highlightedLines: hoveredId == "create-plot" ? highlightedLines : null
      }, {}, {
        default: () => `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot <span class="token operator">&lt;-</span> data <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span><span class="token keyword">if</span> <span class="token punctuation">(</span>add <span class="token operator">!=</span> <span class="token number">8</span><span class="token punctuation">)</span> add <span class="token operator">>=</span> reveal <span class="token keyword">else</span> reveal <span class="token percent-operator operator">%in%</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_point<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>x<span class="token operator">=</span>A_MEDIAN<span class="token punctuation">,</span> y<span class="token operator">=</span>probability<span class="token punctuation">,</span> size<span class="token operator">=</span>TOT_EMP<span class="token punctuation">,</span>
                         alpha<span class="token operator">=</span>ifelse<span class="token punctuation">(</span>add <span class="token operator">==</span> reveal<span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>typicaled<span class="token punctuation">,</span>
                         text <span class="token operator">=</span> glue<span class="token operator">::</span>glue<span class="token punctuation">(</span>'<span class="token operator">&lt;</span>b<span class="token operator">></span>Occupation<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>occupation<span class="token punctuation">&#125;</span>
                                            <span class="token operator">&lt;</span>b<span class="token operator">></span>Probability of Automation<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>probability<span class="token punctuation">&#125;</span>%
                                            <span class="token operator">&lt;</span>b<span class="token operator">></span>Median Income<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token operator">$</span><span class="token punctuation">&#123;</span>A_MEDIAN<span class="token punctuation">&#125;</span>
                                            <span class="token operator">&lt;</span>b<span class="token operator">></span>Number of Workers<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>TOT_EMP<span class="token punctuation">&#125;</span>'<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_size<span class="token punctuation">(</span>range <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  xlab<span class="token punctuation">(</span><span class="token string">"&#92;nMedian Income"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  ylab<span class="token punctuation">(</span><span class="token string">"Probability of Automation"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> col <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_color_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> cols<span class="token punctuation">,</span> breaks <span class="token operator">=</span> legend_ord<span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>labels <span class="token operator">=</span> scales<span class="token operator">::</span>dollar_format<span class="token punctuation">(</span>prefix<span class="token operator">=</span><span class="token string">"$"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">25000</span><span class="token punctuation">,</span><span class="token number">200000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>labels <span class="token operator">=</span> scales<span class="token operator">::</span>number_format<span class="token punctuation">(</span>suffix<span class="token operator">=</span><span class="token string">"%"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>axis.line.x <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_line<span class="token punctuation">(</span>colour <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span>
                                            size <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span> linetype <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span> lineend <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        axis.line.y <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        panel.grid.major.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`
      })}
<p>But wait, what\u2019s that ${validate_component(HighlightFromProp, "HighlightFromProp").$$render($$result, {
        hoveredIdProp: "create-plot",
        highlightedLinesProp: "2",
        hoveredId,
        highlightedLines
      }, {
        hoveredId: ($$value) => {
          hoveredId = $$value;
          $$settled = false;
        },
        highlightedLines: ($$value) => {
          highlightedLines = $$value;
          $$settled = false;
        }
      }, { default: () => `second line of code` })}?
</p>
<p>This may make <em>0 sense</em> right now, but here\u2019s why we have it.</p>
<p>The important part (and somewhat difficult thing to understand) about
this step is that your plot object has some <strong>data which corresponds to
an updating variable</strong>. For me, I added a variable called <code>reveal</code> for
each step of the visualization. For me, this meant having <code>reveal</code>
correspond to a typical level of education for a given job.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token operator">&lt;-</span> data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>reveal <span class="token operator">=</span> case_when<span class="token punctuation">(</span>
    typicaled <span class="token operator">==</span> <span class="token string">"No formal educational credential"</span> <span class="token operator">~</span> <span class="token number">1</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"High school diploma or equivalent"</span> <span class="token operator">~</span> <span class="token number">2</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Postsecondary nondegree award"</span> <span class="token operator">~</span> <span class="token number">3</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Some college, no degree"</span> <span class="token operator">~</span> <span class="token number">0</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Associate's degree"</span> <span class="token operator">~</span> <span class="token number">4</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Bachelor's degree"</span> <span class="token operator">~</span> <span class="token number">5</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Master's degree"</span> <span class="token operator">~</span> <span class="token number">6</span><span class="token punctuation">,</span>
    typicaled <span class="token operator">==</span> <span class="token string">"Doctoral or professional degree"</span> <span class="token operator">~</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So, when my plot object has a line of code which says:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">filter<span class="token punctuation">(</span><span class="token keyword">if</span> <span class="token punctuation">(</span>add <span class="token operator">!=</span> <span class="token number">8</span><span class="token punctuation">)</span> add <span class="token operator">>=</span> reveal <span class="token keyword">else</span> reveal <span class="token percent-operator operator">%in%</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That can be read as \u201CUpdate the plot object to include all data points
<strong>up until the current point</strong> encoded in <code>reveal</code>.\u201D</p>
<p>But, it also depends on what level of <code>add</code> we are at; if <code>add</code> == 8
(the last data point, e.g.\xA0the concluding plot), then we want to show
<em>all data points</em>.</p>
<p>\u201COkay, okay. But what is <code>add</code>???\u201D</p>
<p>Good question. <code>add</code> is the variable I constructed to correspond to the
user\u2019s input (in this case, the scroll!). When we put it all together,
we\u2019re going to wrap our plot object into a rendering function <em>inside</em>
the server function. Confusing? It looks like this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">server <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> output<span class="token punctuation">,</span> session<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  output<span class="token operator">$</span>plot <span class="token operator">&lt;-</span> renderPlotly<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>

    add <span class="token operator">&lt;-</span> input<span class="token operator">$</span>scr

    plot <span class="token operator">&lt;-</span>
      <span class="token comment"># static ggplot goes here</span>

      ggplotly<span class="token punctuation">(</span>plot<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
      <span class="token comment"># other ggplotly parameters go here</span>

  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  <span class="token comment"># render the plot here</span>
  output<span class="token operator">$</span>scr <span class="token operator">&lt;-</span> renderScrollytell<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>scrollytell<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  renderText<span class="token punctuation">(</span>paste0<span class="token punctuation">(</span><span class="token string">"Section: "</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observe<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>cat<span class="token punctuation">(</span><span class="token string">"section:"</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">,</span> <span class="token string">"&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>What\u2019s happening here? Within the server function, we\u2019re doing two
things:</p>
<p>First, we\u2019re creating the plot object. Because we have the command <code>add &lt;- input$scr</code> <strong>inside</strong> the function <code>renderPlotly</code>, our plot object will be dynamically updated along with <code>input$scr</code>.</p>
<p>This makes more sense when you connect it to the UI. In our <code>ui</code> function,
we include a <code>scrolly_container</code> from the scrollytell package. Within
that, we make our <code>outputId</code> correspond to the name of our updating
input (in this case, <em>scr</em>).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ui <span class="token operator">&lt;-</span> fluidPage<span class="token punctuation">(</span>

  <span class="token comment"># a bunch of introductory stuff, css stuff</span>

  <span class="token comment"># scrollytelling plot</span>
  scrolly_container<span class="token punctuation">(</span>outputId <span class="token operator">=</span> <span class="token string">"scr"</span><span class="token punctuation">,</span>
                       scrolly_graph<span class="token punctuation">(</span>
                                     <span class="token comment">## this is the plot object that we made earlier:</span>
                                     plotlyOutput<span class="token punctuation">(</span><span class="token string">"plot"</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token string">'600px'</span><span class="token punctuation">)</span>

                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    scrolly_sections<span class="token punctuation">(</span>
                      <span class="token comment">## each of these sections corresponds to an update</span>
                      <span class="token comment">## the number after id = corresponds to the &#96;scr&#96; update</span>
                      <span class="token comment">## the render_text() function will be discussed later</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token comment"># add a scrolly_section with nothing in it;</span>
                      <span class="token comment"># this buffer prevents the plot from disappearing while reading last section</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">"buffer"</span><span class="token punctuation">,</span> br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>

  <span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment"># a bunch of concluding stuff, other html</span>

<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So, the simplest way to think about this so far is:</p>
<p>Construct a plot object with some updating variable (in my case, <code>reveal</code>).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">filter<span class="token punctuation">(</span><span class="token keyword">if</span> <span class="token punctuation">(</span>add <span class="token operator">!=</span> <span class="token number">8</span><span class="token punctuation">)</span> add <span class="token operator">>=</span> reveal <span class="token keyword">else</span> reveal <span class="token percent-operator operator">%in%</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Make that variable correspond with some input variable (in my case <code>add</code>, which is created from the <code>input$scr</code>).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">server <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> output<span class="token punctuation">,</span> session<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  output<span class="token operator">$</span>plot <span class="token operator">&lt;-</span> renderPlotly<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>

    add <span class="token operator">&lt;-</span> input<span class="token operator">$</span>scr
    <span class="token comment">#...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Render your plot object in <code>scrolly_graph</code>, and provide input updates
via each <code>scrolly_section</code>.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ui <span class="token operator">&lt;-</span> fluidPage<span class="token punctuation">(</span>

  <span class="token comment"># a bunch of introductory stuff, css stuff</span>

  <span class="token comment"># scrollytelling plot</span>
  scrolly_container<span class="token punctuation">(</span>outputId <span class="token operator">=</span> <span class="token string">"scr"</span><span class="token punctuation">,</span>
                       scrolly_graph<span class="token punctuation">(</span>plotlyOutput<span class="token punctuation">(</span><span class="token string">"plot"</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token string">'600px'</span><span class="token punctuation">)</span>

                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    scrolly_sections<span class="token punctuation">(</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

                      <span class="token comment"># ...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Render your plots in your server function.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">server <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> output<span class="token punctuation">,</span> session<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  output<span class="token operator">$</span>plot <span class="token operator">&lt;-</span>
    <span class="token comment">#...</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  output<span class="token operator">$</span>scr <span class="token operator">&lt;-</span> renderScrollytell<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>scrollytell<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  renderText<span class="token punctuation">(</span>paste0<span class="token punctuation">(</span><span class="token string">"Section: "</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observe<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>cat<span class="token punctuation">(</span><span class="token string">"section:"</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">,</span> <span class="token string">"&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That\u2019s (most of) it for the plot section. You can play around with other
customizations too (for example, the alphas for my circles correspond to
an <code>ifelse</code> around <code>reveal</code>, so old circles are faded out compared to
new ones).</p>
<h3 id="${"create-a-series-of-text-reveals"}"><a href="${"#create-a-series-of-text-reveals"}">Create a series of text reveals</a></h3>
<p>Next, we create text sections using <code>HTML</code> and some helper functions
which beautify them.</p>
<p>First, we create the text boxes for each section following a similar
naming convention:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">text1 <span class="token operator">&lt;-</span> HTML<span class="token punctuation">(</span>"<span class="token operator">&lt;</span>H2<span class="token operator">></span> No education credentials <span class="token operator">&lt;</span><span class="token operator">/</span>H2<span class="token operator">></span>
              <span class="token operator">&lt;</span>br<span class="token operator">></span> <span class="token operator">&lt;</span>p<span class="token operator">></span> Workers with <span class="token operator">&lt;</span>font color<span class="token operator">=</span><span class="token string">'#A00042'</span><span class="token operator">></span>no formal education credential<span class="token operator">&lt;</span><span class="token operator">/</span>font<span class="token operator">></span> have a median income of <span class="token operator">$</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">636.</span>
              <span class="token operator">&lt;</span>br<span class="token operator">></span> On average<span class="token punctuation">,</span> those occupations have a <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token number">90</span>% chance<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span> of job automation.
              <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span> There are <span class="token number">23</span><span class="token punctuation">,</span><span class="token number">765</span><span class="token punctuation">,</span><span class="token number">700</span> workers with <span class="token operator">&lt;</span>font color<span class="token operator">=</span><span class="token string">'#A00042'</span><span class="token operator">></span>no formal education credential<span class="token operator">&lt;</span><span class="token operator">/</span>font<span class="token operator">></span>.<span class="token operator">&lt;</span>p<span class="token operator">></span>"<span class="token punctuation">)</span>

text2 <span class="token operator">&lt;-</span> HTML<span class="token punctuation">(</span>"<span class="token operator">&lt;</span>H2<span class="token operator">></span> High school diplomas <span class="token operator">&lt;</span><span class="token operator">/</span>H2<span class="token operator">></span>
              <span class="token operator">&lt;</span>br<span class="token operator">></span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Workers with <span class="token operator">&lt;</span>font color<span class="token operator">=</span><span class="token string">'#F56C42'</span><span class="token operator">></span>high school diplomas<span class="token operator">&lt;</span><span class="token operator">/</span>font<span class="token operator">></span> have a median income of <span class="token operator">$</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">636.</span>
              <span class="token operator">&lt;</span>br<span class="token operator">></span> On average<span class="token punctuation">,</span> those occupations have a <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token number">60</span>% chance<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span> of job automation.
              <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span> There are <span class="token number">33</span><span class="token punctuation">,</span><span class="token number">129</span><span class="token punctuation">,</span><span class="token number">910</span> workers with a <span class="token operator">&lt;</span>font color<span class="token operator">=</span><span class="token string">'#F56C42'</span><span class="token operator">></span>high school diploma<span class="token operator">&lt;</span><span class="token operator">/</span>font<span class="token operator">></span>.<span class="token operator">&lt;</span>p<span class="token operator">></span>"<span class="token punctuation">)</span>

<span class="token comment"># ...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then, we create a function <code>render_text</code> which simply parses that HTML, adds it into a div, and appends a class of \u2018text.\u2019</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">text <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  p<span class="token punctuation">(</span>
    switch<span class="token punctuation">(</span>num<span class="token punctuation">,</span>
           text1<span class="token punctuation">,</span>
           text2<span class="token punctuation">,</span>
           text3<span class="token punctuation">,</span>
           text4<span class="token punctuation">,</span>
           text5<span class="token punctuation">,</span>
           text6<span class="token punctuation">,</span>
           text7<span class="token punctuation">,</span>
           text8
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

render_text <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
  div<span class="token punctuation">(</span>
    text<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">,</span> class <span class="token operator">=</span> <span class="token string">"text"</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>For all 8 of the above <code>text</code>s, we\u2019ve created a switch function which
calls them depending on the number passed to <code>render_text</code>. Then, we
apply paragraph format, put them in their own div, and apply the <em>text</em>
class in our CSS sheet.</p>
<p>How does this work?</p>
<p>Recall that above, in our ui section, we had the following:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">scrolly_sections<span class="token punctuation">(</span>
  HTML<span class="token punctuation">(</span><span class="token string">'&lt;center>'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment"># ... continued</span>
<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here, our <code>scrolly_section</code>s take two inputs: our ID and our
corresponding text. Rather than write out lengthy text boxes in each
<code>scrolly_section</code>, we can construct them in a single file and then knit
them all into the same format using <code>render_text</code>. This makes life a lot
easier.</p>
<p>So, on each scroll (or observation), the app will update 1) the plot
object, by adding <code>add</code> and updating according to <code>reveal</code>, and 2) the
text, by running <code>render_text</code> which calls <code>text</code> which beautifies our
HTML text.</p>
<h3 id="${"final-touches"}"><a href="${"#final-touches"}">Final touches</a></h3>
<p>The rest of the app is built via
<code>fluidPage</code>, and organizing via rows and columns in your shiny app. Your
app should have a CSS style sheet (in the <a href="${"https://shiny.rstudio.com/articles/css.html"}" rel="${"nofollow"}">www
folder</a>). You may also
include other plots (for my post, I have an introductory plot with a bit
more context), which you will have to separately create and render in
your server function.</p>
<p>All in all, my UI code looks like this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ui <span class="token operator">&lt;-</span> fluidPage<span class="token punctuation">(</span>

  <span class="token comment"># suppress warning messages while data is loading on-screen</span>
  tags<span class="token operator">$</span>style<span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token punctuation">,</span>
             <span class="token string">".shiny-output-error &#123; visibility: hidden; &#125;"</span><span class="token punctuation">,</span>
             <span class="token string">".shiny-output-error:before &#123; visibility: hidden; &#125;"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  tags<span class="token operator">$</span>head<span class="token punctuation">(</span>
    includeCSS<span class="token punctuation">(</span><span class="token string">"www/style.css"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment"># article title &amp; name</span>
  fluidRow<span class="token punctuation">(</span>HTML<span class="token punctuation">(</span>"<span class="token operator">&lt;</span>center<span class="token operator">></span>
                <span class="token operator">&lt;</span>h1<span class="token operator">></span>Automation and Its Impact on Jobs<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
                <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token string">'font-size:26px'</span><span class="token operator">></span> by <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://connorrothschild.github.io/'</span> target<span class="token operator">=</span><span class="token string">'_blank'</span><span class="token operator">></span>Connor Rothschild<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>center<span class="token operator">></span>"<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>

  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  fluidRow<span class="token punctuation">(</span>
    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    column<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span>
           <span class="token comment"># intro text</span>
           fluidRow<span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token string">'text'</span><span class="token punctuation">,</span>
                    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    column<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span>
                           br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                           text0<span class="token punctuation">,</span>
                           hr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                           h1<span class="token punctuation">(</span>
                             class <span class="token operator">=</span> <span class="token string">"instructions"</span><span class="token punctuation">,</span>
                             <span class="token string">"How to read this chart:"</span><span class="token punctuation">,</span>
                             br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             <span class="token string">"The size of each"</span><span class="token punctuation">,</span> icon<span class="token punctuation">(</span><span class="token string">"circle"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"corresponds to the number of workers in that job."</span><span class="token punctuation">,</span>
                             br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             <span class="token string">"Hover over each"</span><span class="token punctuation">,</span> icon<span class="token punctuation">(</span><span class="token string">"circle"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"to see details on the occupation's income and probability of automation."</span><span class="token punctuation">,</span>
                             br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             <span class="token string">"Double click on a"</span><span class="token punctuation">,</span> icon<span class="token punctuation">(</span><span class="token string">"circle"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"in the legend to focus on a specific level of education."</span>
                           <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
           <span class="token comment"># plot object for intro</span>
           plotlyOutput<span class="token punctuation">(</span><span class="token string">"introPlot"</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token string">'400px'</span><span class="token punctuation">)</span>
           <span class="token punctuation">)</span><span class="token punctuation">,</span>

    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

           <span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment"># scrollytelling plot</span>
  scrolly_container<span class="token punctuation">(</span><span class="token string">"scr"</span>
                    <span class="token punctuation">,</span> scrolly_graph<span class="token punctuation">(</span> br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     textOutput<span class="token punctuation">(</span><span class="token string">"section"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     HTML<span class="token punctuation">(</span><span class="token string">'&lt;center>'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     plotlyOutput<span class="token punctuation">(</span><span class="token string">"plot"</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token string">'600px'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                     HTML<span class="token punctuation">(</span><span class="token string">'&lt;/center>'</span><span class="token punctuation">)</span>

                    <span class="token punctuation">)</span>
                    <span class="token punctuation">,</span> scrolly_sections<span class="token punctuation">(</span>
                      HTML<span class="token punctuation">(</span><span class="token string">'&lt;center>'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> render_text<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token comment"># add a scrolly_section with nothing in it;</span>
                      <span class="token comment"># this buffer prevents the plot from disappearing while reading last section</span>
                      scrolly_section<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">"buffer"</span><span class="token punctuation">,</span> br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      HTML<span class="token punctuation">(</span><span class="token string">'&lt;/center>'</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>

  <span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment"># concluding text</span>
  div<span class="token punctuation">(</span>fluidRow<span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
               column<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               column<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span>
                      concludingtext<span class="token punctuation">,</span>
                      br<span class="token punctuation">(</span><span class="token punctuation">)</span>
               <span class="token punctuation">)</span><span class="token punctuation">,</span>
               column<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span> style <span class="token operator">=</span> <span class="token string">'margin-top: -300px;'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  hr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  fluidRow<span class="token punctuation">(</span>
    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    column<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span>
           technicalnotes
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  br<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
column<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And the server looks like this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">server <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> output<span class="token punctuation">,</span> session<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  output<span class="token operator">$</span>plot <span class="token operator">&lt;-</span> renderPlotly<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>

    add <span class="token operator">&lt;-</span> input<span class="token operator">$</span>scr

    plot <span class="token operator">&lt;-</span> data <span class="token percent-operator operator">%>%</span>
      filter<span class="token punctuation">(</span>typicaled <span class="token operator">!=</span> <span class="token string">"Some college, no degree"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
      filter<span class="token punctuation">(</span><span class="token keyword">if</span> <span class="token punctuation">(</span>add <span class="token operator">!=</span> <span class="token number">8</span><span class="token punctuation">)</span> add <span class="token operator">>=</span> reveal <span class="token keyword">else</span> reveal <span class="token percent-operator operator">%in%</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
      ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      geom_point<span class="token punctuation">(</span>mapping<span class="token operator">=</span>aes<span class="token punctuation">(</span>x<span class="token operator">=</span>A_MEDIAN<span class="token punctuation">,</span> y<span class="token operator">=</span>probability<span class="token punctuation">,</span> size<span class="token operator">=</span>TOT_EMP<span class="token punctuation">,</span>
                             alpha<span class="token operator">=</span>ifelse<span class="token punctuation">(</span>add <span class="token operator">==</span> reveal<span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>typicaled<span class="token punctuation">,</span>
                             text <span class="token operator">=</span> glue<span class="token operator">::</span>glue<span class="token punctuation">(</span>'<span class="token operator">&lt;</span>b<span class="token operator">></span>Occupation<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>occupation<span class="token punctuation">&#125;</span>
                                                <span class="token operator">&lt;</span>b<span class="token operator">></span>Probability of Automation<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>probability<span class="token punctuation">&#125;</span>%
                                                <span class="token operator">&lt;</span>b<span class="token operator">></span>Median Income<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token operator">$</span><span class="token punctuation">&#123;</span>A_MEDIAN<span class="token punctuation">&#125;</span>
                                                <span class="token operator">&lt;</span>b<span class="token operator">></span>Number of Workers<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>TOT_EMP<span class="token punctuation">&#125;</span>'<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      scale_size<span class="token punctuation">(</span>range <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      xlab<span class="token punctuation">(</span><span class="token string">"&#92;nMedian Income"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      ylab<span class="token punctuation">(</span><span class="token string">"Probability of Automation"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      labs<span class="token punctuation">(</span>size<span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> col<span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      scale_color_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> cols<span class="token punctuation">,</span> breaks <span class="token operator">=</span> legend_ord<span class="token punctuation">)</span> <span class="token operator">+</span>
      scale_x_continuous<span class="token punctuation">(</span>labels<span class="token operator">=</span>scales<span class="token operator">::</span>dollar_format<span class="token punctuation">(</span>prefix<span class="token operator">=</span><span class="token string">"$"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">25000</span><span class="token punctuation">,</span><span class="token number">200000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      scale_y_continuous<span class="token punctuation">(</span>labels<span class="token operator">=</span>scales<span class="token operator">::</span>number_format<span class="token punctuation">(</span>suffix<span class="token operator">=</span><span class="token string">"%"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      theme<span class="token punctuation">(</span>axis.line.x <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_line<span class="token punctuation">(</span>colour <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span>
                                                size <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span> linetype <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span> lineend <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            axis.line.y <span class="token operator">=</span> ggplot2<span class="token operator">::</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            panel.grid.major.x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    ggplotly<span class="token punctuation">(</span>plot<span class="token punctuation">,</span> tooltip <span class="token operator">=</span> <span class="token string">'text'</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    layout<span class="token punctuation">(</span>
      title <span class="token operator">=</span> list<span class="token punctuation">(</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      legend <span class="token operator">=</span> list<span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">0.65</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0.925</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      font <span class="token operator">=</span> list<span class="token punctuation">(</span>family <span class="token operator">=</span> <span class="token string">'Lato'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      margin<span class="token operator">=</span>list<span class="token punctuation">(</span>t<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      hoverlabel <span class="token operator">=</span> list<span class="token punctuation">(</span>bgcolor <span class="token operator">=</span> <span class="token string">'whitesmoke'</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'DarkGray'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    config<span class="token punctuation">(</span>displaylogo <span class="token operator">=</span> F<span class="token punctuation">,</span> showSendToCloud <span class="token operator">=</span> F<span class="token punctuation">,</span> displayModeBar <span class="token operator">=</span> F<span class="token punctuation">)</span>

  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  output<span class="token operator">$</span>introPlot <span class="token operator">&lt;-</span> renderPlotly<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>introPlot<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  output<span class="token operator">$</span>scr <span class="token operator">&lt;-</span> renderScrollytell<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>scrollytell<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  renderText<span class="token punctuation">(</span>paste0<span class="token punctuation">(</span><span class="token string">"Section: "</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observe<span class="token punctuation">(</span><span class="token punctuation">&#123;</span>cat<span class="token punctuation">(</span><span class="token string">"section:"</span><span class="token punctuation">,</span> input<span class="token operator">$</span>scr<span class="token punctuation">,</span> <span class="token string">"&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"the-output"}"><a href="${"#the-output"}">The output</a></h2>
<p>You can look at the code and all of its context on GitHub
<a href="${"https://github.com/connorrothschild/shiny-scrollytell"}" rel="${"nofollow"}">here</a>. Want to visit the live page? You can access it <a href="${"https://connorrothschild.shinyapps.io/automation/"}" rel="${"nofollow"}">here</a>, or embedded below!</p>
<iframe loading="${"lazy"}" title="${"Automation and Its Impact on Jobs"}" src="${"https://connorrothschild.shinyapps.io/automation/"}" width="${"100%"}" height="${"800px"}"></iframe>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Automation_scrollytell as default, metadata };
