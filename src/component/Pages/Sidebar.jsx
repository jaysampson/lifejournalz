import React from 'react'
import { FaAngleLeft, FaAngleRight, FaChartBar, FaThLarge, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { NavLink  } from 'react-router-dom';
import "../../styles/Sidebar.css";


const ICON_SIZE = 20;
const Sidebar = ({visible, show} ) => {
  return (
    <>
    <div className='mobile-nav'>
        <button className='mobile-nav-btn'
        onClick={() => show(!visible)}>
        <FaBars size={24} />
        </button>

    </div>
    <nav className={visible ? '' : 'navbar'}> 
       <button className='nav-btn'
       type='button'
       onClick={()=>show(!visible)}
       >
        {
            visible ? <FaAngleLeft size={30} /> : <FaAngleRight size={30} />
        }

       </button>
       <div>
        <NavLink to='/' className='logo'>
            <img 
            src={require('../../Images/Logo.png')} alt={'logocheck'} />
        </NavLink>
       </div>
       <div className='links nav-top'>
           <NavLink to='/' className='nav-link'>
            <FaAngleRight size={ICON_SIZE} />
            <span>Dashoard</span>
           </NavLink>
           <NavLink to='/pricing' className='nav-link'>
            <FaChartBar size={ICON_SIZE} />
            <span>Pricing</span>
           </NavLink>
           <NavLink to='/about' className='nav-link'>
            <FaThLarge size={ICON_SIZE} />
            <span>About</span>
           </NavLink>
       </div>
       <div className='links'>
        <NavLink to='/settings'>
            <FaCog size={ICON_SIZE} />
            <span>settings</span>
        </NavLink>
        <NavLink to='/signin'>
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
        </NavLink>

       </div>
    </nav>

    </>
  )
}

export default Sidebar