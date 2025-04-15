import React from 'react'
import VideoFilter from './VideoFilter'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  return <>
        <div className=''>
          <VideoFilter />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', marginTop: '16px' }} className='box-border scroll-auto'>
            {Array.from({ length: 12 }).map((_, index) => (
              <VideoCard key={index} />
            ))}
          </div>
        </div>
  </>
}

export default VideoContainer
{/* <VideoFilter />
<VideoCard /> */}