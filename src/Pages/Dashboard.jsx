import React from 'react'

import Sidebar from '../components/Sidebar';
import Instructors from  '../components/Users/Instructors';

const Dashboard = () => {
  return (
   
    <div >
      <div>
          <Sidebar/>
        
      </div>
      <div className='container'>
        <div className="data">
        {/* <h1>You can View instructors / Trainees from here!</h1> */}
        <button>Current Instructors</button><button>Current Trainees</button>
        <br/>
        <Instructors />
        </div>
       
      </div>
      
    </div>
    
   
  )
}

export default Dashboard
