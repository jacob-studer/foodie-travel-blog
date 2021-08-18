import React from 'react';
import { Link } from "react-router-dom";


// import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>

        <div className="landing-jumbotron">
           <h3>Deann Sandel</h3> 
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet aliquam id diam maecenas ultricies mi. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Commodo elit at imperdiet dui accumsan. Sed faucibus turpis in eu mi bibendum neque. Volutpat commodo sed egestas egestas fringilla phasellus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Dolor morbi non arcu risus.</p>
        </div>
        <div className="landing-categories">
            <div className="landing-category">
            <Link to="/recipes">
                <img 
                src={require('../images/example.jpg').default} 
                alt="example">
                </img>
                <p>recipes</p>
            </Link>
            </div>
            <div className="landing-category">
            <Link to="/restaurants">
                <img 
                src={require('../images/example.jpg').default} 
                alt="example">
                </img>
                <p>restaurants</p>
            </Link>
            </div>
            <div className="landing-category">
            <Link to="/travel">
                <img 
                src={require('../images/example.jpg').default} 
                alt="example">
                </img>
                <p>travel</p>
            </Link>
            </div>
        </div>
        <div className="landing-feature">
            <h3>Featured</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        </div>
    )
}

export default Landing;