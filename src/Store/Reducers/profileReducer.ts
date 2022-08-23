import React from 'react';

type initialStateType = {
    profile: string
}
const initState: initialStateType = {
    profile: ""
};

export const profileReducer = (state:initialStateType=initState, action:any):initialStateType =>{
    switch (action.type){
        default:return state
    }
}
