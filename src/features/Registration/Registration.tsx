import React from "react";
import s from "./Registration.module.scss"
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik"

type FormikErrorType = {
    email?: string
    password?: string
    repeatPassword?: string
}

export const Registration = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: ''
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
            } else if (values.password.length < 4) {
                errors.password = 'Password should be longer'
            }
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Required'
            } else if (values.repeatPassword.length < 4) {
                errors.repeatPassword = 'Password should be longer'
            }

            return errors
        },
        onSubmit: values => {
            alert("hi!")
        },
    })
    return (
        <div className={s.registration}>
            <h2>Sign Up</h2>
            <Grid container justifyContent={'center'} className={s.formContainer}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    className={s.emailInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.errors.email && formik.touched.email ?  <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                                <TextField
                                    className={s.passwordInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.errors.password && formik.touched.password
                                    ?  <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                                <TextField
                                    className={s.repeatPasswordInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    label="Repeat Password"
                                    margin="normal"
                                    {...formik.getFieldProps("repeatPassword")}
                                />
                                {formik.errors.repeatPassword && formik.touched.repeatPassword
                                    ?  <div style={{color: "red"}}>{formik.errors.repeatPassword}</div> : null}
                                <Button
                                    className={s.submitButton}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    Sign Up
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>

            <p className={s.toLogin}>Already have an account?</p>
            <p className={s.toSignIn}>Sign In</p>
        </div>
    )
}