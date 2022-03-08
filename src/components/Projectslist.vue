<template>
  <!-- Start Projects -->
  <section class="relative w-full px-4 py-24 bg-white sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
    <div>
      <h1 class="text-3xl font-bold leading-tight">Our Projects</h1>
      <p class="mt-2 text-gray-600 md:max-w-lg">
        Discover why you should choose to use the sun’s power to energise your home, control your energy costs, save & earn money and do your bit to save the planet. Here at Newdawn Solr, we passionately believe in providing the very best products, prices, quality & service for you! Here is a preview of some of our latest projects.
      </p>
      <g-link v-if="path"
        to="/projects"
        class="inline-block mt-6 font-semibold text-teal-500 mt:md-0"
      >View All Projects</g-link>
    </div>

    <div class="mt-12 md:flex md:-mx-4">
      <div v-for="item in projects" :key="item.node.id" class="md:px-4 md:w-1/2 xl:w-1/4">
        <div class="bg-white border border-gray-300 rounded-md group group-hover:shadow-xl">
          <g-link :to="item.node.path">
            <g-image
              :src="item.node.cover_image"
              :alt="item.node.title"
              class="object-cover w-full h-48"
            />
          </g-link>

          <div class="p-4">
            <div class="flex items-center text-sm">
              <span class="my-2 text-gray-600">{{ item.node.date }}</span>
            </div>
            <g-link
              :to="item.node.path"
              class="mt-4 text-lg font-semibold leading-tight group-hover:text-orange-600"
            >{{item.node.title}}</g-link>

            <p class="mt-1 text-gray-600">{{item.node.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Projects -->
</template>


<script>
export default {
  props: {
    projects: {
      type: Array,
      requires: true
    },
    path: String
  }
};
</script>
