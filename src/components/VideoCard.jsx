import React from 'react';

const VideoCard = ({stats, snippet}) => {
    const {thumbnails, title, channelTitle} = snippet;
    const {viewCount, likeCount} = stats;
    return (
        <div className="p-2 m-2 w-80 shadow-lg rounded-2xl dark:hover:bg-gandalf hover:scale-105 dark:hover:border-2">
            <img
                className="rounded-lg mt-1"
                src={thumbnails?.medium.url}
                alt="thumbnail"
            />
            <h1 className="font-bold py-2">{title}</h1>
            <h2 className="font-medium">{channelTitle}</h2>
            <p>View: {viewCount}</p>
            <p>Likes: {likeCount}</p>
        </div>
    );
};

export const RedBorderVideoCard = ({stats, snippet}) => {
    return <div className="m-1 border-4 border-red-900 rounded-2xl"><VideoCard snippet={snippet} stats={stats}/></div>
}

export default VideoCard;