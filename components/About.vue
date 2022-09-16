<template>
  <div id="about">
    <!-- First Section -->
    <div
      class="section-1 p-5 sm:p-12 md:px-24 text-white flex flex-wrap md:flex-nowrap md:justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl">
        <div class="my-auto">
          <h1 class="text-4xl md:text-6xl font-semibold py-3">Siapa Kami?</h1>
          <p class="md:text-2xl">
            PT ZETA DATA TELEMATIKA adalah perusahaan yang bergerak dalam bidang
            Sistem Integrator (SI) berlokasi di Jakarta yang memiliki komitmen
            untuk memberikan solusi teknologi terbaik dalam membantu setiap
            rekan bisnis kami untuk mengembangkan usaha hingga terealisasi
            harapan bisnisnya yang didukung dengan penggunaan IT.
          </p>
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center sm:mx-1 md:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-1.svg" />
      </div>
    </div>

    <!-- Transition 1 -->
    <div id="transition" class="relative">
      <img id="transition-image-1" class="w-full absolute" src="../assets/img/substrat-1.svg" />
    </div>

    <!-- Second Section -->
    <div
      class="section-2 p-5 sm:p-12 text-white flex flex-wrap sm:flex-row-reverse sm:flex-row md:flex-nowrap md:justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl sm:w-3/4 sm:ml-12">
        <div class="my-auto">
          <p class="md:text-2xl">
            Perusahaan kami Didukung dengan berbagai portfolio pengalaman dalam
            menangani berbagai klien menunjukan bukti nyata akan keseriusan
            untuk menghadirkan solusi terbaik.

            <br />
            <br />

            Perusahaan kami yang selalu mengedepankan komitmen untuk membantu
            setiap rekan bisnis yang bekerja sama dengan kami secara profesional
            dalam mengembangkan bisnis dan usahanya dengan menghadirkan
            penggunaan teknologi. Pola kerja kami yang bersifat fleksibel dapat
            menyesuaikan permintaan kebutuhan masing-masing klien kami menjadi
            nilai tambah sehingga kami selalu mendapatkan kepercayaan yang dapat
            diandalkan.
          </p>
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center sm:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-2.svg" />
      </div>
    </div>
    <!-- Transition 1 -->
    <div id="transition" class="relative" style="width:105%;">
      <img id="transition-image-2" class="w-full absolute" src="../assets/img/substrat-2.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
