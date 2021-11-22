async function get() {
  const imports = { "./experience/axios.md": () => import("./axios-c20de1de.js"), "./experience/moksha.md": () => import("./moksha-b50b4ef6.js"), "./experience/socom.md": () => import("./socom-51434f5e.js"), "./experience/tpl.md": () => import("./tpl-f69a4c41.js") };
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
