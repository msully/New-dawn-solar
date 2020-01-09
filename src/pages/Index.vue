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
          <h2 class="text-3xl leading-tight font-bold mt-4">How Does Solar Energy Work?</h2>
          <p
            class="mt-2 leading-relaxed"
          >Considered a promising energy source for decades, solar panels can be found on everything from rooftops and roadside signs to stadiums and spacecrafts. Solar energy works by taking energy from the sun and changing it into electricity for homes and businesses.</p>
          <p
            class="mt-2 leading-relaxed"
          >Once solar panels are installed on your roof and begin to create energy, there are a few steps required to turn it into energy your home or business can use. As the sun hits the solar panels, they generate direct current (DC) electricity, where the electrons flow around a circuit in one direction. In order for your home to use this energy, it must be converted from DC electricity to alternating current (AC) electricity, where the electrons are pushed and pulled.</p>
          <p
            class="mt-2 leading-relaxed"
          >When you have solar panels installed on your home, you will also have a solar inverter installed. The solar inverter changes the DC output of the solar panels into AC electricity that your home can use.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <img src="../images/bg-how-it-works.svg" alt="How Solar works" />
        </div>
      </div>
    </section>
    <!-- End How it works -->

    <Projects :projects="$page.projects.edges" :path="this.$route.path" />

    <!-- Start partners -->
    <section class="relative bg-gray-200 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
      <div class="partners">
        <h2 class="text-3xl leading-tight font-bold">Strategic Partnerships</h2>
        <p
          class="text-gray-600 mt-2"
        >We have formed strategic partnerships with several local and international suppliers. In doing so we ensure a superior product, unsurpassed service capability, excellent warranties and spare parts availability.</p>

        <ul class="flex flex-wrap justify-center align-center content-between pt-8">
          <li>
            <img
              class="p-8 w-56"
              src="../images/SolarEdge_logo.png"
              alt="Partner company SolarEdge"
            />
          </li>
          <li>
            <img
              class="p-8 w-56"
              src="../images/canadianSolar_logo.png"
              alt="Partner company CanadianSolar "
            />
          </li>
          <li>
            <img class="p-8 w-48" src="../images/SMA_logo.svg" alt="Partner company SMA" />
          </li>
          <li>
            <img class="p-8 w-56" src="../images/mecer_logo.png" alt="Partner company Mecer" />
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
import home from '@/data/home.yaml';

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
