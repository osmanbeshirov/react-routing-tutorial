import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog404() {
    return (
        <>
            <div>Blog page is not found...</div>

            <Link to={'/blog'}>Return blog page</Link>
        </>



    )
}
