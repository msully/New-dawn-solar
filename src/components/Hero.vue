<template>
  <div class="bg-gray-100">
    <section
      class="cover bg-orange-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex min-h-screen"
    >
      <div class="h-full absolute top-0 left-0 z-0">
        <img
          src="../images/solar_dawn.jpeg"
          alt="Sun rising over a solar installation"
          class="w-full h-full object-cover opacity-75"
        />
      </div>

      <div class="lg:w-3/4 relative z-10 h-100 lg:mt-8">
        <div>
          <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            {{ banner.heading }}
            <VueTyper
              :text="words"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="600"
              :type-delay="100"
              :pre-erase-delay="6000"
              :erase-delay="800"
              erase-style="clear"
              :erase-on-complete="true"
              caret-animation="phase"
            />
          </h1>

          <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">{{ banner.subheading }}</p>
          <a
            href="/contact"
            class="px-8 py-4 bg-orange-500 hover:bg-orange-800 text-white rounded inline-block mt-8 font-semibold"
          >Get a Quote</a>
        </div>
      </div>
    </section>
    <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-16 bg-white">
      <div class="md:flex md:flex-wrap text-center md:-mx-4 -mt-40 md:-mt-48">
        <div class="md:w-1/2 md:px-4 lg:w-1/3">
          <div class="block bg-white rounded-lg border border-gray-300 p-8">
            <div class="inline-block text-white -mt-64">
              <svg
                role="img"
                title="Farming sector"
                description="Solar for farming"
                class="fill-current border-2 w-24 h-24 bg-teal-600 p-3 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.538 15.159"
              >
                <path
                  class="fil0"
                  d="M11.888.831l.605 3.204c1.6.472 2.01.712 3.045 2.012l-.84.573c-.829-1.378-2.924-1.916-4.486-1.288-1.769.746-2.486 2.184-2.221 4.104L7 9.43l-.087-.47-2.088-.018c-.541-1.624-2.774-2.372-4.297-1.1l-.021-.94c-.426-.031-.594-.95.019-1.26 0-1.337-.291-1.157 2.169-1.166.09-1.055-.188-.793.337-1.266.002-1.145-.104-.782.32-1.585l.04 1.619c.425.292.347.098.367 1.24l.964-.006.914-3.647L5.195.83c-.004-.102.398-.7.478-.83 6.364.151 4.315.072 6.364.151.3.002.468.68-.149.68zM1.581 5.111v1.554c0 .225-.239.235-.239 0V5.111c0-.23.239-.232.239 0zm.3 0v1.554c0 .225-.237.235-.237 0V5.111c0-.23.238-.232.238 0zm.294 0v1.554c0 .225-.238.235-.238 0V5.111c0-.23.238-.232.238 0zm.303-.008v1.554c0 .225-.238.235-.238 0V5.103c0-.23.238-.232.238 0zm.301 0v1.554c0 .225-.238.235-.238 0V5.103c0-.23.238-.232.238 0zm.293 0v1.554c0 .225-.238.235-.238 0V5.103c0-.23.238-.232.238 0zm6.426-.628H5.485l.918-3.6C6.631.793 9.058.843 9.501.846l-.003 3.63z"
                />
                <path
                  class="fil0"
                  d="M11.624 5.444a3.342 3.342 0 100 6.683 3.342 3.342 0 000-6.683zm.274 1.08c1.27.206 2.146 1.244 1.993 2.544-.135 1.145-1.212 2.164-2.556 1.984-1.16-.155-2.149-1.206-1.977-2.559.142-1.114 1.248-2.177 2.54-1.968zM2.604 7.455c.724.112 1.133.39 1.495.821.345.412.595 1.055.495 1.767-.169 1.2-1.242 2.17-2.618 1.974C.811 11.852-.17 10.78.025 9.4.18 8.304 1.24 7.245 2.605 7.455zm-.296 3.093c-1.06-.003-1.071-1.625 0-1.625 1.072 0 1.075 1.627 0 1.625z"
                />
                <path
                  class="fil0"
                  d="M11.94 6.821c1.166.236 1.838 1.194 1.661 2.29a1.993 1.993 0 01-2.28 1.654c-.998-.142-1.872-1.099-1.675-2.295.161-.981 1.133-1.882 2.293-1.649z"
                />
                <text
                  y="32.127"
                  font-size="5"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >from the Noun Project</text>
              </svg>
            </div>
            <h4 class="text-xl font-bold mt-4">Farming</h4>
            <p class="mt-1">Solar for farming.</p>
            <div class="p-2 mt-4">
              <g-link
                to="/sectors/farming"
                class="text-sm md:text-base uppercase text-orange-600 font-semibold tracking-wider border-b-2 border-transparent hover:border-orange-800 hover:border-b-2"
              >
                Learn
                more →
              </g-link>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 md:px-4 mt-16 md:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <div class="inline-block text-white -mt-64">
              <svg
                role="img"
                title="Commercial sector"
                description="Solar energy for business"
                class="fill-current border-2 w-24 h-24 bg-teal-600 p-3 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 60"
              >
                <path
                  d="M5.8 43.8h36.4V48H5.8zM33.8 0H14.2l-3.6 6.6h26.8zM20.2 34.2h7.5v7.7h9.6V8.6H10.6v33.3h9.7v-7.7zM29.6 12H34v5.6h-4.4V12zm0 9.8H34v5.6h-4.4v-5.6zm0 9.8H34v5.6h-4.4v-5.6zM21.8 12h4.4v5.6h-4.4V12zm0 9.8h4.4v5.6h-4.4v-5.6zm-3.4 15.3H14v-5.6h4.4v5.6zm0-9.7H14v-5.6h4.4v5.6zm0-9.8H14V12h4.4v5.6z"
                />
                <text
                  y="68"
                  font-size="5"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >from the Noun Project</text>
              </svg>
            </div>
            <h4 class="text-xl font-bold mt-4">Commercial</h4>
            <p class="mt-1">Solar for business and commercial.</p>
            <div class="p-2 mt-4">
              <g-link
                to="/sectors/commercial"
                class="text-sm md:text-base uppercase text-orange-600 font-semibold tracking-wider border-b-2 border-transparent hover:border-orange-800 hover:border-b-2"
              >
                Learn
                more →
              </g-link>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 md:px-4 mt-16 md:mt-8 lg:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <div class="inline-block text-white -mt-64">
              <svg
                role="img"
                title="Home owners and developers"
                description="Solar for Developers and home owners"
                class="fill-current border-2 w-24 h-24 bg-teal-600 p-3 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 80"
              >
                <path
                  d="M48 28H34v14h14zm-2 6h-4v-4h4zm-6-4v4h-4v-4zm-4 6h4v4h-4zm6 4v-4h4v4zM26 38h2v6h-2z"
                />
                <path
                  d="M62 44c0-3.976-1.374-8-4-8s-4 4.024-4 8c0 3.435 1.028 6.9 3 7.781V54h-5V26h9a1 1 0 00.6-1.8l-29-22a1 1 0 00-1.208 0l-29 22A1 1 0 003 26h9v28H7v-2.219c1.972-.881 3-4.346 3-7.781 0-3.976-1.374-8-4-8s-4 4.024-4 8c0 3.435 1.028 6.9 3 7.781V54H2v8h60v-8h-3v-2.219c1.972-.881 3-4.346 3-7.781zM4 44c0-3.722 1.3-6 2-6s2 2.278 2 6-1.295 6-2 6-2-2.278-2-6zm1.973-20L32 4.255 58.027 24zM14 26h36v28H32V36a8 8 0 00-16 0v18h-2zm16 28H18V36a6 6 0 0112 0zm30 6H4v-4h56zm-4-16c0-3.722 1.3-6 2-6s2 2.278 2 6-1.3 6-2 6-2-2.278-2-6z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-bold mt-4">Residetial</h4>
            <p class="mt-1">Solar for Developers and home owners</p>
            <div class="p-2 mt-4">
              <g-link
                to="/sectors/residential"
                class="text-sm md:text-base uppercase text-orange-600 font-semibold tracking-wider border-b-2 border-transparent hover:border-orange-800 hover:border-b-2"
              >
                Learn
                more →
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
const words = banner.words;

export default {
  name: "Hero",
  components: {
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h("span", null, [words[0]]) }
      : () => import("vue-typer").then(({ VueTyper }) => VueTyper)
  },
  data() {
    return { words };
  }
};
</script>

<style>
</style>