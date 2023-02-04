import { Login, Dashboard, Users, UserDetail } from './pages'
import { Navbar, Sidebar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/scss/App.scss'
import { useState } from 'react'
import PrivateRoute from './PrivateRoute'
import { useGlobalContext } from './context'

function App() {
  const { isAuthenticated } = useGlobalContext()

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='/users'
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />

        <Route
          path='users/:id'
          element={
            <PrivateRoute>
              <UserDetail />{' '}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
