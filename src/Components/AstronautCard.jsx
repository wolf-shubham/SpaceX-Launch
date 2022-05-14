import React from 'react'

const AstronautCard = ({ element }) => {
    const capsStatus = (element?.status).charAt(0).toUpperCase() + (element?.status).slice(1)
    return (
        <>
            <div style={{ marginTop: '1.5rem' }}>
                <img src={element.image} alt={element.name} style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                }} />
                <h2>{element.name}</h2>
                <h3>{element.agency}</h3>
                <h3 style={{ color: `${capsStatus === 'Active' ? 'green' : 'red'}` }}>{capsStatus}</h3>
            </div>
        </>
    )
}

export default AstronautCard