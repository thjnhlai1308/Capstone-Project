import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = ({user, logout}) => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>
                <Link to='/'>KickMatch</Link> 
            </h2>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                {user.id ? (
                    <>
                        <Link to="/closet">My Closet</Link>
                        <Link to="/compare">Compare</Link>
                        <Link to={`/user/${user.id}`}>About Me</Link>
                        <span className='welcome'>Hi, {user.username}</span>
                        <button className='logout-btn' onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar