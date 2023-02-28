import React from "react";
import s from "./CreatePasswordPage.module.scss"
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik"

type FormikErrorType = {
    password?: string
}

export const CreatePasswordPage = () => {

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

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
        <div className={s.blockContainer}>
            <h2>Create new password</h2>
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
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.errors.password && formik.touched.password
                                    ?  <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                                <p className={s.info}>Create new password and we will send you further instructions to email</p>

                                <Button
                                    className={s.submitButton}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    Create new password
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}