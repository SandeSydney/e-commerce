import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <h1>SanMart Shopping</h1>
            <div className='schLogout'>
                <div className="search">
                    <input type="text" name='searchBar' placeholder='Search'/>
                </div>
                <div className="logout">
                    <Link to={"/logout"}>Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation