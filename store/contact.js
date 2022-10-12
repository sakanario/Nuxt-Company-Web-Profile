export const state = () => ({
    contactData: {},
  });
  
  export const getters = {
    getContactData(state) {
      return state.contactData;
    },
  };
  
  export const mutations = {
    setContactData(state, data) {
      state.contactData = data?.data[0];
      
      // console.log("set service");
      // console.log(state.contactData);
    },
  };
  
  export const actions = {
    async fetchContactData(context) {
      this.$axios
        .get(
          `/api/contact?sorttype=asc&sortby=id&row=10&keyword=${process.env.COMPANY_NAME}`
        )
        .then(
          (response) => {
            let fetchedData =
              response.data?.data?.data.length == 0
                ? []
                : response.data?.data?.data;
  
            // console.log("fetch");
            // console.log(fetchedData);
  
            context.commit("setContactData", {
              data: fetchedData,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    },
  };
  