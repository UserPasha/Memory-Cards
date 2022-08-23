import React from 'react';

type initialStateType = {
    isLogin: boolean
}
const initState: initialStateType = {
    isLogin: false
};

export const authReducer = (state:initialStateType=initState, action:any):initialStateType =>{
    debugger
    switch (action.type){
        default:return state
    }

}
