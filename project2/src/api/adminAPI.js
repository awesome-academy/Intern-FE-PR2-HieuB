import configAPI from "./configAPI";

const adminAPI = {
    getUser: async (params) => {
        const url = "/users/";
        return configAPI.get(url, { params }).then(function (response) {
            return response;
        });
    },
    getTotalCountAdmin: async (params) => {
        const url = "/users/";
        return configAPI.get(url, { params }).then(function (response) {
            return response.headers["x-total-count"];
        });
    },
    updateUser: async (params) => {
        const url = `/users/${params.id}`;
        return configAPI.patch(url, params.body).then(function (response) {
            return response;
        });
    },
    addProduct: async (body) => {
        const url = "/products/";
        return configAPI.post(url, body).then(function (response) {
            return response;
        });
    },
    deleteProduct: async (id) => {
        const url = `/products/${id}`;
        return configAPI.delete(url).then(function (response) {
            return response;
        });
    },
    updateProduct: async (params) => {
        const url = `/products/${params.id}`;
        return configAPI.patch(url, params.body).then(function (response) {
            return response;
        });
    },
    getPayment: async (params) => {
        const url = "/payments/";
        return configAPI.get(url, { params }).then(function (response) {
            return response;
        });
    }
};

export default adminAPI;
