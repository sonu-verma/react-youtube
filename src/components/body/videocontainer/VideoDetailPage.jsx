import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API_URL, YOUTUBE_VIDEO_API_URL } from '../../../utils/constants'
import { useSearchParams } from 'react-router-dom';
import VideoFilter from './VideoFilter';
import VideoDetailPageCard from './VideoDetailPageCard';
import { videoData } from '../../../utils/videoData';
import Comment from './Comment';
import LiveChat from '../chat/LiveChat';
const VideoDetailPage = ({videoId}) => {
    const [video, setVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoIdFromUrl = searchParams.get('v');
    // console.log(videoIdFromUrl);

    const commentsData = [
        {
            id: 1,
            author: "John Doe",
            text: "This is a great video!",
            replies: [
                {
                    id: 2,
                    author: "Jane Smith" ,
                    text: "I agree! Very informative.",
                    replies: [
                        {
                            id: 3,
                            author: "Alice Johnson",
                            text: "Absolutely, learned a lot from this.",
                            replies: [
                               
                            ]
                        }
                    ]
                }, {
                    id: 4,
                    author: "Bob Brown",
                    text: "Same here, really helpful content.",
                    replies: [
                        {
                            id: 21,
                            author: "Alice Johnson",
                            text: "Absolutely, learned a lot from this.",
                            replies: [
                                {
                                    id: 22,
                                    author: "Alice D",
                                    text: "Absolutely, learned a lot from this.",
                                    replies: [
                                        {
                                            id: 23,
                                            author: "Alice E",
                                            text: "Absolutely, learned a lot from this.",
                                            replies: [
                                                {
                                                    id: 25,
                                                    author: "Alice F",
                                                    text: "Absolutely, learned a lot from this.",
                                                    replies: [
                                                        {
                                                            id: 26,
                                                            author: "Alice G",
                                                            text: "Absolutely, learned a lot from this.",
                                                            replies: [
                                                                {
                                                                    id: 27,
                                                                    author: "Alice H",
                                                                    text: "Absolutely, learned a lot from this.",
                                                                    replies: [
                                                                        {
                                                                            id: 28,
                                                                            author: "Alice I",
                                                                            text: "Absolutely, learned a lot from this.",
                                                                            replies: [
                                                                               
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
        },
        {
            id: 5,
            author: "Charlie Davis",
            text: "Thanks for sharing this!",
            replies: [
                {
                    id: 6,
                    author: "Emily Wilson",
                    text: "You're welcome! Glad you liked it.",
                    replies: [
                        {
                            id: 7,
                            author: "Michael Scott",
                            text: "This is exactly what I needed!",
                            replies: [
                                {
                                    id: 8,
                                    author: "Pam Beesly",
                                    text: "Happy to hear that!",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            author: "Angela Martin",
            text: "Very well explained!",
            replies: [
                {
                    id: 10,
                    author: "Dwight Schrute",
                    text: "Indeed, very detailed.",
                    replies: [
                        {
                            id: 11,
                            author: "Jim Halpert",
                            text: "Couldn't agree more!",
                            replies: [
                                {
                                    id: 12,
                                    author: "Stanley Hudson",
                                    text: "Great content overall.",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 13,
            author: "Oscar Martinez",
            text: "This clarified a lot of my doubts.",
            replies: [
                {
                    id: 14,
                    author: "Kevin Malone",
                    text: "Same here, very helpful.",
                    replies: [
                        {
                            id: 15,
                            author: "Kelly Kapoor",
                            text: "Totally agree!",
                            replies: [
                                {
                                    id: 16,
                                    author: "Ryan Howard",
                                    text: "This is gold!",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 17,
            author: "Creed Bratton",
            text: "Amazing video, keep it up!",
            replies: [
                {
                    id: 18,
                    author: "Meredith Palmer",
                    text: "Absolutely, great work!",
                    replies: [
                        {
                            id: 19,
                            author: "Phyllis Vance",
                            text: "Looking forward to more content like this.",
                            replies: [
                                {
                                    id: 20,
                                    author: "Toby Flenderson",
                                    text: "Same here, very inspiring.",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

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


    const renderComments = (comments) => {
        return comments.map((comment) => (
            <div key={comment.id} className="my-4">
                <Comment comment={comment} />
                {comment.replies && comment.replies.length > 0 && (
                    <div className="pl-5 border-l-2 border-gray-300">
                        {renderComments(comment.replies)}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className='p-2 m-4 box-border grid grid-flow-col'>
            <div className="basis-80">
                <div className='rounded-full'>
                    <iframe 
                    className='rounded-lg'
                    width="900" 
                    height="500" 
                    src={`https://www.youtube.com/embed/${videoIdFromUrl}?si=XEAkJ9bmE6P9Zp5P`} 
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
                <div>
                    <h1 className='font-bold text-2xl py-5 '>Comments</h1>
                    {renderComments(commentsData)}
                </div>
            </div>
            <div className=''>
                <LiveChat />
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
    