import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Instructor from './Instructor';
import './User.css';
const URL = `https://backend-production-fe64.up.railway.app/instructors`;


const fetchHandler = async() =>{
  return await axios.get(URL).then((res)=>res.data)
};
const Instructors = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetchHandler().then((data)=>setInstructors(data.instructors));
  },[]);

  console.log(instructors);
  return (
    <div>
      <ul>
        {instructors && instructors.map((instructor, i) => (
          <div key={i}>
            <Instructor instructor={instructor}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Instructors;
