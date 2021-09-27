import configAPI from "./configAPI";

const authAPI = {
    login: async (info) => {
        const url = "/login/";
        return configAPI.post(url, info).then(function (response) {
            return response;
        });
    },
    register: async (info) => {
        const url = "/register/";
        return configAPI.post(url, info).then(function (response) {
            return response;
        });
    },
    getOrders: async (token, id) => {
        const url = `/600/orders/${id}`;
        return configAPI.get(url, token).then(function (response) {
            return response;
        });
    }
};

export default authAPI;
