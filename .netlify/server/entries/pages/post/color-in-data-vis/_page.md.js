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
  "title": "Color in Data Visualization: Less How, More Why",
  "description": "An overview of the use of color in data visualization",
  "image": "color-in-data-vis/header.png",
  "date": "2020-01-02",
  "tags": ["color", "theory"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>If our use of color in visualizations follows the <a href="${"https://en.wikipedia.org/wiki/Five_Ws"}" rel="${"nofollow"}">Five Ws (and one H)</a>, we\u2019re spending too much time on <em>how</em>, and not enough time on <em>why</em>. Color is too often seen as a tool to make pretty pictures, when it should be used to inform our audiences.</p>
<p>For one example, look at this \u201CColor Emotion Guide\u201D from marketing site <a href="${"https://www.tapclicks.com/resources/post/the-influence-of-color-in-data-visualization/"}" rel="${"nofollow"}">TapClicks</a> (one of the top results when you Google \u201Ccolor in data visualization\u201D \u{1F9D0}).</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "Color guide that doesn\u2019t make any sense. Random emotions are assigned to different brand colors, with no apparent pattern.",
          src: "/images/post/color-in-data-vis/color-emotion-guide-lol.jpg"
        },
        {},
        {}
      )}
<p>The implicit suggestion here is that we should use color\u2014whenever and however we can\u2014to capture some form of emotion. Not only is this specific categorization rather odd (Monster energy drinks are peaceful, Virgin Mobile embodies \u201Cbold excitement\u201D, and Harley Davidson motorcycles just scream \u201Ccheerful friendliness\u201D \u{1F929}), it leads novice practitioners to believe that color should be used just for the sake of using color.</p>
<p>Examples of gratuitous color use abound.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A pie chart with far too many colors.",
          src: "/images/post/color-in-data-vis/bad-color-use-1.jpg",
          width: "29.2%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "Multiple pie charts, all with poor color usage.",
          src: "/images/post/color-in-data-vis/bad-color-use-2.jpg",
          width: "69%"
        },
        {},
        {}
      )}
<p>These examples illustrate my thesis: <strong>Too often, we ask <em>how</em> we can use color in our visualizations when we should be asking <em>why</em> we are using it.</strong></p>
<p>Some combination of 1) default software settings, 2) an obsession with pretty color palettes, and 3) a lack of emphasis on careful color consideration has led to a sloppy use of color in some of our most popular data visualizations.</p>
<p>One of the most common errors I see is the <em>overuse</em> of color. In the charts above, for example, it\u2019s evident that there are far too many colors, with no apparent reason for the</p>
<p>Often times, those creating visualizations will argue that they <em>must</em> include a 14 colors in their chart because the dataset has 14 data points of interest! It doesn\u2019t help that the default settings of some of the most popular data viz tools (such as Excel) by default map categorical variables to colors.</p>
<p>The reality is, however, that if you need more than a handful of colors in your chart, you can probably present your data in a different way. Take <a href="${"https://blog.datawrapper.de/colors/"}" rel="${"nofollow"}">this example</a> from Datawrapper:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "An example of a poor and better visualization. One has many colors sequentially, while the other breaks up each color into its own bar for clarity's sake.",
          src: "/images/post/color-in-data-vis/bad-and-better.jpg"
        },
        {},
        {}
      )}
