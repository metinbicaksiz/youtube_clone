import React from 'react';
import {useSelector} from "react-redux";

const SideBar = () => {
    const isOpen = useSelector(state => state.app.isMenuOpen);

    if (!isOpen) return null;
    return (
        <div className="p-2 shadow-lg w-48">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    );
};

export default SideBar;