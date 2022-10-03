async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../award/bipp-2018/+page.md": () => import("../../pages/award/bipp-2018/_page.md.js"), "../award/chrp-2020/+page.md": () => import("../../pages/award/chrp-2020/_page.md.js"), "../award/d2k-showcase-2020/+page.md": () => import("../../pages/award/d2k-showcase-2020/_page.md.js"), "../award/datathon-2020/+page.md": () => import("../../pages/award/datathon-2020/_page.md.js"), "../award/hpc-2018/+page.md": () => import("../../pages/award/hpc-2018/_page.md.js"), "../award/hpc-2019/+page.md": () => import("../../pages/award/hpc-2019/_page.md.js"), "../award/hpc-2020/+page.md": () => import("../../pages/award/hpc-2020/_page.md.js"), "../award/hudspeth-2020/+page.md": () => import("../../pages/award/hudspeth-2020/_page.md.js"), "../award/malofiej-2020/+page.md": () => import("../../pages/award/malofiej-2020/_page.md.js"), "../award/malofiej-2021/+page.md": () => import("../../pages/award/malofiej-2021/_page.md.js"), "../award/nationals-2017/+page.md": () => import("../../pages/award/nationals-2017/_page.md.js"), "../award/northeastern-2020/+page.md": () => import("../../pages/award/northeastern-2020/_page.md.js"), "../award/pudding-cup-2020/+page.md": () => import("../../pages/award/pudding-cup-2020/_page.md.js"), "../award/rstudio-table-contest-2021/+page.md": () => import("../../pages/award/rstudio-table-contest-2021/_page.md.js"), "../award/snd-2021/+page.md": () => import("../../pages/award/snd-2021/_page.md.js") });
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
  const awards = await Promise.all(body);
  return new Response(
    JSON.stringify(awards)
  );
}
export {
  GET
};
