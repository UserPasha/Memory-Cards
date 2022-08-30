import React from 'react';
import {useFormik} from "formik";
import {registerTC} from "../../Store/Reducers/authReducer";
import {useAppDispatch} from "../../Store";
import style from '../../Common/style/Container.module.sass'

export const Registration = () => {

    const MIN_SYMBOLS_IN_PASSWORD = 8
    const dispatch = useAppDispatch()

    type FormikErrorType = {
        email?: string
        password?: string
        confirmPassword?:string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
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
            if(!values.confirmPassword){
                errors.confirmPassword = 'Required'
            } else if (values.password !== values.confirmPassword){
                errors.confirmPassword = 'Your passwords must match'
            }
            return errors
        },
        onSubmit: values => {
            // alert(JSON.stringify(values))
            dispatch(registerTC(values))
            formik.resetForm()
        }
    })
    return (
        <div className={style.container}>
            Registration
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
                <label htmlFor="password">Confirm Password</label>
                <input type='password'
                       {...formik.getFieldProps('confirmPassword')}/>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                    <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}
                <div>
                    <button type='submit' disabled={!formik.isValid} >Send</button>
                </div>

            </form>
        </div>
    );
};

