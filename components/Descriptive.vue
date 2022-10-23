<template>
  <div id="descriptive" class=" py-24">
    <div class="container mx-auto">
      <h1 class="header-text">Perusahaan kami Didukung dengan berbagai portfolio</h1>
      <p class="mt-3 desc">
        pengalaman dalam menangani berbagai klien menunjukan bukti nyata akan
        keseriusan untuk menghadirkan solusi terbaik. Perusahaan kami yang selalu
        mengedepankan komitmen untuk membantu setiap rekan bisnis yang bekerja
        sama dengan kami secara profesional dalam mengembangkan bisnis dan
        usahanya dengan menghadirkan penggunaan teknologi. Pola kerja kami yang
        bersifat fleksibel dapat menyesuaikan permintaan kebutuhan masing-masing
        klien kami menjadi nilai tambah sehingga kami selalu mendapatkan
        kepercayaan yang dapat diandalkan.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#descriptive {
    display: flex;
    justify-content: center;
    align-items: center;
  
    background-image: url("~/assets/img/building_blue.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    color: #fff;
    min-height: 1115px;
}
.desc {
  text-align: justify;
}
.desc, .header-text {
  font-size: 23px;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 640px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 640px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1024px) {
  .desc, .header-text {
    font-size: 35px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1280px) {}

/* 2xl */
@media only screen and (min-width: 1536px) {}
</style>>
