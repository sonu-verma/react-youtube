import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API_URL, YOUTUBE_VIDEO_API_URL } from '../../../utils/constants'
import { useSearchParams } from 'react-router-dom';
import VideoFilter from './VideoFilter';
import VideoDetailPageCard from './VideoDetailPageCard';
import { videoData } from '../../../utils/videoData';
const VideoDetailPage = ({videoId}) => {
    const [video, setVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoIdFromUrl = searchParams.get('v');
    // console.log(videoIdFromUrl);

    useEffect(()=> {
        const fetchData = async () => {
            // console.log("videoId", YOUTUBE_VIDEO_API_URL+videoIdFromUrl);
            const response = await fetch(YOUTUBE_VIDEO_API_URL+videoIdFromUrl)
            const data = await response.json()
            setVideo(data.items[0])
            // console.log(data.items[0])
        }
        fetchData()
    },[videoId]);


    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        const fetchVideos = async () => {
            try {
            const res = await fetch(`${YOUTUBE_SEARCH_API_URL}`);
            const json = await res.json();
            if(json?.error?.code == 403){ 
                console.log("403 error", videoData.items)
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

    return (
        <div className='p-2 m-4 box-border grid grid-flow-col'>
            <div className="basis-80">
                <div className='rounded-full'>
                    <iframe 
                    className='rounded-lg'
                    width="900" 
                    height="500" 
                    src={`https://www.youtube.com/embed/${video?.id}?si=XEAkJ9bmE6P9Zp5P`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen></iframe>
                </div>
                <div>
                    <h1 className='font-bold text-3xl py-2 my-4  line-clamp-2 overflow-hidden'>{video?.snippet?.title}</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <img src="https://yt3.ggpht.com/IZPkATp1E7hxHlLWSCR0mo7dQRgAiV2VV-FBC_F5CUn58SnuzlnKHYG-QhQc105E-g3hXuWmxQ=s88-c-k-c0x00ffffff-no-rj" alt="channel" className='rounded-full w-10 h-10' />
                    
                    <div>
                        <h1 className='font-bold  line-clamp-2 overflow-hidden'>
                            {video?.snippet?.channelTitle}
                        </h1>
                        <p>71.6M subscribers</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <VideoFilter />
                    {
                        videos?.map((video, index) => <VideoDetailPageCard info={video} key={index} />)
                    }
                </div>
            </div>
        </div>
    )

}



export default VideoDetailPage
    