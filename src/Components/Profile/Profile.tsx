import React, {ChangeEvent, useEffect, useState} from 'react'
import { Navigate} from 'react-router-dom'
import style from './Profile.module.sass'
import { avatar, exitArrow, camera, pencil, logout} from './index'
import {useAppDispatch, useAppSelector} from "../../Store";
import {
    changeNameTC,
    fetchProfileTC,
    setProfileName,
    setProfileEmail,
    logoutUserTC
} from "../../Store/Reducers/profileReducer";
import {setIsLoggedIn} from "../../Store/Reducers/authReducer";


export const Profile = () => {

    const isLogIn = useAppSelector((state) => state.auth.isLogin)
    const userName = useAppSelector((state) => state.profile.name)
    const userEmail = useAppSelector((state)=> state.profile.email)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfileTC())
    }, [])
    useEffect(() => {
        dispatch(setProfileName(userName));
        dispatch(setProfileEmail(userEmail));
        console.log(userName)
    }, [userName, userEmail])


    const [mode, setMode] = useState<boolean>(false)

    const [value, setValue] = useState<string>(userName)
    const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const setChangeName = () => {
        dispatch(changeNameTC(value, ""))
        setMode(false)
    }
    const logoutUser = () =>{
        dispatch(logoutUserTC())
        dispatch(setIsLoggedIn(false))
    }

    if (!isLogIn) {
        return <Navigate to='/login'/>
    }
    return (
        <div className={style.pageWrapper}>
            <div className={style.exitArrow}>
                    <img src={exitArrow} alt={'arrow to exit'}/>
                    <p>Back to Packs List</p>
            </div>
            <div className={style.profileContainer}>
                <h3 className={style.profileInformation}>Personal Information</h3>
                <div className={style.profileImage}>
                    <img src={avatar} alt={'avatar picture'}/>
                        <div className={style.changeProfileImage}>
                            <img src={camera} alt={'change avatar picture'}/>
                        </div>
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
                            <h3 className={style.profileName}>{userName}</h3>

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
                    <h4>{userEmail}</h4>
                </div>
                <div className={style.buttonLogout} onClick={logoutUser}>
                        <img src={logout} alt={'log out'} />
                        Log Out
                </div>
            </div>
        </div>
    )
}

