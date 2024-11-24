import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SideBar = () => {
    const isOpen = useSelector(state => state.app.isMenuOpen);

    if (!isOpen) return null;
    return (
        <div className="p-2 ml-3 mr-4 w-48 dark:border-r-2 dark:border-gandalf dark:rounded-lg dark:text-snowman">
            <ul>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Home</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Shorts</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Live</Link></li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Music</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Sports</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Gaming</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Movies</Link></li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Music</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Sports</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Gaming</Link></li>
                <li><Link to="/youtube" className="hover:font-bold hover:text-lg">Movies</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;