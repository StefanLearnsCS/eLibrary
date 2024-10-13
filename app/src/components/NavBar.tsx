import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><Link to={'/'}> My Books </Link></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}> My Books </Link></li>
                    <li><Link to={'/work'}> New Book </Link></li>
                </ul>
            </div>
        </div>
    )
}