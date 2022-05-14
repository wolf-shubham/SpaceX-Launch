import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import RocketsCard from '../Components/RocketsCard'
import './Pages.css'

const Rockets = () => {
    const [newData, setNewData] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/rockets`)
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
                {/* <h1>Rockets</h1> */}
                <div className='rocket_div'>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        {
                            newData && newData.map((element, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                                        <RocketsCard element={element} index={index} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Rockets