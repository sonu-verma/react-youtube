import React, { useEffect, useState } from 'react'
import VideoFilter from './VideoFilter'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API_KEY } from '../../../utils/constants';
import { videoData } from '../../../utils/videoData';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{

    const fetchVideos = async () => {
      try {
        const res = await fetch(`${YOUTUBE_VIDEOS_API_KEY}`);
        const json = await res.json();
        if(json?.error?.code == 403){ 
          setVideos(videoData.items)
          return;
        }
        setVideos(json.items || []);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("finally block executed");
      }
    };

    fetchVideos()
  },[]);


  // const fetchVideos = async () => {
   
  //   try{
  //     const responses = await fetch(YOUTUBE_SEARCH_API_URL + "cricket");
  //     const json = await responses.json();
  //     setVideos(json.items);
  //   }catch(err){
  //     console.log(err);
  //   }
    
  // }

  // console.log(videoData);
  return <>
        <div className=''>
          <VideoFilter />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', marginTop: '16px' }} className='box-border scroll-auto'>
               {
                  videos?.map((video, index) => (
                    <Link to={`/watch?v=${video?.id}`} key={video?.id || index}>
                    <VideoCard 
                      info={video} 
                      key={video?.id?.videoId || index} 
                    />
                    </Link>
                  ))
               } 
              
          </div>
        </div>
  </>
}

export default VideoContainer
{/* <VideoFilter />
<VideoCard /> */}