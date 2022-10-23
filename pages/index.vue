<template>
  <div class="space-y-32">
    <About/>
    <Descriptive/>
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
  
  head() {
    return {
      title: this.$store.getters.getCompanyData.company_name ? this.$store.getters.getCompanyData.company_name : ""
    };
  }
};
</script>
