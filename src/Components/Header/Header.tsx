import React from 'react';
import style from "./Header.module.sass";
import {avatar, itIncubatorLogo} from "../Profile";
import {useAppSelector} from "../../Store";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate("/login")
    }
    const isLogIn = useAppSelector((state) => state.auth.isLogin)

    return (
        <div className={style.pageHeader}>
            <div className={style.logo}>
                <img src={itIncubatorLogo} alt={'logo'}/>
            </div>
            <div className={style.info}>
                {/*<div className={style.infoName}>{value}</div>*/}
                {isLogIn
                    ?
                    (<>
                        <div className={style.infoName}>value</div>
                        <div className={style.infoAvatar}>
                            <img src={avatar} alt={'avatar miniature picture'}/>
                        </div>
                    </>)
                    : (


                       <div>
                           <button onClick={navigateToLogin}>Log In  </button>
                       </div>




                    )}

            </div>
        </div>
    );
};

