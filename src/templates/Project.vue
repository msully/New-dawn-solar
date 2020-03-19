<template>
  <Layout>
    <article class="relative bg-gray-100">
      
      <g-image 
        :src="$page.project.cover_image"
        :alt="$page.project.title"
        class="w-full mt-24 h-64 object-cover"
        />
      <div class="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">

          <h1 class="text-4xl font-bold leading-tight mt-4">{{ $page.project.title }}</h1>
          <div class="text-xl text-gray-600 mb-4 mt-2">{{ $page.project.date }}</div>
          <div class="markdown mb-8 mt-2" v-html="$page.project.content" />
          <div class="mb-8">
            <g-link to="/projects" class="font-bold uppercase">Back to Projects</g-link>
          </div>
        </div>
     
    </article>
     <InTouch />
  </Layout>
</template>

<page-query>
query Project ($path: String) {
  project: projects (path: $path) {
    title
    date (format: "D, MMMM, Y")
    description
    content
    cover_image
  }
}
</page-query>

<script>

import InTouch from "../components/InTouch";

export default {
  components: {
    InTouch
  }
};
</script>

<style>
</style>