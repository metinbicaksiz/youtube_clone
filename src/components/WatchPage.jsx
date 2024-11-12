import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu } from "../slices/appSlice";
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {
    const [params] = useSearchParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="px-5 py-3">
            <iframe
                    className="rounded-lg"
                    width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + params.get("v")}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
            </iframe>
        </div>
    );
};

export default WatchPage;