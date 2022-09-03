import React from "react";
import { Formik } from "formik";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import "./Signup.scss";
import { useParams } from "react-router-dom";
const UpdatePassword = () => {
    const { userid, token } = useParams()
    const history = useHistory()

    const initialValues = {
        // token: token,
        password: ""
    };

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        // if (!values.token) {
        //     errors.token = "token is required";
        // }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }

        return errors;
    };

    const submitForm = async(values) => {
        
        await axios.post(`https://password-reset-flow-rajes.herokuapp.com/api/password-reset/${userid}/${token}`,values)
        history.push('/')
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}
        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                } = formik;
                return (
                    <div className="container">
                        <h1 className="text-center">Update password</h1>
                        <form onSubmit={handleSubmit}>

                            {/* <div className="form-row">
                                <label htmlFor="token">Token</label>
                                <input
                                    type="token"
                                    name="token"
                                    id="token"
                                    value={values.token}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.token && touched.token ? "input-error" : null
                                    }
                                />
                                {errors.token && touched.token && (
                                    <span className="error">{errors.token}</span>
                                )}
                            </div> */}

                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password ? "input-error" : null
                                    }
                                />
                                {errors.password && touched.password && (
                                    <span className="error">{errors.password}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                disabled={!(dirty && isValid)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default UpdatePassword;
