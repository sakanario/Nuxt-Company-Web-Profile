<template>
  <div class="mt-5 mb:12 md:mx-32">
    <!-- Title -->
    <div class="flex justify-center sm:justify-start sm:ml-5">
      <h1 class="text-3xl font-semibold py-3 sm:mb-5">Hubungi Kami</h1>
    </div>

    <div class="flex justify-between flex-wrap sm:flex-nowrap">
      <!-- Left -->
      <div class="flex flex-col mx-auto sm:mx-5 sm:w-full">
        <Map />
        <div class="mt-2 flex inline-flex justify-center">
          <img class="w-7" src="../assets/img/mail.svg" />
          <span class="mx-1 my-auto">sales@zetadata.co.id</span>
        </div>
      </div>

      <!-- Right -->
      <div class="w-full mx-5 my-5">
        <!-- Nama -->
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nama"
            id="nama"
            class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="nama"
            class="peer-focus:font-medium absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Nama</label
          >
        </div>

        <!-- Email -->
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email</label
          >
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <!-- <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Your message</label
          > -->
          <label
            for="message"
            class="peer-focus:font-medium absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Message</label
          >
          <textarea
            id="message"
            rows="4"
            class="appearance-none border-b-2 block p-2.5 w-full focus:outline-none focus:border-blue-600 "
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
