
import { configuration } from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';

import { theme } from './theme';



export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'posts'
  },
  dest: {
    namespace: '',    // --> change this if you want to also deploy to GitHub Pages
    html: 'dist',
    assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',
    bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',
    styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',
  },
  page: {
    title: {
      base: 'بلاگ'         // --> change this to change your blog's title
    },
    favicon: 'https://medad-ai.ir/favicon.svg'
  },
  plugins: [
    codingBlog({
      assets: [
        'img',
        'favicon.ico',
      ]
    })
  ],
  misc: {
    github: {
      repo: 'Medad-ai.github.io',         // --> change this to your github repo
      user: 'Medad-ai'         // --> change this to your github username
    }
  }
});
