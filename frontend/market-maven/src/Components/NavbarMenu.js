import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const menuOptions = [
    {
        id: 1,
        label: "Account",
        route: "/profile" // placeholder route
    },
    {
        id: 2,
        label: "Options",
        route: "/options" // placeholder route
    },
    {
        id: 3,
        label: "Logout",
        route: "/logout" // placeholder route
    },
]

// 
export const NavbarMenu = () => {
    const { setAccessToken, setRefreshToken, setUser, user } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleOptions = (option) => {
        if (option === "/logout") {

            console.log("User has been logged out")
            setAccessToken(null);
            setRefreshToken(null);
            setUser(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("username");
            navigate("/");
        } else {
            navigate(option);
        }
    };

    return (
        <div className="relative flex justify-end">
            <button className="flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
            </button>
            {menuOpen && (
                
                <div className="absolute top-full p-2 w-content w-[200px] gap-2 right-0 mt-2 bg-white border border-gray-300 rounded">
                    <h2 className="mx-4 mt-4 mb-2 text-xl border-b-4">Hello, <b>{user}</b>!</h2>
                    <ul className="mb-4">
                        {menuOptions.map(option => (
                            <li key={option.id} className="p-1">
                                <button className="block w-full px-4 text-left" onClick={() => handleOptions(option.route)}>
                                    {option.label}
                                    {option.label === "Logout" ? <LogoutOutlinedIcon /> : () => {}}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
