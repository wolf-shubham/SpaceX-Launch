import React from 'react'
import moment from 'moment'
import './Components.css'

const LaunchData = ({ launch, payloadData, links, details, success, rocketDetails, date_utc }) => {
    return (
        <div className='launchDataDiv'>
            <h2>Flight Number : {launch?.flight_number}</h2>
            <img src={links?.patch.small} alt={launch.name} />
            {
                !payloadData.length === 0 ? <div>
                    <h3>Payload Name : {payloadData?.name}</h3>
                    <h3>Payload Orbit : {payloadData.regime}</h3>
                </div> : null
            }
            <h2>{launch.name}</h2>
            <h3>{details ? details : 'Launch Details Not Available.'}</h3>
            {
                success === null
                    ? <h2 style={{ color: 'goldenrod' }}>Upcoming Launch</h2>
                    : <h2 style={{ color: `${success === true ? 'green' : 'red'}` }}>{success ? 'Success' : 'Failure'}</h2>
            }
            <h3>Rocket : {rocketDetails.name}</h3>
            <h3>Launch Date : {date_utc ? moment(date_utc).format("DD/MM/YYYY") : 'Date Not Found'}</h3>
        </div>
    )
}

export default LaunchData