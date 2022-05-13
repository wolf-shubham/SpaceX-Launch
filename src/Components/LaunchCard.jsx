import { Button } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const LaunchCard = ({ index, element }) => {
    // console.log("", element)
    const { details, date_utc } = element

    return (
        <>
            <div>
                <h2>LaunchCard {index + 1}</h2>
                <h3>{element.id}</h3>
                <img src={element.links.patch.small} alt="" />
                <h3>{element.name}</h3>
                <h3>{element.flight_number}</h3>
                <h3>{details ? details.slice(0, 50) + '...' : 'null'}</h3>
                <h3>{date_utc ? moment(element.date_utc).format("DD/MM/YYYY") : 'Date Not Found'}</h3>
                <Link to={`/launch/${element.id}`}>
                    <Button
                        variant="contained"
                    >Details</Button>
                </Link>
            </div>
        </>
    )
}

export default LaunchCard