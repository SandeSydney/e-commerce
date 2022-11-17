import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
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
                <p>Logged in as: User</p>
                <div className="logout">
                    <Link to={"/logout"}>Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation