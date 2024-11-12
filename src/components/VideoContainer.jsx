import React from 'react';
import {useSelector} from "react-redux";
import useGetPopularVideos from "../hooks/useGetPopularVideos";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {
    const popularVideos = useSelector(state => state.video.popularVideos);

    useGetPopularVideos();

    return (
        <div className="flex flex-wrap">
            {
                popularVideos.map((video, index) => (
                   <Link to={"/watch?v=" + video.id}>
                       <VideoCard  key={index}  snippet={video?.snippet} stats={video.statistics}/>
                   </Link>
                ))
            }
        </div>
    );
};

export default VideoContainer;