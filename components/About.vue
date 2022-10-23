<template>
  <div id="about">
    <!-- First Section -->
    <div
      class="section-1 p-5 md:py-20 text-white flex flex-wrap md:flex-nowrap md:justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl md:mr-10">
        <div class="my-auto">
          <h1
            v-html="CompanyData.title"
            class="text-4xl lg:text-6xl font-semibold py-3"
          ></h1>
          <p v-html="CompanyData.sub_title" class="description side-description"></p>
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center sm:mx-1 md:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-1.svg" />
      </div>
    </div>

    <!-- Transition 1 -->
    <div id="transition" class="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
        <path
          fill="#335E89"
          fill-opacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,176C640,171,800,85,960,53.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>

    <!-- Second Section -->
    <div
      id="secondAbout"
      class="section-2 p-5 py-12 lg:py-24 flex flex-wrap sm:flex-row-reverse sm:flex-row md:flex-nowrap justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl  md:ml-12">
        <div class="my-auto">
          <p v-html="CompanyData.company_description" class="description side-description"></p>
          <!-- <p class="description md:text-2xl">
            membuat kami mampu meningkatkan produktivitas, efisensi dan
            signifikasi dalam peforma setiap perusahaan rekan bisnis kami.
          </p> -->
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center md:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-2.svg" />
      </div>
    </div>
    <!-- Transition 1 -->
    <div id="transition" class="relative" style="width: 100%">
      <!-- <img
        id="transition-image-2"
        class="w-full absolute"
        src="../assets/img/substrat-2.svg"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    CompanyData() {
      return this.$store.state.companyData;
    },
  },
};
</script>
