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
  "title": "My First Package! Introducing tpltheme",
  "description": "Introducing {tpltheme}, a toolkit to create publication-ready plots in the style of the Texas Policy Lab.",
  "image": "introducing-tpltheme/header.png",
  "date": "2019-07-02",
  "archived": true,
  "tags": ["r"]
};
const Introducing_tpltheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>I\u2019ve spent the majority of the summer as an
<a href="${"https://www.texaspolicylab.org/profile/connor-rothschild/"}" rel="${"nofollow"}">intern</a> with
the Texas Policy Lab, working on primarily data science-related matters
such as data cleaning and visualization. Most recently, I sought to
create a custom theme in <code>ggplot2</code> for TPL.</p>
<p>The project was my first experience in developing my own R package.
Prior to this project, the most familiarity I had with packages were
from the <code>install.packages()</code> and <code>library()</code> commands.</p>
<p>Hadley Wickham\u2019s book <strong><a href="${"http://r-pkgs.had.co.nz/"}" rel="${"nofollow"}">R Packages</a></strong> was
enormously helpful in introducing package development to me. I ran into
(a lot of) issues in building the package, specifically encountering
problems related to local file paths and logo placement on plots.</p>
<p>Creating your own package is a great exercise in trial and error, and
taught me a lot about programming in R that I wouldn\u2019t have learned
otherwise. I was also struck by how remarkably easy it was to create
one\u2019s own package (seriously, it requires the same amount of clicks as
starting a new R project), and how thorough online resources were.</p>
<h2 id="${"inspiration"}"><a href="${"#inspiration"}">Inspiration</a></h2>
<p>The catalyst for creating this package was coming across the Urban
Institute\u2019s <a href="${"https://github.com/UrbanInstitute/urbnthemes"}" rel="${"nofollow"}">urbnthemes</a>
package on GitHub. I also gathered a lot of inspiration (and borrowed
some code) from <a href="${"https://github.com/jrnold/ggthemes"}" rel="${"nofollow"}">ggthemes</a> (Jeffrey
Arnold), <a href="${"https://github.com/bbc/bbplot"}" rel="${"nofollow"}">bbplot</a> (BBC News), and
<a href="${"https://github.com/hrbrmstr/hrbrthemes"}" rel="${"nofollow"}">hrbrthemes</a> (Bob Rudis). I was
impressed by the fact that these organizations were able to use R to
create publication-ready plots despite the fact that base ggplot figures
can look rather ugly (if we\u2019re being honest).</p>
<p>Because the organization I intern with is still in its infancy, I
thought it would be a perfect time to create a standardized theme for
figures made in the future. So long as future employees adopt the theme,
this package has the potential to create figures specific to our
publications, lending TPL organizational credibility and creating
cross-report consistency.</p>
<p>I thought a lot about some basic tenets of design, such as font
readability, text size, and color contrast. I learned a lot about visual
and aesthetic design I wouldn\u2019t know otherwise (Kieran Healy\u2019s section
on how graphs can deceive the reader\u2013intentionally or not\u2013opened my eyes
to a lot of important visual concepts.</p>
<h1 id="${"overview"}"><a href="${"#overview"}">Overview</a></h1>
<p>Here\u2019s an overview of some of the packages key features:</p>
<h2 id="${"installation-and-usage"}"><a href="${"#installation-and-usage"}">Installation and Usage</a></h2>
<p>You can install the package via GitHub:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>

<span class="token comment">#devtools::install_github("connorrothschild/tpltheme")</span>
library<span class="token punctuation">(</span>tpltheme<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Always load <code>library(tpltheme)</code> <strong>after</strong> <code>library(ggplot2)</code> and/or
<code>library(tidyverse)</code>.</p>
<p>The package creates a standardized formats for plots to be used in
reports created by the Texas Policy Lab. It primarily relies on
<code>set_tpl_theme()</code>, which allows the user to specify whether the plot
theme should align with a standard plot (<code>style = &quot;print&quot;</code>), or one
specially created for plotting geographical data (<code>style = &quot;Texas&quot;</code>).
Calling <code>set_tpl_theme()</code> after <code>library(tpltheme)</code> does most of the
work for this package!</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">set_tpl_theme<span class="token punctuation">(</span>font <span class="token operator">=</span> <span class="token string">'IBM Plex Sans'</span><span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>Species<span class="token punctuation">,</span> y<span class="token operator">=</span>Sepal.Width<span class="token punctuation">,</span> fill<span class="token operator">=</span>Species<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_bar<span class="token punctuation">(</span>stat<span class="token operator">=</span><span class="token string">"summary"</span><span class="token punctuation">,</span> fun.y<span class="token operator">=</span><span class="token string">"mean"</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Mean Sepal Width (cm)"</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-3-1.png"
    }, {}, {})}
