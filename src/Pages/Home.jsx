import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Buttons from '../Components/Buttons'
import CompanyDetails from '../Components/CompanyDetails'
import Header from '../Components/Header/Header'
import { SpaceXDetails } from '../Config/api'
import rocpic from '../Images/rocl.png'
import './Pages.css'

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
            <div className='homeDiv'>
                <div>
                    <img src={rocpic} alt='pic' style={{ height: '87.5vh' }} />
                </div>
                <div className='homecontainer'>
                    <CompanyDetails companyData={companyData} />
                    <Buttons companyData={companyData} />
                </div>
            </div>

        </>
    )
}

export default Home