import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import rocket from '../../Images/rocket2.png'
import './Startup.css'

const Startup = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 5000)
        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <>
            <div className='rocket'>
                <img src={rocket} alt='rocket' />
            </div>
        </>
    )
}

export default Startup