import React from "react";
import s from "./Login.module.scss"
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik"
import {Checkbox, FormControlLabel} from "@mui/material";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

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
            } else if (values.password.length < 4) {
                errors.password = 'Password should be longer'
            }

            return errors
        },
        onSubmit: values => {
            alert("hi!")
        },
    })
    return (
        <div className={s.registration}>
            <h2>Sign In</h2>
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
                                <FormControlLabel label={'Remember me'} control={<Checkbox
                                    checked={formik.values.rememberMe}
                                    {...formik.getFieldProps("rememberMe")}
                                />}/>
                                <p className={s.forgotPass}>Forgot password?</p>
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
            <p className={s.toSignIn}>Sign Up</p>
        </div>
    )
}