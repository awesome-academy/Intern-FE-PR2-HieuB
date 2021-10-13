import configAPI from "./configAPI";

const productsAPI = {
    getProducts: async (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.data;
        });
    },
    getMostViewedProducts: async (limit, order) => {
        const url = `/products?_sort=view&_page=1&_limit=${limit}&_order=${order}`;
        return configAPI.get(url).then(function (response) {
            return response.data;
        });
    },
    getPopularProducts: async (limit, order) => {
        const url = `/products?_sort=sold&_page=1&_limit=${limit}&_order=${order}`;
        return configAPI.get(url).then(function (response) {
            return response.data;
        });
    },
    getCategories: async () => {
        const url = "/categories/";
        return configAPI.get(url).then(function (response) {
            return response.data;
        });
    },
    getTotalCount: (params) => {
        const url = "/products/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.headers["x-total-count"];
        });
    }
};

export default productsAPI;
