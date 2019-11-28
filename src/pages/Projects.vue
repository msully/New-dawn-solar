<template>
  <Layout>
    <div class="container mx-auto py-16">
      <Projects :projects="$page.projects.edges" />
    </div>
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
        tags {
          id
          title
       
        }
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
