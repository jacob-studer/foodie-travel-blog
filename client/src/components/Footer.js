import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        
            <div>
                <h5>Links</h5>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.facebook.com">Facebook</a>
                <h5><Link to="/" className="nav-links">Contact</Link></h5>
            </div>
    );
}

export default Footer