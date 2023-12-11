import React from 'react'
import { useParams } from 'react-router-dom'

const VideoPlayer = () => {

    const {id}= useParams();
    console.log(id)

  return (
    <div>
        <iframe className='w-screen h-screen' src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoPlayer