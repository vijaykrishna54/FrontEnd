import React , {useState} from 'react';
import {
  FaBars,
  FaRegChartBar,
  FaTh,
  FaRegArrowAltCircleRight,
  FaRegSun,
  FaUserEdit,FaUserGraduate,FaSignOutAlt

} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Sidebar  ({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen(!isOpen);
  const menuItem = [
    {
      path : "/dashboard",
      name : "Dashboard",
      icon : <FaTh/>
    },
    {
      path : "/manageinstructor",
      name : "Manage Instructors",
      icon : <FaUserGraduate/>
    },
    {
      path : "/managetrainees",
      name : "Manage Trainees",
      icon : <FaUserEdit/>
    },
    {
      path : "/statistics",
      name : "Statistics",
      icon : <FaRegChartBar/>
    },
    {
      path : "/settings",
      name : "Settings",
      icon : <FaRegSun/>
    },
    {
      path : "/logout",
      name : "Logout",
      icon : <FaSignOutAlt/>
    },
    
  ]
  return (
    <div>
      <div style={{width: isOpen ? "310px" : "80px"}}className='sidebar'>
        <div className='top_section'> 
          <h1  style={{display: isOpen ? "flex" : "none"}} className='logo'><img src="/images/Logo.png" className='sidebarLogo' alt="sportify logo"/></h1>
          <div style={{marginLeft: isOpen ? "50px" : "20px"}} className='bars'>
              <FaBars onClick={toggle}/>
            </div>
          </div>
          {
            menuItem.map((item, index)=>(
              <NavLink to = {item.path} key ={index} className="link" activeclassName="active">
                <div className='icon'>{item.icon}</div>
                <div  style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
              </NavLink>
            ))
          }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
