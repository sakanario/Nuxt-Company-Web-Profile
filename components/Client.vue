<template>
  <div id="client">
    <!-- Title -->
    <div class="flex justify-center">
      <h1 id="client-title" class="text-3xl md:text-6xl font-semibold py-3">
        Our Client
      </h1>
    </div>

    <!-- Client Container -->
    <div class="grid grid-flow-row auto-rows-min grid-cols-2 gap-4 sm:grid-cols-4  mx-5 md:mx-32">
      <div v-for="(item, index) in CustomerData" :key="index" class="flex justify-center">
        <img class="w-100" :src="item.customer_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  computed : {
    CustomerData(){
      return this.$store.state.customer.customerData
    }
  }
};
</script>
