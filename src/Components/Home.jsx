import React from 'react'
import { Outlet } from 'react-router-dom'
import RoutesComp from '../Routes/RoutesComp'
import Navigation from './Navigation'

function Home() {
    return (
        <>
            <Navigation />
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default Home