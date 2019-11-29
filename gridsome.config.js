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
    ]
  },
  plugins: [
    {
      // Create Services from markdown files
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
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/static/admin`
      }
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