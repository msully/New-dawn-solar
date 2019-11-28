<template>
  <Layout>
    <article class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row mt-24">
        <div class="w-full lg:px-8">
          <h1 class="text-4xl font-bold leading-tight">{{ $page.project.title }}</h1>
          <div class="text-xl text-gray-600 mb-4">{{ $page.project.date }}</div>
          <div class="markdown-body mb-8" v-html="$page.project.content" />
          <div class="mb-8">
            <g-link to="/projects" class="font-bold uppercase">Back to Projects</g-link>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Project ($path: String) {
  project: projects (path: $path) {
    title
    content
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    };
  }
};
</script>

<style>
</style>