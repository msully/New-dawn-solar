<template>
  <Layout>
    <article class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row mt-24">
        <div class="w-full lg:px-8">
          <g-image 
            :src="$page.sector.cover_image"
            :alt="$page.sector.title"
            class="w-full h-48 object-cover"
            />
          <h1 class="text-4xl font-bold leading-tight mt-4">{{ $page.sector.title }}</h1>
          <div v-for="item in $page.sector.benefits_list.benefit" :key="item.heading" class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-8">
          <ul class="text-lg sm:text-xl">
            <li class="checkmark mb-6">
              <h3 class="bold mt-2">
                {{ item.heading }}
              </h3>
              <p class="text-lg text-gray-600">
                {{ item.text }}
              </p>
            </li>
          </ul>
          </div>
          <div class="markdown-body mb-8 mt-2" v-html="$page.sector.content" />
          <div class="mb-8">
            <g-link to="/sectors" class="font-bold uppercase">Back to Market sectors we support</g-link>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Sector ($path: String) {
  sector: sectors (path: $path) {
    title
    date (format: "D, MMMM, Y")
    path
    cover_image
    published
    description
    benefits_list {
      heading
      subheading
      benefit {
        heading
        text
    }
  }
}
}

</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.sector.title
    };
  }
};
</script>