<p>The takeaway? When you emphasize <em>everything</em>, you end up emphasizing <em>nothing</em>. That\u2019s why its important that we stop uncritically asking <em>how</em> we can use color in our charts.</p>
<p>A data visualization is nothing more than a pretty picture if it does not <em>inform</em> its viewer. And if your chart presents 14 different data points all mapped to different colors, what kind of story is it telling? I really like this from Apple\u2019s data visualization practitioner <a href="${"https://medium.com/@Elijah_Meeks/viz-palette-for-data-visualization-color-8e678d996077?"}" rel="${"nofollow"}">Elijah Meeks</a>:</p>
<blockquote><p>Rather than trying to find that impossible 20-color palette, stop using color when you have so many dimensions. It\u2019s indistinguishable, it\u2019s confusing and you\u2019re just off-loading the complexity and decision-making to your reader.</p></blockquote>
<p>That\u2019s why color should be used <em>more sparingly</em> and <em>more thoughtfully</em>. Color is one of the most important parts of our visualizations, yet their current use is far too often gratuitous and overwhelming.</p>
<h2 id="${"so-how-should-you-use-color"}"><a href="${"#so-how-should-you-use-color"}">So, how <em>should</em> you use color?</a></h2>
<p>Color is not the enemy. Rather, the (far too frequent) abuse and misuse of color is. So, how can you use color correctly? It depends on the purpose of your visualization, and, as a corollary, the purpose of color. You should ask: <strong>why am I using color?</strong></p>
<h3 id="${"1-color-to-differentiate"}"><a href="${"#1-color-to-differentiate"}">1) Color to differentiate</a></h3>
<p>One use of color is to draw attention to a data point of interest. This kind of color use would fall into the category of <a href="${"https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/ch01.html"}" rel="${"nofollow"}">explanatory visualization</a>, as opposed to its exploratory counterpart. If you\u2019ve already explored, analyzed, and probed your data, you now need to deliver those insights to someone else (a supervisor, a client, or a curious friend). It would be a waste of time to present to them all of the exploratory work you did, which is why your presentation should make use of color to focus on your findings.</p>
<p>As practitioner Andy Kirk <a href="${"https://www.visualisingdata.com/2015/01/make-grey-best-friend/"}" rel="${"nofollow"}">puts it</a>, visualization practitioners in this stage of presentation should <strong>make grey their best friend</strong>. This is because the <em>absence of color</em>, not the excessive use of it, helps paint a picture and tell a story. By using grey as the primary color in a visualization, we automatically draw our viewers\u2019 eyes to <span style="${"background: #FF9B9B; color: black; padding: 3px; border-radius: 3px; box-decoration-break: clone;"}">whatever isn\u2019t grey</span>. That way, if we are interested in telling a story about <em>one data point</em>, we can do so quite easily.</p>
<p>Here\u2019s a quick <a href="${"https://github.com/connorrothschild/bbdata"}" rel="${"nofollow"}">example</a> I made in R a while back:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A barplot showcasing vaccination by county in Texas. All bars are grey except the lowest bar, representing Terry County (78% vaccinated), which is highlighted in a royal blue.",
          src: "/images/post/color-in-data-vis/color-emphasized.png"
        },
        {},
        {}
      )}
<p>The point of the visualization is not to show our audience the kindergarten vaccination rate of <em>every county</em> in Texas. It is instead to highlight the lowest rate\u2014Terry County. This visualization leverages the grey fill of every other bar to immediately draw the audiences\u2019 eyes to Terry County. Because we used only two colors, we can also highlight text in the subtitle to make the connection even clearer for our audience. Color\u2014if used prudently\u2014makes our visualizations more digestible and more informative.</p>
<p>Now, imagine if I visualized that same data in the following way:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A barplot showcasing vaccination by county in Texas. All bars are grey.",
          src: "/images/post/color-in-data-vis/all-grey.jpg"
        },
        {},
        {}
      )}
<p>Or, even worse:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A barplot showcasing vaccination by county in Texas. All bars are separate colors, with no pattern present.",
          src: "/images/post/color-in-data-vis/all-color.jpg"
        },
        {},
        {}
      )}
<p>After seeing those eyesores, aren\u2019t you thankful that we used color sparingly in the initial plot?</p>
<p>Perhaps you\u2019re interested in a county-by-county overview of 2016 election results. Although you might be tempted to code all counties according to their Trump/Clinton split, that\u2019s prettier than it is insightful. What if, instead, we focused on those notable counties which flipped from one party to another between 2012 and 2016? From Kieran Healy\u2019s book <a href="${"https://socviz.co/refineplots.html#use-color-to-your-advantage"}" rel="${"nofollow"}">Data Visualization</a>:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot where each point represents a county's voting between 2016 and 2020. Highlighted counties 'flipped' between 2016 and 2020, with Republicans highlighted in red and Democrats in blue.",
          src: "/images/post/color-in-data-vis/flipping-points-color.jpg",
          width: "80%",
          centered: "true"
        },
        {},
        {}
      )}
