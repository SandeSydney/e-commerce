import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser, removeUser } from '../Features/usersSlice';

function Navigation({ user }) {
    let navUser
    user.forEach(element => {
        navUser = element.name
    });
    const dispatch = useDispatch()
    const logUserOut = () => {
        dispatch(logoutUser())
        dispatch(removeUser())
    }
    return (
        <nav>
            <h1>
                <Link className='linkItems' to={'/homepage'}>
                    SanMart Shopping
                </Link>
            </h1>
            <div className="navLinks">
                <Link className='links' to={"/homepage/products"}>Products</Link>
                <Link className='links' to={"/homepage/about"}>About</Link>
                <Link className='links' to={"/homepage/contact"}>Contact</Link>
                <Link className='links' to={"/homepage/shopping-cart"}>Shopping Cart</Link>
            </div>
            <div className='Logout'>
                <p>Logged in as: {navUser}</p>
                <div className="logout">
                    <Link to={'/'} onClick={() => logUserOut}>Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation