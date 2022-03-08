<template>
  <Layout>
    <article class="relative bg-gray-100">

      <g-image
        :src="$page.project.cover_image"
        :alt="$page.project.title"
        class="object-cover w-full h-64 mt-24"
        />
      <div class="px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">

          <h1 class="mt-4 text-4xl font-bold leading-tight">{{ $page.project.title }}</h1>
          <div class="mt-2 mb-4 text-xl text-gray-600">{{ $page.project.date }}</div>
          <div class="mt-2 mb-8 markdown" v-html="$page.project.content" />
          <ul class="grid grid-cols-2 gap-8 mx-auto text-lg lg:grid-cols-4 xlg:grid-cols-6 sm:text-xl">
            <li v-for="item in $page.project.galleryImages" :key="item.id" class="w-full">

              <g-image
                :src="item.image"
                :alt="item.alt"
                class="object-cover w-full h-full rounded-md"
                />

            </li>
          </ul>
          <div class="my-8">
            <g-link to="/projects" class="mb-4 text-sm font-semibold tracking-wider text-orange-600 uppercase border-b-2 border-transparent md:text-base hover:border-orange-800 hover:border-b-2">Back to Projects</g-link>
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
    galleryImages {
      image
      alt
    }
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
