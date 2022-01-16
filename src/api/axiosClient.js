import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosConfig = axios.create({
    baseUrl: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
})

axisosClient.interceptor.request.use(async (config) => config);

axisosClient.interceptor.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axisosClient;