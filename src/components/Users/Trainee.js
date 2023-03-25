import { Button } from '@mui/material';
import React from 'react'

const Trainee = (props) => {
    const {_id, name, email, description, contact} = props.trainee;
  return (
    <div>
      <h3>{name}</h3>
      <h3>User Id : {_id}</h3>
      <p>{description}</p>
      <h2>{contact}</h2>
      <h3>Email : {email}</h3>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  )
}

export default Trainee;
