<template>
  <Layout>
      <article class="relative bg-gray-100">
        <g-image
              :src="about.cover_image"
              :alt="about.title"
              class="w-full mt-24 h-64 object-cover bg-center"
            />
        <div class="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:px-8">
            
            <h1 class="text-3xl leading-tight font-bold mt-4">{{ about.title }}</h1>
            <div class="markdown" v-html="about.body"></div>
          </div>
        </div>
        </div>
        <InTouch />
      </article>
  </Layout>
</template>

<script>

import InTouch from "../components/InTouch";
import about from "@/data/about.yml";

export default {
  data() {
    return {
      about
    };
  },
  components: {
    InTouch
  },
  metaInfo: {
    title: "About us"
  }
};
</script>
