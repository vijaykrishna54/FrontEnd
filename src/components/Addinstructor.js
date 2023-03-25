import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  // Typography,
} from "@mui/material";
// import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Instructor from '../components/Users/Instructor';

const AddInstructor = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    contact: "",
    email: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post(`http://localhost:5000/instructors`, {
        name: String(inputs.name),
        email: String(inputs.email),
        description: String(inputs.description),
        contact: Number(inputs.contact),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/dashboard"));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Email</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Contact</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="contact"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <div>
        <Button variant="contained" type="submit">
          Add Instructor
        </Button>
        </div>
        
   
    </form>
  );
};

export default AddInstructor;
