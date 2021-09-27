import configAPI from "./configAPI";

const purchaseAPI = {
    addToCart: async (body) => {
        const url = "/orders/";
        return configAPI.post(url, body).then(function (response) {
            return response;
        });
    },

    getOrders: async (params) => {
        const url = "/orders/?";
        return configAPI.get(url, { params }).then(function (response) {
            return response;
        });
    }
};

export default purchaseAPI;
