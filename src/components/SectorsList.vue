<template>
  <!-- Start Sectors-->
  <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
    <div>
      <h2 class="text-3xl leading-tight font-bold">Market Sectors we serve</h2>
      <p class="text-gray-600 mt-2 md:max-w-lg">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas.
      </p>
    </div>

    <div class="md:flex mt-12 md:-mx-4">
      <div v-for="item in sectors" :key="item.node.id" class="md:px-4 md:w-1/2 xl:w-1/4">
        <div class="bg-white rounded border border-gray-300">
          <g-link :to="item.node.path">
            <g-image
              :src="item.node.cover_image"
              :alt="item.node.title"
              class="w-full h-48 object-cover"
            />
          </g-link>

          <div class="p-4">
            <div class="flex items-center text-sm">
              <span class="text-gray-600 my-2">{{ item.node.date }}</span>
            </div>
            <g-link
              :to="item.node.path"
              class="text-lg font-semibold leading-tight mt-4"
            >{{item.node.title}}</g-link>

            <p class="text-gray-600 mt-1">{{item.node.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Sectors -->
</template>


<script>
export default {
  props: {
    sectors: {
      type: Array,
      requires: true
    }
  }
};
</script>
