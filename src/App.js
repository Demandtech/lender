import { Login, Dashboard, Users, UserDetail } from './pages'
import { Navbar, Sidebar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/scss/App.scss'
import {useState } from 'react'
import PrivateRoute from './PrivateRoute'

function App() {
  const [showNav, setShowNav] = useState(true)

  return (
    <Router>
      {showNav && <Navbar />}
      {showNav && <Sidebar />}
      <Routes>
        <Route path='/' element={<Login setShowNav={setShowNav} />} />
        <Route path= '/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}/>
        <Route path='/users' element={<Users />} />
        <Route path='users/:id' element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App
