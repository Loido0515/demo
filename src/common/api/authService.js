import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/auth/login';

const login = (username, password) => {
    return axiosClient.post(API_PATH, {username, password});
}

const authService = {
    login
}

export default authService;