import React from 'react';
import { Button} from '@mui/material';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

axios.defaults.withCredentials = true;

export const TopBar = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  
  return (
    // <div style={{position: 'fixed', top: '10px', right: '20px'}}>
    //   {!isLoggedIn && (
    //     <Button
    //       component={Link}
    //       to='/login'
    //       style={{
    //         backgroundColor: 'lightgreen',
    //         color: 'black',
    //         borderRadius: '5px',
    //         border: 'none',
    //         padding: '5px',
    //       }}
    //     >
    //       Sign-in
    //     </Button>
    //   )}
    // </div>
    <div className='container'>
      <div className='sign-in'>
      {!isLoggedIn && (
        <Button
          component={Link}
          to='/login'
          style={{
            backgroundColor: '#AFE340',
            color: 'black',
            borderRadius: '10px',
            border: 'none',
            padding: '0 20px',
            height:'32px',
            textTransform:'capitalize'
          }}
        >
          Sign-in
        </Button>
      )}
      </div>
    </div>
  );
};

export default TopBar;
