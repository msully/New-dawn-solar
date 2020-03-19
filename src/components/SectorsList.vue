<template>
  <!-- Start Sectors-->
  <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
    <div>
      <h1 class="text-3xl leading-tight font-bold">Market Sectors we serve</h1>
      <p class="text-gray-600 mt-2 md:max-w-lg">
        Solar Energy is a relatively new concept formost Property owners and the Development function we provide is to give the owner surety and advice that they are getting value in the solution provided and are getting a scheme that is properly designed and functional for the purpose required.
      </p>
    </div>

    <div class="md:flex mt-12 md:-mx-4">
      <div v-for="item in sectors" :key="item.node.id" class="md:px-4 w-full">
        <div class="bg-white rounded border border-gray-300">
          <g-link :to="item.node.path">
            <g-image
              :src="item.node.cover_image"
              :alt="item.node.title"
              class="w-full h-48 object-cover"
            />
          </g-link>

          <div class="p-4">
            <g-link
              :to="item.node.path"
              class="text-lg font-semibold leading-tight mt-4"
            >{{item.node.title}}</g-link>

            <p class="text-gray-600 mt-1">{{ getDescriptionBody(item.node.description) }}</p>
            <div class="py-4">
              <g-link
                :to="item.node.path"
                class="text-sm md:text-base uppercase text-orange-600 font-semibold tracking-wider border-b-2 border-transparent hover:border-orange-800 hover:border-b-2 mb-4"
              >
                Learn
                more →
              </g-link>
            </div>
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
    },
    path: String
  },
  methods: {
    getDescriptionBody(description) {
      let body = this.stripTags(description);

      return body.length > 256 ? body.substring(0, 256) + "..." : body;
    },

    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    }
  }
};
</script>
