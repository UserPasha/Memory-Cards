
import {LoginApi, LoginParamsType} from "../../api/login";
import {RegisterParamsType, RegistrationApi} from "../../api/registration";
import {AppThunk} from "../store";
import {AxiosError} from "axios";

const AUTH_REDUCER_SWITCH_TYPES = {
    SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
    SET_IS_ACTIVE_IN: 'SET_IS_ACTIVE_IN'
}

type initialStateType = {
    isLogin: boolean
    isActive: boolean
}
const initState: initialStateType = {
    isLogin: false,
    isActive: false
};

export const authReducer = (state: initialStateType = initState, action: AuthActionsType): initialStateType => {

    switch (action.type) {
        case "SET_IS_LOGGED_IN":
            return {...state, isLogin: action.value}
        case "SET_IS_ACTIVE_IN":
            return {...state, isActive: action.value}
        default:
            return state
    }
}

export const setIsLoggedIn = (value: boolean) =>
    ({type: AUTH_REDUCER_SWITCH_TYPES.SET_IS_LOGGED_IN, value} as const)
export const setIsActiveIn = (value: boolean) =>
    ({type: AUTH_REDUCER_SWITCH_TYPES.SET_IS_ACTIVE_IN, value} as const)


export const loginTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    LoginApi.loginUser(data)
        .then(res => {
                dispatch(setIsLoggedIn(true))
        })
        .catch((e: AxiosError) => {
            const error = e.response
                ? (e.response.data as ({ error: string })).error
                : e.message;
        })
}

export const registerTC = (data: RegisterParamsType):AppThunk => (dispatch) =>{
    RegistrationApi.registerUser(data)
        .then(res=>{
                dispatch(setIsActiveIn(true))
        })
        .catch((e: AxiosError) => {
            const error = e.response
                ? (e.response.data as ({ error: string })).error
                : e.message;
        })
}


export type AuthActionsType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setIsActiveIn>