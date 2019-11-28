<template>
  <Layout>
    <article class="lg:px-8">
      <div class="flex flex-col lg:flex-row mt-24">
        <Projects :projects="$page.projects.edges" />
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
