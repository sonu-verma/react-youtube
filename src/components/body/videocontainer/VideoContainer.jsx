import React, { useEffect, useState } from 'react'
import VideoFilter from './VideoFilter'
import VideoCard from './VideoCard'
import { YOUTUBE_SEARCH_API_URL } from '../../../utils/constants';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchVideos()
  },[]);


  const fetchVideos = async () => {
    const responses = await fetch(YOUTUBE_SEARCH_API_URL + "cricket");
    const json = await responses.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  return <>
        <div className=''>
          <VideoFilter />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', marginTop: '16px' }} className='box-border scroll-auto'>
               {
                  videos?.map( (video) => <VideoCard info = {video} key={video.id.videoId} />)
               } 
              
          </div>
        </div>
  </>
}

export default VideoContainer
{/* <VideoFilter />
<VideoCard /> */}