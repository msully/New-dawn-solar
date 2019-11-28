<template>
  <Layout>
    <article class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row mt-24">
        <div class="w-full lg:px-8">
          <div class="container mx-auto py-16">
            <Projects :projects="$page.projects.edges" />
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query {
  projects: allProjects(limit: 3) { 
    edges {
      node {
        title
        path
        content
        description
        cover_image
        date (format: "D, MMMM, Y")
      }
    }
  }
}
</page-query>



<script>
import Projects from "~/components/Projectslist";

export default {
  metaInfo: {
    title: "Projects"
  },
  components: {
    Projects
  }
};
</script>
