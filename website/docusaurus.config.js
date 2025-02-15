const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/",
  },
  email: {
    label: "Email",
    href: "",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  about: {
    label: "About",
    to: "about",
  },
  resume: {
    label: "Resume",
    href: "https://help.centralindia.cloudapp.azure.com/resume.pdf",
  },
};

module.exports = {
  title: "Evan Tay",
  tagline:
    "I am a Software Engineer and Cloud Engineer passionate about solving Meaningful Problems.",
  url: "https://help.centralindia.cloudapp.azure.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "digipie",
  projectName: "kaya-folio",
  plugins: ["posthog-docusaurus"],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Evan Tay",
      logo: {
        alt: "Evan Tay",
        src: "img/logo.png",
        href: "https://help.centralindia.cloudapp.azure.com",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        { to: "about/", label: "About", position: "right" },
        {
          href: "https://help.centralindia.cloudapp.azure.com/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.about,
            internetProfiles.resume,
          ],
        },
      ],
      copyright: `Last updated on ${new Date().toDateString()}`,
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY || "DEV",
      enableInDevelopment: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/dhiraj-competentgroove/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
