// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/css/main.css')

import DefaultLayout from '~/layouts/Default.vue';

import "prismjs/themes/prism.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
    })
    head.meta.push({
      name: "google-site-verification",
      content: "RG31Gd16Wuvy8Rwvnvs0urWomfo0dRnF4PLHUqDOWfQ"
    })
}
