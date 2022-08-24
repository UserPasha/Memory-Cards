import React, {ChangeEvent, useEffect, useState} from 'react'
import {NavLink, Navigate} from 'react-router-dom'
import style from './Profile.module.sass'
import { avatar, exitArrow, camera, pencil, logout} from './index'
import {useAppDispatch, useAppSelector} from "../../Store";
import {changeNameTC, fetchProfileTC} from "../../Store/Reducers/profileReducer";


export const Profile = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfileTC())
    }, [])
    const isLogIn = useAppSelector((state) => state.auth.isLogin)
    const userName = useAppSelector((state) => state.profile.userName)
    const [mode, setMode] = useState<boolean>(false)

    const [value, setValue] = useState<string>(userName)
    const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const setChangeName = () => {
        dispatch(changeNameTC(value, ""))
        setMode(false)
    }

    if (!isLogIn) {
        return <Navigate to='/login'/>
    }
    return (
        <div className={style.pageWrapper}>
            <div className={style.exitArrow}>
                <NavLink to={'/'}>
                    <img src={exitArrow} alt={'arrow to exit'}/>
                    <p>Back to Packs List</p>
                </NavLink>
            </div>
            <div className={style.profileContainer}>
                <h3 className={style.profileInformation}>Personal Information</h3>
                <div className={style.profileImage}>
                    <img src={avatar} alt={'avatar picture'}/>
                    <NavLink to={'/'}>
                        <div className={style.changeProfileImage}>
                            <img src={camera} alt={'change avatar picture'}/>
                        </div>
                    </NavLink>
                </div>
                <div className={style.changeProfileNameWrapper}>
                    {mode ? (
                        <input
                            value={value}
                            onChange={NameChanger}
                            autoFocus
                            onBlur={setChangeName}
                        />
                    ) : (
                        <>
                            <h3 className={style.profileName}>{value}</h3>

                            <img
                                src={pencil}
                                alt={'change name'}
                                onClick={() => {
                                    setMode(true)
                                }}
                            />
                        </>
                    )}
                </div>
                <div className={style.profileEmail}>
                    <h4>yoyoyo@gmail.com</h4>
                </div>
                <div className={style.buttonLogout}>
                    <NavLink to={'/'}>
                        <img src={logout} alt={'log out'}/>
                        Log Out
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

