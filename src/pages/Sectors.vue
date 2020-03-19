<template>
  <Layout>
    <article class="lg:px-8">
      <div class="flex flex-col lg:flex-row mt-6 md:mt24">
        <Sectors :sectors="$page.sectors.edges" />
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query {
  sectors: allSectors {
    edges {
      node {
        id
        path
        title
        date
        cover_image
        description
      }
    }
  }
}
</page-query>

<script>
import Sectors from "~/components/SectorsList";

export default {
  metaInfo() {
    return {
      title: "Market sectors",
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Solar Consultancy and solutions for Comercial, Residential, Farming and Agricultural businesses'
        }
      ]
    }
  },
  components: {
    Sectors
  }
};
</script>
