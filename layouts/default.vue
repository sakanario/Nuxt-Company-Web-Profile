<template>
  <div>
    <div v-if="this.$fetchState.pending">
      <Loading/>
    </div>
    <div v-else>
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar  from '@/components/layout/Navbar.vue'
import Footer  from '@/components/layout/Footer.vue'

export default {
  components:{
    Navbar,
    Footer
  },
  async fetch() {
    await this.$store.dispatch('fetchCompanyData')
    await this.$store.dispatch('service/fetchServiceData')
    await this.$store.dispatch('customer/fetchCustomerData')
    await this.$store.dispatch('product/fetchProductData')
    await this.$store.dispatch('contact/fetchContactData')
  },
  fetchOnServer: false,
}
</script>

