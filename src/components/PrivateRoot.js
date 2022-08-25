import React from 'react'
import { Navigate } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext'

export default function PrivateRoot({ children }) {

    //Dis user sign in?
    //If the user signed in, do link operation
    //If the user signed in, render to children component immediately

    const { user } = useAuth();

    if (!user) {
        return <Navigate to={'/auth/login'} />
    }

    return children;

}
