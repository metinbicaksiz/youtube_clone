import React from 'react';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../slices/appSlice";

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div className="flex col-span-1 gap-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    className="h-8  cursor-pointer"
                     alt="hamburger menu"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        className="h-8"
                         alt="logo"
                    />
                </a>
            </div>
            <div className="flex col-span-10 items-center">
                <input
                    className="w-1/2 rounded-l-full border-2 border-amber-400 p-2"
                    type="text"
                />
                <button className="text-blue-500 border-2 border-amber-400 rounded-r-full p-2 bg-gray-100">Search</button>
            </div>
            <div className="flex col-span-1">
                <img
                    className="h-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Header;