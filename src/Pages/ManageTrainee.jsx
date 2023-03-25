import React from 'react';
import Sidebar from '../components/Sidebar';
import AddTrainee from '../components/Addtrainee';


const ManageTrainee = () => {
  return (
    <div>
      <Sidebar />
      <div className='container'>
      <div className="data">
      <h2>Manage Trainees</h2>
      <AddTrainee/>
      </div>
      </div>
    </div>
  )
}

export default ManageTrainee
