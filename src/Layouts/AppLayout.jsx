import React from 'react';
import { Outlet } from 'react-router';

const Applayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Applayout;