# Remove the Homepage

[https://stackoverflow.com/questions/61999271/how-to-set-docs-as-the-main-page](https://stackoverflow.com/questions/61999271/how-to-set-docs-as-the-main-page)

Remove the homepage so visitors land on the docs directly.

1. Delete or archive the `src/pages` directory.
2. Add the `routeBasePath` option to `docusaurus.config.ts`:

```ts title="docusaurus.config.ts"
module.exports = {
  // ...
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: './sidebars.ts' },
        // ...
      },
    ],
  ],
  // ...
};
```

3. Open the Markdown file you want to use as the landing page (e.g., `docs/intro.md`) and add the following front matter at the top:

```md title="docs/intro.md"
---
title: Introduction
slug: /
sidebar_position: 1
---

# Introduction
```

_Explore more by clicking [here](https://docusaurus.io/docs/docs-introduction#docs-only-mode)_
