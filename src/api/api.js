import * as axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, 
    {
        withCredentials: true
    }).then( response => {
        return response.data
    } );
}

export const followUser = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
        withCredentials: true,
        headers: {
            "API-KEY": '457ce42a-eb34-4037-8307-e0a6a834256e'
        }
    })
}

export const unfollowUser = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": '457ce42a-eb34-4037-8307-e0a6a834256e'
        }
    })
}