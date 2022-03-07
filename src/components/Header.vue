<template>
  <header
    class="fixed w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 bg-gray-200 border-t-4 border-orange-600 shadow-xl"
  >
    <div class="flex flex-wrap items-center justify-between py-6">
      <div class="w-1/2 md:w-auto">
        <g-link to="/">
          <img
            class="w-24 md:w-30"
            href="index.html"
            src="../images/New Dawn Solar_LOGO_Full Colour.png"
            alt="New dawn solar logo"
          />
        </g-link>
      </div>

      <div class="flex md:hidden">
        <button
          @click="toggle"
          type="button"
          aria-label="Menu"
          class="px-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg class="h-6 w-6 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>

      <div
        class="md:block w-full md:w-auto"
        :class="{ 'hidden': !isOpen, 'block': isOpen }"
        id="menu"
      >
        <nav
          class="w-full bg-white text-gray-900 md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none"
        >
          <ul class="md:flex items-center justify-between">
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b-2 visited:border-orange-800"
                href="/"
              >Home</a>
            </li>
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b-2 visited:border-orange-800"
                href="/sectors/farming"
              >Farming</a>
            </li>
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b-2 visited:border-orange-800"
                href="/sectors/commercial"
              >Commercial</a>
            </li>
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b-2 visited:border-orange-800"
                href="/sectors/residential"
              >Residential</a>
            </li>
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b-2 visited:border-orange-800"
                href="/projects">Projects</a>
            </li>
            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800 visited:border-b visited:border-orange-800"
                href="/about"
              >About Us</a>
            </li>

            <li class="md:ml-6 mt-3 md:mt-0">
              <a
                class="inline-block font-semibold px-4 py-2 text-gray-900 md:bg-transparent hover:bg-orange-400 border border-orange-600 rounded"
                href="/contact"
              >Free consultation</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  props: [],

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
