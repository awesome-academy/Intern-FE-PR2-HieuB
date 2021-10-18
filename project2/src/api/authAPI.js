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
    }
};

export default authAPI;
