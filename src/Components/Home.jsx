import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import ScrollToTop from './ScrollToTop'

function Home() {
    const user = useSelector((state) => state.users.value)
    return (
        <>
            <Navigation user={user} />
            <div className="">
                <Outlet />
            </div>
            <ScrollToTop />
        </>
    )
}

export default Home