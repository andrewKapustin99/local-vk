import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '477bcc7c-df1d-4f9f-9cd6-0b18f908682b'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})