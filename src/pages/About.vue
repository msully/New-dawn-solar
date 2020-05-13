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
            <h1 class="text-3xl leading-tight font-bold mt-4 mb-4">{{ $page.about.title }}</h1>
            <div class="markdown mb-6" v-html="$page.about.description"></div>
            <div class="w-full border-b border-gray-400">
            <h2 class="text-2xl pb-2">Our team</h2>
            </div>
            <div class="md:flex mt-12 mb-12 md:-mx-4">
              <div v-for="item in $page.about.team" :key="item.id" class="md:px-4 md:w-1/4">
                <div class="bg-white rounded border border-gray-300">
                  
                    <g-image
                      :src="item.image"
                      :alt="item.heading"
                      class="w-full h-48 object-cover"
                    />
               
                  <div class="p-4">
                    <div class="flex items-center text-sm">
                      <span class="text-lg text-bold text-gray-900 my-2">{{ item.heading }}</span>
                    </div>
                    <p class="text-gray-600 mt-1">{{item.bio}}</p>
                  </div>
                </div>
              </div>
          </div>


            <div class="markdown" v-html="$page.about.content"></div>
          </div>
        </div>
      </div>
      <InTouch />
    </article>
  </Layout>
</template>

<page-query>
query	{
  about (path: "/content/about/about") {
    title
    description
    cover_image
    alt
    content
    
    team{
      image
      heading
      bio
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
