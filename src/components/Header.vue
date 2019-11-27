<template>
  <header
    class="fixed w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 bg-gray-200 border-t-4 border-orange-600 shadow-xl"
  >
    <div class="flex flex-wrap items-center justify-between py-6">
      <div class="w-1/2 md:w-auto">
        <a href="/">
          <img
            class="w-64"
            href="index.html"
            src="../images/newdawn-logo-colour.svg"
            alt="New dawn solar logo"
          />
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>

      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:block w-full md:w-auto" id="menu">
        <nav
          class="w-full bg-white text-gray-900 md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none"
        >
          <ul class="md:flex items-center justify-between">
            <li class="md:ml-4">
              <a class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800" href="/">Sectors</a>
            </li>
            <li class="md:ml-4">
              <a class="py-2 inline-block md:px-2 font-semibold hover:text-orange-800" href="/projects">Projects</a>
            </li>

            <li class="md:ml-4">
              <a
                class="py-2 inline-block md:hidden lg:block font-semibold hover:text-orange-800"
                href="/about"
              >About Us</a>
            </li>

            <li class="md:ml-6 mt-3 md:mt-0">
              <a
                class="inline-block font-semibold px-4 py-2 text-gray-900 bg-orange-600 md:bg-transparent md:hover:bg-orange-400 border border-orange-600 rounded"
                href="#"
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
  name: "Header"
};
</script>
