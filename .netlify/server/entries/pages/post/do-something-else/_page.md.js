import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
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
/* empty css                                                      *//* empty css                                                     */const metadata = {
  "layout": "blog",
  "title": 'Feel Free to Do "Something Else" After Graduation',
  "description": "Finding meaningful work",
  "image": "adding-a-chart-to-your-d3-tooltip/header.png",
  "date": "2021-05-02",
  "draft": true,
  "tags": ["personal"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><a href="${"https://angel.co/post/over-60-of-employees-are-happy-at-startups-far-outpacing-faang-and-msft"}" rel="${"nofollow"}">https://angel.co/post/over-60-of-employees-are-happy-at-startups-far-outpacing-faang-and-msft</a>
<a href="${"https://www.bizjournals.com/sanjose/news/2019/10/17/best-faang-companies-to-work-for-vs-startups.html"}" rel="${"nofollow"}">https://www.bizjournals.com/sanjose/news/2019/10/17/best-faang-companies-to-work-for-vs-startups.html</a>
<a href="${"https://ed.stanford.edu/news/stanford-education-study-provides-new-evidence-big-fish-little-pond-effect-students-globally"}" rel="${"nofollow"}">https://ed.stanford.edu/news/stanford-education-study-provides-new-evidence-big-fish-little-pond-effect-students-globally</a></p>
<p>I graduated college last week. I\u2019ve been thinking about what it means for a new graduate to find a career that they find <em>fulfilling</em>. In my view of things, it seems as if new grads\u2019 plans fall into one of a few categories, which you can usually split up by degree focus.</p>
<p><strong>Non-technical graduates</strong>:</p>
<ol><li>Big consulting (McKinsey, BCG, &amp; Bain, etc.)</li>
<li>Something else (fellowship, graduate school, journalism, government, etc.)</li></ol>
<p><strong>Technical graduates</strong>:</p>
<ol><li>Big tech (FAANG, etc.)</li>
<li>Something else (startup, civic tech, etc.)</li></ol>
<p>Is it reductive to categorize <em>all jobs</em> into these four categories? Check my LinkedIn feed, and you\u2019ll realize that enough graduates pursue the first option from each group (big consulting/big tech) that other jobs almost seem like an afterthought. (Apparently, <a href="${"https://medium.com/s/story/a-culture-of-prestige-98c8671ceade"}" rel="${"nofollow"}">~40% of Harvard grads</a> and <a href="${"https://yaledailynews.com/../images/post/2019/11/01/mckinsey-and-the-fig-tree/"}" rel="${"nofollow"}">~29% of Yale grads</a> go into finance or consulting after college.)</p>
<p>Of course, these sets of options mirror one another. Most students who aren\u2019t set on a JD, PhD, or MD will ask themselves whether they want to pursue the safe, well-paying, \u201Cbig\u201D option after graduating, or something else. </p>
<p>When they do choose, there\u2019s not much enthusiasm\u2014it\u2019s a tradeoff. These bigger companies offer alluring signing bonuses, prestige, and exorbitant salaries. In return, they ask you to put up with longer-than-usual hours and more monotonous work.</p>
<p>I\u2019m writing about <em>taking the risk</em>\u2014doing the \u201Csomething else\u201D that isn\u2019t McKinsey or Microsoft. There\u2019s value in the something else, and I hope I can encourage you it\u2019s more than consolation, it\u2019s a career.</p>
${validate_component(Info, "Info").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Please note that I\u2019m not dunking on my friends who take these impressive jobs, but instead writing to people who are doing something else, whether by their own choice or not. Microsoft friends, I love you</p>`;
        }
      })}
<h2 id="${"establishing-the-stakes"}"><a href="${"#establishing-the-stakes"}">Establishing the stakes</a></h2>
<p><strong>Work is the most important thing we do.</strong> Not in the late-capitalism/workaholic-father type of way, but in the sense that you spend the majority of your day doing it. Every (week)day, you spend between 8 and 10 hours on work, and so you <em>cannot overstate</em> how important work is. If you dislike your work, you\u2019re unlikely to enjoy your life.  All this to say, make the decisions you make about work <em>intentionally</em> and not because of pressure, prestige, or anything else.</p>
<h2 id="${"fulfillment"}"><a href="${"#fulfillment"}">Fulfillment</a></h2>
<p>In 2019, <a href="${"https://angel.co/"}" rel="${"nofollow"}">AngelList</a> and <a href="${"https://www.teamblind.com/"}" rel="${"nofollow"}">Blind</a> surveyed 11,000 employees across FAANG and various startups, asking about job satisfaction and the factors that influence it. Their findings? <strong>Employees at startups were much happier than their FAANG counterparts.</strong></p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: "../images/post/do-something-else/startup-faang-satisfaction.png",
          alt: "A bar graph showing higher rates of job satisfaction among startup employees compared to FAANG employees."
        },
        {},
        {}
      )}
<p>Data on early-career consultants in non-technical fields is harder to come by, but generally employees are <a href="${"https://poetsandquants.com/2017/09/10/job-satisfaction-rates-at-top-consulting-firms/3/"}" rel="${"nofollow"}">relatively satisfied despite the long hours</a>. Many consultants, however, do quit their job and pursue <a href="${"https://hbr.org/2019/07/why-consultants-quit-their-jobs-to-go-independent"}" rel="${"nofollow"}">independent consulting</a>, where they tend to be <a href="${"https://www.consultancy.uk/news/12795/independent-management-consultants-are-happier-and-half-earn-more"}" rel="${"nofollow"}">happier</a>.</p>
<p>And so there might be a tradeoff between prestige and satisfaction within these high-profile organizations. Definitely in tech, and perhaps in other spaces, work can be <em>better paying</em> but <em>less fulfilling</em>.</p>
<p>There could be many reasons for this, but I suspect a large one is <strong>structure</strong>. Taking a job at a big tech or big consulting company means you\u2019re subject to their structure. More often than not, the organizations have narrowly defined roles due to their massive size. As such, you assume whatever role they give you, with perhaps a little wiggle room. Some like this scope of work. For others, it can be stifling. It can come at the expense of your creativity and feel as if you have little room to grow.</p>
<p>The \u201Csomething else\u201D jobs, by contrast, are probably more variegated. To feel fulfilled, I think a job needs two things: 1) work that is <em>in line with your passions</em>, and 2) work that is <em>commensurate with your capacity</em>.</p>
<h4 id="${"passion"}"><a href="${"#passion"}">Passion</a></h4>
<p>If you don\u2019t like the work you do, you won\u2019t feel fulfilled. If your values don\u2019t align with the mission of your organization, you feel tension at work. When graduating seniors talk about post-grad plans, they sometimes mention \u201Cselling their soul\u201D to work for organizations that they disagree with. (E.g. graduates working for McKinsey after news broke of their <a href="${"https://www.nytimes.com/2019/12/03/us/mckinsey-ICE-immigration.html"}" rel="${"nofollow"}">partnerships with ICE</a>, or working for Facebook amidst one of their many controversies.)</p>
<p>It\u2019s totally fine to disagree with some of the values of your employer. Many do it their entire life. But wouldn\u2019t it be nice to be passionate about the work you do on a daily basis? The \u201Csomething else\u201D jobs offer this kind of relief; depending on <em>what</em> you pursue, you can find a job that not only aligns with, but strengthens, your existing passions.</p>
<h4 id="${"capacity"}"><a href="${"#capacity"}">Capacity</a></h4>
<p>But perhaps the bigger component of fulfillment, on a day-to-day basis, is how challenged you are by your work. Material success and external validation make you feel good, but work has to be sufficiently <em>intellectually stimulating</em> to make you feel fulfilled on a daily basis.</p>
<p>The problem is, big consulting and big tech companies <strong>necessarily</strong> constrain the work you do to better meet the needs of their organization. Rarely can you work in such a behemoth of an organization and also do work that lines up well with your skillset, capacity, and interests. </p>
<p>As an incoming entry-level employee at Microsoft, you join 144,000 other employees. The organization is structured hierarchically, and you assume the role that you\u2019re given. Is there some level of matching at play? Definitely. But are you able to apply yourself as you would in a personal project, or as you could in a smaller, less rigid organization? Definitely not. </p>
<p>As an incoming entry-level employee at McKinsey, share a similar experience. Your job infamously requires you to travel often, sit through countless meetings, and work long hours. Peers in these positions joke about how their job responsibilities are 1) sending emails, 2) sitting through meetings, and 3) designing PowerPoints.</p>
<p>In both of these contexts, you have this much capacity and competence:</p>
<progress style="${"width: 80%;"}" value="${"100"}" max="${"100"}"></progress>
<p>But larger companies hire you <em>so that you can exercise this much of it</em>:</p>
<progress style="${"width: 80%;"}" value="${"30"}" max="${"100"}"></progress>
<p>To make matters worse, we start working in these rigid organizations right after we graduate, which (for most people) is the <em>most exhilarating, unique, and stimulting experience of our lives</em>. We\u2019re familiar with challenging work (often too challenging), and so the contrast between college and work becomes even more stark. </p>
<h2 id="${"conclusion"}"><a href="${"#conclusion"}">Conclusion</a></h2>
<p><em>Searching for jobs is stressful.</em> When we\u2019re anxious about where we\u2019ll be after graduation, the prospect of earning six figures with a hefty signing bonus is an appealing one. But how often does this mean exchanging passion, creativity &amp; fulfillment for money &amp; status?</p>
<p><strong>Please don\u2019t be scared to do \u201Csomething else.\u201D</strong> Find the job that makes you tick, even if its risky. Work is the most important thing we do, and if it <em>can be</em> fulfilling, make it so! </p>
<hr>
<h1 id="${"counterarguments"}"><a href="${"#counterarguments"}">Counterarguments</a></h1>
<p>Here are some valid counterarguments to my thinking:</p>
<h3 id="${"consultants-like-their-jobs"}"><a href="${"#consultants-like-their-jobs"}">Consultants like their jobs</a></h3>
<ul><li>A <a href="${"https://www.ft.com/content/2cc98fb4-049d-11e1-ac2a-00144feabdc0"}" rel="${"nofollow"}">2011 survey</a> from the Management Consultancies Association found that two thirds of young consultants ranked their job satisfaction as \u201Cgood\u201D or \u201Cvery good.\u201D</li>
<li>There seems to be great heterogeneity in job satisfaction; <a href="${"https://poetsandquants.com/2017/09/10/job-satisfaction-rates-at-top-consulting-firms/3/"}" rel="${"nofollow"}">Wall Street Oasis data</a> has McKinsey with a remarkable 98.6/100, compared to the lowest at Chatham Financial, with 57.7. (I have no idea what their methodology is.)</li></ul>
<h3 id="${"consultantsbig-tech-employees-are-only-there-for-a-short-period-of-time"}"><a href="${"#consultantsbig-tech-employees-are-only-there-for-a-short-period-of-time"}">Consultants/big tech employees are only there for a short period of time</a></h3>
<p>Many recent graduates </p>
<h3 id="${"something-else-jobs-arent-well-paying-enough"}"><a href="${"#something-else-jobs-arent-well-paying-enough"}">\u201CSomething else\u201D jobs aren\u2019t well-paying enough</a></h3>
<h1 id="${"appendix"}"><a href="${"#appendix"}">Appendix</a></h1>
<p>Consultants work <em>so much</em>. From <a href="${"https://poetsandquants.com/2017/09/10/job-satisfaction-rates-at-top-consulting-firms/3/"}" rel="${"nofollow"}">Poets and Quants</a>:</p>
<table><thead><tr><th>Firm</th>
<th>Average Weekly Hours Worked</th></tr></thead>
<tbody><tr><td>EVA Dimensions</td>
<td>75.0</td></tr>
<tr><td>Teneo</td>
<td>72.5</td></tr>
<tr><td>Galt and Company</td>
<td>70.0</td></tr>
<tr><td>McKinsey &amp; Co.</td>
<td>68.8</td></tr>
<tr><td>Strategy&amp;</td>
<td>67.2</td></tr>
<tr><td>Keystone Strategy</td>
<td>65.0</td></tr>
<tr><td>Bain &amp; Co.</td>
<td>64.7</td></tr>
<tr><td>Oliver Wyman</td>
<td>64.6</td></tr>
<tr><td>The Parthenon Group</td>
<td>63.9</td></tr>
<tr><td>BCG</td>
<td>63.6</td></tr>
<tr><td>A.T. Kearney</td>
<td>63.0</td></tr>
<tr><td>Mars &amp; Co.</td>
<td>63.0</td></tr>
<tr><td>LEK Consulting</td>
<td>62.6</td></tr>
<tr><td>OCC Strategy Consultants</td>
<td>62.5</td></tr>
<tr><td>Arthur D. Little</td>
<td>62.5</td></tr>
<tr><td>Roland Berger Strategy Consultants</td>
<td>62.0</td></tr>
<tr><td>The Cambridge Group</td>
<td>61.7</td></tr>
<tr><td>IMS Consulting Group</td>
<td>60.7</td></tr>
<tr><td>Public Consulting Group</td>
<td>60.0</td></tr>
<tr><td>Crowe Horwath</td>
<td>60.0</td></tr>
<tr><td>Simon Kucher Partners</td>
<td>60.0</td></tr>
<tr><td>Corporate Value Associates</td>
<td>60.0</td></tr>
<tr><td>Parthenon Group-EY</td>
<td>58.3</td></tr>
<tr><td>The Brattle Group</td>
<td>58.3</td></tr>
<tr><td>Innosight</td>
<td>58.3</td></tr>
<tr><td>Marakon</td>
<td>57.5</td></tr>
<tr><td>Accenture</td>
<td>55.8</td></tr>
<tr><td>ZS Associates</td>
<td>55.6</td></tr>
<tr><td>Deloitte</td>
<td>55.5</td></tr>
<tr><td>PwC</td>
<td>55.5</td></tr></tbody></table>
`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
