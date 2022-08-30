import {AppThunk} from "../store";
import {ProfileApi} from "../../api/profile";
import {AxiosError} from "axios";
import {setIsActiveIn, setIsLoggedIn} from "./authReducer";

const PROFILE_REDUCER_SWITCH_TYPES = {
    CHANGE_USER_NAME: 'CHANGE_USER_NAME',
    SET_PROFILE_NAME: 'SET_PROFILE_NAME',
    SET_PROFILE_EMAIL: 'SET_PROFILE_EMAIL',
    LOGOUT_USER: 'LOGOUT_USER'
}

type initialStateType = {
    name: string,
    avatar: string
    email: string
}
const initState: initialStateType = {
    name: "",
    avatar: "avatar",
    email: ""
};

export const profileReducer = (state: initialStateType = initState, action: ProfileActionType): initialStateType => {

    switch (action.type) {
        case "CHANGE_USER_NAME":
            return {...state, name: action.title}
        case "SET_PROFILE_NAME": {
            return {...state, name: action.title}
        }
        case "SET_PROFILE_EMAIL":{
            return {...state, email: action.title}
        }
        case "LOGOUT_USER":{
            return initState
        }
        default:
            return state
    }
}

export const changeUserName = (title: string, avatar: string) =>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.CHANGE_USER_NAME, title, avatar} as const)

export const setProfileName = (title: string) =>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.SET_PROFILE_NAME, title} as const)

export const setProfileEmail = (title: string) =>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.SET_PROFILE_EMAIL, title} as const)

export const logoutProfile = (title: string, avatar: string, email:string) =>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.LOGOUT_USER, title, avatar, email} as const)

export const fetchProfileTC = (): AppThunk => (dispatch) => {
    ProfileApi.fetchProfile()
        .then(res => {
            dispatch(setProfileName(res.data.name))
            dispatch(setProfileEmail(res.data.email))
            dispatch(setIsLoggedIn(true));
        })
        .catch((e: AxiosError) => {
            const error = e.response
                ? (e.response.data as ({ error: string })).error
                : e.message;
        })
}

export const changeNameTC = (name: string, avatar: string): AppThunk =>
    (dispatch) => {
    ProfileApi.changeProfileName(name, avatar)
        .then(res => {
            dispatch(changeUserName(name, avatar))
        })
        .catch((e: AxiosError) => {
            const error = e.response
                ? (e.response.data as ({ error: string })).error
                : e.message;
        })
    }

export const logoutUserTC = ():AppThunk =>(dispatch)=>{
    ProfileApi.logout()
        .then(res=>{
            dispatch(setIsLoggedIn(false))
            dispatch(logoutProfile('', "", ""))
        })
        .catch((e: AxiosError) => {
            const error = e.response
                ? (e.response.data as ({ error: string })).error
                : e.message;
        })
}

export type ProfileActionType = ReturnType<typeof changeUserName> |
    ReturnType<typeof setProfileName> |
    ReturnType<typeof setProfileEmail> |
    ReturnType<typeof logoutProfile>

