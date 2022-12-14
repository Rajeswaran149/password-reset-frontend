import React from 'react'
import { Formik } from "formik";
import './Signup.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialValues = {
  email: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  return errors;
};

const submitForm = (values) => {
  console.log(values);
  axios.post("https://password-reset-flow-rajes.herokuapp.com/api/password-reset",values)
};


const ForgotPassword = () => {
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
            <h1 className='text-center'>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
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
            <Link to="/">
            <h3 className='text-center'>Sign Up</h3>
            </Link>
          </div>
        );
      }}
    </Formik>
  )
}

export default ForgotPassword;