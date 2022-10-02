<template>
  <div class="mt-3">
    <!-- Icon -->
    <div class="flex justify-center">
      <img id="icon" :src="img_url" />
    </div>

    <!-- Text -->
    <div class="px-5 py-2">
      <h1 v-html="title" class="text-center text-2xl sm:text-3xl font-semibold py-3"></h1>
      <p v-html="description" class="text-justify">
        Dengan menggunakan system integrator, perusahaan dapat menyelaraskan
        komponen yang lebih competitive dan telah dikonfigurasikan sebelumnya
        dan komersial dari perangkat lunak rak untuk memenuhi sasaran bisnis
        utama.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferItem",
  props: ['title','description','img_url']
};
</script>

<style scoped>
#icon {
  max-width: 100px;
}
</style>