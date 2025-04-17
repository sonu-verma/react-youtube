import React from 'react'
import { getTimeAgo } from '../../../utils/constants';
const VideoCard = ({ info }) => {

  const { snippet } = info ? info : {};
  // console.log(info);
  return (
    <div className='h-[320px] w-[390px] bg-gray-200 border border-gray-300 rounded-lg shadow-md p-2 m-4 box-border'>
        <img src={snippet?.thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg w-full' />
        
        <div className=''>
            <div className='flex items-center gap-4'>
                <img src="https://yt3.ggpht.com/ytc/AIdro_k8mjZYNNuDytBk6XYbozw1fptxdSqGCuGgN-paEsNG6XZ1=s68-c-k-c0x00ffffff-no-rj" alt="channel" className='rounded-full w-10 h-10' />
                <h1 className='font-bold line-clamp-2 overflow-hidden'>
                  {snippet?.title}
                </h1>
            </div>
            <div className='ml-14'>
                <h2 className='text-gray-600'>{snippet?.channelTitle}</h2>
                <h2 className='text-gray-600'>{snippet?.publishTime ? getTimeAgo(snippet.publishTime) : 'NA'}</h2>
            </div>
        </div>

    </div>
  )
}

export default VideoCard
