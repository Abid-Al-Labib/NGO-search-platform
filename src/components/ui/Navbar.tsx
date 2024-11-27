import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
    return (
        
        <div className="navbar rounded-badge bg-[var(--navbar-color)] w-1/2 mx-auto backdrop-blur-md shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[var(--card)] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>Non Profits</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Login In</a></li>
                        <li><a>Sign Up</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">NGONERS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Non Profits</summary>
                            <ul className="m-2 bg-[var(--card)] py-2 px-4">
                                <li className="py-1"><a>Submenu 1</a></li>
                                <li className="py-1"><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Login In</a></li>
                    <li><a>Sign Up</a></li>
                </ul>
            </div>

            <div className="mr-3 ml-auto">   
                <ThemeToggle />
            </div>

        </div>

    );
};

export default Navbar;
