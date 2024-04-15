import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const menuOptions = [
    {
        id: 1,
        label: "Account",
        route: "/account" // placeholder route
    },
    {
        id: 2,
        label: "Options",
        route: "/options" // placeholder route
    },
    {
        id: 3,
        label: "Logout",
        route: "/" // placeholder route
    },
]

export const NavbarMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* <button className="flex items-center" onClick={toggleMenu}>
                <AccountCircleOutlinedIcon />
            </button>
            {isMenuOpen && (
                <ul className="absolute top-full right-4 bg-white border border-gray-300 rounded shadow-md py-1 px-3">
                    {menuOptions.map(option => (
                        <li key={option.id}>
                            <Link to={option.route} className="p-2">{option.label}</Link>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};
