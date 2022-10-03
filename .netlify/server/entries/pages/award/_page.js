async function load({ fetch }) {
  const res = await fetch(`/awards.json`);
  const awards = await res.json();
  return {
    awards
  };
}
export {
  load
};
