// import { Button } from '@mui/material';
import React from 'react'

const Trainee = (props) => {
    const {_id, name, email, description, contact, image} = props.trainee;
  return (
    <a href={`trainee/${_id}`} className='card-link'>
    <div className="datacard">
    <img src={image} alt={name} />
      <div className='infoContainer'>
        <div>
          <h3>{name}</h3>
          {/* <h3>User Id : {_id}</h3> */}
          <h5>{description}</h5>
          <h5>Contact{contact}</h5>
          <h5>Email : {email}</h5>
        </div>
        
      </div>
      {/* <div>
      <Button>Update</Button>
      <Button>Delete</Button>
      </div> */}
      
    </div>
    </a>
  )
}

export default Trainee;
