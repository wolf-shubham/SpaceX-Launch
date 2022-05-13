import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'

const List = () => {
    const [past, setPast] = useState([])
    const [pagenum, setPagenum] = useState(1)

    const fetchData = async () => {
        const options = {
            "query": {
                // "upcoming": true
            },
            "options": {
                limit: 10,
                page: pagenum,
                populate: ['rocket']
            }
        }
        const { data } = await axios.post(`https://api.spacexdata.com/v5/launches/query`, options)
        console.log(data)
        const newdata = data.docs
        setPast(prevData => [...prevData, ...newdata])

    }

    // const fetchData = async () => {
    //     const { data } = await axios.get(`https://api.spacexdata.com/v5/launches/past`)
    //     console.log(data)
    //     const newdata = []
    //     data.forEach(element => {
    //         newdata.push(element)
    //         setPast(newdata)
    //     })
    // }

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
        // console.log('scrollTop', scrollTop)
        // console.log('scrollHeight', scrollHeight)
        // console.log('clientHeight', clientHeight)
        if (scrollTop + clientHeight >= scrollHeight) {
            setPagenum(pagenum + 1)
            // fetchData()
        }
    }


    useEffect(() => {
        fetchData()
    }, [pagenum])
    return (
        <>
            <Header />
            <div
                style={{
                    color: 'blue'
                }}
            >
                <h1>launches</h1>
                <div onScroll={handleScroll} style={{
                    width: '500px',
                    height: '500px',
                    overflow: 'scroll'
                }}>
                    {
                        past?.map((element, index) => {
                            return (
                                <div key={index}>
                                    <h1>{element.id}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default List