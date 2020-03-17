<template>
  <Layout>
    <main class="bg-gray-100">
      <div class="container mx-auto px4 flex-grow">
        <article class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-48">
          <div class="w-full flex">
            <!-- Col -->
            <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <img
                src="../images/solar-field.jpeg"
                alt="Farming beifiting from Solar"
                class="w-full h-full object-cover opacity-75"
              />
            </div>
            <!-- Col -->
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div class="flex flex-col lg:flex-row mt-6 md:mt24">
                <div class="overflow-x-hidden">
                  <div class="contact-me bg-background-secondary pt-16">
                    <div class="container-inner mx-auto text-xl pb-4 relative">
                      <h2 class="font-bold mb-6" id="contact">Get in touch</h2>

                      <div
                        class="absolute right-0 top-0"
                        style="transform: translate(100%) rotate(180deg)"
                      >
                        <svg width="170px" height="170px">
                          <use xlink:href="#dots-triangle" />
                        </svg>
                      </div>

                      <p class="mb-12">
                        Keen to get started with solar? Maybe you just want to know a little more about solar?.
                        Just fill in the form below and one of our team members will contact you for a chat.
                      </p>
                      <div class="text-lg sm:text-lg mb-16">
                        
                        <form  name="contact" method="POST" data-netlify="true" class="w-full max-w-lg">
                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                              >First Name</label>
                              <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="First Name"
                                required
                              />
                              
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                              >Last Name</label>
                              <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>

                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-city"
                              >City</label>
                              <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                                placeholder="City"
                              />
                            </div>

                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-postcode"
                              >Postcode</label>
                              <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-postcode"
                                type="text"
                                placeholder="Postcode"
                              />
                            </div>
                          </div>

                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-options"
                              >How can we help?</label>
                            
                              <div class="relative">
                                <select
                                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-options"
                                >
                                  <option>An agri-business building</option>
                                  <option>A commercial building</option>
                                  <option>A new home build</option>
                                  <option>An existing home</option>
                                  <option>I'd like to go completely off-grid</option>
                                  <option>None of the above</option>
                                </select>
                                <div
                                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                  <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="md:flex md:items-center mb-6">
                            <div class="w-full">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="message"
                              >Message</label>

                              <textarea
                                id="message"
                                rows="5"
                                name="message"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                                placeholder="Enter your message here."
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                              <button
                                class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                aria-label="Send"
                              >Send</button>
                            </div>
                          </div>

                          <p>New Dawn Solar will use your information to contact you from time to time about our products and services. You may unsubscribe from these communications at any time.</p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {};
</script>
