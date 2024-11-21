import React from 'react';
import SideBar from "./SideBar";
import {Outlet} from "react-router-dom";

const Body = () => {
    return (
        <div className="flex dark:bg-clooney">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Body;