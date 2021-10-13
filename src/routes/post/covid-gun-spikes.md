---
layout: blog
title: "Firearm Background Checks Are Spiking"
description: Visualizing the precipitous rise in gun sales during COVID-19
date: "2020-07-02"
image: covid-gun-spikes/header.png
featured: true
---

<script>
  import Image from "../../lib/global/Image.svelte"
  import Info from "../../lib/global/Info.svelte"
  import TableHandler from "../../lib/global/TableHandler.svelte"
  import Code from "../../lib/global/Code.svelte"
</script>

<Image src="../images/post/covid-gun-spikes/featured.png" alt="A small multiples map showing spikes in firearm background checks in 2020, compared to 1999-2019"></Image>

So far in 2020, firearm background checks are happening **significantly** more frequently than they did during the first six months of the last 20 years. Some [media reports](https://www.nytimes.com/interactive/2020/04/01/business/coronavirus-gun-sales.html) captured the gun-buying frenzy during its apparent peak in March, but according to data from the [FBI NICS](https://www.fbi.gov/file-repository/nics_firearm_checks_-_month_year_by_state_type.pdf/view), _the month of June saw the largest single month count of firearm background checks in the last 20 years._

The data, [which is scraped and cleaned by BuzzFeed News](https://github.com/BuzzFeedNews/nics-firearm-background-checks), shows a massive spike in firearm background checks in the last 5 months:

<Code language='r' showLineNumbers={false}>

```r
library(reactable)
library(tidyverse)
library(geofacet)
library(scales)
library(cr)

set_cr_theme(font = "IBM Plex Sans")

data <- readr::read_csv('data/data.csv')

data <- data %>%
  mutate(month = as.Date(paste(month, "-01", sep = "")),
        year = lubridate::year(month)) %>%
  filter(year != 1998)

data %>%
  mutate(month = lubridate::month(month),
        month = month.abb[month]) %>%
  group_by(year, month) %>%
  summarise(sum = sum(totals)) %>%
  reactable(
    defaultSorted = 'sum',
    defaultSortOrder = 'desc',
    defaultColDef = colDef(headerClass = "header"),
    compact = TRUE,
    fullWidth = FALSE,
    columns = list(
      month = colDef(name = "Month"),
      year = colDef(name = "Year"),
      sum = colDef(name = "# of Firearm Background Checks",
                  format = colFormat(separators = TRUE))
    ),
    rowStyle = function(index) {
      if (.[index, "year"] == 2020)
        list(fontWeight = "bold",
            background = "rgba(0, 0, 0, 0.05)")
    }
  )
```

</Code>

<TableHandler src="../images/post/covid-gun-spikes/table-replacement.png" alt="A table showing the years and months with the greatest number of firearm background checks. Those in 2020 are among the highest." link="http://connorrothschild.github.io/v2/post/covid-gun-spikes/"></TableHandler>

As the table shows, the last 5 months have seen some of the greatest numbers of firearm background checks since the FBI has collected such data. It seems as if the only non-2020 entrants to the top 7 are from December 2015, and December 2019, which are (perhaps coincidentally) both the final months before new presidents took office.

Visually, we see that firearm background checks follow some seasonal trends, but by and large, have undergone unprecedented spikes in the last 5 months:

<Code language='r' showLineNumbers={false}>

```
data %>%
  group_by(month) %>%
  summarise(sum = sum(totals)) %>%
  ggplot(aes(x = month, y = sum)) +
  geom_line() +
  geom_area(alpha = .7, fill = 'red') +
  labs(y = element_blank(), x = element_blank(),
       title = 'Firearm background checks, over time') +
  scale_x_date(expand = expansion(c(0, 0.001))) +
  scale_y_continuous(expand = expansion(c(0, 0.001)),
                     labels = unit_format(
                       unit = "M",
                       scale = 1e-6,
                       sep = "",
                       accuracy = 1
                     )) +
  drop_axis("y")
```

</Code>

<Image src="../images/post/covid-gun-spikes/unnamed-chunk-4-1.png" alt="An area chart showing background checks over time. Despite some seasonaility, the trend is increasing over time, and is at its highest point at the end of the chart in 2020."></Image>

And we can better understand the magnitude of these shifts by visualizing year-to-year changes:


<Code language='r'>

```r
data %>%
  mutate(month = lubridate::month(month)) %>%
  filter(month < 7) %>%
  group_by(year) %>%
  summarise(sum = sum(totals)) %>%
  ungroup() %>%
  mutate(last_year = lag(sum),
         perc_change =  ((sum - last_year) / last_year)) %>%
  ggplot(aes(x = year, y = perc_change)) +
  geom_col(alpha = .7, fill = 'red', color = 'black') +
  geom_hline(yintercept = 0) +
  scale_x_continuous(expand = expansion(c(0, 0.001))) +
  scale_y_continuous(labels = percent_format(accuracy = 1)) +
  drop_axis() +
  labs(x = element_blank(), y = element_blank(),
       title = "Year-on-year changes in firearm background checks, 1999-2020",
       subtitle = "January through June")
```

</Code>

<Image src="../images/post/covid-gun-spikes/unnamed-chunk-5-1.png" alt="A barchart showing the temporal year-on-year change in background checks for firearms over time. The last year, 2020, is the highest, meaning background checks have seen the greatest year on year growth this year."></Image>

Visualized another way, we can explore the temporal change **within each year** for every year between 1999 and 2020, with 2020 <span style="color:red">highlighted in red.</span>

<Code language='r'>

  ```r
  data %>%
    mutate(month = lubridate::month(month)) %>%
    filter(month < 7) %>%
    group_by(month, year) %>%
    summarise(sum = sum(totals)) %>%
    mutate(fill = ifelse(year == 2020, "2020", "")) %>%
    ggplot(aes(group = year)) +
    geom_line(aes(x = month, y = sum, color = fill, alpha = fill), show.legend = FALSE) +
    scale_y_continuous(limits = c(0, 4000000), labels = unit_format(unit = "M", sep = "", scale = 1e-6, accuracy = 1)) +
    scale_x_continuous(breaks = c(1,2,3,4,5,6), labels = c("Jan", "Feb", "Mar", "April", "May", "June")) +
    scale_color_manual(values = c("gray", "red")) +
    scale_alpha_manual(values = c(.7, 1)) +
    labs(x = element_blank(), y = element_blank(),
        title = "Firearm background checks in <span style = 'color: red;'>2020</span>
        compared to <span style = 'color: #343434'>1999 - 2019</span>",
        subtitle = "January to June") +
    drop_axis() +
    theme(plot.title = ggtext::element_markdown())
  ```

</Code>

<Image src="../images/post/covid-gun-spikes/unnamed-chunk-6-1.png" alt="A line chart wherein each line shows a year, and the x axis corresponds to the month. The y axis represents the sum of background checks. The highest line is 2020, highlighted in red, indicating that across the entire year, 2020 has seen the greatest number of background checks."></Image>

The FBI database also includes background check data for each U.S. state. This data allows us to compare trends _across_ states and over time (using `geofacet`):

<Code language='r'>

```r
data %>%
  mutate(month = lubridate::month(month)) %>%
  filter(month < 7) %>%
  group_by(month, year, state) %>%
  summarise(sum = sum(totals)) %>%
  mutate(fill = ifelse(year == 2020, "2020", "")) %>%
  ggplot(aes(group = year)) +
  geom_line(aes(x = month, y = sum, color = fill, alpha = fill),
            size = .2, show.legend = FALSE) +
  scale_color_manual(values = c("gray", "red")) +
  scale_alpha_manual(values = c(.5, 1)) +
  facet_geo(~ state, scales = 'free_y', grid = "us_state_grid1") +
  drop_axis() +
  theme(text = element_text(color = "white",
                            family = "IBM Plex Sans"),
        axis.title=element_blank(),
        axis.text=element_blank(),
        axis.ticks=element_blank(),
        strip.background = element_rect(fill = 'black'),
        strip.text = element_text(size = 10, color = 'white'),
        panel.background = element_rect(fill = 'black'),
        plot.background = element_rect(fill = 'black'),
        panel.grid = element_blank()) +
  labs(x = element_blank(),
       y = element_blank(),
       title = "Spikes in gun ownership during COVID-19",
       subtitle = "How the first six months of 2020 compare to 1999-2019")

## With additional styling changes made in Illustrator!
```

</Code>

<Image src="../images/post/covid-gun-spikes/featured.png" alt="A small multiples map showing spikes in firearm background checks in 2020, compared to 1999-2019"></Image>

## The Impact

Most obviously, background checks are a proxy for gun purchases and gun ownership; as such, this data informs us that more and more people are grabbing for guns during COVID-19, perhaps in anticipation of some post-COVID apocalypse or perceived government overreach during.

In addition, one risk is that more guns can lead to greater numbers of firearm suicides. [One group of researchers](https://everytownresearch.org/reports/covid-gun-violence/) at the gun safety organization Everytown predicted that COVID-related unemployment would lead to a 20-30% increase in firearm suicides (5000 to 7000 people). As such, a rise in firearm-related background checks may signal an impending surge of gun violence in the forms of both homicide and suicide.

Firearm background check data, however, requires close scrutiny. The way that these data are acquired on a state-by-state basis means that we might not be able to safely make comparisons _across_ states. Moreover, according to [one group of Harvard researchers](https://www.thetrace.org/2015/10/private-sale-loophole-background-check-harvard-research/), upwards of 40% of all gun owners report acquiring their most recent gun _without a background check._

Thus, these numbers may tell a different story than one of 'guns are being purchased more frequently.' Although not employed in this post, there are some novel ways to develop stories similar to that one, like using [NYT's methodology](https://github.com/nytimes/gunsales#getting-gun-sales-estimates-from-background-checks) to estimate gun sales from background check data. I encourage those interested to pursue their work, alongside the [BuzzFeed News repository](https://github.com/BuzzFeedNews/nics-firearm-background-checks) where this data came from, and analyze such questions yourself.
