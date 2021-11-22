async function get() {
  const imports = { "./award/bipp-2018.md": () => import("./bipp-2018-8d8285c0.js"), "./award/chrp-2020.md": () => import("./chrp-2020-e03eac45.js"), "./award/d2k-showcase-2020.md": () => import("./d2k-showcase-2020-c7cd4940.js"), "./award/datathon-2020.md": () => import("./datathon-2020-ca4a3078.js"), "./award/hpc-2018.md": () => import("./hpc-2018-a5d5e7c4.js"), "./award/hpc-2019.md": () => import("./hpc-2019-44e35746.js"), "./award/hpc-2020.md": () => import("./hpc-2020-60da278c.js"), "./award/hudspeth-2020.md": () => import("./hudspeth-2020-798e5521.js"), "./award/malofiej-2020.md": () => import("./malofiej-2020-44960526.js"), "./award/malofiej-2021.md": () => import("./malofiej-2021-0385a896.js"), "./award/nationals-2017.md": () => import("./nationals-2017-1d332e93.js"), "./award/northeastern-2020.md": () => import("./northeastern-2020-9e894c5e.js"), "./award/pudding-cup-2020.md": () => import("./pudding-cup-2020-8061e296.js"), "./award/rstudio-table-contest-2021.md": () => import("./rstudio-table-contest-2021-b189d2e7.js"), "./award/snd-2021.md": () => import("./snd-2021-8ef66922.js") };
  let body = [];
  for (const path in imports) {
    body.push(imports[path]().then(({ metadata }) => {
      return {
        metadata,
        path
      };
    }));
  }
  const awards = await Promise.all(body);
  return {
    body: JSON.stringify(awards)
  };
}
export { get };
