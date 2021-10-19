import configAPI from "./configAPI";

const purchaseAPI = {
    addToCart: async (body) => {
        const url = "/orders/";
        return configAPI.post(url, body).then(function (response) {
            return response;
        });
    }
};

export default purchaseAPI;
