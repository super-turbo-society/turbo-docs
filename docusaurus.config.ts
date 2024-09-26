import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Turbo",
  tagline: "Make games fast",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://turbo.computer",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "super-turbo-society", // Usually your GitHub org/user name.
  projectName: "turbo-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/super-turbo-society/turbo-tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "MOWFRHS3LY",

      // Public API key: it is safe to commit it
      apiKey: "98a102723d13537ad9922177ab0f995d",

      indexName: "turbo",

      // Optional: see doc section below
      contextualSearch: false,

      // // Optional: Algolia search parameters
      // searchParameters: {},

      // // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      //... other Algolia params
    },
    // Replace with your project's social card
    defaultMode: "dark",
    image: "/img/turbo-social-card-2.png",
    // announcementBar: {
    //   id: "support_us",
    //   content: 'Want to connect with other Turbo game devs? Come join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Xb3tgSZGgD">Discord Community &rarr;</a>',
    //   backgroundColor: "var(--ifm-color-primary)",
    //   textColor: "var(--ifm-button-color)",
    //   isCloseable: false,
    // },
    navbar: {
      // title: "Turbo",
      logo: {
        alt: "Turbo Logo",
        src: "/motion-t.svg",
        srcDark: "/motion-t.svg",
      },
      items: [
        // {
        //   type: 'docsVersionDropdown',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/super-turbo-society/turbo-demos",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/intro",
            },
            {
              label: "Quick Start",
              to: "/",
            },
            {
              label: "Tutorials",
              to: "/tutorials",
            },
            {
              label: "How To",
              to: "/how-to",
            },
            {
              label: "Resources",
              to: "/resources",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Xb3tgSZGgD",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/makegamesfast",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/super-turbo-society/turbo-demos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Turbo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
