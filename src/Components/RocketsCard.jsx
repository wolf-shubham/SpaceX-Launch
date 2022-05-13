import React from 'react'
import moment from 'moment'

const RocketsCard = ({ element }) => {
    return (
        <>
            <h2>{element.name}</h2>
            <img src={element.flicker_images} alt={element.name} style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
            }} />
            <h3>{element.agency}</h3>
            <h3>Status : {element.status}</h3>
            <h3>{element.description}</h3>
            <h3>{element.country}</h3>
            <h3>First Flight : {moment(element.first_flight).format('DD-MM-YYYY')}</h3>
            <h3>{element.active ? "Active" : "Not Active"}</h3>
            <h3>Success Rate : {element.success_rate_pct}%</h3>
        </>
    )
}

export default RocketsCard