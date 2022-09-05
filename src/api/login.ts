import axios, {AxiosResponse} from "axios"
import { UserResponseType} from "./profile";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const LoginApi = {
    loginUser(data: LoginParamsType) {
        return instance.post<any, AxiosResponse<UserResponseType, LoginParamsType>, LoginParamsType>(`auth/login`, data)
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}



