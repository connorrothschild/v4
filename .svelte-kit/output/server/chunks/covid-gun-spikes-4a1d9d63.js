import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
import { I as Image } from "./Image-8bdf2a2d.js";
/* empty css                                             */import { T as TableHandler } from "./TableHandler-5d5d4ba9.js";
import { C as Code } from "./Code-7aa212db.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./CornerTitle-1139e2b5.js";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                              */import "prismjs";
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
  "title": "Firearm Background Checks Are Spiking",
  "description": "Visualizing the precipitous rise in gun sales during COVID-19",
  "date": "2020-07-02",
  "image": "covid-gun-spikes/header.png",
  "featured": true,
  "tags": ["analysis", "r"]
};
const Covid_gun_spikes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-gun-spikes/featured.png",
      alt: "A small multiples map showing spikes in firearm background checks in 2020, compared to 1999-2019"
    }, {}, {})}
<p>So far in 2020, firearm background checks are happening <strong>significantly</strong> more frequently than they did during the first six months of the last 20 years. Some <a href="${"https://www.nytimes.com/interactive/2020/04/01/business/coronavirus-gun-sales.html"}" rel="${"nofollow"}">media reports</a> captured the gun-buying frenzy during its apparent peak in March, but according to data from the <a href="${"https://www.fbi.gov/file-repository/nics_firearm_checks_-_month_year_by_state_type.pdf/view"}" rel="${"nofollow"}">FBI NICS</a>, <em>the month of June saw the largest single month count of firearm background checks in the last 20 years.</em></p>
<p>The data, <a href="${"https://github.com/BuzzFeedNews/nics-firearm-background-checks"}" rel="${"nofollow"}">which is scraped and cleaned by BuzzFeed News</a>, shows a massive spike in firearm background checks in the last 5 months:</p>
${validate_component(Code, "Code").$$render($$result, { language: "r", showLineNumbers: false }, {}, {
      default: () => `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">library<span class="token punctuation">(</span>reactable<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>geofacet<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>scales<span class="token punctuation">)</span>

theme_set<span class="token punctuation">(</span>theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

data <span class="token operator">&lt;-</span> readr<span class="token operator">::</span>read_csv<span class="token punctuation">(</span><span class="token string">'data/data.csv'</span><span class="token punctuation">)</span>

data <span class="token operator">&lt;-</span> data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>month <span class="token operator">=</span> as.Date<span class="token punctuation">(</span>paste<span class="token punctuation">(</span>month<span class="token punctuation">,</span> <span class="token string">"-01"</span><span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        year <span class="token operator">=</span> lubridate<span class="token operator">::</span>year<span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span>year <span class="token operator">!=</span> <span class="token number">1998</span><span class="token punctuation">)</span>

data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>month <span class="token operator">=</span> lubridate<span class="token operator">::</span>month<span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token punctuation">,</span>
        month <span class="token operator">=</span> month.abb<span class="token punctuation">[</span>month<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>sum <span class="token operator">=</span> sum<span class="token punctuation">(</span>totals<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  reactable<span class="token punctuation">(</span>
    defaultSorted <span class="token operator">=</span> <span class="token string">'sum'</span><span class="token punctuation">,</span>
    defaultSortOrder <span class="token operator">=</span> <span class="token string">'desc'</span><span class="token punctuation">,</span>
    defaultColDef <span class="token operator">=</span> colDef<span class="token punctuation">(</span>headerClass <span class="token operator">=</span> <span class="token string">"header"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    compact <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span>
    fullWidth <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    columns <span class="token operator">=</span> list<span class="token punctuation">(</span>
      month <span class="token operator">=</span> colDef<span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Month"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      year <span class="token operator">=</span> colDef<span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Year"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      sum <span class="token operator">=</span> colDef<span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"# of Firearm Background Checks"</span><span class="token punctuation">,</span>
                  format <span class="token operator">=</span> colFormat<span class="token punctuation">(</span>separators <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    rowStyle <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>.<span class="token punctuation">[</span>index<span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2020</span><span class="token punctuation">)</span>
        list<span class="token punctuation">(</span>fontWeight <span class="token operator">=</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
            background <span class="token operator">=</span> <span class="token string">"rgba(0, 0, 0, 0.05)"</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`
    })}
${validate_component(TableHandler, "TableHandler").$$render($$result, {
      src: "../images/post/covid-gun-spikes/table-replacement.png",
      alt: "A table showing the years and months with the greatest number of firearm background checks. Those in 2020 are among the highest.",
      link: "http://connorrothschild.github.io/v2/post/covid-gun-spikes/",
      width: "70%"
    }, {}, {})}
