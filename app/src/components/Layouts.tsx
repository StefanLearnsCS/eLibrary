import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <div>
            <p> This is our layout!!!! </p>
            <Link to={'/'}> Home </Link>
            <Link to={'/work'}> Work </Link>
            <Outlet />
        </div>
    );
};