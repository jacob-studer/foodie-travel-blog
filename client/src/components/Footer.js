import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        
            <div>
                <h5>Links</h5>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.facebook.com">Facebook</a>
                <h5><Link to="/">Contact</Link></h5>
                <h5><Link to="/login">Creator Login</Link></h5>
            </div>
    );
}

export default Footer