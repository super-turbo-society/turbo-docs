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
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/super-turbo-society/turbo-docs/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: "https://github.com/super-turbo-society/turbo-docs",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    defaultMode: "dark",
    image: "/img/turbo-social-card-2.png",
    // announcementBar: {
    //   id: "support_us",
    //   content: 'Want to connect with other Turbo game devs? Come join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/7rBptEtM3v">Discord Community &rarr;</a>',
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
              to: "/docs/intro",
            },
            {
              label: "Quick Start",
              to: "/docs/quick-start",
            },
            {
              label: "Tutorials",
              to: "/docs/tutorials",
            },
            {
              label: "Reference",
              to: "/docs/reference",
            },
            {
              label: "How To",
              to: "/docs/how-to",
            },
            {
              label: "Resources",
              to: "/docs/resources",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Mry2mFbY4D",
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
