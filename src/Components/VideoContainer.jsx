import { Button } from '@mui/material'
import React from 'react'
import './Components.css'

const VideoContainer = ({ links, launch }) => {

    return (
        <div className='videoContainerDiv'>
            {
                links && links.youtube_id ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0" title={launch.name}></iframe> : <h2>Video Not Available</h2>
            }
            <Button variant='outlined'>Article</Button>
            <Button variant='contained'>Wikipedia</Button>
        </div>
    )
}

export default VideoContainer