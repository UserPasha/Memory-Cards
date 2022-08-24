import React from 'react';
import {useFormik} from "formik";
import {Navigate, NavLink} from "react-router-dom";
import {loginTC} from "../../Store/Reducers/authReducer";
import {useAppDispatch, useAppSelector} from "../../Store";
import style from '../../Common/style/Container.module.sass'

export const Login = () => {

    const MIN_SYMBOLS_IN_PASSWORD = 8
    const isLogIn = useAppSelector((state) => state.auth.isLogin)
    const dispatch = useAppDispatch()

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= MIN_SYMBOLS_IN_PASSWORD) {
                errors.password = 'Password should be more than 8 symbols'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        }
    })
    if(isLogIn){
        return <Navigate to='/profile'/>
    }
    return (
        <div className={style.container}>
            Login
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input type='text'
                       {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                <label htmlFor="password">Password</label>
                <input type='password'
                       {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                <input type='checkbox'
                       {...formik.getFieldProps('rememberMe')}/>
                <button type='submit' disabled={!formik.isValid}>Send</button>
            </form>
            <NavLink to={'/registration'}>
            registration
            </NavLink>
        </div>
    );
};
