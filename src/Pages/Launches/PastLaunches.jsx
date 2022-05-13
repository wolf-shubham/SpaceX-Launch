import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'

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
        // setNewData(data.splice(pagenum, pagenum + 10))
        setPast(data)
        setNewData(data1)
        setPagenum(pagenum + 10)
        // setNewData(data.splice(pagenum, pagenum + 10))
    }



    const handleScroll = async (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
        // console.log('scrollTop', scrollTop)
        // console.log('scrollHeight', scrollHeight)
        // console.log('clientHeight', clientHeight)
        if (scrollTop + clientHeight >= scrollHeight) {
            // setPagenum(pagenum + 10)
            // setPagenum(pagenum + 10)

            const data1 = await past.slice(pagenum, pagenum + 10)
            console.log(data1)
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
            <div style={{ color: 'white' }}>
                <h1>Past Launches</h1>
                <div onScroll={handleScroll} style={{
                    width: '300px',
                    height: '200px',
                    overflow: 'scroll',
                    marginLeft: '2rem'
                }}>
                    {
                        newData?.map((element, index) => {
                            return (
                                <div key={index}>
                                    <h3>{element.id}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PastLaunches