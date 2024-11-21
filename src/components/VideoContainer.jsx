import React from 'react';
import {useSelector} from "react-redux";
import useGetPopularVideos from "../hooks/useGetPopularVideos";
import VideoCard, { RedBorderVideoCard} from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {
    const popularVideos = useSelector(state => state.video.popularVideos);

    useGetPopularVideos();
    console.log(popularVideos);

    return (
        <div className="flex flex-wrap">
            {popularVideos[0] && <RedBorderVideoCard snippet={popularVideos[0]?.snippet} stats={popularVideos[0]?.statistics}/>}
            {
                popularVideos &&
                popularVideos.map((video) => (
                   <Link key={video.id} to={"/watch?v=" + video.id}>
                       <VideoCard snippet={video?.snippet} stats={video.statistics}/>
                   </Link>
                ))
            }
        </div>
    );
};

export default VideoContainer;