module.exports = {
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [
    [
      require("remark-github"),
      {
        // Use your own repository
        repository: "https://github.com/svelte-add/mdsvex.git",
      },
    ],
    require("remark-abbr"),
  ],
  rehypePlugins: [
    require("rehype-slug"),
    [
      require("rehype-autolink-headings"),
      {
        behavior: "wrap",
      },
    ],
  ],
  layout: {
    blog: "./src/routes/blog/layout.svelte",
    experience: "./src/routes/experience/layout.svelte"
  },
};