<p>As we can see here, more counties flipped from majority-Democratic in 2012 to majority-Republican in 2016 than vice-versa. Because we\u2019re focusing on only a fraction of all of the data points, we can also observe trends: The majority of counties that flipped had a small black population. No county that had over a ~53% black population flipped in either direction (annotation my own):</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot where each point represents a county's voting between 2016 and 2020. Highlighted counties 'flipped' between 2016 and 2020, with Republicans highlighted in red and Democrats in blue. There is an annotation above 53% black to show that no counties with such a population flipped in either direction.",
          src: "/images/post/color-in-data-vis/flipping-points-color-annotate1.jpg",
          width: "80%",
          centered: "true"
        },
        {},
        {}
      )}
<p>We also notice that flipping direction might be correlated with population size: nearly all of the flipping counties with a log population under 100,000 flipped to Republicans, while a greater proportion of all switching counties flipped toward the Democratic Party if their log population was greater than 100,000.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot where each point represents a county's voting between 2016 and 2020. Highlighted counties 'flipped' between 2016 and 2020, with Republicans highlighted in red and Democrats in blue. There is an annotation past population 100,000 to show that more populous counties were more likely to flip Democratic.",
          src: "/images/post/color-in-data-vis/flipping-points-color-annotate2.jpg",
          width: "80%",
          centered: "true"
        },
        {},
        {}
      )}
<p>Color can, and should, be used to focus on the key parts of your visualization that you want your audience to see. By using color strategically, we can reduce the cognitive load required to understand <em>what</em> a visualization is depicting. <a href="${"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0183884#pone.0183884.ref008"}" rel="${"nofollow"}">Kalyuga et al.</a> found that color-coding \u201Cameliorated split-attention effects, resulting in lower perceived difficulty.\u201D <a href="${"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0183884#pone.0183884.ref024"}" rel="${"nofollow"}">Other researchers</a> have reported reductions in cognitive load when experiment participants were provided color-coding.</p>
<p>The overuse of colors can have the opposite effect. In one <a href="${"https://journals-sagepub-com.ezproxy.rice.edu/doi/full/10.1177/1747021818781425"}" rel="${"nofollow"}">2019 paper</a>, researchers found \u201Ctask-irrelevant digit colour information hampers the learning process only in instances where it triggers a conflict with the semantic properties of the base-code words.\u201D What does this mean? If color encoding conflicts with the objects it represents, it impedes learning and weakens understanding. You don\u2019t have to understand what all this means (I don\u2019t dully understand all of it). This point is simply to illustrate: <em>we should care about color</em>. Color can be confusing and complicated, which is why its use should be intentional and minimal. It should be used to draw attention to the important parts of our charts.</p>
<h3 id="${"2-color-to-explore"}"><a href="${"#2-color-to-explore"}">2) Color to explore</a></h3>
<p>Color does not have to be used in contrast to plain old grey. It can also be used as a tool to showcase a variety of data points all mapped to different colors. The important note is that this usage should be sparing. Given our prior examples, we definitely don\u2019t want a plot like this one (from <a href="${"https://serialmentor.com/dataviz/color-pitfalls.html"}" rel="${"nofollow"}">Chapter 19 of Claus Wilke\u2019s <em>Fundamentals of Data Visualization</em></a>):</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot where each point represents a state, and the x and y axis position showcase population vs population growth. Each state is shaded to a separate color, with no pattern.",
          src: "/images/post/color-in-data-vis/bad-chart.jpg",
          width: "50%",
          centered: "true"
        },
        {},
        {}
      )}
<p>A more appropriate alternative may look something like this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A scatterplot where each point represents a state, and the x and y axis position showcase population vs population growth. Each state is shaded according to its region.",
          src: "/images/post/color-in-data-vis/betterchart-1.jpg",
          width: "70%",
          centered: "true"
        },
        {},
        {}
      )}
