<template>
  <div class="bg-gray-100">
    <section
      class="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen"
    >
      <div class="h-full absolute top-0 left-0 z-0">
        <img src="../images/solar_dawn.jpeg" alt="Sun rising over a solar installation" class="w-full h-full object-cover opacity-75" />
      </div>

      <div class="lg:w-3/4 relative z-10 h-100 lg:mt-1">
        <div>
          <h1
            class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >Solar is reliable</h1>
          <p
            class="text-blue-100 text-xl md:text-2xl leading-snug mt-4"
          >Secure reliable power with SOLAR Energy for Farming, Business and Homes.</p>
          <a
            href="#"
            class="px-8 py-4 bg-orange-500 hover:bg-orange-800  text-white rounded inline-block mt-8 font-semibold"
          >Get a Quote</a>
        </div>
      </div>
    </section>
    <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
      <div class="md:flex md:flex-wrap text-center md:-mx-4 -mt-48 mb-2 md:-mt-64">
        <div class="md:w-1/2 md:px-4 lg:w-1/3">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="../images/icons/noun_Tractor_1640247.svg" alt="Farming sector" class="h-20 mx-auto" />
            <h4 class="text-xl font-bold mt-4">Farming</h4>
            <p class="mt-1">Solar for farming.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>
        <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="../images/icons/noun_commercial_1027920.svg" alt="Commercial Sector" class="h-20 mx-auto" />
            <h4 class="text-xl font-bold mt-4">Commercial</h4>
            <p class="mt-1">Solar for business and commercial.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>
        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="../images/icons/noun_Home_2140138.svg" alt="Home owners and developers" class="h-20 mx-auto" />
            <h4 class="text-xl font-bold mt-4">Residetial</h4>
            <p class="mt-1">Solar for Developers and home owners</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>