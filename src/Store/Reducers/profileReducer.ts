import {AppThunk} from "../store";
import {ProfileApi} from "../../api/profile";

const PROFILE_REDUCER_SWITCH_TYPES = {
    CHANGE_USER_NAME: 'CHANGE_USER_NAME',
    SET_PROFILE: 'SET_PROFILE'
}

type initialStateType = {
    userName: string,
    avatar: string
}
const initState: initialStateType = {
    userName: "",
    avatar: "avatar"
};

export const profileReducer = (state:initialStateType=initState, action:ProfileActionType):initialStateType =>{
    switch (action.type){
        case "CHANGE_USER_NAME":
            return {...state, userName: action.title}
        case "SET_PROFILE":{
            return {...state, userName: action.title}
        }
        default:return state
    }
}

export const changeUserName = (title: string, avatar: string) =>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.CHANGE_USER_NAME, title, avatar}as const)

export const setProfile = (title: string)=>
    ({type: PROFILE_REDUCER_SWITCH_TYPES.SET_PROFILE, title}as const)

export const changeNameTC = (userName: string, avatar:string): AppThunk => (dispatch) => {
    ProfileApi.changeProfileName(userName, avatar)
        .then(res => {
            if(res.data.updatedUser){
                dispatch(changeUserName(userName, avatar))
            }
        })
}

export const fetchProfileTC = (): AppThunk => (dispatch)=>{
    ProfileApi.fetchProfile()
        .then(res=>{
            dispatch(setProfile(res.data.name))
        })
}

export type ProfileActionType = ReturnType<typeof changeUserName> |
    ReturnType<typeof setProfile>