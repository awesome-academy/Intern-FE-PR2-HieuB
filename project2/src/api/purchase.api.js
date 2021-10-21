import configAPI from "./configAPI";

const purchaseAPI = {
    addToCart: async (body) => {
        const url = "/orders/";
        return configAPI.post(url, body).then(function (response) {
            return response;
        });
    },

    postPayment: async (params) => {
        const url = "/payments/";
        return configAPI.post(url, params).then(function (response) {
            return response;
        });
    }
};

export default purchaseAPI;
