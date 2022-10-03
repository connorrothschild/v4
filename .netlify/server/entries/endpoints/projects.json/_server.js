async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../project/atus/+page.md": () => import("../../pages/project/atus/_page.md.js"), "../project/bob-ross-art-gallery/+page.md": () => import("../../pages/project/bob-ross-art-gallery/_page.md.js"), "../project/compas/+page.md": () => import("../../pages/project/compas/_page.md.js"), "../project/covid-masking/+page.md": () => import("../../pages/project/covid-masking/_page.md.js"), "../project/cudi-hums/+page.md": () => import("../../pages/project/cudi-hums/_page.md.js"), "../project/how-many-people/+page.md": () => import("../../pages/project/how-many-people/_page.md.js"), "../project/map-houston-homicides/+page.md": () => import("../../pages/project/map-houston-homicides/_page.md.js"), "../project/map-missing-migrants/+page.md": () => import("../../pages/project/map-missing-migrants/_page.md.js"), "../project/media-mentions/+page.md": () => import("../../pages/project/media-mentions/_page.md.js"), "../project/one-line-hacks/+page.md": () => import("../../pages/project/one-line-hacks/_page.md.js"), "../project/police-killings/+page.md": () => import("../../pages/project/police-killings/_page.md.js"), "../project/quarantunes/+page.md": () => import("../../pages/project/quarantunes/_page.md.js"), "../project/state-police-spending/+page.md": () => import("../../pages/project/state-police-spending/_page.md.js"), "../project/tpl-schools-db/+page.md": () => import("../../pages/project/tpl-schools-db/_page.md.js") });
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
  const projects = await Promise.all(body);
  return new Response(
    JSON.stringify(projects)
  );
}
export {
  GET
};
