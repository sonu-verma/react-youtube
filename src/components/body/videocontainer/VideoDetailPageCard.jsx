import React from 'react'
import { getTimeAgo } from '../../../utils/constants';
const VideoDetailPageCard = ({ info }) => {

  const { snippet } = info ? info : {};
  // console.log(info);
  return (
    <div className=' bg-gray-200 border border-gray-300 rounded-lg shadow-md p-2 m-4 box-border grid grid-flow-col'>
        <img src={snippet?.thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg h-22 w-full mb-1' />
        
        <div className=''>
            <div className='items-center gap-4 ml-2'>
                <h1 className='font-bold line-clamp-2 overflow-hidden'>
                  {snippet?.title}
                </h1>
                <h2 className='text-gray-600'>{snippet?.channelTitle}</h2>
                <h2 className='text-gray-600'>{snippet?.publishTime ? getTimeAgo(snippet.publishTime) : 'NA'}</h2>
            </div>
        </div>

    </div>
  )
}

export default VideoDetailPageCard
