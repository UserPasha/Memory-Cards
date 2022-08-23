import React, { ChangeEvent, useState } from 'react'

//import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

//import { userName } from '../../store/selectors/selectors'
// import { RootStoreType } from '../../store'
// import { changeProfileName } from '../../store/slice/profileSlice'

import style from './Profile.module.sass'

import { itIncubatorLogo, avatar, exitArrow, camera, pencil, logout } from './index'

export const Profile = () => {
   // const dispatch = useDispatch()
   // const userName = useSelector<RootStoreType, string>((state) => state.profile.userName)
    const [mode, setMode] = useState<boolean>(false)

    const [value, setValue] = useState<string>("Name")
    const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.value)
    }

    return (
        <div className={style.pageWrapper}>
            <div className={style.pageHeader}>
                <div className={style.logo}>
                    <img src={itIncubatorLogo} alt={'logo'} />
                </div>
                <div className={style.info}>
                    <div className={style.infoName}>{value}</div>
                    <div className={style.infoAvatar}>
                        <img src={avatar} alt={'avatar miniature picture'} />
                    </div>
                </div>
            </div>
            <div className={style.exitArrow}>
                <NavLink to={'/'}>
                    <img src={exitArrow} alt={'arrow to exit'} />
                    <p>Back to Packs List</p>
                </NavLink>
            </div>
            <div className={style.profileContainer}>
                <h3 className={style.profileInformation}>Personal Information</h3>
                <div className={style.profileImage}>
                    <img src={avatar} alt={'avatar picture'} />
                    <NavLink to={'/'}>
                        <div className={style.changeProfileImage}>
                            <img src={camera} alt={'change avatar picture'} />
                        </div>
                    </NavLink>
                </div>
                <div className={style.changeProfileNameWrapper}>
                    {mode ? (
                        <input
                            value={value}
                            onChange={NameChanger}
                            autoFocus
                            onBlur={() => {
                                setMode(false)
                            }}
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
                        <img src={logout} alt={'log out'} />
                        Log Out
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

