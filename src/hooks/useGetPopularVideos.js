import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {YOUTUBE_VIDEO_APIS} from "../utils/constants";
import {getPopularVideos} from "../slices/videoSlice";

const useGetPopularVideos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const videos = await fetch(YOUTUBE_VIDEO_APIS);
        const json = await videos.json();
        dispatch(getPopularVideos(json.items));
    }
}
export default useGetPopularVideos;