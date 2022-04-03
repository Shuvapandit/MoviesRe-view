import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <nav className='header'>
                 <h1 className='h1logo text-4xl font-medium'>Movies-Re-View</h1>
            
            
            <div>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blog">Blog</Link>
            
                
            </div>
        </nav>
        </div>
    );
};

export default Header;