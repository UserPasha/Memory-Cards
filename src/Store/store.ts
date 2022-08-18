import {authReducer} from "./Reducers/authReducer";
import {profileReducer} from "./Reducers/profileReducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
 auth: authReducer,
 profile: profileReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev