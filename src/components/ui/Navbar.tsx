import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <div className="navbar rounded-badge bg-[var(--navbar-color)] w-1/2 mx-auto backdrop-blur-md shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger Menu Icon */}
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
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Non Profits</summary>
                                <ul className="p-2">
                                    <li><Link to="/nonprofits/submenu1">Submenu 1</Link></li>
                                    <li><Link to="/nonprofits/submenu2">Submenu 2</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/search?q=example" className="btn btn-primary">Search Example</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">NGONERS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Non Profits</summary>
                            <ul className="m-2 bg-[var(--card)] py-2 px-4">
                                <li className="py-1"><Link to="/nonprofits/submenu1">Submenu 1</Link></li>
                                <li className="py-1"><Link to="/nonprofits/submenu2">Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/search?q=example">Search Example</Link></li>
                </ul>
            </div>
            <div className="mr-3 ml-auto">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;