<h3 id="${"fonts"}"><a href="${"#fonts"}">Fonts</a></h3>
<p>The user is able to specify whether they want to use <em>Lato</em> or <em>Adobe
Caslon Pro</em> in their figures.</p>
<p>To ensure that these fonts are installed and registered, use
<code>tpl_font_test()</code>. If fonts are not properly installed, install both
fonts online and then run <code>tpl_font_install()</code>.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">tpl_font_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
tpl_font_install<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here are some examples of sample TPL plots with different specifications
for <code>style</code> and <code>font</code>.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">set_tpl_theme<span class="token punctuation">(</span>style <span class="token operator">=</span> <span class="token string">"print"</span><span class="token punctuation">,</span> font <span class="token operator">=</span> <span class="token string">"lato"</span><span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Width<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Length<span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>Species<span class="token punctuation">,</span> size <span class="token operator">=</span> Petal.Length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_point<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Sepal Width (cm)"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Sepal Length (cm)"</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token string">"Petal Length"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-5-1.png"
    }, {}, {})}
<p>By specifying <code>style = &quot;Texas&quot;</code> within <code>set_tpl_theme</code>, the user may
also create Texas-specific plots.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">tx_vac <span class="token operator">&lt;-</span> readr<span class="token operator">::</span>read_csv<span class="token punctuation">(</span><span class="token string">"https://raw.githubusercontent.com/connorrothschild/tpltheme/master/data/tx_vac_example.csv"</span><span class="token punctuation">)</span>
set_tpl_theme<span class="token punctuation">(</span>style <span class="token operator">=</span> <span class="token string">"Texas"</span><span class="token punctuation">,</span> font <span class="token operator">=</span> <span class="token string">"adobe"</span><span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span>data <span class="token operator">=</span> tx_vac<span class="token punctuation">,</span> mapping <span class="token operator">=</span> aes<span class="token punctuation">(</span>x <span class="token operator">=</span> long<span class="token punctuation">,</span> y <span class="token operator">=</span> lat<span class="token punctuation">,</span> group <span class="token operator">=</span> group<span class="token punctuation">,</span> fill <span class="token operator">=</span> avgvac<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_fixed<span class="token punctuation">(</span><span class="token number">1.3</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_fill_continuous<span class="token punctuation">(</span>limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">78.3</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_polygon<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Texas Vaccination Rate by County"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Among Kindergarteners"</span><span class="token punctuation">,</span>
       fill <span class="token operator">=</span> <span class="token string">"Percent&#92;nVaccinated"</span><span class="token punctuation">,</span>
       caption <span class="token operator">=</span> <span class="token string">"Source: Texas DSHS"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-6-1.png"
    }, {}, {})}
<p>And it also works for categorical variables:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">set_tpl_theme<span class="token punctuation">(</span>style <span class="token operator">=</span> <span class="token string">"Texas"</span><span class="token punctuation">,</span> font <span class="token operator">=</span> <span class="token string">"lato"</span><span class="token punctuation">)</span>

tx_vac <span class="token percent-operator operator">%>%</span>
  dplyr<span class="token operator">::</span>mutate<span class="token punctuation">(</span>cat <span class="token operator">=</span> factor<span class="token punctuation">(</span>dplyr<span class="token operator">::</span>case_when<span class="token punctuation">(</span>avgvac<span class="token operator">*</span><span class="token number">100</span> <span class="token operator">></span> <span class="token number">99</span> <span class="token operator">~</span> <span class="token string">"Great"</span><span class="token punctuation">,</span>
                         avgvac<span class="token operator">*</span><span class="token number">100</span> <span class="token operator">></span> <span class="token number">90</span> <span class="token operator">~</span> <span class="token string">"Average"</span><span class="token punctuation">,</span>
                         avgvac<span class="token operator">*</span><span class="token number">100</span> <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token operator">~</span> <span class="token string">"Bad"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>mapping <span class="token operator">=</span> aes<span class="token punctuation">(</span>x <span class="token operator">=</span> long<span class="token punctuation">,</span> y <span class="token operator">=</span> lat<span class="token punctuation">,</span> group <span class="token operator">=</span> group<span class="token punctuation">,</span> fill <span class="token operator">=</span> cat<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_fixed<span class="token punctuation">(</span><span class="token number">1.3</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_polygon<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Texas Vaccination Rate by County"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Among Kindergarteners"</span><span class="token punctuation">,</span>
       fill <span class="token operator">=</span> <span class="token string">"Vaccination Rating"</span><span class="token punctuation">,</span>
       caption <span class="token operator">=</span> <span class="token string">"Source: Texas DSHS"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-7-1.png"
    }, {}, {})}
<p>If the number of colors exceeds the number of colors in the TPL palette
(9), the function <code>tpl_color_pal()</code> will drop the TPL color palette and
return the greatest number of unique colors possible within the
RColorBrewer\u2019s \u201CPaired\u201D palette (for more information on the use of
RColorBrewer palettes, see <a href="${"https://bookdown.org/rdpeng/exdata/plotting-and-color-in-r.html#using-the-rcolorbrewer-palettes"}" rel="${"nofollow"}">this
chapter</a>).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">tx_vac <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>mapping <span class="token operator">=</span> aes<span class="token punctuation">(</span>x <span class="token operator">=</span> long<span class="token punctuation">,</span> y <span class="token operator">=</span> lat<span class="token punctuation">,</span> group <span class="token operator">=</span> group<span class="token punctuation">,</span> fill <span class="token operator">=</span> subregion<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_fixed<span class="token punctuation">(</span><span class="token number">1.3</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_polygon<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Texas Counties"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-8-1.png"
    }, {}, {})}
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r"><span class="token comment"># default to print afterwards</span>
set_tpl_theme<span class="token punctuation">(</span>style <span class="token operator">=</span> <span class="token string">"print"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"tpl-branding"}"><a href="${"#tpl-branding"}">TPL Branding</a></h3>
<h4 id="${"logo"}"><a href="${"#logo"}">Logo</a></h4>
<p>The user also has the option to include the TPL logo in single plots.
This may be preferred for those reports being made especially public, or
to serve as a pseudo-watermark in proprietary plots.</p>
<p>The user can specify the <code>position</code> of the logo as well as its <code>scale</code>.
The scale argument refers to the size of the logo object, with the
specified number corresponding to a multiplication with the normal logo
size. In other words, <code>scale = 2</code> will <em>double</em> the size of the logo.
The logo defaults to 1/7th of the size of the plot.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>Species<span class="token punctuation">,</span> y<span class="token operator">=</span>Sepal.Width<span class="token punctuation">,</span> fill<span class="token operator">=</span>Species<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_bar<span class="token punctuation">(</span>stat<span class="token operator">=</span><span class="token string">"summary"</span><span class="token punctuation">,</span> fun.y<span class="token operator">=</span><span class="token string">"mean"</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Mean Sepal Width (cm)"</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span>

add_tpl_logo<span class="token punctuation">(</span>plot<span class="token punctuation">,</span> position <span class="token operator">=</span> <span class="token string">"top right"</span><span class="token punctuation">,</span> scale <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-9-1.png"
    }, {}, {})}
