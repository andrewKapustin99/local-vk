import * as axios from "axios";
import { instance } from "./api";



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => {
                return response.data
            } );
    },
    followUser (id) {
        return instance.post(`follow/${id}`, null)
    },
    unfollowUser (id) {
        return instance.delete(`follow/${id}`)
    }
}