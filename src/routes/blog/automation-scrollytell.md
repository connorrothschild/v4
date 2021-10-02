---
layout: blog
title: "How to Scrollytell in R"
description: Because its easier than doing it in D3
image: automation-scrollytell/header.png
date: "2019-10-02"
---

<script>
  import Image from "../../lib/global/Image.svelte"
  import Info from "../../lib/global/Info.svelte"
</script>

I’ve always been interested in data visualization, and my most recent
sub-passion has been _scrollytelling_. I’ve seen numerous examples of
amazing scrolling articles, from sites such as [The
Pudding](https://pudding.cool/), the [New York
Times](https://www.nytimes.com/), and
[FiveThirtyEight](https://fivethirtyeight.com/).

Although most of these sites rely on the same high-powered visualization
tools (such as [D3.js](https://d3js.org/)) to create their stories, the
learning curve for those are a bit too steep for a full-time college
student to pursue (although [I am
trying](https://github.com/connorrothschild/D3.js)\!).

Thankfully, I came across some examples of scrollytelling in my language
of choice, R.

What follows is a scrollytelling recreation of the [very first
visualization I ever
made](https://connorrothschild.github.io/r/automation/).

```r
library(shiny)
library(scrollytell)
library(shinyjs)
library(ggvis)
library(plotly)

theme_set(theme_minimal())
```

## Construct an updating plot object

Once the data ([which can be found
here](https://github.com/connorrothschild/shiny-scrollytell/tree/master/data))
is already [loaded and
cleaned](https://connorrothschild.github.io/r/automation/#load-datasets),
we construct a plot object that will update as the user scrolls. ([Other
R users](https://github.com/scottyd22/dream_team) make multiple plots;
either way is fine.)

```r
plot <- data %>%
  filter(if (add != 8) add >= reveal else reveal %in% c(1:8)) %>%
  ggplot() +
  geom_point(mapping=aes(x=A_MEDIAN, y=probability, size=TOT_EMP,
                         alpha=ifelse(add == reveal, 1/5, 1/10), col=typicaled,
                         text = glue::glue('<b>Occupation</b>: {occupation}
                                            <b>Probability of Automation</b>: {probability}%
                                            <b>Median Income</b>: ${A_MEDIAN}
                                            <b>Number of Workers</b>: {TOT_EMP}'))) +
  scale_size(range = c(1, 20)) +
  xlab("\nMedian Income") +
  ylab("Probability of Automation") +
  labs(size= "", col= "", alpha = "") +
  scale_color_manual(values = cols, breaks = legend_ord) +
  scale_x_continuous(labels=scales::dollar_format(prefix="$"), limits = c(25000,200000)) +
  scale_y_continuous(labels=scales::number_format(suffix="%"), limits = c(0,100)) +
  # cr::drop_axis(axis = "y") +
  theme(axis.line.x = ggplot2::element_line(colour = NULL,
                                            size = NULL, linetype = NULL, lineend = NULL),
        axis.line.y = ggplot2::element_blank(),
        panel.grid.major.x = element_blank())
```

But wait, what’s that second line of code?

```r
filter(if (add != 8) add >= reveal else reveal %in% c(1:8))
```

This may make _0 sense_ right now, but here’s why we have it.

The important part (and somewhat difficult thing to understand) about
this step is that your plot object has some **data which corresponds to
an updating variable**. For me, I added a variable called `reveal` for
each step of the visualization. For me, this meant having `reveal`
correspond to a typical level of education for a given job.

```r
data <- data %>%
  mutate(reveal = case_when(
    typicaled == "No formal educational credential" ~ 1,
    typicaled == "High school diploma or equivalent" ~ 2,
    typicaled == "Postsecondary nondegree award" ~ 3,
    typicaled == "Some college, no degree" ~ 0,
    typicaled == "Associate's degree" ~ 4,
    typicaled == "Bachelor's degree" ~ 5,
    typicaled == "Master's degree" ~ 6,
    typicaled == "Doctoral or professional degree" ~ 7,
  ))
```

What this means is that every time the post observes an event (a
scroll), it will update according to the number in the `reveal` column.

So, when my plot object has a line of code which says:

```r
filter(if (add != 8) add >= reveal else reveal %in% c(1:8))
```

That can be read as “Update the plot object to include all data points
**up until the current point** encoded in `reveal`.”

But, it also depends on what level of `add` we are at; if `add` == 8
(the last data point, e.g. the concluding plot), then we want to show
_all data points_.

“Okay, okay. But what is `add`???”

Good question. `add` is the variable I constructed to correspond to the
user’s input (in this case, the scroll!). When we put it all together,
we’re going to wrap our plot object into a rendering function _inside_
the server function. Confusing? It looks like this:

```r
server <- function(input, output, session) {

  output$plot <- renderPlotly({

    add <- input$scr

    plot <-
      # static ggplot goes here

      ggplotly(plot) %>%
      # other ggplotly parameters go here

  })

  # render the plot here
  output$scr <- renderScrollytell({scrollytell()})
  renderText(paste0("Section: ", input$scr))
  observe({cat("section:", input$scr, "\n")})

}
```

What’s happening here? Within the server function, we’re doing two
things:

First, we’re creating the plot object. Because we have the command `add <- input$scr` **inside** the function `renderPlotly`, our plot object will be dynamically updated along with `input$scr`.

This makes more sense when you connect it to the ui. In our ui function,
we include a `scrolly_container` from the scrollytell package. Within
that, we make our `outputId` correspond to the name of our updating
input (in this case, _scr_).

```r
ui <- fluidPage(

  # a bunch of introductory stuff, css stuff

  # scrollytelling plot
  scrolly_container(outputId = "scr",
                       scrolly_graph(
                                     ## this is the plot object that we made earlier:
                                     plotlyOutput("plot", height = '600px')

                    ),
                    scrolly_sections(
                      ## each of these sections corresponds to an update
                      ## the number after id = corresponds to the `scr` update
                      ## the render_text() function will be discussed later
                      scrolly_section(id = 0, render_text(0)),
                      scrolly_section(id = 1, render_text(1)),
                      scrolly_section(id = 2, render_text(2)),
                      scrolly_section(id = 3, render_text(3)),
                      scrolly_section(id = 4, render_text(4)),
                      scrolly_section(id = 5, render_text(5)),
                      scrolly_section(id = 6, render_text(6)),
                      scrolly_section(id = 7, render_text(7)),
                      scrolly_section(id = 8, render_text(8)),
                      # add a scrolly_section with nothing in it;
                      # this buffer prevents the plot from disappearing while reading last section
                      scrolly_section(id = "buffer", br())
                    )

  ),

  # a bunch of concluding stuff, other html

)
```

So, the simplest way to think about this so far is:

Construct a plot object with some updating variable (in my case, `reveal`).

```r
filter(if (add != 8) add >= reveal else reveal %in% c(1:8))
```

Make that variable correspond with some input variable (in my case `add`, which is created from the `input$scr`).

```r
server <- function(input, output, session) {

  output$plot <- renderPlotly({

    add <- input$scr
    #...
```

Render your plot object in `scrolly_graph`, and provide input updates
via each `scrolly_section`.

```r
ui <- fluidPage(

  # a bunch of introductory stuff, css stuff

  # scrollytelling plot
  scrolly_container(outputId = "scr",
                       scrolly_graph(plotlyOutput("plot", height = '600px')

                    ),
                    scrolly_sections(
                      scrolly_section(id = 0, render_text(0)),
                      scrolly_section(id = 1, render_text(1)),

                      # ...
```

Render your plots in your server function.

```r
server <- function(input, output, session) {

  output$plot <-
    #...
  })

  output$scr <- renderScrollytell({scrollytell()})
  renderText(paste0("Section: ", input$scr))
  observe({cat("section:", input$scr, "\n")})

}
```

That’s (most of) it for the plot section. You can play around with other
customizations too (for example, the alphas for my circles correspond to
an `ifelse` around `reveal`, so old circles are faded out compared to
new ones).

### Create a series of text reveals

Next, we create text sections using `HTML` and some helper functions
which beautify them.

First, we create the text boxes for each section following a similar
naming convention:

```r
text1 <- HTML("<H2> No education credentials </H2>
              <br> <p> Workers with <font color='#A00042'>no formal education credential</font> have a median income of $25,636.
              <br> On average, those occupations have a <b>90% chance</b> of job automation.
              <br><br> There are 23,765,700 workers with <font color='#A00042'>no formal education credential</font>.<p>")

text2 <- HTML("<H2> High school diplomas </H2>
              <br> <p>Workers with <font color='#F56C42'>high school diplomas</font> have a median income of $25,636.
              <br> On average, those occupations have a <b>60% chance</b> of job automation.
              <br><br> There are 33,129,910 workers with a <font color='#F56C42'>high school diploma</font>.<p>")

# ...
```

Then, we create a function `render_text` which beautifies that HTML with
CSS:

```r
text <- function(num){
  p(
    switch(num,
           text1,
           text2,
           text3,
           text4,
           text5,
           text6,
           text7,
           text8
    )
  )
}

render_text <- function(num){

  div(
    text(num), class = "text"
  )

}
```

For all 8 of the above `text`s, we’ve created a switch function which
calls them depending on the number passed to `render_text`. Then, we
apply paragraph format, put them in their own div, and apply the _text_
class in our CSS sheet.

How does this work?

Recall that above, in our ui section, we had the following:

```r
scrolly_sections(
                      HTML('<center>'),
                      scrolly_section(id = 0, render_text(0)),
                      scrolly_section(id = 1, render_text(1)),
                      # ...

)
```

Here, our `scrolly_section`s take two inputs: our ID and our
corresponding text. Rather than write out lengthy text boxes in each
`scrolly_section`, we can construct them in a single file and then knit
them all into the same format using `render_text`. This makes life a lot
easier.

So, on each scroll (or observation), the app will update 1) the plot
object, by adding `add` and updating according to `reveal`, and 2) the
text, by running `render_text` which calls `text` which beautifies our
HTML text.

### Final touches

The rest of the app is built via
`fluidPage`, and organizing via rows and columns in your shiny app. Your
app should have a CSS style sheet (in the [www
folder](https://shiny.rstudio.com/articles/css.html)). You may also
include other plots (for my post, I have an introductory plot with a bit
more context), which you will have to separately create and render in
your server function.

All in all, my code looks like this:

```r
ui <- fluidPage(

  # suppress warning messages while data is loading on-screen
  tags$style(type="text/css",
             ".shiny-output-error { visibility: hidden; }",
             ".shiny-output-error:before { visibility: hidden; }"),
  tags$head(
    includeCSS("www/style.css")
  ),

  # article title & name
  fluidRow(HTML("<center>
                <h1>Automation and Its Impact on Jobs</h1>
                <p style='font-size:26px'> by <a href='https://connorrothschild.github.io/' target='_blank'>Connor Rothschild</a></p>
                </center>")
  ),

  br(),

  fluidRow(
    column(1),

    column(10,
           # intro text
           fluidRow(id='text',
                    column(1),
                    column(10,
                           br(),
                           text0,
                           hr(),
                           h1(
                             class = "instructions",
                             "How to read this chart:",
                             br(),
                             br(),
                             "The size of each", icon("circle"), "corresponds to the number of workers in that job.",
                             br(),
                             "Hover over each", icon("circle"), "to see details on the occupation's income and probability of automation.",
                             br(),
                             "Double click on a", icon("circle"), "in the legend to focus on a specific level of education."
                           )),
                    column(1)),
           # plot object for intro
           plotlyOutput("introPlot", height = '400px')
           ),

    column(1),

           ),

  # scrollytelling plot
  scrolly_container("scr"
                    , scrolly_graph( br(),
                                     br(),
                                     textOutput("section"),
                                     br(),
                                     HTML('<center>'),
                                     plotlyOutput("plot", height = '600px'),
                                     HTML('</center>')

                    )
                    , scrolly_sections(
                      HTML('<center>'),
                      scrolly_section(id = 0, render_text(0)),
                      scrolly_section(id = 1, render_text(1)),
                      scrolly_section(id = 2, render_text(2)),
                      scrolly_section(id = 3, render_text(3)),
                      scrolly_section(id = 4, render_text(4)),
                      scrolly_section(id = 5, render_text(5)),
                      scrolly_section(id = 6, render_text(6)),
                      scrolly_section(id = 7, render_text(7)),
                      scrolly_section(id = 8, render_text(8)),
                      # add a scrolly_section with nothing in it;
                      # this buffer prevents the plot from disappearing while reading last section
                      scrolly_section(id = "buffer", br()),
                      HTML('</center>')
                    )

  ),

  # concluding text
  div(fluidRow(id = 'text',
               column(2),
               column(8,
                      concludingtext,
                      br()
               ),
               column(2)
  ), style = 'margin-top: -300px;'),

  br(),
  br(),
  br(),
  hr(),

  fluidRow(
    column(1),
    column(10,
           technicalnotes
    ),
    column(1)
  ),
  br(),
  br(),
column(1)

)
```

And the server looks like this:

```r
server <- function(input, output, session) {

  output$plot <- renderPlotly({

    add <- input$scr

    plot <- data %>%
      filter(typicaled != "Some college, no degree") %>%
      filter(if (add != 8) add >= reveal else reveal %in% c(1:8)) %>%
      ggplot() +
      geom_point(mapping=aes(x=A_MEDIAN, y=probability, size=TOT_EMP,
                             alpha=ifelse(add == reveal, 1/5, 1/10), col=typicaled,
                             text = glue::glue('<b>Occupation</b>: {occupation}
                                                <b>Probability of Automation</b>: {probability}%
                                                <b>Median Income</b>: ${A_MEDIAN}
                                                <b>Number of Workers</b>: {TOT_EMP}'))) +
      scale_size(range = c(1, 20)) +
      xlab("\nMedian Income") +
      ylab("Probability of Automation") +
      labs(size= "", col= "", alpha = "") +
      scale_color_manual(values = cols, breaks = legend_ord) +
      scale_x_continuous(labels=scales::dollar_format(prefix="$"), limits = c(25000,200000)) +
      scale_y_continuous(labels=scales::number_format(suffix="%"), limits = c(0,100)) +
      # cr::drop_axis(axis = "y") +
      theme(axis.line.x = ggplot2::element_line(colour = NULL,
                                                size = NULL, linetype = NULL, lineend = NULL),
            axis.line.y = ggplot2::element_blank(),
            panel.grid.major.x = element_blank())

    ggplotly(plot, tooltip = 'text') %>%
    layout(
      title = list(element_blank()),
      legend = list(x = 0.65, y = 0.925),
      font = list(family = 'Lato'),
      margin=list(t=50),
      hoverlabel = list(bgcolor = 'whitesmoke', color = 'DarkGray')) %>%
    config(displaylogo = F, showSendToCloud = F, displayModeBar = F)

  })

  output$introPlot <- renderPlotly({introPlot})
  output$scr <- renderScrollytell({scrollytell()})
  renderText(paste0("Section: ", input$scr))
  observe({cat("section:", input$scr, "\n")})

}
```

## The output

You can see the final output of my post
[here](https://connorrothschild.shinyapps.io/automation/).

You can look at the code and all of its context on GitHub
[here](https://github.com/connorrothschild/shiny-scrollytell).

<iframe src="https://connorrothschild.shinyapps.io/automation/" width="100%" height="800px">