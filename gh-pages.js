import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/connorrothschild/svelte-personal-site', // Update to point to your repository
  user: {
   name: 'Connor Rothschild', // update to use your name
   email: 'connorrothschild@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);