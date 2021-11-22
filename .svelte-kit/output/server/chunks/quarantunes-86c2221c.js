import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-43f95667.js";
import { I as Image } from "./Image-8bdf2a2d.js";
import "./CornerTitle-1139e2b5.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
/* empty css                                              */const metadata = {
  "layout": "project",
  "title": "Quarantunes",
  "description": "Explore your listening history during COVID-19.",
  "date": "2020-10-22",
  "audience": "The world (2000 users)",
  "featured": true,
  "image": "quarantunes/header.png",
  "img_alt": "Quarantunes header, includes an image of a MacBook with the application open.",
  "techstack": "D3.js, Vue.js, Bulma, R, Spotify API",
  "github": "https://github.com/connorrothschild/quarantunes",
  "url": "https://quarantune.netlify.app"
};
const Quarantunes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `${validate_component(Image, "Image").$$render($$result, {
      href: "https://quarantune.netlify.app",
      src: "/images/project/quarantunes/header.png",
      alt: "Header"
    }, {}, {})}
<p><a href="${"https://quarantune.netlify.app"}" rel="${"nofollow"}"><strong>Quarantunes</strong></a> is an application for Spotify users to explore their listening history during the COVID-19 pandemic. It has been used by over 4,000 visitors.
There are three tabs within the application.
The first showcases \u2018top artists\u2019 and \u2018top tracks\u2019 throughout the pandemic.
The second shows some statistics about tracks according to Spotify\u2019s <a href="${"https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features"}" rel="${"nofollow"}">audio features</a> (e.g. which of your top songs is most danceable?).
The last tab creates two playlists for the user: one with their top tracks and another with recommendations for future listening.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>I used <a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a> to design the majority of this application. Charts were built using <a href="${"https://www.chartjs.org/"}" rel="${"nofollow"}">Chart.js</a>. This was my first serious project working with the <a href="${"https://developer.spotify.com/documentation/web-api/"}" rel="${"nofollow"}">Spotify API</a>. Perhaps the greatest lessons I learned throughout this process were related to API calls, asynchronous code, and race conditions. I also learned a bit about cookies; because the application creates a \u2018recommended\u2019 playlist for users, I had to store whether they had visited the site before to prevent creating multiple playlists on app reloads.</p>
<p>I also had some fun developing the more novel contributions of this project, such as a \u2018recommended\u2019 artist and a whole playlist of recommended songs. For recommended artists, I scraped a users\u2019 top 50 artists, and for each of those artists, pulled 20 <a href="${"https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists"}" rel="${"nofollow"}">\u2018related\u2019 artists</a> according to Spotify. Then, I appended all 1000 (50 x 20) of those artists into one array, and presented the one that appeared most frequently to the user. As for the playlist, I took the users\u2019 top 5 tracks and gathered 4 <a href="${"https://developer.spotify.com/console/get-recommendations/"}" rel="${"nofollow"}">\u2018seed\u2019 recommendations</a> based on those tracks. Voila! A playlist of 20 recommendations.</p>
<h1 id="${"project-images"}"><a href="${"#project-images"}">Project images</a></h1>
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/quarantunes/macbook.png",
      alt: "Project image for 'Quarantunes'"
    }, {}, {})}
${validate_component(Image, "Image").$$render($$result, {
      style: "box-shadow: none;",
      src: "/images/project/quarantunes/side-by-side.png",
      alt: "Project image for 'Quarantunes'"
    }, {}, {})}`
  })}`;
});
export { Quarantunes as default, metadata };
