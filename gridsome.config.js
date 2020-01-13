// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Solar Solutions for Farming, Business and Homes ",
  siteDescription:
    "Professional, fast, and reliable. Contact us with any questions you may have about installations and/or solar equipment pricing.",
  templates: {
    Projects: [
      {
        path: "/projects/:title",
        component: "./src/templates/Project.vue"
      }
    ],
    Sectors: [
      {
        path: "/sectors/:title",
        component: "./src/templates/Sector.vue"
      }
    ]
  },
  plugins: [
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Gridsome",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: true,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Gridsome",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "/assets/img/New Dawn Solar_LOGO_Full Colour.1ee212b5.png", // must be provided
        msTileImage: "",
        msTileColor: "#666600"
      }
    },
    {
      // Create About from Markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "About",
        path: "content/about/*.md"
      }
    },
    {
      // Create Projects from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Projects",
        path: "content/projects/*.md"
      }
    },
    {
      // Create Sectors from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Sectors",
        path: "content/sectors/*.md"
      }
    },
    {
      use: "gridsome-plugin-netlify-cms"
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};