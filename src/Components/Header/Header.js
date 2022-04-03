import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <nav className='header'>
                 <h1>Movies-Re-View</h1>
            
            
            <div>
                <Link to="/home">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blog">Blog</Link>
            
                
            </div>
        </nav>
        </div>
    );
};

export default Header;