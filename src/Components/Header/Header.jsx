import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 style={{ width: '30%' }}>SpaceX</h1>
            <div className='navLinks'>
                <h2>Home</h2>
                <h2>Launches</h2>
                <h2>Rockets</h2>
                <h2>Astronauts</h2>
            </div>
        </div>
    )
}

export default Header