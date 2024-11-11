import React from 'react';

const Header = () => {
    return (
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div className="flex col-span-3 gap-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    className="h-10"
                     alt="hamburger menu"
                />
                <img
                    src="https://w7.pngwing.com/pngs/71/189/png-transparent-vidcon-us-youtube-logo-advertising-television-youtube-television-text-trademark-thumbnail.png"
                    className="h-10"
                     alt="logo"
                />
            </div>
            <div className="flex col-span-7">
                <input type="text"/>
                <button className="text-blue-500">Search</button>
            </div>
            <div className="flex col-span-2">
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