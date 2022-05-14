import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import LaunchCard from '../../Components/LaunchCard'
import './Launches.css'

const PastLaunches = () => {

    const [past, setPast] = useState([])
    const [pagenum, setPagenum] = useState(0)
    const [newData, setNewData] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.spacexdata.com/v5/launches/past`)
        // console.log(data.splice(pagenum, pagenum + 10))
        // const newdata = []
        // data.forEach(element => {
        //     newdata.push(element)
        //     setPast(newdata)
        // })
        // const newData = [...past, ...data.splice(pagenum, pagenum + 10)]
        // setPast(newData)
        // const newdata = data.splice(pagenum, pagenum + 10)
        // setPast(prevData => [...prevData, ...newdata])
        const data1 = data.slice(pagenum, pagenum + 10)
        setPast(data)
        setNewData(data1)
        setPagenum(pagenum + 10)
    }



    const handleScroll = async (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
        // console.log('scrollTop', scrollTop)
        // console.log('scrollHeight', scrollHeight)
        // console.log('clientHeight', clientHeight)
        if (scrollTop + clientHeight >= scrollHeight) {
            const data1 = await past.slice(pagenum, pagenum + 10)
            setNewData(prevData => [...prevData, ...data1])
            setPagenum(pagenum + 10)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <div onScroll={handleScroll} className='launchDiv'>
                <h1>Past Launches</h1>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {
                        newData && newData.map((element, index) => {
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
        </>
    )
}

export default PastLaunches