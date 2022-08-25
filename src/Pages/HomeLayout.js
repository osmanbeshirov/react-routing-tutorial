import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <div>

            <nav>
                <NavLink to={'/'}>Home page</NavLink>
                <NavLink to={'/contacts'}>Contacts page</NavLink>
                <NavLink to={'/blog'}>Blog page</NavLink>

                <NavLink to={'/profile'}>Profile</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}
