import React from 'react';


import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
            <nav className="navbar">
                <h2 className="nav-name">Foodie Travel Blog</h2>
                <ul className="nav-list">
                    <li><Link to="/" className="nav-links">Home</Link></li>
                    
                </ul>
            </nav>
    );
}

export default Navbar