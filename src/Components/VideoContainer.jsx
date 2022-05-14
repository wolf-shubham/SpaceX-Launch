import { Button } from '@mui/material'
import React from 'react'
import './Components.css'

const VideoContainer = ({ links, launch }) => {

    return (
        <div className='videoContainerDiv'>
            {
                links && links.youtube_id ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0" title={launch.name}></iframe> : <h2>Video Not Available</h2>
            }
            <div className='videoConatainerButtons'>
                {
                    links && links.article === null ? null : <Button variant="outlined" onClick={() => links.article ? window.open(links.article, '_blank') : null}>
                        Article
                    </Button>
                }
                {
                    links && links.wikipedia === null ? null : <Button variant="outlined" onClick={() => links.wikipedia ? window.open(links.wikipedia, '_blank') : null}>
                        Wikipedia
                    </Button>
                }
            </div>

        </div>
    )
}

export default VideoContainer