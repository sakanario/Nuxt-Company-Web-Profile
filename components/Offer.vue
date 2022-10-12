<template>
  <div id="offer" class="mt-5 space-y-12">
    <!-- Title -->
    <div class="flex justify-center">
      <h1 class="text-3xl md:text-6xl font-semibold py-3">What We Offer?</h1>
    </div>

    <!-- Offer Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-1 sm:px-32 ">
      <OfferItem v-for="(item, index) in ServiceData" :key="index" 
        :title="item.title"
        :description="item.description"
        :img_url="item.image_url"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  computed: {
    ServiceData() {
      return this.$store.state.service.serviceData
    }
  },
};
</script>
