import {AuthActionsType, authReducer} from "./Reducers/authReducer";
import {ProfileActionType, profileReducer} from "./Reducers/profileReducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const reducers = combineReducers({
 auth: authReducer,
 profile: profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

//export type AppStoreType = ReturnType<typeof reducers>

type AppActionsType = AuthActionsType | ProfileActionType

export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

// @ts-ignore
window.store = store // for dev