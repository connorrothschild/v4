import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-ad6722d5.js";
import { I as Image } from "./Image-8bdf2a2d.js";
/* empty css                                             */import { T as TableHandler } from "./TableHandler-5d5d4ba9.js";
import "./BackTo-23f10359.js";
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
  "title": "An Analysis of COVID on Campus",
  "date": "2020-10-02",
  "description": "Where university reopenings led to spikes in COVID-19 case counts",
  "image": "covid-on-campus/header.png",
  "tags": ["analysis", "r"]
};
const Covid_on_campus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script async src="${"https://platform.twitter.com/widgets.js"}" charset="${"utf-8"}" data-svelte="svelte-lj1ja"><\/script>`, ""}
${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>On July 17, Rice University announced <a href="${"https://coronavirus.rice.edu/news/message-president-leebron-july-17"}" rel="${"nofollow"}">its
plan</a>
for the fall semester, which included a hybrid mode of instruction where
students could attend classes either virtually or in person. The
decision wasn\u2019t without controversy; in the weeks that followed,
<a href="${"https://www.ricethresher.org/article/2020/08/return-to-campus-but-to-what-end"}" rel="${"nofollow"}">multiple</a>
<a href="${"https://www.ricethresher.org/article/2020/07/letter-to-the-editor-on-returning-to-the-classroom"}" rel="${"nofollow"}">faculty</a>
<a href="${"https://www.ricethresher.org/article/2020/07/letter-to-the-editor-re-evaluate-return-to-campus"}" rel="${"nofollow"}">members</a>
at Rice wrote of their concerns with the plan to begin classes,
eventually culminating in a
<a href="${"https://www.ricethresher.org/article/2020/08/faculty-senate-will-meet-to-discuss-risks-and-benefits-of-returning-to-campus"}" rel="${"nofollow"}">petition</a>
to convene a campus-wide discussion regarding the risks and benefits of
opening campus. The petition garnered nearly 100 faculty signatures.</p>
<p>Despite such complaints, Rice opened its doors to in-person students on
August 11th. And despite all of the concerns, the university has done a
remarkable job at keeping COVID case counts relatively low.</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">A big part of <a href="${"https://twitter.com/RiceUniversity?ref_src=twsrc%5Etfw"}">@RiceUniversity</a>&#39;s approach to COVID-19: test often. Within the first two weeks of August, the university recorded over 4000 tests, with a total of 19 positive cases (0.41%). <a href="${"https://t.co/IDI3qtIE6f"}">pic.twitter.com/IDI3qtIE6f</a></p>\u2014 Connor Rothschild (@CL_Rothschild) <a href="${"https://twitter.com/CL_Rothschild/status/1296495845664272386?ref_src=twsrc%5Etfw"}">August 20, 2020</a></blockquote>
<p>Rice\u2019s success at maintaining low case
counts\u2013<a href="${"https://coronavirus.rice.edu/"}" rel="${"nofollow"}">recording</a> only 37 positive cases
across 36,183 tests as of October 10\u2013is not typical of most colleges. At
universities across the country, reopening was often accompanied by a
<a href="${"https://apnews.com/article/virus-outbreak-indiana-muncie-b62eacec9bd3fff89eeab1a8de72f819"}" rel="${"nofollow"}">surge</a>
in new COVID-19 cases; surges that, in many instances, forced those
universities to
<a href="${"https://www.jsonline.com/story/news/education/2020/09/09/uw-madison-pauses-person-classes-two-weeks/5766409002/"}" rel="${"nofollow"}">reverse</a>
their
<a href="${"https://www.nytimes.com/2020/08/17/us/unc-chapel-hill-covid.html"}" rel="${"nofollow"}">reopening</a>
<a href="${"https://www.usnews.com/news/education-news/articles/2020-09-08/facing-coronavirus-spikes-colleges-send-students-home-against-the-warnings-of-public-health-officials"}" rel="${"nofollow"}">decisions</a>
within just a few weeks.</p>
<p>The table below presents cumulative university-affiliated COVID cases,
broken down by college (from the <a href="${"https://github.com/nytimes/covid-19-data/tree/master/colleges"}" rel="${"nofollow"}">New York
Times</a>):</p>
${validate_component(TableHandler, "TableHandler").$$render($$result, {
      src: "../images/post/covid-on-campus/table1.png",
      alt: "A table showcasing universities that have the greatest number of COVID-19 cases. University of Georgia leads the pack at 3888 cases. Last updated October 11, 2020",
      link: "http://connorrothschild.github.io/v2/post/covid-on-campus/",
      width: "80%"
    }, {}, {})}
<p>In addition to the criticism leveled against university administrators
for jeopardizing the health and safety of their <em>students</em>, to what
extent have reopenings put the community at large at greater risk?</p>
<p>One way to answer this question is to analyze case counts attributable
to university students as a relative proportion of a county\u2019s overall
case counts. The New York Times offers data in both forms:
<a href="${"https://github.com/nytimes/covid-19-data/tree/master/colleges"}" rel="${"nofollow"}">college-affiliated
cases</a>
and <a href="${"https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv"}" rel="${"nofollow"}">county
cases</a>
(cumulative). In combination, the data tells a story about which
colleges are struggling the most with COVID-19, which college towns saw
a COVID spike after university reopenings, and which cities have
problems much larger than students throwing fraternity parties.</p>
<p>Below, you can explore your county\u2019s case count relative to its
university-affiliated case counts.</p>
${validate_component(TableHandler, "TableHandler").$$render($$result, {
      src: "../images/post/covid-on-campus/table2.png",
      alt: "A table showcasing counties that have the greatest number of COVID-19 cases attributable to colleges. Pickens, South Carolina is expanded, showcasing two universities which account for 105% of the county's total cases. Last updated October 11, 2020",
      link: "http://connorrothschild.github.io/v2/post/covid-on-campus/",
      width: "80%"
    }, {}, {})}
<p>In two counties, Otsego County (New York) and Pickens County (South
Carolina), university-affiliated COVID-19 case counts actually <em>outpace</em>
officially recorded COVID-19 cases in their respective counties. This
might signal an issue with the data, or a unique way of treating
university students in county-wide case counts. According to one of the
investigative reporters who recorded this data at the New York Times,
county-wide case totals might not include out-of-state residents, such
as college students:</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">Coronavirus infections on campuses might go unnoticed if not for reporting by academic institutions themselves because they do not always show up in official state or countywide tallies, which generally exclude people who have permanent addresses elsewhere, as students often do.</p>\u2014 Danielle Ivory (@danielle_ivory) <a href="${"https://twitter.com/danielle_ivory/status/1314597852782489602?ref_src=twsrc%5Etfw"}">October 9, 2020</a></blockquote>
<p>In other counties, we see a more intuitive picture, where college cases
constitute a proportion of overall county cases. Even if the same issue
is present in these counties, you can understand generally where
university COVID case counts are high relative to their county-wide
totals, and where they are not.</p>
<h3 id="${"university-affiliated-covid-cases-across-states"}"><a href="${"#university-affiliated-covid-cases-across-states"}">University-affiliated COVID cases across states</a></h3>
<p>The data also tells a story about COVID case counts on a state-by-state
basis, and where college-affiliated cases make up a disproportionate
share of cases in the state overall.</p>
<p>Geographically, the data looks like this (note the x-axis runs from 0 to
10%):</p>
${validate_component(Image, "Image").$$render($$result, {
      src: "../images/post/covid-on-campus/geofacet_processed.png",
      alt: "A geofaceted map that shows percent of COVID cases attributable to colleges, by US state. Each state ranges between 0 and 10% of total cases attributable to colleges."
    }, {}, {})}
<p>In the table below, you can search for your state and drill down on
which counties within your state make up the greatest share of COVID-19
cases.</p>
${validate_component(TableHandler, "TableHandler").$$render($$result, {
      src: "../images/post/covid-on-campus/table3.png",
      alt: "A table showcasing states that have the greatest number of COVID-19 cases attributable to colleges. Wyoming (number 1) is expanded, showcasing three universities which account for 7% of the state's total cases. Last updated October 11, 2020",
      link: "http://connorrothschild.github.io/v2/post/covid-on-campus/",
      width: "80%"
    }, {}, {})}
<p>Thanks for reading. You can find the code that creates the tables and
graphics for this post <a href="${"https://github.com/connorrothschild/v2/tree/master/content/post/covid-on-campus/index.Rmd"}" rel="${"nofollow"}">on
GitHub</a>.
As always, feel free to message me on
<a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">Twitter</a> with any questions,
comments, or just to say hi \u{1F642}</p>`
  })}`;
});
export { Covid_on_campus as default, metadata };
