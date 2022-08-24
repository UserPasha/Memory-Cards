import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const ProfileApi = {
    changeProfileName(userName: string, avatar: string){
        return instance.put<ResponseType>(`auth/me`, {userName, avatar})
    },
    fetchProfile(){
        return instance.post(`auth/me`, {})
    }
}


type updatedUserType = {
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
    token: string
    tokenDeathTime: number
    avatar:string
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
export type ResponseType = {
    updatedUser: updatedUserType
    token: string
    tokenDeathTime: number
}
