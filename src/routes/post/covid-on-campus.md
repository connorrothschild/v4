---
layout: blog
title: "An Analysis of COVID on Campus"
date: "2020-10-02"
description: Where university reopenings led to spikes in COVID-19 case counts
image: covid-on-campus/header.png
archived: true
tags: ['analysis', 'r']
---

<script>
  import Image from "../../lib/Global/Image.svelte"
  import Info from "../../lib/Global/Info.svelte"
  import TableHandler from "../../lib/Global/TableHandler.svelte"
</script>

<svelte:head>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</svelte:head>

On July 17, Rice University announced [its
plan](https://coronavirus.rice.edu/news/message-president-leebron-july-17)
for the fall semester, which included a hybrid mode of instruction where
students could attend classes either virtually or in person. The
decision wasn’t without controversy; in the weeks that followed,
[multiple](https://www.ricethresher.org/article/2020/08/return-to-campus-but-to-what-end)
[faculty](https://www.ricethresher.org/article/2020/07/letter-to-the-editor-on-returning-to-the-classroom)
[members](https://www.ricethresher.org/article/2020/07/letter-to-the-editor-re-evaluate-return-to-campus)
at Rice wrote of their concerns with the plan to begin classes,
eventually culminating in a
[petition](https://www.ricethresher.org/article/2020/08/faculty-senate-will-meet-to-discuss-risks-and-benefits-of-returning-to-campus)
to convene a campus-wide discussion regarding the risks and benefits of
opening campus. The petition garnered nearly 100 faculty signatures.

Despite such complaints, Rice opened its doors to in-person students on
August 11th. And despite all of the concerns, the university has done a
remarkable job at keeping COVID case counts relatively low.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A big part of <a href="https://twitter.com/RiceUniversity?ref_src=twsrc%5Etfw">@RiceUniversity</a>&#39;s approach to COVID-19: test often. Within the first two weeks of August, the university recorded over 4000 tests, with a total of 19 positive cases (0.41%). <a href="https://t.co/IDI3qtIE6f">pic.twitter.com/IDI3qtIE6f</a></p>&mdash; Connor Rothschild (@CL_Rothschild) <a href="https://twitter.com/CL_Rothschild/status/1296495845664272386?ref_src=twsrc%5Etfw">August 20, 2020</a></blockquote>

Rice’s success at maintaining low case
counts–[recording](https://coronavirus.rice.edu/) only 37 positive cases
across 36,183 tests as of October 10–is not typical of most colleges. At
universities across the country, reopening was often accompanied by a
[surge](https://apnews.com/article/virus-outbreak-indiana-muncie-b62eacec9bd3fff89eeab1a8de72f819)
in new COVID-19 cases; surges that, in many instances, forced those
universities to
[reverse](https://www.jsonline.com/story/news/education/2020/09/09/uw-madison-pauses-person-classes-two-weeks/5766409002/)
their
[reopening](https://www.nytimes.com/2020/08/17/us/unc-chapel-hill-covid.html)
[decisions](https://www.usnews.com/news/education-news/articles/2020-09-08/facing-coronavirus-spikes-colleges-send-students-home-against-the-warnings-of-public-health-officials)
within just a few weeks.

The table below presents cumulative university-affiliated COVID cases,
broken down by college (from the [New York
Times](https://github.com/nytimes/covid-19-data/tree/master/colleges)):

<TableHandler src="/images/post/covid-on-campus/table1.png" alt="A table showcasing universities that have the greatest number of COVID-19 cases. University of Georgia leads the pack at 3888 cases. Last updated October 11, 2020" link="http://connorrothschild.github.io/v2/post/covid-on-campus/" width="80%"></TableHandler>

In addition to the criticism leveled against university administrators
for jeopardizing the health and safety of their _students_, to what
extent have reopenings put the community at large at greater risk?

One way to answer this question is to analyze case counts attributable
to university students as a relative proportion of a county’s overall
case counts. The New York Times offers data in both forms:
[college-affiliated
cases](https://github.com/nytimes/covid-19-data/tree/master/colleges)
and [county
cases](https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv)
(cumulative). In combination, the data tells a story about which
colleges are struggling the most with COVID-19, which college towns saw
a COVID spike after university reopenings, and which cities have
problems much larger than students throwing fraternity parties.

Below, you can explore your county’s case count relative to its
university-affiliated case counts.

<TableHandler src="/images/post/covid-on-campus/table2.png" alt="A table showcasing counties that have the greatest number of COVID-19 cases attributable to colleges. Pickens, South Carolina is expanded, showcasing two universities which account for 105% of the county's total cases. Last updated October 11, 2020" link="http://connorrothschild.github.io/v2/post/covid-on-campus/" width="80%"></TableHandler>

In two counties, Otsego County (New York) and Pickens County (South
Carolina), university-affiliated COVID-19 case counts actually _outpace_
officially recorded COVID-19 cases in their respective counties. This
might signal an issue with the data, or a unique way of treating
university students in county-wide case counts. According to one of the
investigative reporters who recorded this data at the New York Times,
county-wide case totals might not include out-of-state residents, such
as college students:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Coronavirus infections on campuses might go unnoticed if not for reporting by academic institutions themselves because they do not always show up in official state or countywide tallies, which generally exclude people who have permanent addresses elsewhere, as students often do.</p>&mdash; Danielle Ivory (@danielle_ivory) <a href="https://twitter.com/danielle_ivory/status/1314597852782489602?ref_src=twsrc%5Etfw">October 9, 2020</a></blockquote>

In other counties, we see a more intuitive picture, where college cases
constitute a proportion of overall county cases. Even if the same issue
is present in these counties, you can understand generally where
university COVID case counts are high relative to their county-wide
totals, and where they are not.

### University-affiliated COVID cases across states

The data also tells a story about COVID case counts on a state-by-state
basis, and where college-affiliated cases make up a disproportionate
share of cases in the state overall.

Geographically, the data looks like this (note the x-axis runs from 0 to
10%):

<Image src="/images/post/covid-on-campus/geofacet_processed.png" alt="A geofaceted map that shows percent of COVID cases attributable to colleges, by US state. Each state ranges between 0 and 10% of total cases attributable to colleges."></Image>

In the table below, you can search for your state and drill down on
which counties within your state make up the greatest share of COVID-19
cases.

<TableHandler src="/images/post/covid-on-campus/table3.png" alt="A table showcasing states that have the greatest number of COVID-19 cases attributable to colleges. Wyoming (number 1) is expanded, showcasing three universities which account for 7% of the state's total cases. Last updated October 11, 2020" link="http://connorrothschild.github.io/v2/post/covid-on-campus/" width="80%"></TableHandler>

Thanks for reading. You can find the code that creates the tables and
graphics for this post [on
GitHub](https://github.com/connorrothschild/v2/tree/master/content/post/covid-on-campus/index.Rmd).
As always, feel free to message me on
[Twitter](https://twitter.com/CL_Rothschild) with any questions,
comments, or just to say hi 🙂
