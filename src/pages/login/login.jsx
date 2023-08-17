import React from "react";
import { loginStyle } from "./style.js";
import {
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import authService from "../../service/auth.service";
import { toast } from "react-toastify";
import ValidationErrorMessage from "../../component/ValidationErrorMessage/ValidationErrorMessage.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth.jsx";
import { RoutePaths } from "../../utils/enum.js";

export const Login = () => {
  const classes = loginStyle();
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      // .email("Email is not valid")
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-z]+$/, "Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be more than 5 charector")
      .required("Password is required."),
  });

  const onSubmit = (data) => {
    authService.login(data).then((res) => {
      toast.success("Login successfully");
      authContext.setUser(res);
      navigate(RoutePaths.BookListing);
    });
  };

  return (
    <div className={classes.loginWrapper}>
      <div className="container">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" title="Home">
            Home
          </Link>
          <Typography color="textPrimary">Login</Typography>
        </Breadcrumbs>
        <div className="heading">
          <Typography variant="h1">Login or Create an Account</Typography>
        </div>
        <div className="login-row">
          <div className="content-col">
            <div className="btn-wrapper">
              <Typography variant="h2">New Customer</Typography>
              <p>New user? Create your account with us.</p>
              <Button
                className="btn-primary"
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => {
                  navigate("/register");
                }}
              >
                Create an Account
              </Button>
            </div>
          </div>
          <div className="form-block">
            <Typography variant="h2">Registered Customers</Typography>
            <p>If you have an account with us, please log in.</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-row-wrapper">
                    <div className="form-col">
                      <TextField
                        id="email"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="Email Address *"
                        autoComplete="off"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                      />
                      <ValidationErrorMessage
                        message={errors.email}
                        touched={touched.email}
                      />
                    </div>
                    <div className="form-col">
                      <TextField
                        id="password"
                        name="password"
                        label="Password *"
                        type="password"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{ className: "small" }}
                        autoComplete="off"
                      />
                      <ValidationErrorMessage
                        message={errors.password}
                        touched={touched.password}
                      />
                    </div>
                    <div className="btn-wrapper">
                      <Button
                        type="submit"
                        className="btn-primary"
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
