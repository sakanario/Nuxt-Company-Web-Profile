<template>
  <div id="about">
    <!-- First Section -->
    <div
      class="section-1 p-5 sm:p-12 sm:py-24 md:px-24 text-white flex flex-wrap md:flex-nowrap md:justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl">
        <div class="my-auto">
          <h1
            v-html="CompanyData.title"
            class="text-4xl md:text-6xl font-semibold py-3"
          ></h1>
          <p v-html="CompanyData.sub_title" class="md:text-2xl"></p>
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center sm:mx-1 md:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-1.svg" />
      </div>
    </div>

    <!-- Transition 1 -->
    <div id="transition" class="relative">
      <img
        id="transition-image-1"
        class="w-full absolute"
        src="../assets/img/substrat-1.svg"
      />
    </div>

    <!-- Second Section -->
    <div
      class="section-2 p-5 sm:p-12 sm:py-24 text-white flex flex-wrap sm:flex-row-reverse sm:flex-row md:flex-nowrap md:justify-center"
    >
      <!-- Left -->
      <div class="flex max-w-2xl sm:w-3/4 sm:ml-12">
        <div class="my-auto">
          <p v-html="CompanyData.company_description" class="md:text-2xl"></p>
        </div>
      </div>

      <!-- Right -->
      <div class="mx-10 sm:mx-0 w-full flex justify-center sm:w-1/4">
        <img class="w-full py-5" src="../assets/img/draw-2.svg" />
      </div>
    </div>
    <!-- Transition 1 -->
    <div id="transition" class="relative" style="width: 100%">
      <img
        id="transition-image-2"
        class="w-full absolute"
        src="../assets/img/substrat-2.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutData: {},
    };
  },
  methods: {
    async fetchAboutData() {
      this.$axios
        .get(
          `/api/company?sorttype=desc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
        )
        .then(
          (response) => {
            let data =
              response.data?.data?.data.length == 0
                ? []
                : response.data?.data?.data[0];

            this.aboutData = {
              company_description: data?.company_description,
              company_name: data?.company_name,
              logo_url: data?.logo_url,
              sub_title: data?.sub_title,
              title: data?.title,
            };
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
  mounted() {
    // this.fetchAboutData();
  },
  computed: {
    CompanyData() {
      console.log("computed");
      console.log(this.$store.state.companyData);
      return this.$store.state.companyData
    }
  }
};
</script>
