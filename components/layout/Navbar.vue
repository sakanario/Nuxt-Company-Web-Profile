<template>
  <!-- Inner Wrapper  -->
  <nav class="flex flex-col sm:flex-row sm:justify-between">
    <!-- Nav Normal -->
    <div class="h-12 sm:h-24 flex flex-row items-center justify-between">
      <!-- Company Logo (Left)-->
      <img class="h-full" :src="CompanyData.logo_url" />

      <!-- Button (Right) -->
      <button @click="toggleNavbar" class="sm:hidden my-auto p-3">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>

    <!-- Nav Item -->
    <ul
      class="text-xl sm:flex-row-reverse sm:inline-flex sm:flex-row w-full sm:my-auto mb-5 flex flex-col text-gray-500 mr-12"
      :class="{ hidden: hideNavbar }"
    >
      <li class="inline-flex mx-3 my-auto py-2 justify-center">Home</li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">About</li>
      <li class="inline-flex mx-3 my-auto py-2 justify-center">
        <div class="flex space-x-2 justify-center">
          <nuxt-link :to="{ path: '/',hash:'#contact-us'}">
            <button
              type="button"
              class="inline-block p-2 bg-blue-600 text-white leading-tight rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
