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
  "title": "COVID-19 Posts: A Novel Dataset",
  "description": "Making hundreds of COVID-19 blog posts from the R community available for public use",
  "date": "2020-11-02",
  "image": "covid-posts/header.png",
  "archived": true,
  "tags": ["analysis", "r"]
};
const Covid_posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Over the last few months, we\u2019ve been collecting hundreds of COVID-19
blog posts from the R community. Today, we are excited to share this
dataset publicly, to help bloggers who want to analyze COVID-19 data by
unleashing R and the resources of its community by being able to
research such posts.</p>
<p>So far, we have found and recorded 423 COVID posts in English. In an
effort to encourage others to explore such posts, we\u2019ve published a <a href="${"https://connorrothschild.shinyapps.io/covid-posts/"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Shiny web app</a>
which allow users to find the names of the 231 bloggers who wrote those
posts, their roles, and their country of focus. The app also lets users
interactively search the collection of posts by primary topic, post
title, date, and whether the post uses a particular mathematical
technique or data source. To learn more about the evolution of this
dataset, one of the authors (Rees) has published nine articles on
Medium, which you can find <a href="${"https://medium.com/@rees_32356"}" target="${"_blank"}" rel="${"noopener noreferrer"}">here</a>.</p>
<p>We encourage users to submit their own posts\u2013or others\u2019 posts\u2013for
inclusion, which can be done on this <a href="${"https://docs.google.com/forms/d/e/1FAIpQLScfob3uBoumXIRcSW83T0GhXCfi-KI_psGxIqtl_rQ5VHu9ZQ/viewform?usp=sf_link"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Google Form</a>.
Our dataset, as well as the code for the Shiny app, is available on <a href="${"https://github.com/connorrothschild/covid-posts"}" target="${"_blank"}" rel="${"noopener noreferrer"}">GitHub</a>.
If anyone has corrections to the dataset, please write Rees (at)
ReesMorrison (dot) com.</p>
<p>The remainder of this post highlights some of the findings from the
dataset of COVID-19 posts. As will be made evident by the plots that
follow, this is by no means a comprehensive review of <em>every</em> COVID-19 R
blog post, but rather an overview of the data <em>that we have found</em>.</p>
<h3 id="${"posts-over-time"}"><a href="${"#posts-over-time"}">Posts over time</a></h3>
<p>As the pandemic has progressed, fewer bloggers have engaged with
COVID-related data, as we notice that blog posts peaked in March of 2020.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "COVID-19 blog posts by week. There is a peak in mid March (40 posts).",
      src: "../images/post/covid-posts/weekly-1.png"
    }, {}, {})}
<p>Some bloggers have been prolific; many more have been one and done. The
plot below shows the names and posts of the 23 bloggers who have so far
published at least four posts. For an example of how to read the plot,
Tim Churches, at the bottom of the y-axis, has published a total of nine
posts, but none after early April.</p>
<p>The color of the points corresponds to the work role of the blogger as
explained in the legend at the bottom. It is immediately apparent that
professors and academic researchers predominate in this group of
bloggers. If you include the postgraduate students, universities writ
large account for nearly all of the prolific bloggers.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A dumbbell chart showcasing the timing of posts among 'prolific authors' (4 or more total posts). It shows temporally when these individuals post. ",
      src: "../images/post/covid-posts/prolificVer2-1.png"
    }, {}, {})}
<h3 id="${"roles-of-authors"}"><a href="${"#roles-of-authors"}">Roles of authors</a></h3>
<p>The bloggers in our dataset describe their work-day roles in a variety
of ways. One of the authors (Rees) standardized these job roles by
categorizing the multitude of terms and descriptions, but it is quite
possible that this effort misrepresented what some of these bloggers do
for a living. We welcome corrections.</p>
<p>We\u2019ve further categorized roles into a broad typology where professions
fall into one of five categories: <em>university</em>, <em>corporate</em>,
<em>professional</em>, <em>government</em>, and <em>nonprofit</em>. Those broader categories
are represented as columns in the following chart.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A barchart showcasing the roles of authors in our dataset. The most common is university (205) followed by corporate (140).",
      src: "../images/post/covid-posts/authorVer2-1.png"
    }, {}, {})}
