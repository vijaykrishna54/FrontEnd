// import {  Button, TextField,  } from "@mui/material";

// import "./Login.css";
// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { authActions } from "./store";


// const Login = () => {
//   const dispatch = useDispatch();
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });
//   const handleChange = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async () => {
//     const res = await axios
//       .post(`http://localhost:${process.env.REACT_APP_PORT}/auth/login`, {
//         email: inputs.email,
//         password: inputs.password,
//       })
      
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendRequest()
//       .then(() => dispatch(authActions.login()))
//       .then(() => history("/dashboard"));
//   };
//   return (
//     <div>
//       <div className="login-container">
//       <div className="image">
//         <img src="/images/login-bg.jpg" alt="Login"/>
//       </div>
//       <div>
//       <form onSubmit={handleSubmit} className='loginForm'>
       
          
//           <div class="login-logo">
//                 <img src="/images/Logo.png" alt="sportify logo"/>
//             </div>
//           <TextField fullWidth
//             label= "Email Address"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             width={100}
//             type={"email"}
//             value={inputs.email}
//             variant="outlined"
//             placeholder="Email"
//             margin="dense"/>
//           <TextField fullWidth
//             label= "Password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             type="password"
//             value={inputs.password}
//             variant="outlined"
//             placeholder="**************"
//             margin="dense"/>
//           <div class="form-controls">   
//           <Button className="submit-button" variant="contained" type="submit" >
//             Login
//           </Button>
          
//         <p>Forgot Password? <a href="*">Click here</a></p></div>
     
//       </form>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "./store";
import "./Login.css";

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
    const res = await axios.post(
      `http://localhost:${process.env.REACT_APP_PORT}/auth/login`,
      {
        email: inputs.email,
        password: inputs.password,
      }
    ).catch((err) => console.log(err));
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
    <div className="login-container">
      <div className="image">
        <img src="/images/login-bg.jpg" alt="Login" />
      </div>
      <div className="form-container">
        <div className="login-logo">
          <img src="/images/Logo.png" alt="sportify logo" />
        </div>
        <form onSubmit={handleSubmit} className="loginForm">
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            className="form-control"
            onChange={handleChange}
            width={100}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            className="form-control"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            placeholder="**************"
            margin="dense"
          />
        
              <div className="form-controls">
                <button className="submit-button" variant="contained" type="submit" >
                  Login
                </button>
              </div>
              <div className="forgot-password">
                <p>Forgot Password? <a href = "#">Click here</a></p>
              </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
