import { Box, Button, TextField,  } from "@mui/material";

import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "./store";


const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(`https://backend-production-fe64.up.railway.app//auth/login`, {
        email: inputs.email,
        password: inputs.password,
      })
      // console.log(process.env.PORT)
      
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => dispatch(authActions.login()))
      .then(() => history("/dashboard"));
  };
  return (
    <div>
      <div className="login-container">
      <div className="image">Image Goes here</div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={500}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center">
          
          <div class="logo">
                <img src="/images/Logo.png" alt="sportify logo"/>
            </div>
          <TextField
            label= "Email Address"
            name="email"
            className="form-control"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            margin="normal"/>
          <TextField
            label= "Password"
            name="password"
            className="form-control"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            placeholder="**************"
            margin="normal"/>
          <br/>
          <br/>
          <Button className="submit-button" variant="contained" type="submit">
            Login
          </Button>
          <br/>
          <br/>
        <p>Forgot Password? <a href="*">Click here</a></p>

        </Box>
      </form>
      </div>
    </div>
  );
};

export default Login;
