<template>
  <div class="space-y-32">
    <About/>
    <Offer/>
    <BigText/>
    <Client/>
    <Product/>
    <Contact/>
  </div>
</template>

<script>

export default {
  name: "IndexPage",
  mounted() {
    this.$store.dispatch('fetchCompanyData')
    this.$store.dispatch('service/fetchServiceData')
    this.$store.dispatch('customer/fetchCustomerData')
  }
};
</script>
