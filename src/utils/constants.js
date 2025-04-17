 const YOUTUBE_API_KEY = "AIzaSyA-OyJkiWDYDq79_pILPVkr0biGMQQhYeE";

export const YOUTUBE_SEARCH_API_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&order=date&maxResults=10&q=`;

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