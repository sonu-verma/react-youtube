 const YOUTUBE_API_KEY = "AIzaSyCiCalJDxHvQBevuHAYiKDiJOnlnl-I93A";

export const YOUTUBE_SEARCH_API_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&order=date&maxResults=10&q=`;

export const YOUTUBE_VIDEOS_API_KEY = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet&chart=mostPopular&maxResults=50`;

export const YOUTUBE_VIDEO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=`;

export const SUGGESTION_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const getTimeAgo = (dateString) =>  {
    const contentDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - contentDate;

    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysAgo > 0) {
        return `${daysAgo} days ago`;
    }

    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursAgo > 0) {
        return `${hoursAgo} hours ago`;
    }

    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    if (minutesAgo > 0) {
        return `${minutesAgo} minutes ago`;
    }

    return `Just now`;
}