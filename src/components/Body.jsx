import React from 'react';
import SideBar from "./SideBar";
import {Outlet} from "react-router-dom";

const Body = () => {
    return (
        <div className="flex dark:bg-gray transition duration-200">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Body;