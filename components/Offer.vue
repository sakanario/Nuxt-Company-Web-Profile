<template>
  <div id="offer" class="mt-5 space-y-12">
    <!-- Title -->
    <div class="flex justify-center">
      <h1 class="text-3xl md:text-6xl font-semibold py-3">What We Offer?</h1>
    </div>

    <!-- Offer Container -->
    <div class="flex flex-wrap sm:px-32 ">
      <OfferItem/>
      <OfferItem/>
      <OfferItem/>
      <OfferItem/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
};
</script>
