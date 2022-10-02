export const state = () => ({
  serviceData: {},
});

export const getters = {
  getCompanyData(state) {
    return state.serviceData;
  },
};

export const mutations = {
  setServiceData(state, data) {
    state.serviceData = data?.data;
    // console.log("set service");
    // console.log(state.serviceData);
  },
};

export const actions = {
  async fetchServiceData(context) {
    this.$axios
      .get(
        `/api/service?sorttype=asc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
      )
      .then(
        (response) => {
          let fetchedData =
            response.data?.data?.data.length == 0
              ? []
              : response.data?.data?.data;

          // console.log("fetch");
          // console.log(fetchedData);

          context.commit("setServiceData", {
            data: fetchedData,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
