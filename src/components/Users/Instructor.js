import { Button } from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import React from 'react';
import { containerClasses } from '@mui/system';


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
      <a href={`instructors/${_id}`}>
      <div className="datacard">
        
      <img src={image} alt={name} />
      <div className='infoContainer'>
      <div>
        <h3>{name}</h3>
        {/* <h3>User Id : {_id}</h3> */}
        <h5>Level : 1</h5>
      </div>

    <div>
        <h5>Skill: {description}</h5>
    </div>

    </div>
      
      {/* <h3>Contact : {contact}</h3> */}
      {/* <h3>Email : {email}</h3> */}
      {/* <div>
      <Button className="button" LinkComponent={Link} to={`/instructors/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button className="button"  onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div> */}
      
    </div>
    </a>
    
  
  )
}

export default Instructor;
