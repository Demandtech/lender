import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/svgs/search-icon.svg'
import { ReactComponent as BellIcon } from '../../assets/svgs/bell-icon.svg'
import { ReactComponent as AccordIcon } from '../../assets/svgs/accord-icon.svg'
import avatar from '../../assets/images/image 4.png'
import logo from '../../assets/images/logo.png'
import {useLocation} from 'react-router-dom'

function Navbar() {
  const location  = useLocation()
  if(location.pathname === '/'){
    return null
  }
  return (
    <header>
      <nav className='nav'>
        <div className='nav-wrapper'>
          <div className='logo-wrapper'>
            <img src={logo} alt='' />
          </div>
          <form className='nav-form'>
            <div className='form-control'>
              <input type='text' placeholder='search for anything'/>
              <button className='search-btn'>
                <SearchIcon />
              </button>
            </div>
          </form>
          <div className='right-nav'>
            <a href=''>DOC</a>
            <BellIcon />
            <div className='user'>
              <div>
                <img src={avatar} alt='' />
              </div>
              <div className='name'>
                <span>Ayodeji</span>
                <AccordIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
