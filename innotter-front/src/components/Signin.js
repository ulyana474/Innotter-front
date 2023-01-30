import React, { useState, useContext } from "react";
import { TextField, InputAdornment, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom'
import SubmitForm from "./SubmitForm";
import '../styles/signin.css'
import { UserContext } from "./UserContext";
import { signin } from "../utils/functions";

const Signin = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required!")
        .min(2, "Minimum 2 characters")
        .max(20, "Maximum 20 characters"),
      password: Yup.string().min(5).required("Password is required!"),
    }),

    onSubmit: () => {
      setIsSubmitSuccess(true)
    },
  });

  return (
    <div className="container">
      <div>{JSON.stringify(user, null, 2)}</div>
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} x>
        {isSubmitSuccess ? (
          <SubmitForm />
        ) : (
          <form className="signin-form" onSubmit={formik.handleSubmit}>
            <h2 className="welcome-text">Welcome to Innotter!</h2>
            <TextField
              name="username"
              type="text"
              placeholder="Username"
              className="input-mui"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.username && formik.errors.username ? (
              <div className="error_msg">{formik.errors.username}</div>
            ) : null}

            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="input-mui"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}

            {user ? (
            <button onClick={() => {
                setUser(null);
            }
            } className="button-sign-in">logout</button>
            ) : (
            <button onClick={async () => {
              let username = formik.values.username
              let password = formik.values.password
              const user = await signin(username, password);
              setUser(user);
              navigate("/Innotter")
            }} 
              className="button-sign-in" type="submit">Sign in</button>)}
            <h3 className="signup-text"> Not a member? <span className="signup">Signup now</span></h3>
          </form>
        )}
      </div>
    </div>
  );
};


export default Signin