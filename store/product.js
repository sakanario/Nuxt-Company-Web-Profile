export const state = () => ({
    productData: {},
  });
  
  export const getters = {
    getProductData(state) {
      return state.productData;
    },
  };
  
  export const mutations = {
    setProductData(state, data) {
      state.productData = data?.data;
    },
  };
  
  export const actions = {
    async fetchProductData(context) {
      this.$axios
        .get(
          `/api/product?sorttype=desc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
        )
        .then(
          (response) => {
            let fetchedData =
              response.data?.data?.data.length == 0
                ? []
                : response.data?.data?.data;
  
            context.commit("setProductData", {
              data: fetchedData,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    },
  };
  