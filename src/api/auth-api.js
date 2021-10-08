import Login from "../componets/Login/Login";
import { instance } from "./api";

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(loginState) {
        return instance.post(`auth/login`, {login: loginState.login, password: loginState.password, rememberMe: loginState.rememberMe, captcha: loginState.captcha})
    }
}