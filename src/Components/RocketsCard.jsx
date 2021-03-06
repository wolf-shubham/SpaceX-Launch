import React from 'react'
import moment from 'moment'
import './Components.css'

const RocketsCard = ({ element }) => {
    const { flickr_images } = element
    return (
        <>
            <div className='rocketCardDiv'>
                <h2>{element.name}</h2>
                <img src={flickr_images[0]} alt={element.name} style={{
                    width: '300px',
                    height: '200px',
                    margin: '10px 0'
                }} />
                <h3>{element.agency}</h3>
                <h3>{element.description}</h3>
                <h3>First Flight : {moment(element.first_flight).format('DD-MM-YYYY')}</h3>
                <h3 style={{ color: `${element.active === true ? 'green' : 'red'}` }}>{element.active ? "Active" : "Not Active"}</h3>
                <h3>{element.country}</h3>
                <h3>Success Rate : {element.success_rate_pct}%</h3>
            </div>
        </>
    )
}

export default RocketsCard