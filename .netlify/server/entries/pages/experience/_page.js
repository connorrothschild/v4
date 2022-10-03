async function load({ fetch }) {
  const res = await fetch(`/experience.json`);
  const jobs = await res.json();
  return {
    jobs
  };
}
export {
  load
};