<h4 id="${"logo-text"}"><a href="${"#logo-text"}">Logo text</a></h4>
<p>There may be some instances when an all-out logo is not warranted or
preferred. If that is the case and the user would still like to
watermark their figures, they can use the function <code>add_tpl_logo_text()</code>
to add text to an existing plot object:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Width<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Length<span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>Species<span class="token punctuation">,</span> size <span class="token operator">=</span> Petal.Length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_point<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Sepal Width (cm)"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Sepal Length (cm)"</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token string">"Petal Length"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span>

add_tpl_logo_text<span class="token punctuation">(</span>plot<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-10-1.png"
    }, {}, {})}
<p>The user may also need to specify <code>align</code>, which moves the plot
horizontally across the bottom of the page.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>Species<span class="token punctuation">,</span> y<span class="token operator">=</span>Sepal.Width<span class="token punctuation">,</span> fill<span class="token operator">=</span>Species<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_boxplot<span class="token punctuation">(</span>show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Sepal Width (cm)"</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">,</span> subtitle <span class="token operator">=</span><span class="token string">"When specifying align = 1"</span><span class="token punctuation">)</span>

add_tpl_logo_text<span class="token punctuation">(</span>plot<span class="token punctuation">,</span> align <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-11-1.png"
    }, {}, {})}
<h3 id="${"additional-functions"}"><a href="${"#additional-functions"}">Additional functions</a></h3>
<h4 id="${"drop-axes"}"><a href="${"#drop-axes"}">Drop axes</a></h4>
<p>In the event that the user wishes to drop an axis, they may do so with
<code>drop_axis()</code>. The function may drop any combination of axes depending
on the user\u2019s input (<code>drop = &quot;x&quot;</code>, <code>drop = &quot;y&quot;</code>, <code>drop = &quot;both&quot;</code>,
<code>drop = &quot;neither&quot;</code>).</p>
<p>Unlike <code>add_tpl_logo()</code>, <code>drop_axis()</code> should be <em>added</em> to an existing
plot object:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Width<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Length<span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>Species<span class="token punctuation">,</span> size <span class="token operator">=</span> Petal.Length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_point<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Sepal Width (cm)"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Sepal Length (cm)"</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token string">"Petal Length"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    drop_axis<span class="token punctuation">(</span>axis <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-12-1.png"
    }, {}, {})}
<h3 id="${"colors"}"><a href="${"#colors"}">Colors</a></h3>
<p>I also put a lot of time into creating a color palette which was both
aesthetically pleasing and accessible to color-blind viewers. This was
somewhat difficult because there are <a href="${"https://nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness"}" rel="${"nofollow"}">quite a few types of
colorblindness</a>.
Thankfully, my boss is colorblind, making test cases a lot more
accessible!</p>
<p>The function <code>view_palette</code> plots base color palettes included in
<code>tpltheme</code>. All TPL color palettes are led by the notation
<code>palette_tpl_*</code> and therefore can be easily autocompleted within
RStudio.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">p1 <span class="token operator">&lt;-</span> view_palette<span class="token punctuation">(</span>palette <span class="token operator">=</span> palette_tpl_main<span class="token punctuation">)</span> <span class="token operator">+</span> ggtitle<span class="token punctuation">(</span><span class="token string">"Categorical"</span><span class="token punctuation">)</span>
p2 <span class="token operator">&lt;-</span> view_palette<span class="token punctuation">(</span>palette <span class="token operator">=</span> palette_tpl_diverging<span class="token punctuation">)</span> <span class="token operator">+</span> ggtitle<span class="token punctuation">(</span><span class="token string">"Diverging"</span><span class="token punctuation">)</span>
p3 <span class="token operator">&lt;-</span> view_palette<span class="token punctuation">(</span>palette <span class="token operator">=</span> palette_tpl_sequential<span class="token punctuation">)</span> <span class="token operator">+</span> ggtitle<span class="token punctuation">(</span><span class="token string">"Sequential"</span><span class="token punctuation">)</span>

gridExtra<span class="token operator">::</span>grid.arrange<span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">,</span> nrow <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-13-1.png"
    }, {}, {})}
<p>These palettes were created using <a href="${"http://colorbrewer2.org"}" rel="${"nofollow"}">http://colorbrewer2.org</a> and
<a href="${"http://coloors.co"}" rel="${"nofollow"}">http://coloors.co</a> and are colorblind friendly.</p>
<p>The diverging and sequential color palettes are from
<a href="${"http://colorbrewer2.org"}" rel="${"nofollow"}">http://colorbrewer2.org</a> and the categorical palette is composed of a
variety of colors from <a href="${"https://coolors.co/"}" rel="${"nofollow"}">https://coolors.co/</a> and the TPL website.</p>
<p>In action, the color palette looks like this:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">normal <span class="token operator">&lt;-</span> diamonds <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>clarity<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>price <span class="token operator">=</span> mean<span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>clarity <span class="token operator">=</span> forcats<span class="token operator">::</span>fct_reorder<span class="token punctuation">(</span>clarity<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_col<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> clarity<span class="token punctuation">,</span> y <span class="token operator">=</span> price<span class="token punctuation">,</span> fill <span class="token operator">=</span> clarity<span class="token punctuation">)</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"TPL Color Palette"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"in action"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> <span class="token string">"Clarity"</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> <span class="token string">"Price"</span><span class="token punctuation">,</span>
       fill <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>axis.text.x <span class="token operator">=</span> element_text<span class="token punctuation">(</span>angle <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">,</span> hjust <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_flip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_fill_discrete<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  drop_axis<span class="token punctuation">(</span>axis <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">)</span>

reversed <span class="token operator">&lt;-</span> normal <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>subtitle <span class="token operator">=</span> <span class="token string">"(reversed)"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_fill_discrete<span class="token punctuation">(</span>reverse <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>

gridExtra<span class="token operator">::</span>grid.arrange<span class="token punctuation">(</span>normal<span class="token punctuation">,</span> reversed<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-14-1.png"
    }, {}, {})}
<p>The user may specify the color palette in the <code>scale_fill_*</code> or
<code>scale_color_*</code> functions in a ggplot call. Specifically, the user can
specify the <code>palette</code> (categorical, diverging, sequential) and whether
the palette should be reversed.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">set_tpl_theme<span class="token punctuation">(</span>style <span class="token operator">=</span> <span class="token string">"print"</span><span class="token punctuation">,</span> font <span class="token operator">=</span> <span class="token string">"lato"</span><span class="token punctuation">)</span>
normal <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>diamonds<span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_bar<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> cut<span class="token punctuation">,</span> fill <span class="token operator">=</span> clarity<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"TPL Color Palette"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"On sample data"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> <span class="token string">"Cut"</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> <span class="token string">"Count"</span><span class="token punctuation">,</span>
       fill <span class="token operator">=</span> <span class="token string">"Clarity"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>axis.text.x <span class="token operator">=</span> element_text<span class="token punctuation">(</span>angle <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">,</span> hjust <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

reversed <span class="token operator">&lt;-</span> normal <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>subtitle <span class="token operator">=</span> <span class="token string">"(reversed)"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_fill_discrete<span class="token punctuation">(</span>reverse <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>

gridExtra<span class="token operator">::</span>grid.arrange<span class="token punctuation">(</span>normal<span class="token punctuation">,</span> reversed<span class="token punctuation">,</span> nrow <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-15-1.png"
    }, {}, {})}
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token operator">&lt;-</span> gapminder<span class="token operator">::</span>gapminder <span class="token percent-operator operator">%>%</span>
  dplyr<span class="token operator">::</span>filter<span class="token punctuation">(</span>gapminder<span class="token operator">::</span>gapminder<span class="token operator">$</span>country <span class="token percent-operator operator">%in%</span> c<span class="token punctuation">(</span><span class="token string">"France"</span><span class="token punctuation">,</span> <span class="token string">"Germany"</span><span class="token punctuation">,</span> <span class="token string">"Ireland"</span><span class="token punctuation">,</span> <span class="token string">"Italy"</span><span class="token punctuation">,</span> <span class="token string">"Japan"</span><span class="token punctuation">,</span> <span class="token string">"Norway"</span><span class="token punctuation">,</span> <span class="token string">"Mexico"</span><span class="token punctuation">,</span> <span class="token string">"United States"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  dplyr<span class="token operator">::</span>mutate<span class="token punctuation">(</span>year <span class="token operator">=</span> as.Date<span class="token punctuation">(</span>paste<span class="token punctuation">(</span>year<span class="token punctuation">,</span> <span class="token string">"-01-01"</span><span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> format<span class="token operator">=</span><span class="token string">'%Y-%b-%d'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span>data <span class="token operator">=</span> data<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x <span class="token operator">=</span> year<span class="token punctuation">,</span> y <span class="token operator">=</span> gdpPercap<span class="token punctuation">,</span> fill <span class="token operator">=</span> country<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_area<span class="token punctuation">(</span>alpha <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_date<span class="token punctuation">(</span>expand <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> labels <span class="token operator">=</span> scales<span class="token operator">::</span>dollar<span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"GDP Per Capita Over Time"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"Using the TPL Color Palette"</span><span class="token punctuation">,</span>
       x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> <span class="token string">"GDP Per Capita"</span><span class="token punctuation">,</span>
       fill <span class="token operator">=</span> <span class="token string">"Country"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>axis.text.x <span class="token operator">=</span> element_text<span class="token punctuation">(</span>angle <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">,</span> hjust <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-16-1.png"
    }, {}, {})}
<h3 id="${"restore-defaults"}"><a href="${"#restore-defaults"}">Restore Defaults</a></h3>
<p>By calling <code>undo_tpl_theme</code>, you are able to remove TPL-specific theme
settings and restores to ggplot defaults (but why would you want to do
that?).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">undo_tpl_theme<span class="token punctuation">(</span><span class="token punctuation">)</span>

ggplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> aes<span class="token punctuation">(</span>x<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Width<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>jitter<span class="token punctuation">(</span>Sepal.Length<span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token operator">=</span>Species<span class="token punctuation">,</span> size <span class="token operator">=</span> Petal.Length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    geom_point<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    labs<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">"Sepal Width (cm)"</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Sepal Length (cm)"</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">"Species"</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token string">"Petal Length"</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">"Iris Dataset"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This results in the following plot:</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-17-1.png"
    }, {}, {})}
<p>To restore the TPL theme, simply call <code>set_tpl_theme()</code>:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">set_tpl_theme<span class="token punctuation">(</span><span class="token punctuation">)</span>
last_plot<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render($$result, {
      alt: "An example of a plot in the TPL theme.",
      src: "../images/post/introducing-tpltheme/unnamed-chunk-18-1.png"
    }, {}, {})}`
  })}`;
});
export { Introducing_tpltheme as default, metadata };
