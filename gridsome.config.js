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
    "New Dawn Solar ( newdawnsolar.co.za ) provide a turnkey supply, installation and maintenance service for agricultural, commercial and residential solar projects and offer a range of finance options.",
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
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-160838551-1"
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