<template>
  <div class="antialiased bg-white font-sans flex flex-col min-h-screen w-full text-gray-900">
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<script>

import Header from "../components/Header";

import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
