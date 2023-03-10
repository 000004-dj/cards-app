import React from "react";
import s from "./ChangePasswordPage.module.scss"
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik"

type FormikErrorType = {
    email?: string
}

export const ChangePasswordPage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            alert("hi!")
        },
    })
    return (
        <div className={s.blockContainer}>
            <h2>Forgot your password?</h2>
            <Grid container justifyContent={'center'} className={s.formContainer}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    className={s.passwordInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.errors.email && formik.touched.email
                                    ?  <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                                <p className={s.info}>
                                    Enter your email
                                    address and we will
                                    send you further
                                    instructions
                                </p>
                                <Button
                                    className={s.submitButton}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    Send Instructions
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
            <p className={s.toLogin}>Did you remember your password?</p>
            <p className={s.toSignIn}>Try logging in</p>
        </div>
    )
}