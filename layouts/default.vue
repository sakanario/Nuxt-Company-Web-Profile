<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar  from '@/components/layout/Navbar.vue'
import Navbar2  from '@/components/layout/Navbar2.vue'
import Footer  from '@/components/layout/Footer.vue'

export default {
  components:{
    Navbar,
    Navbar2,
    Footer
  }
}
</script>

