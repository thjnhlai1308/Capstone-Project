import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>KickMatch</h2>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/closet">My Closet</Link>
                <Link to="/compare">Compare</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar