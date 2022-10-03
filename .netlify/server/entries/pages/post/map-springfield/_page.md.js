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
  "title": "Create a Streetmap of Any City in R",
  "description": "Creating a beautiful streetmap of my hometown, exclusively in R",
  "date": "2019-11-21",
  "image": "map-springfield/header.png",
  "archived": true,
  "tags": ["r"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>In this post, I expand upon <a href="${"https://christianburkhart.de/"}" rel="${"nofollow"}">Christian
Burkhart</a>\u2019s wonderful <a href="${"https://ggplot2tutor.com/streetmaps/streetmaps/"}" rel="${"nofollow"}">ggplot2tor
tutorial</a> on streetmap
creation using ggplot2. My process differs slightly from his in that I
include text using <code>geom_label</code>, rather than PowerPoint, to create the
text annotations. (This was much more difficult!)</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>gridExtra<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>lattice<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>osmdata<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>sf<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>First, per the tutorial, we load street (and river, etc). data:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">streets <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"highway"</span><span class="token punctuation">,</span>
                  value <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"motorway"</span><span class="token punctuation">,</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>
                            <span class="token string">"secondary"</span><span class="token punctuation">,</span> <span class="token string">"tertiary"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span>

small_streets <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"highway"</span><span class="token punctuation">,</span>
                  value <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"residential"</span><span class="token punctuation">,</span> <span class="token string">"living_street"</span><span class="token punctuation">,</span>
                            <span class="token string">"unclassified"</span><span class="token punctuation">,</span>
                            <span class="token string">"service"</span><span class="token punctuation">,</span> <span class="token string">"footway"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span>

river <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"waterway"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">"river"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Next, we define the plot limits, using the lat-long found in the last
step.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">right <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">93.175</span>
left <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">93.395</span>
bottom <span class="token operator">=</span> <span class="token number">37</span>
top <span class="token operator">=</span> <span class="token number">37.275</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In my plot, I\u2019m going to create a text box to hold the city, state, and
lat/long combination.</p>
<p>We can create the parameters for this box through some manipulations of
the existing plot limits:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">top_rect <span class="token operator">=</span> <span class="token punctuation">(</span>top <span class="token operator">+</span> bottom<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2.0035</span>
bot_rect <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.01</span>
box_height <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bot_rect<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
mid_box <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Finally, we can create a black and white plot. This follows the same
structure as the ggplot2tor tutorial:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot_bw <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.3</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.8</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> small_streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.6</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> river<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.2</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.5</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_sf<span class="token punctuation">(</span>xlim <span class="token operator">=</span> c<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">,</span>
           ylim <span class="token operator">=</span> c<span class="token punctuation">(</span>bottom<span class="token punctuation">,</span> top<span class="token punctuation">)</span><span class="token punctuation">,</span>
           expand <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme_void<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    plot.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    panel.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.margin<span class="token operator">=</span>unit<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"mm"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Finally, we can introduce our text elements using <code>geom_text</code> (as well
as borders using <code>geom_rect</code>).</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">map_bw <span class="token operator">&lt;-</span> plot_bw <span class="token operator">+</span>
  <span class="token comment"># big box</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top <span class="token operator">-</span> <span class="token number">.005</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># smaller, label box</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bot_rect<span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top_rect
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.75</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.6</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># springfield</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">+</span> <span class="token number">.002</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"SPRINGFIELD&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    fontface <span class="token operator">=</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">9</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># a line that goes behind 'Missouri'</span>
  geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>
    x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    y <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    xend <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    yend <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># Missouri label</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"MISSOURI"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token comment"># alpha = .9,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    <span class="token comment"># fontface = "thin",</span>
    size <span class="token operator">=</span> <span class="token number">7</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># coords</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.02</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"37.2090\xB0 N / 93.2923\xB0 W"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># me!</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.035</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> top_rect <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      label <span class="token operator">=</span> <span class="token string">"Design: Connor Rothschild"</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span>
  <span class="token punctuation">)</span>

map_bw</code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A black and white map of Springfield, Missouri.",
          src: "/images/post/map-springfield/bw_map_springfield.png",
          width: "50%",
          centered: true
        },
        {},
        {}
      )}
<p>And if we replicate that code with different colors, the possibilities are endless:</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">plot_gold <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"steelblue"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.3</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.8</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> small_streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.6</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> river<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.2</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.5</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_sf<span class="token punctuation">(</span>
    xlim <span class="token operator">=</span> c<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">,</span>
    ylim <span class="token operator">=</span> c<span class="token punctuation">(</span>bottom<span class="token punctuation">,</span> top<span class="token punctuation">)</span><span class="token punctuation">,</span>
    expand <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  theme_void<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    plot.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    panel.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.margin <span class="token operator">=</span> unit<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"mm"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

map_gold <span class="token operator">&lt;-</span> plot_gold <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top <span class="token operator">-</span> <span class="token number">.005</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bot_rect<span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top_rect
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.5</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">+</span> <span class="token number">.002</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"SPRINGFIELD&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    fontface <span class="token operator">=</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">9</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>
    x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    y <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    xend <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    yend <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"MISSOURI"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    <span class="token comment"># alpha = .9,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    <span class="token comment"># fontface = "thin",</span>
    size <span class="token operator">=</span> <span class="token number">7</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.02</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"37.2090\xB0 N / 93.2923\xB0 W"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.035</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> top_rect <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      label <span class="token operator">=</span> <span class="token string">"Design: Connor Rothschild"</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span>
  <span class="token punctuation">)</span>

map_gold</code>`}<!-- HTML_TAG_END --></pre>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A gold map of Springfield, Missouri.",
          src: "/images/post/map-springfield/gold_map_springfield.png",
          width: "50%",
          centered: true
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
