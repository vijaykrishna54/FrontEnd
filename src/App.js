
import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { Route, Routes} from 'react-router-dom';

import LandingPage from './components/HomeScreen/LandingPage';
import Login from './components/Login';
import Dashboard from './Pages/Dashboard.jsx';

import ManageInstructor from './Pages/ManageInstructor';
import ManageTrainee from './Pages/ManageTrainee';
import Settings from './Pages/Settings';
import Statistics from './Pages/Statistics';
import Logout from './Pages/Logout';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
   <React.Fragment>
      <Routes>
            <Route path="/" element={<LandingPage/>} exact/>
            <Route path="/login" element={<Login />} exact />
            { isLoggedIn &&  <Route path ="/dashboard" element={<Dashboard />} /> }
            { isLoggedIn &&  <Route path = "/manageinstructor" element = {<ManageInstructor/>}/>}
            { isLoggedIn &&  <Route path = "/managetrainees" element = {<ManageTrainee/>}/> }
            { isLoggedIn &&  <Route path = "/statistics" element = {<Statistics/>}/>}
            { isLoggedIn &&  <Route path = "/settings" element = {<Settings/>}/>}
            { isLoggedIn && <Route path = "/logout" element = {<Logout/>}/>}

      </Routes>
   </React.Fragment>
  );
}

export default App;
