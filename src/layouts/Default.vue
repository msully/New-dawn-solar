<template>
  <div class="antialiased bg-white font-sans text-gray-900">
    <main class="w-full">
      <Header />
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
