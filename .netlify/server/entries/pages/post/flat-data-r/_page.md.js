import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import { C as Code } from "../../../../chunks/Code.js";
import { I as Image } from "../../../../chunks/Image.js";
import { I as Info } from "../../../../chunks/Info.js";
import "../../../../chunks/BackTo.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prism-svelte";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
/* empty css                                                      *//* empty css                                                     */const metadata = {
  "layout": "blog",
  "title": "Including R in your Flat Data Workflow",
  "description": "Fetch and clean data automatically with GitHub Actions + R",
  "image": "flat-data-r/header.png",
  "date": "2021-05-02",
  "featured": true,
  "tags": ["r", "github", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>The <a href="${"https://octo.github.com/"}" rel="${"nofollow"}">GitHub OCTO team</a> recently released their first project: <a href="${"https://octo.github.com/project/flat-data"}" rel="${"nofollow"}"><strong>Flat Data</strong></a>. The project aims to offer \u201Ca simple pattern for bringing working datasets into your repositories and versioning them.\u201D And it succeeds in doing so! I recently incorporated Flat Data into <a href="${"https://github.com/connorrothschild/police-killings"}" rel="${"nofollow"}">one of my projects</a>, allowing me to finally stop manually updating the data on a semiregular basis (yikes!). While working, I couldn\u2019t find any documentation on using R with Flat Data. Here, I\u2019ll explain the steps I took to incorporate R scripts into a Flat Data pipeline.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p><strong>Note:</strong> If you want to follow along, the GitHub repo can be found <a href="${"https://github.com/connorrothschild/flat-demo-r-processing/"}" rel="${"nofollow"}">here</a>.</p>`;
        }
      })}
<h2 id="${"whats-flat-data"}"><a href="${"#whats-flat-data"}">What\u2019s Flat Data?</a></h2>
<p><a href="${"https://octo.github.com/project/flat-data"}" rel="${"nofollow"}">Flat Data</a> solves the problem of carrying out the same repetitive tasks\u2014retrieving, cleaning, and then republishing data\u2014that commonly affects developers who want to present rapidly updating data (for example, COVID-19 data that updates daily). And although alternative solutions exist, Flat Data is easy, intuitive, and integrated directly with your GitHub repository (via <a href="${"https://octo.github.com/project/flat-data"}" rel="${"nofollow"}">GitHub</a>):</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/flat-data-r/flat-diagram.png",
          alt: "A diagram showcasing a common Flat Data workflow"
        },
        {},
        {}
      )}
