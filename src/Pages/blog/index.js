import React from 'react'

import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div>{<Outlet />}</div>
  )
}
