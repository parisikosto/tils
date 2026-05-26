import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TILs',
  tagline: 'Unveiling the Tech Learning Odyssey',
  favicon: 'img/favicon.ico',
  future: { v4: true },
  url: 'https://tils.parisikosto.com',
  baseUrl: '/',
  organizationName: 'parisikosto',
  projectName: 'tils',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: './sidebars.ts' },
        theme: { customCss: './src/css/custom.css' },
        gtag: { trackingID: 'G-5DTBC51CQT', anonymizeIP: true },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'TILs',
      logo: {
        alt: 'parisikosto logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/parisikosto/tils',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Menu', items: [{ label: 'Docs', to: '/' }] },
        {
          title: 'Social',
          items: [
            { label: 'GitHub', href: 'https://github.com/parisikosto' },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/pariskostopoulos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TILs | <a href="https://parisikosto.com" target="_blank">parisikosto.com</a>. Built with love ❤️ 💪.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
