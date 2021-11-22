async function get() {
  const imports = { "./post/adding-a-chart-to-your-d3-tooltip.md": () => import("./adding-a-chart-to-your-d3-tooltip-421b1867.js"), "./post/animate-hugo-academic.md": () => import("./animate-hugo-academic-cab8584c.js"), "./post/automation-scrollytell.md": () => import("./automation-scrollytell-402fa905.js"), "./post/color-in-data-vis.md": () => import("./color-in-data-vis-5be9348e.js"), "./post/covid-gun-spikes.md": () => import("./covid-gun-spikes-4a1d9d63.js"), "./post/covid-on-campus.md": () => import("./covid-on-campus-8ac2320d.js"), "./post/covid-posts.md": () => import("./covid-posts-f977e8f1.js"), "./post/do-something-else.md": () => import("./do-something-else-aeb891b7.js"), "./post/dumbbell-plots.md": () => import("./dumbbell-plots-a64f02ae.js"), "./post/economist-table-replication-using-reactable.md": () => import("./economist-table-replication-using-reactable-07e955fd.js"), "./post/flat-data-r.md": () => import("./flat-data-r-82582d59.js"), "./post/introducing-tpltheme.md": () => import("./introducing-tpltheme-6323b00e.js"), "./post/map-springfield.md": () => import("./map-springfield-721adfad.js"), "./post/nuxt-blog-starter.md": () => import("./nuxt-blog-starter-6076f0c0.js"), "./post/refugee-trends.md": () => import("./refugee-trends-52054500.js"), "./post/svelte-and-d3.md": () => import("./svelte-and-d3-17f24861.js"), "./post/svelte-scatter.md": () => import("./svelte-scatter-4d8831ed.js"), "./post/tidy-tuesday-powerlifting.md": () => import("./tidy-tuesday-powerlifting-aa4c60a2.js"), "./post/tidy-tuesday-replication.md": () => import("./tidy-tuesday-replication-0d07698e.js") };
  let body = [];
  for (const path in imports) {
    body.push(imports[path]().then(({ metadata }) => {
      return {
        metadata,
        path
      };
    }));
  }
  const posts = await Promise.all(body);
  return {
    body: JSON.stringify(posts)
  };
}
export { get };
