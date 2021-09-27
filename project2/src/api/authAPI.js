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
    getMe: async (params) => {
        const url = `/600/users/${params.id}`;
        return configAPI
            .get(url, { headers: { Authorization: `Bearer ${params.token}` } })
            .then(function (response) {
                return response;
            });
    },
    updateMe: async (params) => {
        const url = `/600/users/${params.id}`;
        return configAPI
            .patch(url, params.body, {
                headers: { Authorization: `Bearer ${params.token}` }
            })
            .then(function (response) {
                return response;
            });
    }
};

export default authAPI;
