<template>
  <Layout>
    <main>
      <article class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
        <div class="flex flex-col lg:flex-row mt-6">
          <div class="w-full lg:px-8">
            <h1 class="text-3xl leading-tight font-bold mt-4">{{ $page.about.title }}</h1>
            <div class="markdown" v-html="$page.about.content"></div>
          </div>
        </div>
      </article>
    </main>
  </Layout>
</template>

<page-query>  
query {
  about(path: "/about/") {
    id
    path
    title
    content  
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
