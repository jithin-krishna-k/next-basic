'use client'

import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, login, logout } = useAuth()

  return (
    <div>
      <h1>Hello, {user ? user.name : 'Guest'}</h1>
      {!user && <button onClick={() => login({ name: 'John' })}>Login</button>}
      {user && <button onClick={logout}>Logout</button>}
    </div>
  )
}
