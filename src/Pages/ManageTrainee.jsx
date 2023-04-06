import React from 'react';
import Sidebar from '../components/Sidebar';
import AddTrainee from '../components/Addtrainee';
import DashFooter from './DashFooter';

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
      <DashFooter/>
    </div>
  )
}

export default ManageTrainee
