import { instance } from "./api";

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`status`, {status: status})
    }
}