<h3 id="${"data-sources"}"><a href="${"#data-sources"}">Data sources</a></h3>
<p>A greater number of data sources related to COVID-19 will yield richer
insights. Combining different datasets can shed new light on an issue,
yield improvements, and allow authors to contruct better indices and
measures. For that reason, one of the authors (Rees) extracted <em>dataset
information</em> from our collection of blog posts.</p>
<p>For the most part, bloggers identified the data source they drew on for
their analysis. On occasion, we had to apply some effort to standardize
the 140 data sources.</p>
<p>By far the most prevalent data source is Johns Hopkins University, who
early, comprehensively and consistently has set the standard for
COVID-19 data collection and dissemination to the public.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A barchart showcasing the most common data sources in our dataset. John Hopkins leads the pack at 51.",
      src: "../images/post/covid-posts/dataTable-1.png"
    }, {}, {})}
<p>Below, you can look at <em>all</em> data sources and how often they were
referenced in COVID-19 blog posts.</p>
<div class="${"table-container"}"><table><thead><tr><th align="${"left"}">Data Source</th>
<th align="${"right"}">Count</th></tr></thead>
<tbody><tr><td align="${"left"}">Johns Hopkins University</td>
<td align="${"right"}">51</td></tr>
<tr><td align="${"left"}">New York Times</td>
<td align="${"right"}">14</td></tr>
<tr><td align="${"left"}">Wikipedia</td>
<td align="${"right"}">13</td></tr>
<tr><td align="${"left"}">Apple Mobility</td>
<td align="${"right"}">8</td></tr>
<tr><td align="${"left"}">COVID Tracking Project</td>
<td align="${"right"}">8</td></tr>
<tr><td align="${"left"}">World Bank</td>
<td align="${"right"}">7</td></tr>
<tr><td align="${"left"}">European Centre for Disease Control (ECDC)</td>
<td align="${"right"}">6</td></tr>
<tr><td align="${"left"}">U.S. Census Bureau</td>
<td align="${"right"}">6</td></tr>
<tr><td align="${"left"}">Our World in Data</td>
<td align="${"right"}">5</td></tr>
<tr><td align="${"left"}">Twitter</td>
<td align="${"right"}">5</td></tr>
<tr><td align="${"left"}">Assessment Capacities Project (ACAPS)</td>
<td align="${"right"}">4</td></tr>
<tr><td align="${"left"}">COVID19 package</td>
<td align="${"right"}">4</td></tr></tbody></table></div>
<h3 id="${"blog-post-topics"}"><a href="${"#blog-post-topics"}">Blog post topics</a></h3>
<p>It may also be the case that readers want a summary of blogs, or to only
look at posts that pertain to a certain topic. Assigning each blog post
a primary topic introduces a fair amount of subjectivity, to be sure,
but the hope is that these broad topics will help researchers find
content and colleagues who share similar interests.</p>
<p>Here, a balloon plot shows various categories that the 423 posts address
as their primary topic. Topics fall on the y axis and the blogger\u2019s
category of employment is on the x axis. The size (and opacity) of each
bubble represents the count of posts that match that combination.
Epidemiology leads the way, as might be expected, but quite a few posts
seem to use COVID data to showcase something else, or apply R in novel
ways.</p>
${validate_component(Image, "Image").$$render($$result, {
      alt: "A balloon plot shows the number of posts by topic and employment category. The most common is university/epidemiology (107 posts).",
      src: "../images/post/covid-posts/topicsVer2-1.png"
    }, {}, {})}
<h2 id="${"concluding-thoughts"}"><a href="${"#concluding-thoughts"}">Concluding thoughts</a></h2>
<p>We encourage you to use our <a href="${"https://connorrothschild.shinyapps.io/covid-posts/"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Shiny application</a>
to explore the data for yourself. If you\u2019d like to submit your post to
be included, fill out this <a href="${"https://docs.google.com/forms/d/e/1FAIpQLScfob3uBoumXIRcSW83T0GhXCfi-KI_psGxIqtl_rQ5VHu9ZQ/viewform?usp=sf_link"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Google Form</a>.</p>
<p>As we note in the footer of the application, the R community is
intelligent and produces interesting content, but not all of us are
experts when it comes to COVID-19. Engaging with these posts will allow
you to better understand the application of R to our current moment, and
perhaps provide feedback to post authors. We do not endorse the findings
of any particular author and encourage you to find accurate, relevant,
and recent information from reputable sources such as the <a href="${"https://www.cdc.gov/"}" target="${"_blank"}" rel="${"noopener noreferrer"}">CDC</a> and the <a href="${"https://www.who.int/"}" target="${"_blank"}" rel="${"noopener noreferrer"}">WHO</a>.</p>
<p>As always, thanks for reading.</p>`
  })}`;
});
export { Covid_posts as default, metadata };
