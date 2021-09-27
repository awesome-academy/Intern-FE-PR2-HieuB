import configAPI from "./configAPI";

const commentApi = {
    getComment: async (productId) => {
        const url = `/comments/?productId=${productId}`;
        return configAPI.get(url).then(function (response) {
            return response;
        });
    },
    postComment: async (body) => {
        const url = "/comments/";
        return configAPI.post(url, body).then(function (response) {
            return response;
        });
    }
};

export default commentApi;
