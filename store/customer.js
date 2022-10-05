export const state = () => ({
    customerData: {},
  });
  
  export const getters = {
    getCompanyData(state) {
      return state.customerData;
    },
  };
  
  export const mutations = {
    setCustomerData(state, data) {
      state.customerData = data?.data;
    },
  };
  
  export const actions = {
    async fetchCustomerData(context) {
      this.$axios
        .get(
          `/api/customer?sorttype=desc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
        )
        .then(
          (response) => {
            let fetchedData =
              response.data?.data?.data.length == 0
                ? []
                : response.data?.data?.data;
  
            context.commit("setCustomerData", {
              data: fetchedData,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    },
  };
  