import React from 'react';
import Sidebar from '../components/Sidebar';


const Logout = () => {
  return (
    <div>
      <Sidebar />
      <div className="container">
        <div className="data">
        <h1>Thank You! See you again!</h1>
        </div>
      </div>
        
    </div>
  )
    
}

export default Logout;



/////
// import React from 'react';
// import {AppBar, Tab, Toolbar, Tabs} from '@mui/material';
// import { Box } from '@mui/system';
// import { useState } from 'react';
// import {Link} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { authActions } from '../store/index';
// axios.defaults.withCredentials = true

// export const TopBar = () => {
//     const dispatch = useDispatch();
//     const isLoggedIn = useSelector(state => state.isLoggedIn);
//     const sendLogoutReq =  async () =>{
//     const res = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/auth/logout`, null, {
//       withCredentials : true
//     });
//     if (res.status === 200){
//       return res
//     }
//     return new Error("Unable to Logout!, please try again!")
//    }
//     const handleLogout = () =>{
//       sendLogoutReq().then(()=>dispatch(authActions.logout()))
//    }
//     const [value, setValue] = useState();
//   return (
//     <div>
//       <AppBar position='sticky' >
//         <Toolbar >
          
//             <Box sx ={{marginLeft : "auto"}}>
//                 <Tabs 
//                     indicatorColor="secondary"
//                     onchange={(e,val) => setValue(val)}
//                     value={value} 
//                     textColor = "inherit">
//                     {!isLoggedIn && (
//                 <>
//                   {" "}
//                   <Tab to="/login" LinkComponent={Link} label="Login" />


//                   {/* In future if we want signup, we can just enable the below line */}
//                   {/* <Tab to="/signup" LinkComponent={Link} label="Signup" /> */}


//                 </>
//               )}
//                     {isLoggedIn && (<Tab onClick={handleLogout} to="/" LinkComponent={Link}label="Logout"/>)}{" "}
//                 </Tabs>
//             </Box>
//         </Toolbar>
//       </AppBar>
//     </div>


//   )

// };



// export default TopBar;

          ///Need to work on the below code to setup logout

// import React from 'react';
// import { Button} from '@mui/material';
// import {useDispatch, useSelector} from 'react-redux';
// import axios from 'axios';
// import {authActions} from '../store/index';
// import {Link} from 'react-router-dom';

// axios.defaults.withCredentials = true;

// export const TopBar = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(state => state.isLoggedIn);
  
//   const sendLogoutReq = async () => {
//     const res = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/auth/logout`, null, {
//       withCredentials: true,
//     });
//     if (res.status === 200) {
//       return res;
//     }
//     return new Error('Unable to Logout!, please try again!');
//   };

//   const handleLogout = () => {
//     sendLogoutReq().then(() => dispatch(authActions.logout()));
//   };

//   return (
//     <div>  
          
//             {!isLoggedIn && (
//               <Button component={Link} to='/login' variant='outlined'>
//                 Sign-in
//               </Button>
//             )}

            
//             {isLoggedIn && (
//               <Button onClick={handleLogout} component={Link} to='/' variant='outlined'>
//                 Logout
//               </Button>
//             )}
          
//     </div>
//   );
// };

// export default TopBar;


