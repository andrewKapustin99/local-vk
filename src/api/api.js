import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'e601c3f7-02ca-4fd8-833e-9dea4cc8e994'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})