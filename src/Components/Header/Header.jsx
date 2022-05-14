import React from 'react'
import './Header.css'
import logo from '../../Images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='headerlogo' >
                <img src={logo} alt='logo' style={{ width: '250px', marginLeft: '2rem' }} />
            </div>
            <div className='navLinks'>
                <Link to='/home' className='links'>Home</Link>
                <select name="cars" id="cars" value={'none'} onChange={(e) => navigate(e.target.value)} >
                    <option value="none" hidden>Launches</option>
                    <option value="/launches/upcoming" >Upcoming</option>
                    <option value="/launches/latest">Latest</option>
                    <option value="/launches/past">Past</option>
                </select>
                <Link to='/rockets' className='links'>Rockets</Link>
                <Link to='/astronauts' className='links'>Astronauts</Link>
            </div>
        </div>
    )
}

export default Header