<template>
  <Layout>
    <Hero />
    <!-- Start Why Solar -->
    <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-24">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold mt-4">{{ home.section_solar.heading }}</h2>
          <p class="text-lg mt-4 font-semibold">
            {{ home.section_solar.subheading }}
          </p>
          <p class="markdown mt-4 font-normal">
            {{ home.section_solar.body }}
          </p>
        </div>

        <div class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-8">
          <ul v-for="item in home.section_solar.features" :key="item.id" class="text-lg sm:text-xl">
            <li class="checkmark mb-6">
              <div>{{ item.heading}}</div>
              <div
                class="text-lg text-gray-600"
              >{{item.text}}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Why Solar -->

    <!-- Start How it works -->
    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold mt-4">{{ home.section_how.heading }}</h2>
          <p class="text-lg mt-4 font-semibold">{{ home.section_how.subheading }}</p>
          <p class="markdown mt-4 font-normal">{{ home.section_how.body }}</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <g-image :src=home.section_how.cover_image alt="How Solar works" />
        </div>
      </div>
    </section>
    <!-- End How it works -->

    <Projects :projects="$page.projects.edges" :path="this.$route.path" />

    <!-- Start partners -->
    <section class="relative bg-gray-200 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
      <div class="partners">
        <h2 class="text-3xl leading-tight font-bold">{{ home.section_partners.heading}}}</h2>
        <p
          class="text-gray-600 mt-2"
        >{{ home.section_partners.subheading }}</p>

        <ul v-for="item in home.section_partners.partner_logo" :key="item.id" class="flex flex-wrap justify-center align-center content-between pt-8">
          <li>
            <g-image
              class="p-8 w-56"
              :src=item.logo
              :alt=item.alt
            />
          </li>
        </ul>
      </div>
    </section>

    <!-- start cta -->
    <section
      class="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left"
    >
      <div class="md:flex md:items-center md:justify-center">
        <h2 class="text-xl font-bold text-white">
          Get in touch with us today!
          <br class="block md:hidden" />Call us on: 0825606631
        </h2>
        <a
          class="inline-block font-semibold px-4 py-2 text-gray-900 bg-white hover:bg-orange-400 border border-orange-600 rounded mt-6 md:mt-0 md:ml-6"
          href="/contact"
        >Book a consultation</a>
      </div>
    </section>
    <!-- end cta -->
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
import Hero from "~/components/Hero";
import home from '@/data/home.yml';

export default {
  data() {
    return {
      home
    }
  },
  components: {
    Hero,
    Projects
  },
  metaInfo: {
    title: "New Dawn Solar"
  }
};
</script>
