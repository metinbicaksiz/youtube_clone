import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SideBar = () => {
    const isOpen = useSelector(state => state.app.isMenuOpen);

    if (!isOpen) return null;
    return (
        <div className="p-2 mr-2 w-48">
            <ul>
                <li><Link to="/" className="hover:font-bold hover:text-lg">Home</Link></li>
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