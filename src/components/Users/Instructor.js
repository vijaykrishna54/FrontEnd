import { Button } from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import React from 'react';


const Instructor = (props) => {
    const history = useNavigate();
    const {_id, name, email, description, contact, image} = props.instructor;
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/instructors/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/instructors"));
      };
  
    return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>Name : {name}</h3>
      {/* <h3>User Id : {_id}</h3> */}
      <h3>About : {description}</h3>
      <h3>Contact : {contact}</h3>
      <h3>Email : {email}</h3>
      <Button LinkComponent={Link} to={`/instructors/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  )
}

export default Instructor;
