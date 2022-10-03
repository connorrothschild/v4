async function load({ fetch }) {
  const res = await fetch(`/posts.json`);
  const posts = await res.json();
  return {
    posts
  };
}
export {
  load
};
