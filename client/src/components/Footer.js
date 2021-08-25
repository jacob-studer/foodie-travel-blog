import React from 'react';
import { Link } from "react-router-dom";
import Auth from '../utils/auth';


const Footer = () => {
    return (
        
            <div>
                <h5>Links</h5>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.facebook.com">Facebook</a>
                <h5><Link to="/">Contact</Link></h5>

                {Auth.loggedIn() ? (
                <>
                <h5><Link onClick={Auth.logout}>Logout</Link></h5>
                </>
              ) : (
                <h5><Link to="/profile">Creator Login</Link></h5>
              )}
            </div>
    );
}

export default Footer