import React from 'react';
import Sidebar from '../components/Sidebar';
import AddInstructor from '../components/Addinstructor';
import Instructor from '../components/Users/Instructor';

const ManageInstructor = () => {
  return (
    <div>
      <Sidebar />
      <div className='container'>
        <div className='data'>
        <h2>Manage Instructors</h2>
      <AddInstructor />
        </div>
      
      </div>
    </div>
  )
}

export default ManageInstructor
