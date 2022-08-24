import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const RegistrationApi = {
    registerUser(data: RegisterParamsType){
return instance.post<RegisterParamsType, AxiosResponse<RegisterResponseType>>(`auth/register`, data)
    }
}

export type RegisterParamsType = {
    email: string
    password: string
}
type addedUserType = {
    _id: string
    email: string
    rememberMe :boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
}
type RegisterResponseType  ={
    addedUser: addedUserType
}