import axios from 'axios'
import React, { useEffect } from 'react'

const List = () => {

    const fetchData = async () => {
        const options = {
            "query": {},
            "options": {
                limit: 10,
                populate: ['rocket']
            }
        }
        const { data } = await axios.post(`https://api.spacexdata.com/v5/launches/query`, options)
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div
            style={{
                display: 'flex',
            }}
        >List</div>
    )
}

export default List