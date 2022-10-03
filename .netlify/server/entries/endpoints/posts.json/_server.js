async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../post/adding-a-chart-to-your-d3-tooltip/+page.md": () => import("../../pages/post/adding-a-chart-to-your-d3-tooltip/_page.md.js"), "../post/animate-hugo-academic/+page.md": () => import("../../pages/post/animate-hugo-academic/_page.md.js"), "../post/automation-scrollytell/+page.md": () => import("../../pages/post/automation-scrollytell/_page.md.js"), "../post/color-in-data-vis/+page.md": () => import("../../pages/post/color-in-data-vis/_page.md.js"), "../post/covid-gun-spikes/+page.md": () => import("../../pages/post/covid-gun-spikes/_page.md.js"), "../post/covid-on-campus/+page.md": () => import("../../pages/post/covid-on-campus/_page.md.js"), "../post/covid-posts/+page.md": () => import("../../pages/post/covid-posts/_page.md.js"), "../post/do-something-else/+page.md": () => import("../../pages/post/do-something-else/_page.md.js"), "../post/dumbbell-plots/+page.md": () => import("../../pages/post/dumbbell-plots/_page.md.js"), "../post/economist-table-replication-using-reactable/+page.md": () => import("../../pages/post/economist-table-replication-using-reactable/_page.md.js"), "../post/flat-data-r/+page.md": () => import("../../pages/post/flat-data-r/_page.md.js"), "../post/following/+page.md": () => import("../../pages/post/following/_page.md.js"), "../post/introducing-tpltheme/+page.md": () => import("../../pages/post/introducing-tpltheme/_page.md.js"), "../post/learning/+page.md": () => import("../../pages/post/learning/_page.md.js"), "../post/map-springfield/+page.md": () => import("../../pages/post/map-springfield/_page.md.js"), "../post/nuxt-blog-starter/+page.md": () => import("../../pages/post/nuxt-blog-starter/_page.md.js"), "../post/refugee-trends/+page.md": () => import("../../pages/post/refugee-trends/_page.md.js"), "../post/svelte-and-d3/+page.md": () => import("../../pages/post/svelte-and-d3/_page.md.js"), "../post/svelte-reactivity/+page.md": () => import("../../pages/post/svelte-reactivity/_page.md.js"), "../post/svelte-scatter/+page.md": () => import("../../pages/post/svelte-scatter/_page.md.js"), "../post/svelte-scrollytelling/+page.md": () => import("../../pages/post/svelte-scrollytelling/_page.md.js"), "../post/this-site/+page.md": () => import("../../pages/post/this-site/_page.md.js"), "../post/tidy-tuesday-powerlifting/+page.md": () => import("../../pages/post/tidy-tuesday-powerlifting/_page.md.js"), "../post/tidy-tuesday-replication/+page.md": () => import("../../pages/post/tidy-tuesday-replication/_page.md.js") });
  let body = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          path
        };
      })
    );
  }
  const posts = await Promise.all(body);
  return new Response(
    JSON.stringify(posts)
  );
}
export {
  GET
};
