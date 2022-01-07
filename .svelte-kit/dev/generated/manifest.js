const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/experience/index.svelte"),
	() => import("../../../src/routes/experience/moksha.md"),
	() => import("../../../src/routes/experience/axios.md"),
	() => import("../../../src/routes/experience/socom.md"),
	() => import("../../../src/routes/experience/tpl.md"),
	() => import("../../../src/routes/project/index.svelte"),
	() => import("../../../src/routes/project/map-houston-homicides.md"),
	() => import("../../../src/routes/project/state-police-spending.md"),
	() => import("../../../src/routes/project/bob-ross-art-gallery.md"),
	() => import("../../../src/routes/project/map-missing-migrants.md"),
	() => import("../../../src/routes/project/how-many-people.md"),
	() => import("../../../src/routes/project/police-killings.md"),
	() => import("../../../src/routes/project/media-mentions.md"),
	() => import("../../../src/routes/project/one-line-hacks.md"),
	() => import("../../../src/routes/project/tpl-schools-db.md"),
	() => import("../../../src/routes/project/covid-masking.md"),
	() => import("../../../src/routes/project/quarantunes.md"),
	() => import("../../../src/routes/project/cudi-hums.md"),
	() => import("../../../src/routes/project/compas.md"),
	() => import("../../../src/routes/project/atus.md"),
	() => import("../../../src/routes/about/index.svelte"),
	() => import("../../../src/routes/award/index.svelte"),
	() => import("../../../src/routes/award/rstudio-table-contest-2021.md"),
	() => import("../../../src/routes/award/d2k-showcase-2020.md"),
	() => import("../../../src/routes/award/northeastern-2020.md"),
	() => import("../../../src/routes/award/pudding-cup-2020.md"),
	() => import("../../../src/routes/award/nationals-2017.md"),
	() => import("../../../src/routes/award/datathon-2020.md"),
	() => import("../../../src/routes/award/hudspeth-2020.md"),
	() => import("../../../src/routes/award/malofiej-2020.md"),
	() => import("../../../src/routes/award/malofiej-2021.md"),
	() => import("../../../src/routes/award/bipp-2018.md"),
	() => import("../../../src/routes/award/chrp-2020.md"),
	() => import("../../../src/routes/award/hpc-2018.md"),
	() => import("../../../src/routes/award/hpc-2019.md"),
	() => import("../../../src/routes/award/hpc-2020.md"),
	() => import("../../../src/routes/award/snd-2021.md"),
	() => import("../../../src/routes/post/index.svelte"),
	() => import("../../../src/routes/post/economist-table-replication-using-reactable.md"),
	() => import("../../../src/routes/post/adding-a-chart-to-your-d3-tooltip.md"),
	() => import("../../../src/routes/post/tidy-tuesday-powerlifting.md"),
	() => import("../../../src/routes/post/tidy-tuesday-replication.md"),
	() => import("../../../src/routes/post/automation-scrollytell.md"),
	() => import("../../../src/routes/post/animate-hugo-academic.md"),
	() => import("../../../src/routes/post/svelte-scrollytelling.md"),
	() => import("../../../src/routes/post/introducing-tpltheme.md"),
	() => import("../../../src/routes/post/color-in-data-vis.md"),
	() => import("../../../src/routes/post/do-something-else.md"),
	() => import("../../../src/routes/post/nuxt-blog-starter.md"),
	() => import("../../../src/routes/post/covid-gun-spikes.md"),
	() => import("../../../src/routes/post/covid-on-campus.md"),
	() => import("../../../src/routes/post/map-springfield.md"),
	() => import("../../../src/routes/post/dumbbell-plots.md"),
	() => import("../../../src/routes/post/refugee-trends.md"),
	() => import("../../../src/routes/post/svelte-scatter.md"),
	() => import("../../../src/routes/post/svelte-and-d3.md"),
	() => import("../../../src/routes/post/covid-posts.md"),
	() => import("../../../src/routes/post/flat-data-r.md"),
	() => import("../../../src/routes/post/following.md"),
	() => import("../../../src/routes/post/this-site.md"),
	() => import("../../../src/routes/post/learning.md")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	,

	,

	,

	// src/routes/experience/index.svelte
	[/^\/experience\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/experience/moksha.md
	[/^\/experience\/moksha\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/experience/axios.md
	[/^\/experience\/axios\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/experience/socom.md
	[/^\/experience\/socom\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/experience/tpl.md
	[/^\/experience\/tpl\/?$/, [c[0], c[7]], [c[1]]],

	,

	// src/routes/project/index.svelte
	[/^\/project\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/project/map-houston-homicides.md
	[/^\/project\/map-houston-homicides\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/project/state-police-spending.md
	[/^\/project\/state-police-spending\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/project/bob-ross-art-gallery.md
	[/^\/project\/bob-ross-art-gallery\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/project/map-missing-migrants.md
	[/^\/project\/map-missing-migrants\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/project/how-many-people.md
	[/^\/project\/how-many-people\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/project/police-killings.md
	[/^\/project\/police-killings\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/project/media-mentions.md
	[/^\/project\/media-mentions\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/project/one-line-hacks.md
	[/^\/project\/one-line-hacks\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/project/tpl-schools-db.md
	[/^\/project\/tpl-schools-db\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/project/covid-masking.md
	[/^\/project\/covid-masking\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/project/quarantunes.md
	[/^\/project\/quarantunes\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/project/cudi-hums.md
	[/^\/project\/cudi-hums\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/project/compas.md
	[/^\/project\/compas\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/project/atus.md
	[/^\/project\/atus\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/award/index.svelte
	[/^\/award\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/award/rstudio-table-contest-2021.md
	[/^\/award\/rstudio-table-contest-2021\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/award/d2k-showcase-2020.md
	[/^\/award\/d2k-showcase-2020\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/award/northeastern-2020.md
	[/^\/award\/northeastern-2020\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/award/pudding-cup-2020.md
	[/^\/award\/pudding-cup-2020\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/award/nationals-2017.md
	[/^\/award\/nationals-2017\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/award/datathon-2020.md
	[/^\/award\/datathon-2020\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/award/hudspeth-2020.md
	[/^\/award\/hudspeth-2020\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/award/malofiej-2020.md
	[/^\/award\/malofiej-2020\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/award/malofiej-2021.md
	[/^\/award\/malofiej-2021\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/award/bipp-2018.md
	[/^\/award\/bipp-2018\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/award/chrp-2020.md
	[/^\/award\/chrp-2020\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/award/hpc-2018.md
	[/^\/award\/hpc-2018\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/award/hpc-2019.md
	[/^\/award\/hpc-2019\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/award/hpc-2020.md
	[/^\/award\/hpc-2020\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/award/snd-2021.md
	[/^\/award\/snd-2021\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/post/index.svelte
	[/^\/post\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/post/economist-table-replication-using-reactable.md
	[/^\/post\/economist-table-replication-using-reactable\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/post/adding-a-chart-to-your-d3-tooltip.md
	[/^\/post\/adding-a-chart-to-your-d3-tooltip\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/post/tidy-tuesday-powerlifting.md
	[/^\/post\/tidy-tuesday-powerlifting\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/post/tidy-tuesday-replication.md
	[/^\/post\/tidy-tuesday-replication\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/post/automation-scrollytell.md
	[/^\/post\/automation-scrollytell\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/post/animate-hugo-academic.md
	[/^\/post\/animate-hugo-academic\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/post/svelte-scrollytelling.md
	[/^\/post\/svelte-scrollytelling\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/post/introducing-tpltheme.md
	[/^\/post\/introducing-tpltheme\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/post/color-in-data-vis.md
	[/^\/post\/color-in-data-vis\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/post/do-something-else.md
	[/^\/post\/do-something-else\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/post/nuxt-blog-starter.md
	[/^\/post\/nuxt-blog-starter\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/post/covid-gun-spikes.md
	[/^\/post\/covid-gun-spikes\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/post/covid-on-campus.md
	[/^\/post\/covid-on-campus\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/post/map-springfield.md
	[/^\/post\/map-springfield\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/post/dumbbell-plots.md
	[/^\/post\/dumbbell-plots\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/post/refugee-trends.md
	[/^\/post\/refugee-trends\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/post/svelte-scatter.md
	[/^\/post\/svelte-scatter\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/post/svelte-and-d3.md
	[/^\/post\/svelte-and-d3\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/post/covid-posts.md
	[/^\/post\/covid-posts\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/post/flat-data-r.md
	[/^\/post\/flat-data-r\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/post/following.md
	[/^\/post\/following\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/post/this-site.md
	[/^\/post\/this-site\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/post/learning.md
	[/^\/post\/learning\/?$/, [c[0], c[63]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];