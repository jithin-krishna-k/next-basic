'use client'

import { createContext, useContext, useState } from 'react'
import { logout as serverLogout } from '../actions/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (userData) => setUser(userData)

  const logout = async () => {
    await serverLogout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
