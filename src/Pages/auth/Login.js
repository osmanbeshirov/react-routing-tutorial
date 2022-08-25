import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { setUser } = useAuth()



  const loginHandle = () => {
    setUser({
      id: 1,
      userName: 'Osman Bashirov'
    })

    console.log(setUser)

    navigate('/')
  }


  return (
    <>
      <div>Login page</div>

      <button onClick={loginHandle}>Sign in</button>

      <NavLink to={'/'}>Return to home page</NavLink>
    </>
  )
}
