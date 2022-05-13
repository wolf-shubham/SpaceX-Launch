import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import LaunchCard from '../../Components/LaunchCard'

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
            <div style={{ color: 'white' }}>
                <h1>latest launches</h1>
                <div style={{
                    width: '100%',
                    height: '400px',
                    overflow: 'scroll',
                }}>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        {
                            newData && newData?.map((element, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                                        <div key={index}>
                                            <LaunchCard element={element} index={index} />
                                        </div>
                                    </Grid>
                                )
                            }
                            )
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default LatestLaunches