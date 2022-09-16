<template>
  <!-- Inner Wrapper  -->
  <nav class="flex flex-col sm:flex-row">
    <!-- Nav Normal -->
    <div class="h-12 flex flex-row items-center justify-between">
      <!-- Company Logo (Left)-->
      <img class="h-full" src="~/assets/img/logo.svg" />

      <!-- Button (Right) -->
      <button @click="toggleNavbar" class="sm:hidden my-auto p-3">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>

    <!-- Nav Item -->
    <ul
      class="space-y-2 mb-5 w-full flex flex-col text-gray-500 mr-12"
      :class="{ 'hidden':hideNavbar }"
    >
      <li class="inline-flex mx-3 justify-center">Home</li>
      <li class="inline-flex mx-3 justify-center">About</li>
      <li class="inline-flex mx-3 justify-center">
        <div class="flex space-x-2 justify-center">
          <button
            type="button"
            class="inline-block p-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Contact Us
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return{
      hideNavbar : true,
    }
  },
  methods : {
    toggleNavbar() {
      this.hideNavbar = !this.hideNavbar
    }
  }
};
</script>