<p>The idea, as seen above, is essentially to read in data (<em>data.json</em>), conduct some postprocessing (<em>process.js</em>), and output some better data (<em>processed-data.json</em>).</p>
<h2 id="${"doing-it-in-r"}"><a href="${"#doing-it-in-r"}">Doing it in R</a></h2>
<p>The most essential step of a Flat Data project is <em>postprocessing</em>. This occurs <strong>after data retrieval</strong> and <strong>before data output</strong>, and it can be done in a few different languages. By default, the OCTO team\u2019s <a href="${"https://github.com/githubocto/flat-postprocessing/tree/main/examples"}" rel="${"nofollow"}">examples</a> are done in JavaScript/TypeScript, and one user has given an example of postprocessing in <a href="${"https://github.com/pierrotsmnrd/flat_data_py_example"}" rel="${"nofollow"}">Python</a>. To the best of my knowledge, though, there aren\u2019t any examples of including R in the postprocessing stage, hence the reason for this post! </p>
<p><strong>Using R in a Flat Data pipeline is as simple as installing the necessary packages and then sourcing your R cleaning script from a postprocessing TypeScript file.</strong> Let\u2019s explore how that works.</p>
<p>We\u2019ll be grabbing data from the <a href="${"https://mappingpoliceviolence.org/"}" rel="${"nofollow"}">Mapping Police Violence</a> homepage, tidying it up, and then republishing it. (This cleaned data is the source for my <a href="${"https://connorrothschild.github.io/police-killings/"}" rel="${"nofollow"}">visualization</a> on police violence.)  Here\u2019s a sample of the final data output:</p>
<iframe title="${"Flat GitHub data table"}" src="${"https://flatgithub.com/connorrothschild/flat-demo-r-processing?filename=sample.csv&sha=585d7221d2712494195dea616bac68dc864025b1"}" loading="${"lazy"}" style="${"height: 90vh;"}" width="${"100%"}"></iframe>
<h3 id="${"01-setup-flatyml"}"><a href="${"#01-setup-flatyml"}">01. Setup <code>flat.yml</code></a></h3>
<p>The first step in any Flat Data pipeline is to create <code>.github/workflows/flat.yml</code>, which will include the configuration for your project. You can do so by using GitHub\u2019s <a href="${"https://marketplace.visualstudio.com/items?itemName=GitHubOCTO.flat"}" rel="${"nofollow"}">VSCode extension</a>, or by creating your own YAML file manually. The YAML file we use in this project is remarkably similar to the <a href="${"https://github.com/marketplace/actions/flat-data"}" rel="${"nofollow"}">boilerplate</a> file, with a few differences:</p>
${validate_component(Code, "Code").$$render($$result, { language: "yaml", filename: "flat.yml" }, {}, {
        default: () => {
          return `<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">name: Update data
on:
  schedule:
    - cron: 0 0 * * * # Runs daily. See https://crontab.cronhub.io/
  workflow_dispatch: &#123;&#125;
  push:
    branches:
      - main # Or master, or whatever branch you&#39;d like to &#39;watch&#39;
jobs:
  scheduled:
    runs-on: ubuntu-latest
    steps:
      # This step installs Deno, which is a Javascript runtime
      - name: Setup deno
        uses: denoland/setup-deno@main
        with:
          deno-version: v1.x
      # Check out the repository so it can read the files inside of it and do other operations
      - name: Check out repo
        uses: actions/checkout@v2
      # The Flat Action step. We fetch the data in the http_url and save it as downloaded_filename
      - name: Fetch data
        uses: githubocto/flat@v2
        with:
          http_url: https://mappingpoliceviolence.org/s/MPVDatasetDownload.xlsx # File to download
          downloaded_filename: raw.xlsx # Name of downloaded file
          postprocess: ./postprocess.ts # Script to run upon download completion</code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>The tweaks you would make to this workflow are most likely in <code>http_url</code> and <code>schedule</code>. To confirm, visit GitHub\u2019s <a href="${"https://github.com/marketplace/actions/flat-data"}" rel="${"nofollow"}">documentation</a>. </p>
<h2 id="${"02-postprocess"}"><a href="${"#02-postprocess"}">02. Postprocess</a></h2>
<p>We pick up at the last line of code in the previous chunk:</p>
${validate_component(Code, "Code").$$render($$result, { language: "yaml", filename: "flat.yml" }, {}, {
        default: () => {
          return `<pre class="${"language-yaml"}"><!-- HTML_TAG_START -->${`<code class="language-yaml"><span class="token key atrule">postprocess</span><span class="token punctuation">:</span> ./postprocess.ts </code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Here, we reference a TypeScript file titled <code>postprocess.ts</code>. Upon completion of the data download, GitHub will run <em>this script</em> for any additional processing steps. This file must be a <code>.js</code> or <code>.ts</code> file.</p>
<p>Those who are skilled in data wrangling with JavaScript might be able to write their additional processing <em>in JavaScript itself</em>, but few of us are skilled in data wrangling with JavaScript. Moreover, some users want to migrate their existing projects and workflows to Flat Data, and so including languages other than JavaScript (in this case, R) is essential. </p>
<p>The <code>postprocess.ts</code> file I use in my workflow looks like this (it might help to see how <a href="${"https://deno.land/manual@v1.10.2/examples/subprocess"}" rel="${"nofollow"}">Deno works</a>):</p>
${validate_component(Code, "Code").$$render(
        $$result,
        {
          language: "javascript",
          filename: "postprocess.ts"
        },
        {},
        {
          default: () => {
            return `<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// 1. Install necessary packages</span>
<span class="token keyword">const</span> r_install <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">cmd</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sudo'</span><span class="token punctuation">,</span> <span class="token string">'Rscript'</span><span class="token punctuation">,</span> <span class="token string">'-e'</span><span class="token punctuation">,</span> <span class="token string">"install.packages(c('dplyr', 'readxl', 'readr', 'lubridate', 'stringr'))"</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> r_install<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Forward the execution to the R script</span>
<span class="token keyword">const</span> r_run <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">cmd</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Rscript'</span><span class="token punctuation">,</span> <span class="token string">'./clean.R'</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> r_run<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>`;
          }
        }
      )}
<p>The above script is rather simple: it 1) installs packages, and 2) runs the processing script, titled <code>clean.R</code>.</p>
<p>The first step is important.  <strong>Package management was the biggest issue I ran into while setting up this workflow; if you\u2019re having issues, pay attention to this step.</strong> You\u2019ll need to identify all the packages that are required in your R processing script, but you can\u2019t install those packages <em>in the script itself</em>, due to virtual machine permissions. You instead have to run them via the command line, using <code>sudo Rscript -e</code>, as I do above (in step 1). </p>
<p>The command <code>sudo Rscript -e</code> precedes any regular function or command that you would run in an R script. It executes those commands via the command line, rather than within a script. (We add sudo to overcome system user permission problems.) For more, see <a href="${"https://stackoverflow.com/questions/18306362/run-r-script-from-command-line"}" rel="${"nofollow"}">this page</a>. </p>
<h2 id="${"03-clean-the-data"}"><a href="${"#03-clean-the-data"}">03. Clean the data!</a></h2>
<p>My <code>clean.R</code> script, which I reference at the bottom of <code>postprocess.ts</code> looks like this:</p>
${validate_component(Code, "Code").$$render($$result, { language: "r", filename: "clean.R" }, {}, {
        default: () => {
          return `<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r"><span class="token comment"># Load libraries</span>
library<span class="token punctuation">(</span>dplyr<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>stringr<span class="token punctuation">)</span>

<span class="token comment"># Read in data, with the same name that we specified in &#96;flat.yml&#96;</span>
raw_data <span class="token operator">&lt;-</span> readxl<span class="token operator">::</span>read_excel<span class="token punctuation">(</span><span class="token string">"./raw.xlsx"</span><span class="token punctuation">)</span>

<span class="token comment"># All the processing!</span>
clean_data <span class="token operator">&lt;-</span> raw_data <span class="token percent-operator operator">%>%</span> 
  mutate<span class="token punctuation">(</span>Zipcode <span class="token operator">=</span> as.character<span class="token punctuation">(</span>Zipcode<span class="token punctuation">)</span><span class="token punctuation">,</span>
         Year <span class="token operator">=</span> lubridate<span class="token operator">::</span>year<span class="token punctuation">(</span>Date<span class="token punctuation">)</span><span class="token punctuation">,</span>
         Sex <span class="token operator">=</span> ifelse<span class="token punctuation">(</span>is.na<span class="token punctuation">(</span>Sex<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'Unknown'</span><span class="token punctuation">,</span> Sex<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">### Additional processing goes here...</span>

<span class="token comment"># Output data</span>
readr<span class="token operator">::</span>write_csv<span class="token punctuation">(</span>clean_data<span class="token punctuation">,</span> <span class="token string">"./output.csv"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
        }
      })}
<p>Obviously, the content in the above cleaning script is irrelevant. It functions as any other R script would: it reads in data (based on the data we downloaded in <code>postprocess.ts</code>), does some cleaning, and then outputs the new data. The <a href="${"https://github.com/connorrothschild/flat-demo-r-processing/blob/master/clean.R"}" rel="${"nofollow"}">real script</a> is around 55 lines. Now you know why keeping the postprocessing in R was preferable!</p>
<h2 id="${"in-sum"}"><a href="${"#in-sum"}">In sum</a></h2>
<p>Upon completing these steps and pushing the above to a repository, GitHub will automatically set up the action and run it on a daily basis. You can then examine the logs for each run in the <strong>Actions</strong> tab. This tab will be helpful for debugging, and you can force workflow executions manually here as well. In sum, the process of carrying out a GitHub Flat Data workflow, with the addition of an R postprocessing script, looks something like this:</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "/images/post/flat-data-r/header.png",
          alt: "Diagram of flat data processing in R"
        },
        {},
        {}
      )}
<p>Thanks for reading! You might learn more by perusing the <a href="${"https://github.com/connorrothschild/flat-demo-r-processing"}" rel="${"nofollow"}">GitHub repository</a> that accompanies this post; otherwise, please send any questions via <a href="${"https://twitter.com/CL_Rothschild"}" rel="${"nofollow"}">Twitter</a> \u{1F642}</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
