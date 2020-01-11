<template>
  <Layout>
    <main>
      <article class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
        <div class="flex flex-col lg:flex-row mt-6">
          <div class="w-full lg:px-8">
            <g-image 
            :src="$page.about.cover_image"
            :alt="$page.project.title"
            class="w-full h-48 object-cover"
            />
            <h1 class="text-3xl leading-tight font-bold mt-4">{{ $page.about.title }}</h1>
            <div class="markdown" v-html="$page.about.content"></div>
          </div>
        </div>
      </article>
    </main>
  </Layout>
</template>

<page-query>  

query  {
  about: about (path: "/content/about/") {
    title
    content
    cover_image
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
