import {Login, Dashboard, Users, UserDetail, Navbar} from './pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/scss/App.scss';
import { useEffect, useState } from 'react';



function App() {
  const [hideNav, setHideNav] = useState(false)

 

  useEffect(props => {
     const HiddenNavbar = ()=> {
       setHideNav(true)
  }
  },[])

  return (
    <Router>
      {hideNav ? null : <Navbar />}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='users/:id' element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
