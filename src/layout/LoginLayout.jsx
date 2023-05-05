import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Sheard/NavgationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;