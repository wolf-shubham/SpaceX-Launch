import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header/Header'
import LaunchDetails from '../Components/LaunchDetails'

const LaunchDetailsPage = () => {

    const params = useParams()

    const [launch, setLaunch] = React.useState({})

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v5/launches/${params.id}`)
        setLaunch(data)
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <div style={{ color: 'white' }}>
                <h1>LaunchDetails</h1>
                {launch && <LaunchDetails launch={launch} />}
            </div>
        </>
    )
}

export default LaunchDetailsPage