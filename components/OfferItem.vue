<template>
  <div class="mt-3">
    <!-- Icon -->
    

    <!-- Text -->
    <div class="px-5 py-2">
      
      <div class="title-container">
        <h1 v-html="title" class="text-center text-2xl sm:text-3xl font-semibold py-3 head-title"></h1>
      </div>
      
      <div class="flex justify-center">
        <img id="icon" :src="img_url" />
      </div>
      
      <p v-html="description" class="text-justify"></p>
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

.title-container {
  background-color: #335E89;
}

.head-title {
  color: white;
}
</style>