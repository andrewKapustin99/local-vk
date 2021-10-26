import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'bee1dfe1-3445-4dd2-a280-df119f81528e'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})