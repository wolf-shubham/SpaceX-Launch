import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Components.css'
import VideoContainer from './VideoContainer'
import LaunchData from './LaunchData'
import './Components.css'

const LaunchDetails = ({ launch }) => {
    // console.log("", launch.links?.webcast)
    const { details, date_utc, rocket, links, success, payloads } = launch
    const payloadid = payloads && payloads[0]

    const [rocketDetails, setRocketDetails] = useState({})
    const [payloadData, setPayloadData] = useState({})

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocket}`)
        setRocketDetails(data)
    }

    const fetchPayload = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/payloads/${payloadid}`)
        setPayloadData(data)
    }


    useEffect(() => {
        fetchData()
        fetchPayload()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rocket, payloadid])
    return (
        <div className='launchDetailsDiv'>
            <LaunchData launch={launch} payloadData={payloadData} links={links} details={details} success={success} rocketDetails={rocketDetails} date_utc={date_utc} />
            <VideoContainer links={links} launch={launch} />
        </div>
    )
}

export default LaunchDetails