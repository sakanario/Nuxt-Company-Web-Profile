export const state = () => ({
  companyData: {},
});

export const getters = {
  getCompanyData(state) {
    return state.companyData;
  },
};

export const mutations = {
  setCompanyData(state, data) {

    state.companyData = {
      company_description: data?.data?.company_description,
      company_name: data?.data?.company_name,
      logo_url: data?.data?.logo_url,
      sub_title: data?.data?.sub_title,
      title: data?.data?.title,
    };
  },
};

export const actions = {
  async fetchCompanyData(context) {
    this.$axios
      .get(
        `/api/company?sorttype=desc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
      )
      .then(
        (response) => {
          let fetchedData =
            response.data?.data?.data.length == 0
              ? []
              : response.data?.data?.data[0];

            context.commit("setCompanyData", {
            data: fetchedData,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
