import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../Pages/Dashboard';
import ManageInstructor from '../Pages/ManageInstructor';
import ManageTrainee from '../Pages/ManageTrainee';
import Statistics from '../Pages/Statistics';
import Settings from '../Pages/Settings';
import Logout from '../Pages/Logout';


function Menu (){

return(
   <div>
      {/* <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path = "/dashboard" element = {<Dashboard/>}/>
              <Route path = "/manageinstructor" element = {<ManageInstructor/>}/>
              <Route path = "/managetrainees" element = {<ManageTrainee/>}/>
              <Route path = "/statistics" element = {<Statistics/>}/>
              <Route path = "/settings" element = {<Settings/>}/>
              <Route path = "/logout" element = {<Logout />} />
            </Routes>
          </Sidebar>
      </BrowserRouter> */}
    </div>
   );
}

export default Menu;
    