<p>This way, the audience can still see general patterns in the data, but they don\u2019t have to treat the fill legend like a lookup table! Most ideally, this chart would have some interactivity, so that a user could hover over a point to see its respective data.</p>
<p>In examples like this, where we are <em>exploring</em> rather than <em>explaining</em>, we leave the exploration to our users; they can see what they want to see and we give them the information they need to do exactly that.</p>
<p>Another common use of color for exploratory purposes is showing data progression across a gradient (e.g. low to high, bad to good, cold to warm).</p>
<p>These examples are most commonly found in <a href="${"https://en.wikipedia.org/wiki/Choropleth_map"}" rel="${"nofollow"}">choropleth maps</a>, where the shade of color in a given state (or county, or region) corresponds to a value of interest. As an example, here\u2019s a <a href="${"https://connorrothschild.github.io/D3.js/map-overdoses/"}" rel="${"nofollow"}">choropleth map</a> I created using D3.js, which visualizes opioid-involved overdose deaths in the United States:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A choropleth chart wherein each state is shaded according to its opioid overdose rate.",
          src: "/images/post/color-in-data-vis/choropleth-ex.jpg",
          width: "70%",
          centered: "true"
        },
        {},
        {}
      )}
<p>As we can see from the map, \u201Crust belt\u201D states are suffering from the opioid crisis to a much greater degree than those in western states. Choropleth maps utilize color to show regional variation and illustrate the power of color <em>shading</em> to represent the severity or extent of a given variable.</p>
<p>However, color in this context can also be misused. Data may be mapped according to a categorical color scale, or a rainbow scale which makes it difficult to see progression. This chart from <a href="${"https://serialmentor.com/dataviz/color-pitfalls.html"}" rel="${"nofollow"}">Claus O. Wilke</a> is a good (bad) example:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          alt: "A map of Texas where each county is shaded according to its proportional white population. The color scale is rainbow, making it difficult to detect relative differences.",
          src: "/images/post/color-in-data-vis/map-Texas-rainbow-1.jpg",
          width: "70%",
          centered: "true"
        },
        {},
        {}
      )}
<p>This chart is pretty! When rainbow scales are used in the media or elsewhere, it may be because their creator asked \u201CHow can I use color to make a pretty picture?\u201D But this use of a non-monotonic color scale means that the relative size of differences between data points are difficult to detect. As an illustration, see how long it takes you to answer this question: using the legend above, what is the percent difference between <span style="${"color:#FF6701;"}">this color </span>and <span style="${"color:#3736FF;"}">this color</span>? (The answer is ~70%.)</p>
<p>In 2019, <a href="${"https://ieeexplore.ieee.org/document/8494817"}" rel="${"nofollow"}">a group of researchers</a> asked climate scientists to evaluate maps depicting changes in climate, where maps were either rainbow (similar to the Texas map above) or monotonic (such as the opioid map earlier). The researchers found that evaluations of magnitude difference in these maps were significantly more accurate when they were encoded with monotonic luminance scales rather than traditional rainbow scales. Other research consistently finds that rainbow color scales are both <a href="${"http://people.renci.org/~borland/pdfs/RainbowColorMap_VisViewpoints.pdf"}" rel="${"nofollow"}">harmful and popular</a>. All this to say: color matters.</p>
<p>So, color can be used for exploratory purposes. That is to say, color doesn\u2019t have to be used exclusively for focus, and it can be used in charts that have colors other than just grey! But exploratory color usage (as with all use of color) requires caution.</p>
<h2 id="${"conclusion"}"><a href="${"#conclusion"}">Conclusion</a></h2>
<p>Color is tricky. While it can take your plot to the next level, it can also ruin it. The difference? The questions we ask. Are we questioning <em>how</em> we can use color; which of the many palettes to use, and how we can map them across variables? These are <a href="${"https://socviz.co/refineplots.html#use-color-to-your-advantage"}" rel="${"nofollow"}">important questions</a>, but they have to be preceded by the question of <em>why</em> we use color in the first place. If color doesn\u2019t serve the purpose of informing, clarifying, or guiding our audience, what purpose does it serve?</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
