import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='project-name'>
                <h3>Exclusive Chair Analysis</h3>
            </div>
            <nav>
                <Link className='link-color' to='/home'>Home</Link>
                <Link className='link-color' to='/reviews'>Reviews</Link>
                <Link className='link-color' to='/dashboard'>Dash-Board</Link>
                <Link className='link-color' to='/blogs'>Blogs</Link>
            </nav>
        </div>

    );
};

export default Header;