import configAPI from "./configAPI";

const adminAPI = {
    getUser: async (params) => {
        const url = "/users";
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
    }
};

export default adminAPI;
