import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const header = () => {
    return (
        <div className='nav-bar'>
            <nav className='navbar'>
            <Link to="/home">Home</Link>
            <Link to="/order">Card</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/Signin">Login</Link>
            </nav>
        </div>
    );
};

export default header;