<template>
  <!-- Inner Wrapper  -->
  <!-- <nav id="navbar" class="flex flex-col md:flex-row md:justify-between md:mx-32"> -->
  <nav id="navbar" class="flex flex-col md:flex-row max-w-screen-xl mx-auto">
    
    <!-- Nav Normal -->
    <div class="h-12 md:h-24 flex flex-row items-center justify-between">
      <!-- Company Logo (Left)-->
      <img class="h-full" :src="CompanyData.logo_url" />

      <!-- Button (Right) -->
      <button @click="toggleNavbar" class="md:hidden my-auto p-3">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>

    <!-- Nav Item -->
    <ul
      class="text-xl md:flex-row-reverse md:inline-flex md:flex-row w-full md:my-auto mb-5 flex flex-col text-gray-500 mr-12"
      :class="{ hidden: hideNavbar }"
    >
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <nuxt-link :to="{ path: '/', hash: '#product' }"> Product </nuxt-link>
        </li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <nuxt-link :to="{ path: '/', hash: '#client' }"> Client </nuxt-link>
        </li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <nuxt-link :to="{ path: '/', hash: '#offer' }"> Service </nuxt-link>
        </li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <nuxt-link :to="{ path: '/', hash: '#secondAbout' }"> About </nuxt-link>
      </li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <div class="flex space-x-2 justify-center">
          <nuxt-link :to="{ path: '/', hash: '#contact-us' }">
            <button
              type="button"
              class="primary-button inline-block p-2 text-white leading-tight rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-500 ease-in-out"
            >
              Contact Us
            </button>
          </nuxt-link>
        </div>
      </li>
    </ul>
        
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hideNavbar: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.hideNavbar = !this.hideNavbar;
    },
  },
  computed: {
    CompanyData() {
      return this.$store.state.companyData;
    },
  },
};
</script>

<style scoped>

/* hover focus active */

</style>
