import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout: React.FC = () => {
    return (
        <div className='mx-auto max-w-4xl'>
            <NavBar />
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};