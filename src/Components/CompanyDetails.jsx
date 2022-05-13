import React from 'react'

const CompanyDetails = ({ companyData }) => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '60px', letterSpacing: '2px', marginBottom: '1.5rem' }}>{companyData?.name}</h1>
                <h2>{companyData?.founder}</h2>
                <h3>{companyData?.founded}</h3>
                <h3>{companyData?.headquarters.address}, {companyData?.headquarters.city}, {companyData?.headquarters.state}</h3>
                <h3 style={{ margin: '1rem 0' }}>{companyData?.summary}</h3>
                <h3>Lunch Sites : {companyData?.launch_sites}</h3>
                <h3>launch Vehicles : {companyData?.vehicles}</h3>
                <h3>Valuation : ${companyData?.valuation.toString().slice(0, 2)} Billion</h3>
            </div>
        </>
    )
}

export default CompanyDetails