<p>As the table shows, the last 5 months have seen some of the greatest numbers of firearm background checks since the FBI has collected such data. It seems as if the only non-2020 entrants to the top 7 are from December 2015, and December 2019, which are (perhaps coincidentally) both the final months before new presidents took office.</p>
<p>Visually, we see that firearm background checks follow some seasonal trends, but by and large, have undergone unprecedented spikes in the last 5 months:</p>
${validate_component(Code, "Code").$$render($$result, { language: "r", showLineNumbers: false }, {}, {
      default: () => `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">data %&gt;%
  group_by(month) %&gt;%
  summarise(sum = sum(totals)) %&gt;%
  ggplot(aes(x = month, y = sum)) +
  geom_line() +
  geom_area(alpha = .7, fill = &#39;red&#39;) +
  labs(y = element_blank(), x = element_blank(),
       title = &#39;Firearm background checks, over time&#39;) +
  scale_x_date(expand = expansion(c(0, 0.001))) +
  scale_y_continuous(expand = expansion(c(0, 0.001)),
                     labels = unit_format(
                       unit = &quot;M&quot;,
                       scale = 1e-6,
                       sep = &quot;&quot;,
                       accuracy = 1
                     ))</code>`}<!-- HTML_TAG_END --></pre>`
    })}
${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-gun-spikes/unnamed-chunk-4-1.png",
      alt: "An area chart showing background checks over time. Despite some seasonaility, the trend is increasing over time, and is at its highest point at the end of the chart in 2020."
    }, {}, {})}
<p>And we can better understand the magnitude of these shifts by visualizing year-to-year changes:</p>
${validate_component(Code, "Code").$$render($$result, { language: "r" }, {}, {
      default: () => `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>month <span class="token operator">=</span> lubridate<span class="token operator">::</span>month<span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>year<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>sum <span class="token operator">=</span> sum<span class="token punctuation">(</span>totals<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ungroup<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>last_year <span class="token operator">=</span> lag<span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">,</span>
         perc_change <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> last_year<span class="token punctuation">)</span> <span class="token operator">/</span> last_year<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> year<span class="token punctuation">,</span> y <span class="token operator">=</span> perc_change<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_col<span class="token punctuation">(</span>alpha <span class="token operator">=</span> <span class="token number">.7</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_hline<span class="token punctuation">(</span>yintercept <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expansion<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>labels <span class="token operator">=</span> percent_format<span class="token punctuation">(</span>accuracy <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       title <span class="token operator">=</span> <span class="token string">"Year-on-year changes in firearm background checks, 1999-2020"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"January through June"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`
    })}
${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-gun-spikes/unnamed-chunk-5-1.png",
      alt: "A barchart showing the temporal year-on-year change in background checks for firearms over time. The last year, 2020, is the highest, meaning background checks have seen the greatest year on year growth this year."
    }, {}, {})}
<p>Visualized another way, we can explore the temporal change <strong>within each year</strong> for every year between 1999 and 2020, with 2020 <span style="${"color:red"}">highlighted in red.</span></p>
${validate_component(Code, "Code").$$render($$result, { language: "r" }, {}, {
      default: () => `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>month <span class="token operator">=</span> lubridate<span class="token operator">::</span>month<span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>month<span class="token punctuation">,</span> year<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>sum <span class="token operator">=</span> sum<span class="token punctuation">(</span>totals<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>fill <span class="token operator">=</span> ifelse<span class="token punctuation">(</span>year <span class="token operator">==</span> <span class="token number">2020</span><span class="token punctuation">,</span> <span class="token string">"2020"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>group <span class="token operator">=</span> year<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> month<span class="token punctuation">,</span> y <span class="token operator">=</span> sum<span class="token punctuation">,</span> color <span class="token operator">=</span> fill<span class="token punctuation">,</span> alpha <span class="token operator">=</span> fill<span class="token punctuation">)</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_y_continuous<span class="token punctuation">(</span>limits <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> labels <span class="token operator">=</span> unit_format<span class="token punctuation">(</span>unit <span class="token operator">=</span> <span class="token string">"M"</span><span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> scale <span class="token operator">=</span> <span class="token number">1e-6</span><span class="token punctuation">,</span> accuracy <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_x_continuous<span class="token punctuation">(</span>breaks <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> labels <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"Jan"</span><span class="token punctuation">,</span> <span class="token string">"Feb"</span><span class="token punctuation">,</span> <span class="token string">"Mar"</span><span class="token punctuation">,</span> <span class="token string">"April"</span><span class="token punctuation">,</span> <span class="token string">"May"</span><span class="token punctuation">,</span> <span class="token string">"June"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_color_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"gray"</span><span class="token punctuation">,</span> <span class="token string">"red"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_alpha_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">.7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      title <span class="token operator">=</span> "Firearm background checks <span class="token keyword">in</span> <span class="token operator">&lt;</span>span style <span class="token operator">=</span> <span class="token string">'color: red;'</span><span class="token operator">></span><span class="token number">2020</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      compared to <span class="token operator">&lt;</span>span style <span class="token operator">=</span> <span class="token string">'color: #343434'</span><span class="token operator">></span><span class="token number">1999</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>"<span class="token punctuation">,</span>
      subtitle <span class="token operator">=</span> <span class="token string">"January to June"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>plot.title <span class="token operator">=</span> ggtext<span class="token operator">::</span>element_markdown<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`
    })}
${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-gun-spikes/unnamed-chunk-6-1.png",
      alt: "A line chart wherein each line shows a year, and the x axis corresponds to the month. The y axis represents the sum of background checks. The highest line is 2020, highlighted in red, indicating that across the entire year, 2020 has seen the greatest number of background checks."
    }, {}, {})}
<p>The FBI database also includes background check data for each U.S. state. This data allows us to compare trends <em>across</em> states and over time (using <code>geofacet</code>):</p>
${validate_component(Code, "Code").$$render($$result, { language: "r" }, {}, {
      default: () => `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">data <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>month <span class="token operator">=</span> lubridate<span class="token operator">::</span>month<span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  filter<span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  group_by<span class="token punctuation">(</span>month<span class="token punctuation">,</span> year<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  summarise<span class="token punctuation">(</span>sum <span class="token operator">=</span> sum<span class="token punctuation">(</span>totals<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  mutate<span class="token punctuation">(</span>fill <span class="token operator">=</span> ifelse<span class="token punctuation">(</span>year <span class="token operator">==</span> <span class="token number">2020</span><span class="token punctuation">,</span> <span class="token string">"2020"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  ggplot<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>group <span class="token operator">=</span> year<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_line<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>x <span class="token operator">=</span> month<span class="token punctuation">,</span> y <span class="token operator">=</span> sum<span class="token punctuation">,</span> color <span class="token operator">=</span> fill<span class="token punctuation">,</span> alpha <span class="token operator">=</span> fill<span class="token punctuation">)</span><span class="token punctuation">,</span>
            size <span class="token operator">=</span> <span class="token number">.2</span><span class="token punctuation">,</span> show.legend <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_color_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"gray"</span><span class="token punctuation">,</span> <span class="token string">"red"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  scale_alpha_manual<span class="token punctuation">(</span>values <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  facet_geo<span class="token punctuation">(</span><span class="token operator">~</span> state<span class="token punctuation">,</span> scales <span class="token operator">=</span> <span class="token string">'free_y'</span><span class="token punctuation">,</span> grid <span class="token operator">=</span> <span class="token string">"us_state_grid1"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>text <span class="token operator">=</span> element_text<span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
                            family <span class="token operator">=</span> <span class="token string">"IBM Plex Sans"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        axis.title<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        axis.text<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        axis.ticks<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        strip.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        strip.text <span class="token operator">=</span> element_text<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        panel.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        plot.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        panel.grid <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  labs<span class="token punctuation">(</span>x <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       title <span class="token operator">=</span> <span class="token string">"Spikes in gun ownership during COVID-19"</span><span class="token punctuation">,</span>
       subtitle <span class="token operator">=</span> <span class="token string">"How the first six months of 2020 compare to 1999-2019"</span><span class="token punctuation">)</span>

<span class="token comment">## With additional styling changes made in Illustrator!</span></code>`}<!-- HTML_TAG_END --></pre>`
    })}
${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-gun-spikes/featured.png",
      alt: "A small multiples map showing spikes in firearm background checks in 2020, compared to 1999-2019"
    }, {}, {})}
<h2 id="${"the-impact"}"><a href="${"#the-impact"}">The impact</a></h2>
<p>Most obviously, background checks are a proxy for gun purchases and gun ownership; as such, this data informs us that more and more people are grabbing for guns during COVID-19, perhaps in anticipation of some post-COVID apocalypse or perceived government overreach during.</p>
<p>In addition, one risk is that more guns can lead to greater numbers of firearm suicides. <a href="${"https://everytownresearch.org/reports/covid-gun-violence/"}" rel="${"nofollow"}">One group of researchers</a> at the gun safety organization Everytown predicted that COVID-related unemployment would lead to a 20-30% increase in firearm suicides (5000 to 7000 people). As such, a rise in firearm-related background checks may signal an impending surge of gun violence in the forms of both homicide and suicide.</p>
<p>Firearm background check data, however, requires close scrutiny. The way that these data are acquired on a state-by-state basis means that we might not be able to safely make comparisons <em>across</em> states. Moreover, according to <a href="${"https://www.thetrace.org/2015/10/private-sale-loophole-background-check-harvard-research/"}" rel="${"nofollow"}">one group of Harvard researchers</a>, upwards of 40% of all gun owners report acquiring their most recent gun <em>without a background check.</em></p>
<p>Thus, these numbers may tell a different story than one of \u2018guns are being purchased more frequently.\u2019 Although not employed in this post, there are some novel ways to develop stories similar to that one, like using <a href="${"https://github.com/nytimes/gunsales#getting-gun-sales-estimates-from-background-checks"}" rel="${"nofollow"}">NYT\u2019s methodology</a> to estimate gun sales from background check data. I encourage those interested to pursue their work, alongside the <a href="${"https://github.com/BuzzFeedNews/nics-firearm-background-checks"}" rel="${"nofollow"}">BuzzFeed News repository</a> where this data came from, and analyze such questions yourself.</p>`
  })}`;
});
export { Covid_gun_spikes as default, metadata };
