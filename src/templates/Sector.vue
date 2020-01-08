<template>
  <Layout>
    
    <article class="relative bg-gray-100">
      <g-image 
        :src="$page.sector.cover_image"
        :alt="$page.sector.title"
        class="w-full mt-24 h-64 object-cover"
        />
      <div class="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:px-8">
          
          <h1 class="text-4xl font-bold leading-tight mt-4">{{ $page.sector.title }}</h1>
          <h1 class="text-2xl font-bold leading-tight mt-6">{{ $page.sector.heading }}</h1>

          <div class="text-xl">
            {{ $page.sector.description }}
          </div>

          <h3 class="font-semibold text-lg mt-6">{{ $page.sector.benefits_list.heading }}</h3>
          <div class="lg:px-8 mt-12 lg:mt-8">
          
          <div class="uppercase tracking-wide text-sm mt-2 mb-6">{{ $page.sector.benefits_list.subheading }}</div>
            
          <ul class="flex flex-row flex-wrap text-lg sm:text-xl">
            <li v-for="item in $page.sector.benefits_list.benefit" :key="item.heading" class="w-full md:w-1/2 checkmark mb-6">
              <h3 class="bold mt-2">
                {{ item.heading }}
              </h3>
              <p class="text-lg text-gray-600">
                {{ item.text }}
              </p>
            </li>
          </ul>
          </div>
          <div class="markdown mb-8 mt-2" v-html="$page.sector.content" />
          <div class="mb-8">
            <g-link to="/sectors" class="font-bold uppercase">Back to Market sectors we support</g-link>
          </div>
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
    content
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
