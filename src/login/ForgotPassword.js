import React from 'react'
import { Formik } from "formik";
import './Signup.scss'

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
            <h1>Sign in to continue</h1>
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
            <h3>Forgot Password</h3>
          </div>
        );
      }}
    </Formik>
  )
}

export default ForgotPassword