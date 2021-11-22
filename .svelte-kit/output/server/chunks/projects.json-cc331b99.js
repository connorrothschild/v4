async function get() {
  const imports = { "./project/atus.md": () => import("./atus-6e14919e.js"), "./project/bob-ross-art-gallery.md": () => import("./bob-ross-art-gallery-3d071e51.js"), "./project/compas.md": () => import("./compas-7c02b1aa.js"), "./project/covid-masking.md": () => import("./covid-masking-5fbb9653.js"), "./project/cudi-hums.md": () => import("./cudi-hums-10522966.js"), "./project/how-many-people.md": () => import("./how-many-people-51f373a8.js"), "./project/map-houston-homicides.md": () => import("./map-houston-homicides-5a11c244.js"), "./project/map-missing-migrants.md": () => import("./map-missing-migrants-727a7a7e.js"), "./project/media-mentions.md": () => import("./media-mentions-fc9ac093.js"), "./project/one-line-hacks.md": () => import("./one-line-hacks-ea791512.js"), "./project/police-killings.md": () => import("./police-killings-b427c55b.js"), "./project/quarantunes.md": () => import("./quarantunes-86c2221c.js"), "./project/state-police-spending.md": () => import("./state-police-spending-9c4d2385.js"), "./project/tpl-schools-db.md": () => import("./tpl-schools-db-96be0c8a.js") };
  let body = [];
  for (const path in imports) {
    body.push(imports[path]().then(({ metadata }) => {
      return {
        metadata,
        path
      };
    }));
  }
  const projects = await Promise.all(body);
  return {
    body: JSON.stringify(projects)
  };
}
export { get };
