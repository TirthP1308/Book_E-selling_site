import { React } from "react";
import { createAccountStyle } from "./style.js";
import {
  Breadcrumbs,
  Button,
  Typography,
  Link,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import authService from "../../service/auth.service.js";
import { toast } from "react-toastify";
import ValidationErrorMessage from "../../component/ValidationErrorMessage/ValidationErrorMessage.jsx";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const classes = createAccountStyle();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };

  const roleList = [
    { id: 2, name: "buyer" },
    { id: 3, name: "seller" },
  ];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required.")
      // .email(),
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-z]+$/,"Email is not valid"),
    password: Yup.string()
      .required("Password is required.")
      .min(5, "Password must have at least 8 characters."),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must be match."
      )
      .required("Confirm password is required."),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role is required"),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;
    authService.create(data).then((res) => {
      navigate("/login");
      toast.success("Successfully registered");
    });
  };
  // useEffect(() => {
  //     console.log("Data updated.");
  // }, [details.email, details.password]);

  return (
    <div className={classes.createAccount}>
      <div className="whole-component">
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link color="inherit" href="/" title="Home">
            Home
          </Link>
          <Typography color="textPrimary">Create an Account</Typography>
        </Breadcrumbs>
        <div className="component-heading">
          <Typography variant="h1">Create an Account</Typography>
          <p>
            <b>Note:</b> Field with asterick(*) are required.
          </p>
        </div>
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
          }) => {
            console.log("val:", values);
            return (
              <form onSubmit={handleSubmit}>
                <div className="details-collection">
                  <TextField
                    name="firstName"
                    label="First Name *"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{ className: "small" }}
                  />
                  <ValidationErrorMessage
                    message={errors.firstName}
                    touched={touched.firstName}
                  />
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{ className: "small" }}
                  />
                  <TextField
                    name="email"
                    label="Email *"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{ className: "small" }}
                  />
                  <ValidationErrorMessage
                    message={errors.email}
                    touched={touched.email}
                  />
                  <FormControl className="formControl" variant="outlined">
                    <InputLabel id="select">Role</InputLabel>
                    <Select
                      name="roleId"
                      id={"roleId"}
                      label="Role"
                      value={values.roleId}
                      onChange={handleChange}
                      inputProps={{ className: "small" }}
                      displayEmpty
                    >
                      {roleList.length > 0 &&
                        roleList.map((role) => (
                          <MenuItem value={role.id} key={"name" + role.id}>
                            {role.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <TextField
                    name="password"
                    label="Password *"
                    variant="outlined"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{ className: "small" }}
                  />
                  <ValidationErrorMessage
                    message={errors.password}
                    touched={touched.password}
                  />
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password *"
                    variant="outlined"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{ className: "small" }}
                  />
                  <ValidationErrorMessage
                    message={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />
                  <div className="end-line">
                    <div className="btn-wrapper">
                    <Button
                      className="btn-primary"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Register
                    </Button>
                    </div>
                    <div className="old-user">
                    <Link href="/login">Already a user?</Link>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
