import configAPI from "./configAPI";

const productsAPI = {
    getProducts: async (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.data;
        });
    },
    getMostViewedProducts: async () => {
        const url = "/products?_sort=view&_page=1&_limit=8&_order=desc";
        return configAPI.get(url).then(function (response) {
            return response.data;
        });
    },
    getCategories: async () => {
        const url = "/categories/";
        return configAPI.get(url).then(function (response) {
            return response.data;
        });
    }
};

export default productsAPI;
