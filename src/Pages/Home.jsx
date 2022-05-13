import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import { SpaceXDetails } from '../Config/api'

const Home = () => {

    const [companyData, setCompanyData] = useState()
    const fetchData = async () => {
        const { data } = await axios.get(SpaceXDetails)
        console.log(data)
        setCompanyData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <div style={{ color: 'white' }}>
                <h1>{companyData?.name}</h1>
                <h2>{companyData?.founder}</h2>
                <h3>{companyData?.founded}</h3>
                <h3>{companyData?.headquarters.address}</h3>
                <h3>{companyData?.summary}</h3>
                <h3>{companyData?.launch_sites}</h3>
                <h3>{companyData?.valuation}</h3>
            </div>

        </>
    )
}

export default Home