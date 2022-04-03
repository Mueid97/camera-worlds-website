import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-section'>
            <nav className='header'>
                <Link to='/'></Link>
                <Link to="/home">Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>DashBoard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;