import axios from "./axios";

export const createUser = (data) => {
    return axios.post('users/', data);
}

export const loginUser = (data) => {
    return axios.post('users/login', data);
}

export default {
    createUser,
    loginUser,
}