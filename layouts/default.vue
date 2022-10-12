<template>
  <div>
    <transition name="loading">
      <div v-if="this.$fetchState.pending">
        <Loading />
      </div>
    </transition>

    <div
      class="transition-opacity duration-700 ease-in"
      :class="{
        'opacity-0': this.$fetchState.pending,
        'opacity-100': !this.$fetchState.pending,
      }"
    >
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  async fetch() {
    await this.$store.dispatch("fetchCompanyData");
    await this.$store.dispatch("service/fetchServiceData");
    await this.$store.dispatch("customer/fetchCustomerData");
    await this.$store.dispatch("product/fetchProductData");
    await this.$store.dispatch("contact/fetchContactData");
  },
  fetchOnServer: false,
  transition: "loading",
};
</script>

<style scoped>
  .loading-enter-active, .loading-leave-active { transition: opacity 0.5s; }
  .loading-enter, .loading-leave-active { opacity: 0; }
</style>