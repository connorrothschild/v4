async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../experience/axios/+page.md": () => import("../../pages/experience/axios/_page.md.js"), "../experience/moksha/+page.md": () => import("../../pages/experience/moksha/_page.md.js"), "../experience/socom/+page.md": () => import("../../pages/experience/socom/_page.md.js"), "../experience/tpl/+page.md": () => import("../../pages/experience/tpl/_page.md.js") });
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
  const jobs = await Promise.all(body);
  return new Response(
    JSON.stringify(jobs)
  );
}
export {
  GET
};
