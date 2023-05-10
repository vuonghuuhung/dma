import axios from "./http";

export function login(username, password) {
    return axios.get(`/api/USERS?username=${username}&password=${password}`);
}