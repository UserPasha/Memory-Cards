import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const ProfileApi = {
    changeProfileName(name: string, avatar: string) {
        return instance.put<any, AxiosResponse<UpdateResponseType>>(`auth/me`, {name, avatar})
    },
    fetchProfile() {
        return instance.post<any, AxiosResponse<UserResponseType>>(`auth/me`, {})
    },
    logout() {
        return instance.delete<any, AxiosResponse<LogoutType>>(`auth/me`)
    }
}


export type UserResponseType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
    avatar: Nullable
    deviceTokens: deviceTokensType
}
type deviceTokensType = {
    deviceTokensType: ProfileInfo[]
}
type ProfileInfo = {
    _id: string
    device: string
    token: string
    tokenDeathTime: number
}
export type UpdateResponseType = {
    updatedUser: UserResponseType
    token: string
    tokenDeathTime: number
}
export type Nullable<T = string> = T | null

export type LogoutType = {
    info: string
}