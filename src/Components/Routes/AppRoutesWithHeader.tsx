import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Login} from "../Login/Login";
import {Page404} from "../Page404/Page404";
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {EnterNewPassword} from "../EnterNewPassword/EnterNewPassword";
import {Test} from "../Test/Test";
import {Header} from "../Header/Header";

export const PATH = {
    HELLO: '/',
    LOGIN: '/login',
    PAGE_NOT_FOUND: '/404',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTER_NEW_PASSWORD: '/enter-new-password',
    TEST: '/test'
}

export const AppRoutesWithHeader = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PAGE_NOT_FOUND} element={<Page404/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ENTER_NEW_PASSWORD} element={<EnterNewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.HELLO} element={<Profile/>}/>
                {/*<Route path = {PATH.HELLO} element={<h1>Hello world!</h1>}/>*/}
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </>
    );
};

