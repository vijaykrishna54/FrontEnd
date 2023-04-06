import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Instructors from '../components/Users/Instructors';
import Trainee from '../components/Users/Trainees';
import DashFooter from './DashFooter';

const Dashboard = () => {
const [activeButton, setActiveButton] = useState('instructors');
const handleButtonClick = (button) => {
setActiveButton(button);
};

return (
<div>

<Sidebar />

<div className='container'>
<div className="data">
    {/* {<input type='text' id='search' ></input>} */}
<div className='slider'>
<button className={activeButton === 'instructors' ? 'active' : ''} onClick={() => handleButtonClick('instructors')}>Current Instructors</button>
<button className={activeButton === 'trainees' ? 'active' : ''} onClick={() => handleButtonClick('trainees')}>Current Trainees</button>
</div>
{activeButton === 'instructors' && <Instructors />}
{activeButton === 'trainees' && <Trainee />}
</div>
</div>
<DashFooter/>




</div>
)
}

export default Dashboard


