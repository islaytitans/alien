const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Alien",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "GM",
        link: "/gm/",
      },
      {
        text: "COTG1",
        link: "/gm/cotg1",
      },
      {
        text: "COTG2",
        link: "/gm/cotg2",
      },
      {
        text: "COTG3",
        link: "/gm/cotg3",
      },
      {
        text: "HOD1",
        link: "/gm/hod1",
      },
      {
        text: "HOD2",
        link: "/gm/hod2",
      },
      {
        text: "HOD3",
        link: "/gm/hod3",
      },
      {
        text: "Players",
        link: "/players/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
      "/gm/": [
        {
          title: "GM",
          collapsable: false,
          children: ["cotg1", "dow"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
