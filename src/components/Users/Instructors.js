import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Instructor from './Instructor';
import './User.css';

const URL = `http://localhost:${process.env.REACT_APP_PORT}/instructors`;

console.log(URL);


const fetchHandler = async() => {
  return await axios.get(URL).then((res)=>res.data)
};
const Instructors = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetchHandler().then((data)=>setInstructors(data.instructors));
  },[]);

  console.log(instructors);
  return (
    <div className='container'>
      
        {instructors && instructors.map((instructor, i) => (
         
          
            <Instructor instructor={instructor}/>
         
        ))}
      
    </div>
  );
};

export default Instructors;
