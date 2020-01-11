<template>
  <Layout>
      <article class="relative bg-gray-100">
        <g-image
              :src="$page.about.cover_image"
              :alt="$page.about.title"
              class="w-full mt-24 h-64 object-cover bg-center"
            />
        <div class="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:px-8">
            
            <h1 class="text-3xl leading-tight font-bold mt-4">{{ $page.about.title }}</h1>
            <div class="markdown" v-html="$page.about.content"></div>
          </div>
        </div>
        </div>
        <InTouch />
      </article>
  </Layout>
</template>

<page-query>  

query  {
  about: about (path: "/content/about/") {
    title
    cover_image
    content
  }
}
</page-query>

<script>

import InTouch from "../components/InTouch";

export default {
  components: {
    InTouch
  },
  metaInfo: {
    title: "About us"
  }
};
</script>
