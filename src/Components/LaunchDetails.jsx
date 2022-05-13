import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Button } from '@mui/material'

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
        <div>
            <h2>{launch.name}</h2>
            <h3>Payload : {payloadData.name}</h3>
            <h3>Payload Orbit : {payloadData.regime}</h3>
            <h2>{launch?.flight_number}</h2>
            <img src={links?.patch.small} alt="" />
            <h3>{details ? details : 'Launch Details Not Available.'}</h3>
            <h3>success : {success ? 'true' : 'false'}</h3>
            <h3>rocket id : {launch.rocket}</h3>
            <h3>{rocketDetails.name}</h3>
            <h3>{date_utc ? moment(date_utc).format("DD/MM/YYYY") : 'Date Not Found'}</h3>
            <iframe src={`https://www.youtube.com/embed/${links?.youtube_id}`} frameBorder='0' title={launch.name}></iframe><br />
            <Button variant='contained'>Article</Button>
            <Button variant='contained'>Wikipedia</Button>
        </div>
    )
}

export default LaunchDetails