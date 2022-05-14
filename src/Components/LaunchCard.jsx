import { Button } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import imageLogo from '../Images/imglogo.png'
import './Components.css'

const LaunchCard = ({ index, element }) => {
    // console.log("", element)
    const { details, date_utc } = element

    return (
        <>
            <div className='launchCardDiv'>
                <img src={element?.links?.patch.small || imageLogo} alt="" style={{ width: '250px', borderRadius: '50%' }} />
                <h3>{element.name}</h3>
                <h3>Flight Number : {element.flight_number}</h3>
                <h3>{details ? details.slice(0, 50) + '...' : 'Details Not Available'}</h3>
                <h3>Launch Date : {date_utc ? moment(element.date_utc).format("DD/MM/YYYY") : 'Date Not Found'}</h3>
                <Link to={`/launch/${element.id}`}>
                    <Button
                        variant="outlined"
                        style={{ marginTop: '10px', fontWeight: '790', letterSpacing: '1px', color: 'goldenrod' }}
                    >launch details</Button>
                </Link>
            </div>
        </>
    )
}

export default LaunchCard