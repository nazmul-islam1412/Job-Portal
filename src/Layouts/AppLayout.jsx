import React from 'react';
import { Outlet } from 'react-router';

const Applayout = () => {
    return (
        <div>
            <h1>AppLAYOUT</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Applayout;