import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import LaunchCard from '../../Components/LaunchCard'
import './Launches.css'

const LatestLaunches = () => {
    const [newData, setNewData] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v5/launches/latest`)
        console.log(data)
        setNewData(data)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <div className='launchDiv'>
                <h1>Latest launches</h1>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}  >
                        <div >
                            <LaunchCard element={newData} index={0} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default LatestLaunches