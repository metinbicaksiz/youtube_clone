import React from 'react';

const VideoCard = ({stats, snippet}) => {
    const {thumbnails, title, channelTitle} = snippet;
    const {viewCount, likeCount} = stats;
    return (
        <div className="p-2 m-2 w-64 shadow-lg rounded-2xl hover:border-2 border-amber-500">
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

export default VideoCard;