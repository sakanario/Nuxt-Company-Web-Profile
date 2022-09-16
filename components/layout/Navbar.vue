<template>
  <nav class="flex justify-between sm:h-24">
    
    <!-- Company Logo -->
    <img class="h-12 sm:h-full" src="~/assets/img/logo.svg" />

    <!-- Nav Item -->
    <div class="flex justify-items-center">
      <button class="sm:hidden my-auto p-3">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <ul class="hidden sm:inline my-auto text-gray-500 mr-12">
        <li class="inline-flex mx-3">Home</li>
        <li class="inline-flex mx-3">About</li>
        <li class="inline-flex mx-3">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
