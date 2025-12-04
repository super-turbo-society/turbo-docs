import { defineConfig } from "vocs";

export default defineConfig({
  title: "Turbo Docs",
  description: "Make low-res, sprite-based 2D games as fast as possible.",
  logoUrl: {
    dark: "/logo-dark.svg",
    light: "/logo-light.svg",
  },
  iconUrl: {
    dark: "/icon-dark.svg",
    light: "/icon-light.svg",
  },
  theme: {
    accentColor: {
      light: "#bf88ff",
      dark: "#68ebb0",
    },
    variables: {
      color: {
        backgroundAccentText: {
          light: "#fff",
          dark: "#000",
        },
      },
    },
  },
  // ogImageUrl: "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  ogImageUrl: "https://docs.turbo.computer/og.png",
  banner: {
    dismissable: false,
    backgroundColor: "#7a09fa",
    content:
      "Hey there, game dev! Don't forget to join the [Super Turbo Society Discord](https://discord.gg/makegamesfast) →",
  },
  aiCta: false,
  topNav: [
    // {
    //   text: "Learn",
    //   link: "/learn/getting-started",
    //   match: "/learn",
    // },
    // {
    //   text: "Demos",
    //   link: "/example",
    //   match: "/example",
    // },
    // {
    //   text: "Resources",
    //   link: "/example",
    //   match: "/example",
    // },
    // {
    //   text: "Playground",
    //   link: "/example",
    //   match: "/example",
    // },
    // { text: "Blog", link: "/blog" },
    {
      text: "0.9.0",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/super-turbo-society/turbo-cli/releases",
        },
        {
          text: "Contributing",
          link: "https://github.com/super-turbo-society/turbo-demos/blob/main/CONTRIBUTING.md",
        },
      ],
    },
  ],
  sidebar: {
    "/learn/": [
      {
        text: "✨ Getting Started",
        link: "/learn/getting-started",
      },
      {
        text: "🛠️ Installation",
        link: "/learn/installation",
      },
      {
        text: "📚 Cheatsheet",
        link: "/learn/cheatsheet",
      },
      {
        text: "Tutorials",
        collapsed: false,
        items: [
          {
            text: "Hello, World!",
            link: "/learn/tutorials/hello-world",
          },

          {
            text: "Pancake Cat",
            link: "/learn/tutorials/pancake-cat",
          },
          // {
          //   text: "Pong",
          //   link: "/learn/tutorials/pong",
          // },
          {
            text: "Space Shooter",
            link: "/learn/tutorials/space-shooter-part-1",
          },
          {
            text: "Character Sheet",
            link: "/learn/tutorials/character-sheet",
          },
          // {
          //   text: "Space Shooter (Part 2)",
          //   link: "/learn/tutorials/space-shooter-part-2",
          // },
        ],
      },
      {
        text: "Guides",
        collapsed: false,
        items: [
          {
            text: "Using Turbo CLI",
            link: "/learn/guides/cli",
          },
          {
            text: "Keyboard Shortcuts",
            link: "/learn/guides/keyboard-shortcuts",
          },
          {
            text: "Rust Language Basics",
            link: "/learn/guides/rust-basics",
          },
          {
            text: "Configuring Your Game",
            link: "/learn/guides/configuration",
          },
          {
            text: "Working with Sprites",
            link: "/learn/guides/sprites",
          },
          {
            text: "Adding Custom Fonts",
            link: "/learn/guides/fonts",
          },
          {
            text: "Playing Music & Sounds",
            link: "/learn/guides/audio",
          },
          {
            text: "Writing Custom Shaders",
            link: "/learn/guides/shaders",
          },
          {
            text: "Publishing to the Web",
            link: "/learn/guides/web-publishing",
          },
          {
            text: "Understanding Network Code",
            link: "/learn/guides/netcode",
          },
        ],
      },
      {
        text: "API",
        collapsed: false,
        items: [
          { text: "Audio", link: "/learn/api/audio" },
          { text: "Bounds", link: "/learn/api/bounds" },
          { text: "Camera", link: "/learn/api/camera" },
          { text: "Circles", link: "/learn/api/circles" },
          { text: "Background Color", link: "/learn/api/clear" },
          { text: "Ellipses", link: "/learn/api/ellipses" },
          { text: "Events", link: "/learn/api/events" },
          { text: "Gamepad", link: "/learn/api/gamepad" },
          { text: "Keyboard", link: "/learn/api/keyboard" },
          { text: "Lines", link: "/learn/api/lines" },
          { text: "Log", link: "/learn/api/log" },
          { text: "Mouse", link: "/learn/api/mouse" },
          { text: "Nine-Slices", link: "/learn/api/nine-slices" },
          { text: "Pointer", link: "/learn/api/pointer" },
          { text: "Randomness", link: "/learn/api/randomness" },
          { text: "Rectangles", link: "/learn/api/rectangles" },
          { text: "Save and Load", link: "/learn/api/save" },
          { text: "Sprites", link: "/learn/api/sprites" },
          { text: "Text", link: "/learn/api/text" },
          { text: "Text Boxes", link: "/learn/api/text_box" },
          { text: "Time", link: "/learn/api/time" },
          { text: "Tween", link: "/learn/api/tween" },
          {
            text: "Networking",
            items: [
              { text: "Channels", link: "/learn/api/networking/channels" },
              { text: "Commands", link: "/learn/api/networking/commands" },
              // { text: "Filesystem", link: "/learn/cheatsheet" },
            ],
          },
        ],
      },
    ],
  },
  socials: [
    {
      icon: "discord",
      link: "https://discord.gg/makegamesfast",
    },
    {
      icon: "github",
      link: "https://github.com/super-turbo-society",
    },
    {
      icon: "x",
      link: "https://twitter.com/makegamesfast",
    },
  ],
});
