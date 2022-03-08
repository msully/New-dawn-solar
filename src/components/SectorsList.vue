<template>
  <!-- Start Sectors-->
  <section class="relative px-4 py-24 bg-white sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
    <div>
      <h1 class="text-3xl font-bold leading-tight">Market Sectors we serve</h1>
      <p class="mt-2 text-gray-600 md:max-w-5xl">
        Solar Energy is a relatively new concept formost Property owners and the Development function we provide is to give the owner surety and advice that they are getting value in the solution provided and are getting a scheme that is properly designed and functional for the purpose required.
      </p>
    </div>

    <div class="mt-12 md:flex md:-mx-4">
      <div v-for="item in sectors" :key="item.node.id" class="w-full md:px-4">
        <div class="bg-white border border-gray-300 rounded">
          <g-link :to="item.node.path">
            <g-image
              :src="item.node.cover_image"
              :alt="item.node.title"
              class="object-cover w-full h-48"
            />
          </g-link>

          <div class="p-4">
            <g-link
              :to="item.node.path"
              class="mt-4 text-lg font-semibold leading-tight"
            >{{item.node.title}}</g-link>

            <p class="mt-1 text-gray-600">{{ getDescriptionBody(item.node.description) }}</p>
            <div class="py-4">
              <g-link
                :to="item.node.path"
                class="mb-4 text-sm font-semibold tracking-wider text-orange-600 uppercase border-b-2 border-transparent md:text-base hover:border-orange-800 hover:border-b-2"
              >
                Learn
                more →
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  <InTouch />
  </section>
  <!-- end Sectors -->
</template>


<script>
import InTouch from "../components/InTouch";
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
