import CONFIGURATION from './configuration';
import axios from 'axios';

const instance = axios.create({
    baseURL: CONFIGURATION.BASE_URL,
})

// instance.interceptors.request.use(
//     async config => {
//         config.headers.common['version'] = appVersion;
//         return config;
//     },
//     function (error){
//         return Promise.reject(error);
//     },
// )

export default instance;