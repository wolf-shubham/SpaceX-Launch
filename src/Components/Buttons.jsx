import { Button } from '@mui/material'
import React from 'react'

const Buttons = ({ companyData }) => {
    return (
        <>
            <div style={{ width: '60%', display: 'flex', justifyContent: 'space-around', margin: '2rem 0 1rem' }}>
                <a href={companyData?.links.website} target='_blank' rel="noreferrer">
                    <Button variant='outlined' style={{ color: 'goldenrod' }}>Website</Button>
                </a>
                <a href={companyData?.links.flickr} target='_blank' rel="noreferrer">
                    <Button variant='outlined' style={{ color: 'goldenrod' }}>Flickr</Button>
                </a>
                <a href={companyData?.links.twitter} target='_blank' rel="noreferrer">
                    <Button variant='outlined' style={{ color: 'goldenrod' }}>Twitter</Button>
                </a>
            </div>
        </>
    )
}

export default Buttons