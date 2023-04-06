import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Trainee from './Trainee';
const URL = `http://localhost:${process.env.REACT_APP_PORT}/trainees`;

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
    <div className='container'>
     
        {trainees && trainees.map((trainee, i) => (
         
            <Trainee trainee={trainee}/>
            
          
        ))}
      
    </div>
  )
}

export default Trainees;






  


