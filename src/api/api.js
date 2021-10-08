import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '2443c0ae-e11b-45b4-b780-496ccf030cbe'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})