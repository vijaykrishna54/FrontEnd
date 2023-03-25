import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Trainee from './Trainee';
const URL = `http://localhost:${process.env.PORT}/trainees`;

const fetchHandler = async() =>{
  return await axios.get(URL).then((res)=>res.data)
}
const Trainees = () => {
  const [trainees, setTrainees] = useState();
  
  useEffect(() => {
    fetchHandler().then((data)=>setTrainees(data.trainees));
  },[]);
  
  console.log(trainees);
  return (
    <div>
      <ul>
        {trainees && trainees.map((trainee, i) => (
          <div key={i}>
            <Trainee trainee={trainee}/>
            
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Trainees;






  


