async function load({ fetch }) {
  const res = await fetch(`/projects.json`);
  const projects = await res.json();
  return {
    projects
  };
}
export {
  load
};
