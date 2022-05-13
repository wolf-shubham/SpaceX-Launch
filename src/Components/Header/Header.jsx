import React from 'react'
import './Header.css'
import logo from '../../Images/logo2.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <div className='headerlogo' >
                <img src={logo} alt='logo' style={{ width: '250px', marginLeft: '2rem' }} />
            </div>
            <div className='navLinks'>
                <Link to='/home' className='links'>Home</Link>
                <Link to='/launches/upcoming' className='links'>Launches</Link>
                <Link to='/rockets' className='links'>Rockets</Link>
                <Link to='/astronauts' className='links'>Astronauts</Link>
            </div>
        </div>
    )
}

export default Header