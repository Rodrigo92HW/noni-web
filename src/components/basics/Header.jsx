import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className={`header ${isActive('/Main') ? 'active' : ''}`}>
            <NavLink to='/noni-web'>Home</NavLink>
            <NavLink to='/Games'>Games</NavLink>
            <NavLink to='/Team'>Team</NavLink>
            <NavLink to='/Info'>Info</NavLink>
        </div>
    )
}

export default Header;